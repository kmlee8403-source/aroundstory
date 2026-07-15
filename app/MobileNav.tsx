"use client";

import { useRef } from "react";
import { navigation, sitePath } from "./site-config";

export function MobileNav() {
  const menu = useRef<HTMLDetailsElement>(null);

  return (
    <details className="mobile-menu" ref={menu}>
      <summary aria-label="메뉴 열기"><span /><span /></summary>
      <nav aria-label="모바일 메뉴">
        {navigation.map(({ href, label }) => (
          <a href={sitePath(href)} key={href} onClick={() => menu.current?.removeAttribute("open")}>{label}</a>
        ))}
        <a href="mailto:ari@aroundstory.com" onClick={() => menu.current?.removeAttribute("open")}>문의</a>
      </nav>
    </details>
  );
}
