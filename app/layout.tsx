import type { Metadata } from "next";
import "./globals.css";

const siteUrl = new URL(
  `${(process.env.NEXT_PUBLIC_SITE_URL ?? "https://aroundstory.kmlee8403.chatgpt.site").replace(/\/$/, "")}/`,
);
const socialImage = new URL("og-aroundstory-v3.png", siteUrl);
const icon = new URL("assets/ari.png", siteUrl);
const title = "aroundstory | 음악창작 · 예술교육 · 음악치료";
const description = "작은 소리에 귀 기울여 마음이 머무는 음악을 만듭니다. 음악창작, 예술교육, 음악치료와 프로젝트 기획을 연결하는 aroundstory.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title,
  description,
  keywords: ["aroundstory", "음악치료", "문화예술교육", "음악창작", "프로젝트 기획", "아리", "이지은"],
  openGraph: {
    title: "aroundstory — 마음이 머무는 음악",
    description: "음악창작 · 예술교육 · 음악치료 · 프로젝트 기획",
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    images: [{ url: socialImage, width: 1659, height: 948, alt: "aroundstory — 마음이 머무는 음악" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "aroundstory — 마음이 머무는 음악",
    description: "음악창작 · 예술교육 · 음악치료 · 프로젝트 기획",
    images: [socialImage],
  },
  icons: { icon, shortcut: icon },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
