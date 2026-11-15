import { Injectable, signal } from "@angular/core";

export type Locale = "zh-CN" | "en";
export type LocalePreference = "auto" | Locale;

@Injectable({ providedIn: "root" })
export class I18nService {
  readonly preference = signal<LocalePreference>("auto");
  readonly locale = signal<Locale>("en");

  constructor() {
    const savedLocale = localStorage.getItem("tohee-locale");
    this.setPreference(savedLocale === "zh-CN" || savedLocale === "en" ? savedLocale : "auto");
    window.addEventListener("languagechange", () => {
      if (this.preference() === "auto") this.setPreference("auto");
    });
  }

  t(zh: string, en: string): string {
    return this.locale() === "zh-CN" ? zh : en;
  }

  setPreference(preference: LocalePreference): void {
    this.preference.set(preference);
    localStorage.setItem("tohee-locale", preference);
    const preferredLanguage = (navigator.languages.length ? navigator.languages : [navigator.language])
      .map(language => language.toLowerCase().replaceAll("_", "-").split("-")[0])
      .find(language => language === "zh" || language === "en");
    this.locale.set(preference === "auto" ? preferredLanguage === "zh" ? "zh-CN" : "en" : preference);
    document.documentElement.lang = this.locale();
  }

  setDocument(article: { title: Record<Locale, string> } | null): void {
    document.title = article ? `${article.title.en} / ${article.title["zh-CN"]} | TOHEE Docs` : "TOHEE Docs";
  }
}
