import { ArrowUpRight, Disc3, ExternalLink, Headphones, Search } from "lucide-react";
import { PageIntro } from "../components/PageIntro";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { releases, totalTracks, trackLinks } from "../music-catalog";

const artistPlatforms = [
  { label: "Melon", href: "https://www.melon.com/artist/song.htm?artistId=3049798" },
  { label: "Genie", href: "https://www.genie.co.kr/detail/artistInfo?xxnm=81253592" },
  { label: "Bugs", href: "https://music.bugs.co.kr/artist/20147016" },
  { label: "VIBE", href: "https://vibe.naver.com/artist/4896251" },
];

export default function MusicPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          index="05"
          eyebrow="OFFICIAL MUSIC"
          title={<>이야기에서 태어나<br /><strong>오래 머무는 음악</strong></>}
          description="창작자 아리(ari)가 사람과 장소, 돌봄의 순간에서 길어 올린 공식 발매 음원을 한곳에 모았습니다."
          tone="dark"
        />

        <section className="music-overview">
          <div className="shell music-overview-grid">
            <div>
              <p className="section-kicker">ARI (ARI) DISCOGRAPHY</p>
              <h2>aroundstory의 결에<br />가장 가까운 기록</h2>
            </div>
            <div className="music-fit-copy">
              <p>음원 메뉴는 교육·치료·프로젝트에서 출발한 이야기가 실제 창작물로 이어지는 과정을 보여 줍니다. 그래서 별도의 부가 메뉴가 아니라 aroundstory의 정체성을 완성하는 중심 기록입니다.</p>
              <div className="catalog-stats">
                <span><strong>{releases.length}</strong>발매작</span>
                <span><strong>{totalTracks}</strong>수록곡</span>
                <span><strong>2021—2025</strong>공식 카탈로그</span>
              </div>
            </div>
          </div>
        </section>

        <section className="catalog-section">
          <div className="shell">
            <div className="catalog-toolbar">
              <div>
                <p className="section-kicker">ALL RELEASES</p>
                <h2>발매작과 플랫폼 링크</h2>
              </div>
              <div className="link-legend">
                <span><ExternalLink size={14} /> 곡 상세</span>
                <span><Search size={14} /> 곡명 검색</span>
              </div>
            </div>

            <div className="release-list">
              {releases.map((release, index) => (
                <details className={`release release-${release.accent}`} key={`${release.year}-${release.title}`} open={index < 2}>
                  <summary>
                    <span className="release-art" aria-hidden="true"><Disc3 strokeWidth={1.25} /></span>
                    <span className="release-meta"><small>{release.year} · {release.kind}</small><strong>{release.title}</strong></span>
                    <span className="release-count">{release.tracks.length} TRACKS</span>
                    <span className="release-toggle" aria-hidden="true" />
                  </summary>
                  <ol className="track-list">
                    {release.tracks.map((track, trackIndex) => (
                      <li key={`${track.title}-${trackIndex}`}>
                        <span className="track-number">{String(trackIndex + 1).padStart(2, "0")}</span>
                        <div className="track-main">
                          <h3>{track.title}</h3>
                          <div className="platform-links">
                            {trackLinks(track, release.title).map((link) => (
                              <a
                                className={link.kind === "search" ? "platform-search" : undefined}
                                href={link.href}
                                key={link.label}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${track.title} - ${link.kind === "search" ? `${link.label} 결과 보기` : `${link.label}에서 열기`}`}
                              >
                                {link.kind === "search" ? <Search size={12} /> : null}{link.label}
                              </a>
                            ))}
                            {!track.melon || !track.vibe ? <small className="platform-missing">Melon·VIBE 상세 미확인</small> : null}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </details>
              ))}
            </div>

            <p className="catalog-note"><Search size={15} /> Spotify와 YouTube Music은 동명이인·동명곡 혼선을 막기 위해 ‘곡명 + 앨범명 + 아리(ari)’ 검색 결과로 안내합니다. 나머지는 확인된 곡 상세 페이지입니다.</p>
          </div>
        </section>

        <section className="artist-platforms">
          <div className="shell artist-platform-grid">
            <div className="artist-platform-copy"><Headphones strokeWidth={1.4} /><h2>아리(ari)의 전체 음원 보기</h2><p>자주 쓰는 국내 플랫폼에서 아티스트의 발매 목록을 바로 확인하세요.</p></div>
            <div className="artist-link-grid">
              {artistPlatforms.map((platform) => (
                <a href={platform.href} key={platform.label} target="_blank" rel="noreferrer">{platform.label}<ArrowUpRight size={17} /></a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
