import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "aroundstory.com";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const base = new URL(`${protocol}://${host}`);
  const title = "어라운드스토리 | 음악창작 · 예술교육 · 음악치료";
  const description = "작은 소리에 귀 기울여 마음이 머무는 음악을 만듭니다. 음악창작, 예술교육, 음악치료와 프로젝트 기획을 연결하는 어라운드스토리.";

  return {
    metadataBase: base,
    title,
    description,
    keywords: ["어라운드스토리", "음악치료", "문화예술교육", "음악창작", "프로젝트 기획", "아리", "이지은"],
    openGraph: {
      title: "어라운드스토리 — 마음이 머무는 음악",
      description: "음악창작 · 예술교육 · 음악치료 · 프로젝트 기획",
      type: "website",
      locale: "ko_KR",
      url: base,
      images: [{ url: new URL("/og-v2.png", base), width: 1760, height: 922, alt: "어라운드스토리 — 마음이 머무는 음악" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "어라운드스토리 — 마음이 머무는 음악",
      description: "음악창작 · 예술교육 · 음악치료 · 프로젝트 기획",
      images: [new URL("/og-v2.png", base)],
    },
    icons: {
      icon: "/assets/ari.png",
      shortcut: "/assets/ari.png",
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
