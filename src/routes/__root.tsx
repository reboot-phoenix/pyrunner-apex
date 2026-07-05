import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div style={{
      display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",
      background:"#0a0b0f",color:"#e4e8f4",fontFamily:"'JetBrains Mono',monospace",flexDirection:"column",gap:16
    }}>
      <div style={{fontSize:72,fontWeight:800,background:"linear-gradient(135deg,#00d4ff,#b57bee)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>404</div>
      <div style={{fontSize:16,color:"#7a849e"}}>Page not found</div>
      <a href="/" style={{marginTop:8,padding:"8px 20px",border:"1px solid #00d4ff",color:"#00d4ff",borderRadius:6,textDecoration:"none",fontSize:13}}>← Go home</a>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div style={{
      display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",
      background:"#0a0b0f",color:"#e4e8f4",fontFamily:"'JetBrains Mono',monospace",flexDirection:"column",gap:16,padding:"0 24px",textAlign:"center"
    }}>
      <div style={{fontSize:20,fontWeight:600}}>Something went wrong</div>
      <div style={{fontSize:13,color:"#7a849e",maxWidth:380}}>{error?.message || "An unexpected error occurred."}</div>
      <div style={{display:"flex",gap:10,marginTop:8}}>
        <button onClick={() => { router.invalidate(); reset(); }}
          style={{padding:"8px 18px",background:"rgba(0,212,255,.1)",border:"1px solid #00d4ff",color:"#00d4ff",borderRadius:6,cursor:"pointer",fontFamily:"inherit",fontSize:12}}>
          Try again
        </button>
        <a href="/" style={{padding:"8px 18px",border:"1px solid #2a2f4a",color:"#7a849e",borderRadius:6,textDecoration:"none",fontSize:12}}>Go home</a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "PyRunner Apex — Free Online Python 3 Editor & Compiler" },
      { name: "description", content: "Run Python 3 instantly in your browser — no install needed. Free online Python compiler with Monaco editor, interactive input(), AI assistant (Gemini, ChatGPT, Claude), and auto package install." },
      { name: "keywords", content: "python online, python compiler, run python browser, python editor online, online IDE, python 3, free python, python interpreter, AI python" },
      { name: "author", content: "Ashtid D" },
      { name: "robots", content: "index, follow" },
      { name: "google-site-verification", content: "8vx4_BGRmoOeWIUYV1DWNx35l2b3-5urX6PuZ4sDqHg" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "PyRunner Apex — Free Online Python Editor" },
      { property: "og:description", content: "Run Python 3 in your browser. Monaco editor, interactive input(), AI assistant, auto package install. No account needed." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PyRunner Apex — Free Online Python Editor" },
      { name: "twitter:description", content: "Run Python 3 in your browser with AI help from Gemini, ChatGPT, and Claude. No install needed." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#0a0b0f" }}>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
