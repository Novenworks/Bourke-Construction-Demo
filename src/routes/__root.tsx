import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import appCss from "../styles.css?url";

const APP_NAME = "Bourke Construction";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Bourke Construction is a family-owned Orange County remodeling contractor serving homeowners from Anaheim and Laguna Beach since 1996.",
      },
      { name: "theme-color", content: "#1B2A41" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Outfit:wght@400;500;600&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-paper text-ink">
        <PreviewHostBridge />
        <AuthProvider>
          <Header />
          <Outlet />
          <Footer />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className="container-page py-24">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl">Page not found</h1>
      <p className="mt-4 max-w-md text-ink-soft">
        That page isn’t part of this site. Head back to the homepage to see
        Bourke Construction’s work.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex h-11 items-center rounded-md bg-navy px-5 text-sm font-medium text-cream"
      >
        Back home
      </a>
    </main>
  );
}
