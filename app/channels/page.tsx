import { ArrowUpRight, AudioLines, CirclePlay, Heart, HeartHandshake, Music2, Sparkles, Youtube } from "lucide-react";
import { PageIntro } from "../components/PageIntro";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

const channels = [
  {
    title: "aroundstory",
    subtitle: "PLAY · LEARN · CREATE · CARE",
    copy: "음악놀이, 교육, 창작, 치료가 만나는 aroundstory의 대표 활동 채널입니다.",
    href: "https://www.youtube.com/@%EC%96%B4%EB%9D%BC%EC%9A%B4%EB%93%9C%EC%8A%A4%ED%86%A0%EB%A6%AC",
    videoId: "3qDcbmed--w",
    Icon: Music2,
    tone: "sage",
  },
  {
    title: "스튜디오 아리",
    subtitle: "STUDIO ARI",
    copy: "아리(ari)의 음원 창작 과정과 음악 프로젝트의 장면을 기록합니다.",
    href: "https://www.youtube.com/@%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4%EC%95%84%EB%A6%AC",
    videoId: "WqnOR_Ehwj8",
    Icon: AudioLines,
    tone: "blue",
  },
  {
    title: "아리엘피아노",
    subtitle: "ARIEL PIANO",
    copy: "아리의 피아노 연주로 듣는 찬송가와 조용한 묵상의 음악입니다.",
    href: "https://www.youtube.com/@Arielpiano%EC%95%84%EB%A6%AC%EC%97%98%ED%94%BC%EC%95%84%EB%85%B8",
    videoId: "ULAyqD0JYs4",
    Icon: CirclePlay,
    tone: "paper",
  },
  {
    title: "Melodies of Memory",
    subtitle: "SONGS TO REMEMBER",
    copy: "호스피스 환우들의 신청곡과 사연을 소중한 음악의 기억으로 이어 갑니다.",
    href: "https://www.youtube.com/@MelodiesofMemory_aroundstory",
    videoId: "VBoFi5CuRI8",
    Icon: HeartHandshake,
    tone: "rose",
  },
  {
    title: "Blessing Melody",
    subtitle: "A MOTHER'S PRAYER",
    copy: "아이들을 사랑하는 마음으로 노래하고 기도하는 엄마의 음악 채널입니다.",
    href: "https://www.youtube.com/@BlessingMelody_ari",
    videoId: "CL56P49FVGA",
    Icon: Heart,
    tone: "bronze",
  },
  {
    title: "스토리뮤직 lab",
    subtitle: "STORY MUSIC LAB",
    copy: "이야기에서 출발한 창작동요와 캠페인송을 쉽고 즐거운 음악으로 전합니다.",
    href: "https://www.youtube.com/@storymusiclab",
    videoId: "Q2FY1npyHtI",
    Icon: Sparkles,
    tone: "sage",
  },
];

export default function ChannelsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          index="06"
          eyebrow="YOUTUBE CHANNELS"
          title={<>한 사람의 마음에서<br /><strong>여섯 갈래의 음악</strong>으로.</>}
          description="교육과 창작, 연주와 돌봄, 기도의 마음까지. 지금 활동 중인 여섯 채널에서 서로 다른 음악의 이야기를 만나 보세요."
          tone="sage"
        />

        <section className="channels-section">
          <div className="shell">
            <div className="channels-heading">
              <div><p className="section-kicker">NOW ON YOUTUBE</p><h2>현재 활동 중인 채널</h2></div>
              <p><Youtube size={18} /> 채널마다 대표 영상 한 편과 공식 채널 링크를 함께 확인할 수 있습니다.</p>
            </div>
            <div className="channel-grid">
              {channels.map(({ title, subtitle, copy, href, videoId, Icon, tone }) => (
                <article className={`channel-card channel-${tone}`} key={title}>
                  <div className="channel-video">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
                      title={`${title} 채널 샘플 영상`}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="channel-card-body">
                    <div className="channel-card-top">
                      <span className="channel-icon"><Icon aria-hidden="true" strokeWidth={1.45} /></span>
                      <p>{subtitle}</p>
                    </div>
                    <div className="channel-card-copy">
                      <h3>{title}</h3>
                      <span>{copy}</span>
                    </div>
                    <a className="channel-link" href={href} target="_blank" rel="noreferrer">
                      공식 채널 보기 <ArrowUpRight aria-hidden="true" size={17} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="channel-invitation">
          <div className="shell channel-invitation-inner">
            <div><p>SUBSCRIBE &amp; STAY TUNED</p><h2>당신에게 맞는 음악의 문을 열어 보세요.</h2></div>
            <a href="https://www.youtube.com/@%EC%96%B4%EB%9D%BC%EC%9A%B4%EB%93%9C%EC%8A%A4%ED%86%A0%EB%A6%AC" target="_blank" rel="noreferrer">대표 채널에서 시작하기 <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
