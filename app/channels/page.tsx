import { ArrowUpRight, AudioLines, CirclePlay, Heart, HeartHandshake, Music2, Youtube } from "lucide-react";
import { PageIntro } from "../components/PageIntro";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

const channels = [
  {
    title: "aroundstory",
    subtitle: "PLAY · LEARN · CREATE · CARE",
    copy: "음악놀이, 교육, 창작, 치료가 만나는 aroundstory의 대표 활동 채널입니다.",
    href: "https://www.youtube.com/@%EC%96%B4%EB%9D%BC%EC%9A%B4%EB%93%9C%EC%8A%A4%ED%86%A0%EB%A6%AC",
    Icon: Music2,
    tone: "sage",
  },
  {
    title: "스튜디오 아리",
    subtitle: "STUDIO ARI",
    copy: "아리(ari)의 음원 창작 과정과 음악 프로젝트의 장면을 기록합니다.",
    href: "https://www.youtube.com/@%EC%8A%A4%ED%8A%9C%EB%94%94%EC%98%A4%EC%95%84%EB%A6%AC",
    Icon: AudioLines,
    tone: "blue",
  },
  {
    title: "아리엘피아노",
    subtitle: "ARIEL PIANO",
    copy: "아리의 피아노 연주로 듣는 찬송가와 조용한 묵상의 음악입니다.",
    href: "https://www.youtube.com/@Arielpiano%EC%95%84%EB%A6%AC%EC%97%98%ED%94%BC%EC%95%84%EB%85%B8",
    Icon: CirclePlay,
    tone: "paper",
  },
  {
    title: "Melodies of Memory",
    subtitle: "SONGS TO REMEMBER",
    copy: "호스피스 환우들의 신청곡과 사연을 소중한 음악의 기억으로 이어 갑니다.",
    href: "https://www.youtube.com/@MelodiesofMemory_aroundstory",
    Icon: HeartHandshake,
    tone: "rose",
  },
  {
    title: "Blessing Melody",
    subtitle: "A MOTHER'S PRAYER",
    copy: "아이들을 사랑하는 마음으로 노래하고 기도하는 엄마의 음악 채널입니다.",
    href: "https://www.youtube.com/@BlessingMelody_ari",
    Icon: Heart,
    tone: "bronze",
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
          title={<>한 사람의 마음에서<br /><strong>다섯 갈래의 음악</strong>으로.</>}
          description="교육과 창작, 연주와 돌봄, 기도의 마음까지. 지금 활동 중인 다섯 채널에서 서로 다른 음악의 이야기를 만나 보세요."
          tone="sage"
        />

        <section className="channels-section">
          <div className="shell">
            <div className="channels-heading">
              <div><p className="section-kicker">NOW ON YOUTUBE</p><h2>현재 활동 중인 채널</h2></div>
              <p><Youtube size={18} /> 각 카드를 누르면 확인된 공식 채널로 바로 이동합니다.</p>
            </div>
            <div className="channel-grid">
              {channels.map(({ title, subtitle, copy, href, Icon, tone }) => (
                <a className={`channel-card channel-${tone}`} href={href} target="_blank" rel="noreferrer" key={title}>
                  <div className="channel-card-top">
                    <span className="channel-icon"><Icon aria-hidden="true" strokeWidth={1.45} /></span>
                    <ArrowUpRight aria-hidden="true" size={20} />
                  </div>
                  <div className="channel-card-copy">
                    <p>{subtitle}</p>
                    <h3>{title}</h3>
                    <span>{copy}</span>
                  </div>
                </a>
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
