export type DocsSearchScope = string;

type Localized = { "zh-CN": string; en: string };
type DocsSearchEntry = {
  id: string;
  title: Localized;
  search: Localized;
};
type DocsSearchScopeConfig = { id: string; groups: readonly string[] };
type DocsNavigationNode = {
  id: string;
  children: readonly DocsNavigationNode[];
  documents: readonly string[];
};

export function searchDocs<T extends DocsSearchEntry>(
  entries: readonly T[],
  query: string,
  scopeId: DocsSearchScope,
  scopes: readonly DocsSearchScopeConfig[],
  navigation: readonly DocsNavigationNode[],
): T[] {
  const normalizedQuery = query.normalize("NFKC").trim().toLowerCase();
  if (!normalizedQuery) return [];

  const scope = scopeId === "all" ? undefined : scopes.find(candidate => candidate.id === scopeId);
  const scopedDocuments = new Set<string>();
  if (scope) {
    const groups = new Set(scope.groups);
    const collect = (nodes: readonly DocsNavigationNode[], inherited: boolean) => {
      for (const node of nodes) {
        const included = inherited || groups.has(node.id);
        if (included) for (const id of node.documents) scopedDocuments.add(id);
        collect(node.children, included);
      }
    };
    collect(navigation, false);
  }

  const results: [T[], T[], T[], T[]] = [[], [], [], []];

  for (const entry of entries) {
    if (scope && !scopedDocuments.has(entry.id)) continue;

    const titles = [entry.title["zh-CN"], entry.title.en].map((value) => value.normalize("NFKC").trim().toLowerCase());
    const searchableText = [entry.search["zh-CN"], entry.search.en]
      .map((value) => value.normalize("NFKC").toLowerCase());

    if (titles.some((title) => title === normalizedQuery)) results[0].push(entry);
    else if (titles.some((title) => title.startsWith(normalizedQuery))) results[1].push(entry);
    else if (titles.some((title) => title.includes(normalizedQuery))) results[2].push(entry);
    else if (searchableText.some((text) => text.includes(normalizedQuery))) results[3].push(entry);
  }

  return results.flat();
}
