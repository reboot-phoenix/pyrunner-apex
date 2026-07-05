import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PyRunner Apex — Free Online Python 3 Editor & Compiler" },
      { name: "description", content: "Run Python 3 instantly in your browser — no install needed. Free online Python compiler with Monaco editor, interactive input(), AI assistant (Gemini, ChatGPT, Claude), and auto package install." },
      { property: "og:title", content: "PyRunner Apex — Free Online Python Editor" },
      { property: "og:description", content: "Run Python 3 in your browser. Monaco editor, interactive input(), AI assistant, auto package install. No account needed." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/pyrunner.html"
      title="PyRunner Apex — Free Online Python Editor"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
        display: "block",
      }}
      allow="clipboard-read; clipboard-write"
    />
  );
}
