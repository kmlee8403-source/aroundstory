export const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function sitePath(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${publicBasePath}${normalized}`;
}

export type NavigationItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const navigation: NavigationItem[] = [
  { href: "/about/", label: "소개" },
  { href: "/projects/", label: "프로젝트" },
  {
    href: "/lab/",
    label: "아리엘브레인앤뮤직랩",
    children: [
      { href: "/lab/music-therapy/", label: "음악치료" },
      { href: "/assessment/", label: "다중지능지문적성검사" },
    ],
  },
  { href: "/music/", label: "음원" },
  { href: "/channels/", label: "유튜브" },
];
