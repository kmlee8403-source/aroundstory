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
            <div className="nav-group" key={item.href}>
              <a className="nav-group-trigger" href={sitePath(item.href)} aria-haspopup="true">
                {item.label}<span aria-hidden="true">⌄</span>
              </a>
              <div className="nav-submenu">
                {item.children.map((child) => (
                  <a href={sitePath(child.href)} key={child.href}>{child.label}</a>
                ))}
              </div>
            </div>
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
