import { MobileNav } from "../MobileNav";
import { navigation, publicBasePath, sitePath } from "../site-config";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href={sitePath("/")} aria-label="aroundstory 홈">
          <img
            className="brand-logo"
            src={`${publicBasePath}/assets/aroundstory-logo-transparent.png`}
            alt="aroundstory"
          />
        </a>
        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navigation.map((item) => item.children ? (
            <details className="nav-group" key={item.href}>
              <summary className="nav-group-trigger">
                {item.label}<span aria-hidden="true">⌄</span>
              </summary>
              <div className="nav-submenu">
                <a href={sitePath(item.href)}>{item.label} 소개</a>
                {item.children.map((child) => (
                  <a href={sitePath(child.href)} key={child.href}>{child.label}</a>
                ))}
              </div>
            </details>
          ) : (
            <a href={sitePath(item.href)} key={item.href}>{item.label}</a>
          ))}
          <a className="nav-contact" href="mailto:ari@aroundstory.com">문의</a>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
