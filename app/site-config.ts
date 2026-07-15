export const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function sitePath(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${publicBasePath}${normalized}`;
}

export const navigation = [
  { href: "/about/", label: "소개" },
  { href: "/projects/", label: "프로젝트" },
  { href: "/assessment/", label: "지문적성검사" },
  { href: "/music/", label: "음원" },
  { href: "/channels/", label: "유튜브" },
];
