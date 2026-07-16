import { sitePath } from "../site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <a className="footer-brand" href={sitePath("/")}>aroundstory</a>
        <p>음악으로 배우고, 마음으로 자라는 시간</p>
        <div>
          <a href="mailto:ari@aroundstory.com">ari@aroundstory.com</a>
          <span className="footer-contact-pending">카카오톡 오픈채팅 · 준비 중</span>
          <span>© {new Date().getFullYear()} aroundstory</span>
        </div>
      </div>
    </footer>
  );
}
