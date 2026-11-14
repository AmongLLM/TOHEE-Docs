import { Component, ElementRef, HostListener, ViewEncapsulation, afterRenderEffect, computed, effect, inject, signal, viewChild } from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";
import { toSignal } from "@angular/core/rxjs-interop";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { I18nService, Locale } from "../core/i18n.service";
import { DocsSearchScope, searchDocs } from "../core/docs-search";

type Localized = Record<Locale, string>;
interface DocEntry {
  id: string;
  kind: "role" | "guide";
  category?: string;
  title: Localized;
  summary: Localized;
  source?: string;
  sourcePath?: string;
  order?: number;
  search: Localized;
  color?: string;
}
interface DocPage { html: string; headings: { id: string; text: string; level: number }[] }
interface DocsManifest { version: string; repositoryUrl: string; branch: string }
interface DocsNavigationNode { id: string; title: Localized; children: DocsNavigationNode[]; documents: string[] }
interface DocsFaction { id: string; title: Localized; color: string }
interface DocsStartCard { id: string; title: Localized; summary: Localized }
interface DocsSearchScopeConfig { id: string; title: Localized; groups: string[] }
interface DocsIndex {
  documents: DocEntry[];
  modCommit: string;
  navigation: DocsNavigationNode[];
  factions: DocsFaction[];
  startCards: DocsStartCard[];
  searchScopes: DocsSearchScopeConfig[];
}

@Component({
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet],
  encapsulation: ViewEncapsulation.None,
  styleUrl: "./docs.component.css",
  template: `
    <div class="docs-shell" [class.docs-nav-collapsed]="docsNavCollapsed()">
      <nav class="docs-nav docs" [attr.aria-label]="i18n.t('文档导航', 'Documentation navigation')">
        <div class="docs-nav-top"><a routerLink="/docs" class="docs-index-link" [attr.aria-current]="!docId() ? 'page' : null">↗ {{ i18n.t('探索全部文档', 'Explore the library') }}</a>
          <button type="button" class="docs-nav-collapse" aria-controls="docs-chapters" [attr.aria-expanded]="!docsNavCollapsed()" [attr.aria-label]="i18n.t(docsNavCollapsed() ? '展开文档目录' : '折叠文档目录', docsNavCollapsed() ? 'Expand documentation navigation' : 'Collapse documentation navigation')" [title]="i18n.t(docsNavCollapsed() ? '展开文档目录' : '折叠文档目录', docsNavCollapsed() ? 'Expand documentation navigation' : 'Collapse documentation navigation')" (click)="toggleDocsNav()"><span aria-hidden="true">{{ docsNavCollapsed() ? '»' : '«' }}</span></button>
        </div>
        <button type="button" class="docs-chapters-toggle" (click)="toggleChapters()" [attr.aria-expanded]="chaptersOpen()" aria-controls="docs-chapters">{{ i18n.t('章节与分类', 'Chapters & categories') }} <span>{{ chaptersOpen() ? '−' : '+' }}</span></button>
        <div class="docs-nav-sections" id="docs-chapters" [class.expanded]="chaptersOpen()">
        <ul class="docs-nav-tree">
          @for (node of navigation(); track node.id) {
            <ng-container [ngTemplateOutlet]="navigationNode" [ngTemplateOutletContext]="{ $implicit: node }"></ng-container>
          }
        </ul>
        <details class="docs-nav-group" [open]="!collapsedGroups().has('filter:factions')" (toggle)="rememberDocsGroup('filter:factions', $event)"><summary>{{ i18n.t('按阵营筛选', 'Filter by faction') }}</summary>
          <ul class="docs-nav-list">
            @for (group of factions(); track group.id) {
              <li><a routerLink="/docs" [queryParams]="{category: group.id}" [class.selected]="!docId() && category() === group.id"><span class="docs-dot" [style.--team-color]="group.color"></span>{{ group.title[i18n.locale()] }}<small>{{ countIn(group.id) }}</small></a></li>
            }
          </ul>
        </details>
        </div>
      </nav>
      <ng-template #navigationNode let-node>
        <li class="docs-nav-node">
          <details [open]="!collapsedGroups().has(node.id)" (toggle)="rememberDocsGroup(node.id, $event)">
            <summary>{{ node.title[i18n.locale()] }}</summary>
            <ul class="docs-nav-list">
              @for (documentId of node.documents; track documentId) {
                @if (catalogById().get(documentId); as entry) {
                  <li><a [routerLink]="['/docs', entry.id]" [class.selected]="docId() === entry.id" [attr.aria-current]="docId() === entry.id ? 'page' : null" [attr.data-team]="entry.kind === 'role' ? entry.category : null" [style.--team-color]="entry.kind === 'role' ? factionColor(entry.category) : null">{{ entry.title[i18n.locale()] }}</a></li>
                }
              }
              @for (child of node.children; track child.id) {
                <ng-container [ngTemplateOutlet]="navigationNode" [ngTemplateOutletContext]="{ $implicit: child }"></ng-container>
              }
            </ul>
          </details>
        </li>
      </ng-template>
      <div class="docs page-wrap" [class.docs-article-view]="docId()">
        <header class="docs-masthead" #wikiSearchContainer>
          <search class="docs-wiki-search" [attr.aria-label]="i18n.t('搜索 Wiki', 'Search the wiki')">
            <select [value]="wikiSearchScope()" (change)="wikiSearchScope.set($any($event.target).value); wikiSearchOpen.set(true)" [attr.aria-label]="i18n.t('搜索范围', 'Search scope')">
              <option value="all">{{ allSearchScopeLabel() }}</option>
              @for (scope of searchScopes(); track scope.id) { @if (scope.id !== 'all') { <option [value]="scope.id">{{ scope.title[i18n.locale()] }}</option> } }
            </select>
            <span class="docs-wiki-search-icon" aria-hidden="true">⌕</span>
            <input #wikiSearchInput type="search" [value]="wikiSearchQuery()" (input)="wikiSearchQuery.set($any($event.target).value); wikiSearchOpen.set(true)" (focus)="wikiSearchOpen.set(true)" (keydown)="handleWikiSearchKeydown($event)" [placeholder]="i18n.t('搜索职业名称、教程或设置…', 'Search roles, guides or settings…')" [attr.aria-label]="i18n.t('搜索 Wiki 文档', 'Search wiki documentation')" aria-controls="docs-search-results" autocomplete="off" />
            <kbd aria-hidden="true">/</kbd>
          </search>
          @if (wikiSearchOpen() && wikiSearchQuery().trim()) {
            <section id="docs-search-results" class="docs-search-results" [attr.aria-label]="i18n.t('搜索结果', 'Search results')">
              <div class="docs-search-results-heading">{{ catalogLoading() ? i18n.t('正在加载索引…', 'Loading index…') : catalogError() ? i18n.t('搜索索引暂时不可用', 'Search index unavailable') : i18n.t('搜索结果', 'Search results') + ' · ' + wikiSearchResults().length }}</div>
              @for (entry of wikiSearchResults(); track entry.id) {
                <a [routerLink]="['/docs', entry.id]" [attr.data-team]="entry.kind === 'role' ? entry.category : null" [style.--team-color]="entry.kind === 'role' ? factionColor(entry.category) : null" [style.--role-color]="entry.kind === 'role' ? entry.color : null">
                  <div><strong [class.docs-search-role-name]="entry.kind === 'role'">{{ entry.title[i18n.locale()] }}</strong><span>{{ entry.title[i18n.locale() === 'zh-CN' ? 'en' : 'zh-CN'] }}</span><small>{{ categoryName(entry.category, entry.id) }}</small></div>
                  <p>{{ entry.summary[i18n.locale()] }}</p>
                </a>
              } @empty {
                @if (!catalogLoading() && !catalogError()) { <p class="docs-search-empty" role="status">{{ i18n.t('没有找到匹配的文档，试试其他名称或分类。', 'No matching documents. Try another name or category.') }}</p> }
              }
            </section>
          }
        </header>
        @if (catalogError()) {
          <div class="docs-state" role="alert"><h1 id="docs-page-heading" #docsPageHeading tabindex="-1">{{ i18n.t('文档暂时无法加载', 'Documentation is unavailable') }}</h1><p>{{ i18n.t('请检查网络连接，然后重试。', 'Check your connection and try again.') }}</p><button class="button" (click)="loadCatalog()">{{ i18n.t('重试', 'Try again') }}</button></div>
        } @else if (catalogLoading()) {
          <p class="docs-state" role="status">{{ i18n.t('正在打开手册…', 'Opening the field guide…') }}</p>
        } @else {
          <div class="docs-layout" [class.docs-reading]="docId()">
            @if (docId() && page(); as article) {
              <nav class="docs-toc" [attr.aria-label]="i18n.t('本页目录', 'On this page')"><span class="docs-kicker docs-toc-label">{{ i18n.t('本页目录', 'ON THIS PAGE') }}</span><button type="button" class="docs-toc-toggle" [attr.aria-expanded]="tocOpen()" aria-controls="docs-toc-links" (click)="tocOpen.update(v => !v)">{{ i18n.t('本页目录', 'On this page') }} <span>{{ tocOpen() ? '−' : '+' }}</span></button><ul class="docs-toc-links" id="docs-toc-links" [class.expanded]="tocOpen()">@for (heading of article.headings; track heading.id) { <li><a [class.docs-toc-nested]="heading.level > 2" [href]="'/docs/' + docId() + '#' + heading.id" (click)="jumpTo(heading.id, $event)">{{ heading.text }}</a></li> }<li><a class="docs-toc-top" [href]="'/docs/' + docId()" (click)="backToTop($event)">{{ i18n.t('回到顶部', 'Back to top') }} ↑</a></li></ul></nav>
            }
            <section class="docs-body" id="docs-reading-content" aria-labelledby="docs-page-heading">
              @if (docId()) {
                @if (selected(); as entry) {
                  <div class="docs-breadcrumb"><a routerLink="/docs">{{ i18n.t('模组文档', 'Documentation') }}</a><span>/</span><span>{{ categoryName(entry.category, entry.id) }}</span></div>
                  <header class="docs-article-header" [attr.data-team]="entry.kind === 'role' ? entry.category : null" [style.--team-color]="entry.kind === 'role' ? factionColor(entry.category) : null" [style.--role-color]="entry.kind === 'role' ? entry.color : null"><span class="docs-category">{{ categoryName(entry.category, entry.id) }}</span><h1 id="docs-page-heading" #docsPageHeading tabindex="-1">{{ entry.title[i18n.locale()] }}</h1><p>{{ entry.summary[i18n.locale()] }}</p></header>
                  @if (pageLoading()) { <p class="docs-state" role="status">{{ i18n.t('正在加载正文…', 'Loading article…') }}</p> }
                  @else if (pageError()) { <div class="docs-state" role="alert"><p>{{ i18n.t('正文加载失败，请重试。', 'The article could not be loaded. Please try again.') }}</p><button class="button" (click)="retryPage.update(v => v + 1)">{{ i18n.t('重试', 'Try again') }}</button></div> }
                  @else if (page(); as article) {
                    <article #articleElement class="docs-prose" [innerHTML]="article.html" (click)="followArticleLink($event)"></article>
                    <footer class="docs-article-footer"><span>{{ i18n.t('资料来源', 'Source') }}</span>@if (editUrl(entry); as url) { <a [href]="url" target="_blank" rel="noopener noreferrer">{{ i18n.t('在 GitHub 编辑此页', 'Edit this page on GitHub') }} ↗</a> }@if (entry.source?.startsWith('https://')) { <a [href]="entry.source" target="_blank" rel="noopener noreferrer">{{ i18n.t('查看实现来源', 'View implementation source') }} ↗</a> } @else if (entry.source) { <code>{{ entry.source }}</code> }</footer>
                    <nav class="docs-article-next" [attr.aria-label]="i18n.t('继续阅读', 'Continue reading')">
                      @for (neighbor of neighbors(); track neighbor.id) { <a [routerLink]="['/docs', neighbor.id]"><small>{{ i18n.t('继续阅读', 'CONTINUE READING') }}</small><span>{{ neighbor.title[i18n.locale()] }} →</span></a> }
                    </nav>
                  }
                } @else {
                  <div class="docs-state"><h1 id="docs-page-heading" #docsPageHeading tabindex="-1">{{ i18n.t('没有找到这篇文档', 'Article not found') }}</h1><p>{{ i18n.t('可以返回图鉴，按职业名称或关键词查找。', 'Browse the directory or search by role name and keyword.') }}</p><a routerLink="/docs" class="button">{{ i18n.t('返回文档', 'Back to documentation') }}</a></div>
                }
              } @else {
                <section class="docs-start" aria-labelledby="docs-page-heading">
                  <h1 id="docs-page-heading" #docsPageHeading tabindex="-1">{{ i18n.t('模组文档', 'Documentation') }}</h1>
                  <nav [attr.aria-label]="i18n.t('常用入口', 'Featured documentation')"><ul class="docs-start-grid">
                    @for (card of startCards(); track card.id) { <li><a [routerLink]="['/docs', card.id]"><h2>{{ card.title[i18n.locale()] }} <span aria-hidden="true">↗</span></h2><p>{{ card.summary[i18n.locale()] }}</p></a></li> }
                  </ul></nav>
                </section>
                <section class="docs-directory" aria-labelledby="docs-directory-title">
                  <div class="docs-directory-heading"><h2 id="docs-directory-title">{{ i18n.t('职业图鉴', 'The role directory') }}</h2><span class="docs-result-count">{{ filtered().length }} / {{ roles().length }}</span></div>
                  <p class="docs-directory-note">{{ i18n.t('收录仓库中实际实现的职业、转化身份与附加职业。部分身份只能在特定条件下获得。', 'Implemented roles, transformed identities and add-ons from the repository. Some identities require specific conditions.') }}</p>
                  <label class="docs-search"><span aria-hidden="true">⌕</span><span class="sr-only">{{ i18n.t('搜索职业和技能', 'Search roles and abilities') }}</span><input type="search" [value]="query()" (input)="setSearch($any($event.target).value)" [placeholder]="i18n.t('搜索职业、技能或关键词…', 'Search a role, ability or keyword…')" /></label>
                  <div class="docs-color-mode" role="group" [attr.aria-label]="i18n.t('职业配色', 'Role color mode')">
                    <button type="button" [attr.aria-pressed]="colorMode() === 'team'" (click)="setColorMode('team')">{{ i18n.t('使用阵营颜色', 'Use team colors') }}</button>
                    <button type="button" [attr.aria-pressed]="colorMode() === 'role'" (click)="setColorMode('role')">{{ i18n.t('使用职业颜色', 'Use role colors') }}</button>
                  </div>
                  <div class="docs-filters" role="group" [attr.aria-label]="i18n.t('筛选阵营', 'Filter by team')"><button [class.active]="category() === 'all'" (click)="setCategory('all')" [attr.aria-pressed]="category() === 'all'">{{ i18n.t('全部', 'All roles') }}</button>
                    @for (group of factions(); track group.id) { <button [class.active]="category() === group.id" (click)="setCategory(group.id)" [attr.aria-pressed]="category() === group.id" [style.--team-color]="group.color"><span class="docs-dot"></span>{{ group.title[i18n.locale()] }}</button> }
                  </div>
                  @if (filtered().length) {
                    <div class="docs-role-grid">@for (entry of visible(); track entry.id) { <a class="docs-role-card" [routerLink]="['/docs', entry.id]" [attr.data-team]="entry.category" [style.--team-color]="factionColor(entry.category)" [style.--role-color]="entry.color" [style.--card-color]="colorMode() === 'role' ? entry.color : null"><div><span class="docs-category">{{ categoryName(entry.category, entry.id) }}</span><span aria-hidden="true">↗</span></div><h3>{{ entry.title[i18n.locale()] }}</h3><small>{{ i18n.locale() === 'zh-CN' ? entry.title.en : entry.title['zh-CN'] }}</small><p>{{ entry.summary[i18n.locale()] }}</p></a> }</div>
                    @if (visible().length < filtered().length) { <button class="docs-load-more button" (click)="limit.update(v => v + 36)">{{ i18n.t('显示更多职业', 'Show more roles') }} · {{ filtered().length - visible().length }}</button> }
                  } @else { <div class="docs-state"><h3>{{ i18n.t('没有找到匹配的职业', 'No matching roles') }}</h3><p>{{ i18n.t('试试另一个名称，或清除筛选条件。', 'Try another name or clear the filters.') }}</p><button class="button" (click)="clearFilters()">{{ i18n.t('清除筛选', 'Clear filters') }}</button></div> }
                </section>
                <p class="docs-source-note">{{ i18n.t('参考 TOHE-Docs 整理，并按 TOHEE 仓库的职业实现核对。每篇文章注明资料来源，玩法以使用的模组版本和房间设置为准。', 'Adapted from TOHE-Docs and checked against TOHEE role implementations. Articles include their sources; gameplay follows your mod version and room settings.') }} <a href="https://github.com/EnhancedNetwork/TOHE-Docs" target="_blank" rel="noopener noreferrer">TOHE-Docs ↗</a>@if (modCommit()) { <span class="docs-source-revision">TOHEE · {{ modCommit().slice(0, 7) }}</span> }</p>
              }
            </section>
          </div>
        }
      </div>
    </div>
  `,
})
export class DocsComponent {
  readonly i18n = inject(I18nService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly articleElement = viewChild<ElementRef<HTMLElement>>("articleElement");
  private readonly docsPageHeading = viewChild<ElementRef<HTMLElement>>("docsPageHeading");
  private readonly wikiSearchInput = viewChild<ElementRef<HTMLInputElement>>("wikiSearchInput");
  private readonly wikiSearchContainer = viewChild<ElementRef<HTMLElement>>("wikiSearchContainer");
  private pendingPageFocus: string | null = null;
  private readonly params = toSignal(this.route.paramMap, { initialValue: this.route.snapshot.paramMap });
  private readonly queryParams = toSignal(this.route.queryParamMap, { initialValue: this.route.snapshot.queryParamMap });
  readonly docId = computed(() => this.params().get("id"));
  readonly query = computed(() => this.queryParams().get("q") || "");
  readonly category = computed(() => this.queryParams().get("category") || "all");
  readonly catalog = signal<DocEntry[]>([]);
  readonly manifest = signal<DocsManifest | null>(null);
  readonly navigation = signal<DocsNavigationNode[]>([]);
  readonly factions = signal<DocsFaction[]>([]);
  readonly startCards = signal<DocsStartCard[]>([]);
  readonly searchScopes = signal<DocsSearchScopeConfig[]>([]);
  readonly allSearchScopeLabel = computed(() => {
    const scope = this.searchScopes().find(candidate => candidate.id === "all");
    return scope?.title[this.i18n.locale()] ?? this.i18n.t("全部", "All");
  });
  readonly modCommit = signal("");
  readonly catalogById = computed(() => new Map(this.catalog().map(entry => [entry.id, entry])));
  readonly navigationTitles = computed(() => {
    const titles = new Map<string, Localized>();
    const visit = (nodes: DocsNavigationNode[]) => {
      for (const node of nodes) {
        titles.set(node.id, node.title);
        visit(node.children);
      }
    };
    visit(this.navigation());
    return titles;
  });
  readonly navigationGroups = computed(() => {
    const groups = new Map<string, string>();
    const visit = (nodes: DocsNavigationNode[]) => {
      for (const node of nodes) {
        for (const id of node.documents) groups.set(id, node.id);
        visit(node.children);
      }
    };
    visit(this.navigation());
    return groups;
  });
  readonly activeNavigationGroups = computed(() => {
    const selectedId = this.docId();
    const active = new Set<string>();
    if (!selectedId) return active;
    const visit = (nodes: DocsNavigationNode[]): boolean => {
      let containsSelected = false;
      for (const node of nodes) {
        const containsDocument = node.documents.includes(selectedId) || visit(node.children);
        if (containsDocument) {
          active.add(node.id);
          containsSelected = true;
        }
      }
      return containsSelected;
    };
    visit(this.navigation());
    return active;
  });
  readonly wikiSearchQuery = signal("");
  readonly wikiSearchScope = signal<DocsSearchScope>("all");
  readonly wikiSearchOpen = signal(false);
  readonly wikiSearchResults = computed(() => searchDocs(this.catalog(), this.wikiSearchQuery(), this.wikiSearchScope(), this.searchScopes(), this.navigation()));
  readonly catalogLoading = signal(true);
  readonly catalogError = signal(false);
  readonly page = signal<DocPage | null>(null);
  readonly pageLoading = signal(false);
  readonly pageError = signal(false);
  readonly retryPage = signal(0);
  readonly chaptersOpen = signal(localStorage.getItem("tohee-docs-chapters-open") === "true");
  readonly docsNavCollapsed = signal(localStorage.getItem("tohee-docs-nav-collapsed") === "true");
  readonly tocOpen = signal(false);
  readonly limit = signal(36);
  readonly colorMode = signal<"team" | "role">(localStorage.getItem("tohee-docs-color-mode") === "role" ? "role" : "team");
  readonly roles = computed(() => this.catalog().filter(entry => entry.kind === "role" && this.factions().some(faction => faction.id === entry.category)));
  readonly selected = computed(() => this.catalog().find(entry => entry.id === this.docId()));
  readonly filtered = computed(() => {
    const query = this.query().trim().toLocaleLowerCase();
    const category = this.category();
    return this.roles().filter(entry => (category === "all" || entry.category === category) &&
      (!query || [entry.title.en, entry.title["zh-CN"], entry.search.en, entry.search["zh-CN"]].some(text => text.toLocaleLowerCase().includes(query))));
  });
  readonly visible = computed(() => this.filtered().slice(0, this.limit()));
  readonly neighbors = computed(() => {
    const selected = this.selected();
    if (!selected) return [];
    if (selected.kind === "role") {
      return this.catalog().filter(entry => entry.kind === "role" && entry.category === selected.category && entry.id !== selected.id).slice(0, 2);
    }
    const groupId = this.navigationGroups().get(selected.id);
    return groupId ? this.catalog().filter(entry => this.navigationGroups().get(entry.id) === groupId && entry.id !== selected.id).slice(0, 2) : [];
  });
  readonly collapsedGroups = signal(new Set<string>());

  constructor() {
    void this.loadCatalog();
    effect(() => this.i18n.setDocument(this.selected() ?? null));
    effect(() => {
      const active = this.activeNavigationGroups();
      if (!active.size) return;
      this.collapsedGroups.update(current => {
        const next = new Set(current);
        for (const id of active) {
          if (localStorage.getItem(`tohee-docs-group-${id}-collapsed`) !== "true") next.delete(id);
        }
        return next.size === current.size ? current : next;
      });
    });
    let previousLocale = this.i18n.locale();
    effect(onCleanup => {
      const id = this.docId();
      const locale = this.i18n.locale();
      const version = this.manifest()?.version;
      if (locale !== previousLocale && this.route.snapshot.fragment) {
        // Translated headings have different anchors.
        void this.router.navigate([], { relativeTo: this.route, fragment: undefined, queryParamsHandling: "preserve", replaceUrl: true });
      }
      previousLocale = locale;
      this.retryPage();
      this.page.set(null);
      this.pageError.set(false);
      this.pageLoading.set(!!id);
      if (!id || !version) return;
      const controller = new AbortController();
      onCleanup(() => controller.abort());
      void fetch(`/docs/releases/${encodeURIComponent(version)}/pages/${encodeURIComponent(id)}.${locale}.json`, { signal: controller.signal })
        .then(response => { if (!response.ok) throw new Error('Article unavailable'); return response.json() as Promise<DocPage>; })
        .then(article => {
          if (controller.signal.aborted) return;
          this.page.set(article);
          this.pageLoading.set(false);
        })
        .catch(() => { if (!controller.signal.aborted) { this.pageError.set(true); this.pageLoading.set(false); } });
    });
    effect(() => {
      this.query(); this.category();
      this.limit.set(36);
    });
    // Angular sanitizes innerHTML, including heading IDs. Restore only the
    // compiler's heading IDs after rendering; keep the HTML sanitizer enabled.
    afterRenderEffect(() => {
      const currentPage = this.docId() ?? "";
      const heading = this.docsPageHeading()?.nativeElement;
      if (heading && this.pendingPageFocus === currentPage) {
        this.pendingPageFocus = null;
        heading.focus({ preventScroll: true });
      }
      const article = this.page();
      const element = this.articleElement()?.nativeElement;
      if (!article || !element) return;
      element.querySelectorAll<HTMLElement>("h1,h2,h3,h4,h5,h6").forEach((heading, index) => {
        heading.id = article.headings[index].id;
        heading.tabIndex = -1;
      });
      const fragment = this.route.snapshot.fragment;
      if (fragment) {
        const target = element.querySelector<HTMLElement>('#' + CSS.escape(fragment));
        target?.focus({ preventScroll: true });
        target?.scrollIntoView();
      }
      else window.scrollTo({ top: 0 });
    });
  }

  @HostListener("document:keydown", ["$event"])
  handleDocumentKeydown(event: KeyboardEvent): void {
    if (event.isComposing) return;
    if (event.key === "Escape" && this.wikiSearchOpen()) {
      const results = this.wikiSearchContainer()?.nativeElement.querySelector("#docs-search-results");
      const input = this.wikiSearchInput()?.nativeElement;
      if (results?.contains(event.target as Node)) {
        event.preventDefault();
        input?.focus({ preventScroll: true });
      } else if (event.target === input) {
        event.preventDefault();
      }
      this.wikiSearchOpen.set(false);
      return;
    }
    if (event.key !== "/" || event.ctrlKey || event.metaKey || event.altKey ||
      (event.target instanceof HTMLElement && (event.target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(event.target.tagName)))) return;
    const input = this.wikiSearchInput()?.nativeElement;
    if (input) { event.preventDefault(); input.focus(); }
  }

  handleWikiSearchKeydown(event: KeyboardEvent): void {
    if (event.isComposing) return;
    if (event.key === "ArrowDown" && !this.wikiSearchOpen() && this.wikiSearchQuery().trim()) {
      event.preventDefault();
      this.wikiSearchOpen.set(true);
      return;
    }
    this.openFirstSearchResult(event);
  }

  @HostListener("click", ["$event"])
  rememberPageFocus(event: MouseEvent): void {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || !(event.target instanceof Element)) return;
    const link = event.target.closest<HTMLAnchorElement>("a[href]");
    if (!link || (link.target && link.target !== "_self")) return;
    const url = new URL(link.href);
    if (url.origin !== location.origin) return;

    const path = url.pathname.replace(/\/+$/, "");
    if (path !== "/docs" && !path.startsWith("/docs/")) return;
    const pageId = path === "/docs" ? null : decodeURIComponent(path.slice("/docs/".length).split("/")[0]);
    const fromResults = !!link.closest("#docs-search-results");
    if (fromResults) this.wikiSearchOpen.set(false);
    if (pageId === this.docId() || (pageId === null && this.docId() === null)) {
      if (fromResults) this.wikiSearchInput()?.nativeElement.focus({ preventScroll: true });
      return;
    }
    this.pendingPageFocus = pageId ?? "";
  }

  @HostListener("document:click", ["$event"])
  closeWikiSearch(event: MouseEvent): void {
    if (!this.wikiSearchContainer()?.nativeElement.contains(event.target as Node)) this.wikiSearchOpen.set(false);
  }

  openFirstSearchResult(event: KeyboardEvent): void {
    if (event.key !== "Enter" || event.isComposing) return;
    const entry = this.wikiSearchResults()[0];
    if (!entry) return;
    event.preventDefault();
    this.wikiSearchOpen.set(false);
    this.pendingPageFocus = entry.id;
    void this.router.navigate(["/docs", entry.id]);
  }

  async loadCatalog(): Promise<void> {
    this.catalogError.set(false);
    this.catalogLoading.set(true);
    try {
      const manifestResponse = await fetch("/docs/manifest.json", { cache: "no-cache" });
      if (!manifestResponse.ok) throw new Error("Documentation manifest unavailable");
      const manifest = await manifestResponse.json() as DocsManifest;
      if (typeof manifest.version !== "string" || typeof manifest.repositoryUrl !== "string" || typeof manifest.branch !== "string") {
        throw new Error("Invalid documentation manifest");
      }
      const indexResponse = await fetch(`/docs/releases/${encodeURIComponent(manifest.version)}/index.json`);
      if (!indexResponse.ok) throw new Error("Catalog unavailable");
      const result = await indexResponse.json() as DocsIndex;
      if (!Array.isArray(result.documents) || !Array.isArray(result.navigation) || !Array.isArray(result.factions) ||
        !Array.isArray(result.startCards) || !Array.isArray(result.searchScopes)) throw new Error("Invalid documentation index");
      this.manifest.set(manifest);
      this.catalog.set(result.documents);
      this.modCommit.set(result.modCommit);
      this.navigation.set(result.navigation);
      this.factions.set(result.factions);
      this.startCards.set(result.startCards);
      this.searchScopes.set(result.searchScopes);
      if (this.wikiSearchScope() !== "all" && !result.searchScopes.some(scope => scope.id === this.wikiSearchScope())) this.wikiSearchScope.set("all");
      const groupIds = ["filter:factions"];
      const largeGroups = new Set<string>();
      const collectGroupIds = (nodes: DocsNavigationNode[]) => {
        for (const node of nodes) {
          groupIds.push(node.id);
          if (node.documents.length > 36) largeGroups.add(node.id);
          collectGroupIds(node.children);
        }
      };
      collectGroupIds(result.navigation);
      this.collapsedGroups.set(new Set(groupIds.filter(id => {
        const key = id === "filter:factions" ? "tohee-docs-role-filters-collapsed" : `tohee-docs-group-${id}-collapsed`;
        const preference = localStorage.getItem(key);
        return preference === null ? largeGroups.has(id) : preference === "true";
      })));
    } catch { this.catalogError.set(true); }
    finally { this.catalogLoading.set(false); }
  }

  countIn(category: string): number { return this.roles().filter(entry => entry.category === category).length; }
  categoryName(category?: string, documentId?: string): string {
    const faction = this.factions().find(group => group.id === category);
    const groupId = documentId ? this.navigationGroups().get(documentId) : category;
    const title = faction?.title ?? (groupId ? this.navigationTitles().get(groupId) : undefined);
    return title?.[this.i18n.locale()] ?? category ?? this.i18n.t("文档", "Documentation");
  }
  factionColor(category?: string): string | null {
    return this.factions().find(faction => faction.id === category)?.color ?? null;
  }
  editUrl(entry: DocEntry): string | null {
    const manifest = this.manifest();
    if (!entry.sourcePath || !manifest) return null;
    const base = manifest.repositoryUrl.replace(/\.git\/?$/, "").replace(/\/$/, "");
    const path = entry.sourcePath.replace(/^\/+/, "").split("/").map(encodeURIComponent).join("/");
    return `${base}/edit/${encodeURIComponent(manifest.branch)}/${path}`;
  }
  setSearch(query: string): void { void this.router.navigate([], { relativeTo: this.route, queryParams: { q: query || null }, queryParamsHandling: "merge", replaceUrl: true }); }
  rememberDocsGroup(id: string, event: Event): void {
    const details = event.target as HTMLDetailsElement;
    const collapsed = !details.open;
    if (this.collapsedGroups().has(id) === collapsed) return;
    this.collapsedGroups.update(current => {
      const next = new Set(current);
      if (collapsed) next.add(id);
      else next.delete(id);
      return next;
    });
    const key = id === "filter:factions" ? "tohee-docs-role-filters-collapsed" : `tohee-docs-group-${id}-collapsed`;
    localStorage.setItem(key, String(collapsed));
  }

  toggleChapters(): void {
    this.chaptersOpen.update(value => !value);
    localStorage.setItem("tohee-docs-chapters-open", String(this.chaptersOpen()));
  }

  toggleDocsNav(): void {
    this.docsNavCollapsed.update(value => !value);
    localStorage.setItem("tohee-docs-nav-collapsed", String(this.docsNavCollapsed()));
  }

  setColorMode(mode: "team" | "role"): void {
    this.colorMode.set(mode);
    localStorage.setItem("tohee-docs-color-mode", mode);
  }
  setCategory(category: string): void { void this.router.navigate([], { relativeTo: this.route, queryParams: { category: category === "all" ? null : category }, queryParamsHandling: "merge" }); }
  clearFilters(): void { void this.router.navigate(["/docs"]); }
  jumpTo(id: string, event: Event): void {
    event.preventDefault();
    const heading = this.articleElement()?.nativeElement.querySelector<HTMLElement>('#' + CSS.escape(id));
    heading?.focus({ preventScroll: true });
    heading?.scrollIntoView();
    void this.router.navigate([], { relativeTo: this.route, fragment: id, queryParamsHandling: "preserve", replaceUrl: true });
  }
  backToTop(event: Event): void {
    event.preventDefault();
    this.docsPageHeading()?.nativeElement.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "instant" });
    void this.router.navigate([], { relativeTo: this.route, fragment: undefined, queryParamsHandling: "preserve", replaceUrl: true });
  }
  followArticleLink(event: MouseEvent): void {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    const anchor = (event.target as HTMLElement).closest("a");
    if (!anchor) return;
    const url = new URL(anchor.href);
    if (url.origin !== location.origin) return;
    if (url.pathname.startsWith("/docs/") || url.pathname === "/docs") {
      event.preventDefault();
      if (url.pathname === location.pathname && url.hash) this.jumpTo(decodeURIComponent(url.hash.slice(1)), event);
      else void this.router.navigateByUrl(url.pathname + url.search + url.hash).then(() => { if (!url.hash) window.scrollTo({ top: 0 }); });
    }
  }
}
