import { ArrowUpRight, ExternalLink, Headphones, Search } from "lucide-react";
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
          description="아리(ari)의 공식 발매작과 다른 아티스트의 음원으로 이어진 작업 참여 기록을 한곳에 모았습니다."
          tone="dark"
        />

        <section className="music-overview">
          <div className="shell music-overview-grid">
            <div>
              <p className="section-kicker">ARI MUSIC CATALOG</p>
              <h2>aroundstory의 결에<br />가장 가까운 기록</h2>
            </div>
            <div className="music-fit-copy">
              <p>교육·치료·프로젝트에서 출발한 이야기가 아리의 발매작과 소율(soyul)·오뉴(onyu)의 음원 작업으로 이어진 과정을 함께 보여 줍니다.</p>
              <div className="catalog-stats">
                <span><strong>{releases.length}</strong>발매·참여작</span>
                <span><strong>{totalTracks}</strong>수록 음원</span>
                <span><strong>2021—2025</strong>음악 작업 기록</span>
              </div>
            </div>
          </div>
        </section>

        <section className="catalog-section">
          <div className="shell">
            <div className="catalog-toolbar">
              <div>
                <p className="section-kicker">ALL RELEASES</p>
                <h2>발매·참여작과 플랫폼 링크</h2>
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
                    <span className="release-art">
                      <img src={release.cover} alt={`${release.title} 앨범 재킷`} loading="lazy" decoding="async" />
                    </span>
                    <span className="release-meta">
                      <small>{release.year} · {release.kind}</small>
                      <strong>{release.title}</strong>
                      <span className="release-credit">{release.artist} · {release.credit}</span>
                    </span>
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
                            {trackLinks(track, release).map((link) => (
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
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </details>
              ))}
            </div>

            <p className="catalog-note"><Search size={15} /> 확인된 주소는 곡 또는 앨범 상세 페이지로 연결합니다. 상세 주소가 공개 검색에서 확인되지 않은 플랫폼은 곡명·앨범명·아티스트를 함께 넣은 검색 결과로 안내합니다.</p>
          </div>
        </section>

        <section className="artist-platforms">
          <div className="shell artist-platform-grid">
            <div className="artist-platform-copy"><Headphones strokeWidth={1.4} /><h2>아리(ari)의 전체 발매 음원</h2><p>아리 이름으로 발매한 음원은 국내 주요 플랫폼의 아티스트 페이지에서 모아볼 수 있습니다.</p></div>
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
