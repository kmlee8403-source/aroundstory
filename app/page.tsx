import { ArrowRight, Play } from "lucide-react";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { publicBasePath, sitePath } from "./site-config";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="home-page">
        <section className="home-hero">
          <div className="shell home-hero-grid">
            <div className="home-hero-copy">
              <p className="eyebrow-pill">MUSIC · CARE · EDUCATION · STORY</p>
              <h1>작은 소리에 귀 기울여,<br /><strong>마음이 머무는 음악</strong>을 만듭니다.</h1>
              <p className="hero-lead">
                aroundstory는 창작, 예술교육, 음악치료와 프로젝트 기획을 통해
                사람의 이야기가 음악이 되는 과정을 설계합니다.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href={sitePath("/about/")}>aroundstory 소개 <ArrowRight size={17} /></a>
                <a className="text-link" href={sitePath("/music/")}>아리(ari)의 공식 음원</a>
              </div>
            </div>

            <aside className="home-brand-card" aria-label="aroundstory 브랜드 메시지">
              <div className="music-lines" aria-hidden="true"><i /><i /><i /></div>
              <img src={`${publicBasePath}/assets/ari.png`} alt="aroundstory의 음악친구 아리" />
              <div className="brand-card-copy">
                <p>PLAY · LEARN · GROW</p>
                <blockquote>음악으로 배우고,<br />마음으로 자라는 시간.</blockquote>
                <span>Listen closely. Create sincerely.</span>
              </div>
            </aside>
          </div>
          <a className="scroll-cue" href="#featured-film">대표 영상 보기 <span aria-hidden="true">↓</span></a>
        </section>

        <section className="featured-film" id="featured-film">
          <div className="shell film-grid">
            <div className="film-copy">
              <p className="section-chip section-chip-light"><span>PLAY</span>FEATURED FILM</p>
              <h2>제주의 숨과 노래를<br />하나의 장면으로.</h2>
              <p>〈해녀의 마음〉과 〈평화의 섬, 제주〉가 만들어지는 스튜디오의 시간을 담았습니다.</p>
              <a href="https://www.youtube.com/@%EC%96%B4%EB%9D%BC%EC%9A%B4%EB%93%9C%EC%8A%A4%ED%86%A0%EB%A6%AC" target="_blank" rel="noreferrer">
                aroundstory 유튜브 <ArrowRight size={16} />
              </a>
            </div>
            <div className="video-frame">
              <iframe
                src="https://www.youtube-nocookie.com/embed/r9EtH6AKswo?rel=0"
                title="해녀의 마음과 평화의 섬 제주 스튜디오 녹음 스케치"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <span className="video-mark" aria-hidden="true"><Play size={18} fill="currentColor" /> aroundstory film</span>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
