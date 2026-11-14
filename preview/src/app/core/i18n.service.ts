import { Injectable, signal } from "@angular/core";

export type Locale = "zh-CN" | "en";

@Injectable({ providedIn: "root" })
export class I18nService {
  readonly locale = signal<Locale>("en");

  constructor() {
    const savedLocale = localStorage.getItem("tohee-locale");
    const preferredLanguage = (navigator.languages.length ? navigator.languages : [navigator.language])
      .map(language => language.toLowerCase().replaceAll("_", "-").split("-")[0])
      .find(language => language === "zh" || language === "en");
    this.locale.set(savedLocale === "zh-CN" || savedLocale === "en" ? savedLocale : preferredLanguage === "zh" ? "zh-CN" : "en");
    document.documentElement.lang = this.locale();
    document.documentElement.dataset["theme"] = localStorage.getItem("tohee-theme") === "light" ? "light" : "dark";
  }

  t(zh: string, en: string): string {
    return this.locale() === "zh-CN" ? zh : en;
  }

  setDocument(article: { title: Record<Locale, string> } | null): void {
    document.title = article ? `${article.title.en} / ${article.title["zh-CN"]} | TOHEE Docs` : "TOHEE Docs";
  }
}
