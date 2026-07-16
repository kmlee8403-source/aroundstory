"use client";

import { useRef } from "react";
import { navigation, sitePath } from "./site-config";

export function MobileNav() {
  const menu = useRef<HTMLDetailsElement>(null);

  return (
    <details className="mobile-menu" ref={menu}>
      <summary aria-label="메뉴 열기"><span /><span /></summary>
      <nav aria-label="모바일 메뉴">
        {navigation.map((item) => item.children ? (
          <div className="mobile-subnav" key={item.href}>
            <a
              className="mobile-subnav-parent"
              href={sitePath(item.href)}
              onClick={() => menu.current?.removeAttribute("open")}
            >
              {item.label}
            </a>
            <div>
              {item.children.map((child) => (
                <a
                  href={sitePath(child.href)}
                  key={child.href}
                  onClick={() => menu.current?.removeAttribute("open")}
                >
                  {child.label}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <a href={sitePath(item.href)} key={item.href} onClick={() => menu.current?.removeAttribute("open")}>{item.label}</a>
        ))}
        <a href="mailto:ari@aroundstory.com" onClick={() => menu.current?.removeAttribute("open")}>문의</a>
      </nav>
    </details>
  );
}
