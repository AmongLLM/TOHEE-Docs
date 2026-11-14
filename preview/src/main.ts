import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, RouterOutlet, withHashLocation } from "@angular/router";
import { DocsComponent } from "./app/pages/docs.component";

const routerFeatures = new URL(document.baseURI).pathname === "/" ? [] : [withHashLocation()];

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
  ], ...routerFeatures)],
}).catch((error: unknown) => console.error("TOHEE Docs failed to start", error));
