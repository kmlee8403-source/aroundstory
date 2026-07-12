"use client";

import { useRef } from "react";

const links = [
  ["#about", "소개"],
  ["#services", "사업 분야"],
  ["#projects", "프로젝트"],
  ["#lab", "교육연구"],
  ["#director", "대표자"],
  ["#contact", "문의하기"],
];

export function MobileNav() {
  const menu = useRef<HTMLDetailsElement>(null);

  return (
    <details className="mobile-menu" ref={menu}>
      <summary aria-label="메뉴 열기"><span /><span /></summary>
      <nav aria-label="모바일 메뉴">
        {links.map(([href, label]) => (
          <a href={href} key={href} onClick={() => menu.current?.removeAttribute("open")}>{label}</a>
        ))}
      </nav>
    </details>
  );
}
