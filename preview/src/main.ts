import { Component, computed, inject, signal } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, RouterLink, RouterOutlet, withHashLocation } from "@angular/router";
import { DocsComponent } from "./app/pages/docs.component";
import { I18nService } from "./app/core/i18n.service";

const routerFeatures = new URL(document.baseURI).pathname === "/" ? [] : [withHashLocation()];

@Component({
  selector: "tohee-root",
  imports: [RouterLink, RouterOutlet],
  styles: [`.brand { flex: 0 1 auto; width: auto; }`],
  template: `
    <a class="skip-link" href="#page-content" (click)="skipToContent($event)">{{ i18n.t("跳转到主要内容", "Skip to main content") }}</a>
    <div class="app-frame" style="--sidebar-width: 0px;">
      <header class="topbar">
        <a class="brand" routerLink="/docs" [attr.aria-label]="i18n.t('TOHEE 文档首页', 'TOHEE Docs home')">
          <img src="favicon.png" alt="" class="brand-logo" />
          <span><strong>TOHEE</strong><span class="brand-cloud"> Cloud</span></span>
        </a>
        <div class="topbar-actions">
          <label class="locale-control">
            <span class="sr-only">{{ i18n.t("语言", "Language") }}</span>
            <span class="sr-only" id="locale-help">{{ i18n.t("自动会跟随浏览器语言。", "Auto follows your browser language.") }}</span>
            <select [value]="i18n.preference()" (change)="changeLocale($event)" [attr.aria-label]="i18n.t('语言', 'Language')" aria-describedby="locale-help">
              <option value="auto">{{ i18n.t("自动", "Automatic") }}</option>
              <option value="zh-CN">简体中文</option>
              <option value="en">English</option>
            </select>
          </label>
          <button type="button" class="theme-toggle" (click)="toggleTheme()" [attr.aria-label]="themeLabel()">{{ theme() === 'dark' ? '☼' : '◐' }}</button>
        </div>
      </header>
      <main class="main-area" id="page-content" tabindex="-1">
        <router-outlet />
      </main>
    </div>
  `,
})
class PreviewApp {
  readonly i18n = inject(I18nService);
  readonly theme = signal<"dark" | "light">(localStorage.getItem("tohee-theme") === "light" ? "light" : "dark");
  readonly themeLabel = computed(() => this.theme() === "dark"
    ? this.i18n.t("切换到浅色主题", "Switch to light theme")
    : this.i18n.t("切换到深色主题", "Switch to dark theme"));

  constructor() {
    document.documentElement.dataset["theme"] = this.theme();
  }

  changeLocale(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    if (value === "auto" || value === "zh-CN" || value === "en") this.i18n.setPreference(value);
  }

  skipToContent(event: Event): void {
    event.preventDefault();
    document.getElementById("page-content")?.focus();
  }

  toggleTheme(): void {
    this.theme.update(value => value === "dark" ? "light" : "dark");
    localStorage.setItem("tohee-theme", this.theme());
    document.documentElement.dataset["theme"] = this.theme();
  }
}

bootstrapApplication(PreviewApp, {
  providers: [provideRouter([
    { path: "", pathMatch: "full", redirectTo: "docs" },
    { path: "docs", component: DocsComponent },
    { path: "docs/:id", component: DocsComponent },
  ], ...routerFeatures)],
}).catch((error: unknown) => console.error("TOHEE Docs failed to start", error));
