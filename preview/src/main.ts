import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, RouterOutlet } from "@angular/router";
import { DocsComponent } from "./app/pages/docs.component";

@Component({
  selector: "tohee-root",
  imports: [RouterOutlet],
  // The preview does not mount the Cloud top bar or site sidebar.
  template: `
    <main class="main-area" id="page-content" style="--topbar-height: 0px; --sidebar-width: 0px;">
      <router-outlet />
    </main>
  `,
})
class PreviewApp {}

bootstrapApplication(PreviewApp, {
  providers: [provideRouter([
    { path: "", pathMatch: "full", redirectTo: "docs" },
    { path: "docs", component: DocsComponent },
    { path: "docs/:id", component: DocsComponent },
  ])],
}).catch((error: unknown) => console.error("TOHEE Docs failed to start", error));
