import {
  Activity,
  ArrowRight,
  Award,
  BookOpen,
  Ear,
  GraduationCap,
  Heart,
  LayoutGrid,
  Music2,
  PenTool,
} from "lucide-react";
import { PageIntro } from "../components/PageIntro";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { publicBasePath, sitePath } from "../site-config";

const principles = [
  {
    label: "Listen",
    title: "작은 소리까지 듣습니다.",
    copy: "말보다 먼저 도착하는 표정과 호흡, 리듬을 살피며 이야기를 시작합니다.",
    icon: Ear,
  },
  {
    label: "Design",
    title: "경험을 세심하게 설계합니다.",
    copy: "사람과 현장에 맞는 음악, 배움, 돌봄의 과정을 하나의 흐름으로 만듭니다.",
    icon: PenTool,
  },
  {
    label: "Connect",
    title: "음악으로 마음을 잇습니다.",
    copy: "나의 감각이 타인의 이야기와 만나고, 오래 기억될 장면으로 이어지게 합니다.",
    icon: Heart,
  },
];

const services = [
  {
    number: "01",
    title: "음악 창작 · 제작",
    copy: "한 사람의 이야기부터 지역의 기억까지, 진심이 들리는 노래와 음원을 만듭니다.",
    icon: Music2,
  },
  {
    number: "02",
    title: "예술교육 · 음악놀이",
    copy: "정답을 찾기보다 듣고 표현하며, 각자의 방식으로 창작하는 배움의 시간을 엽니다.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "음악치료 · 정서지원",
    copy: "안전한 음악 경험 안에서 감정을 알아차리고 관계와 일상의 힘을 회복하도록 돕습니다.",
    icon: Activity,
  },
  {
    number: "04",
    title: "프로젝트 · 문화콘텐츠",
    copy: "교육, 돌봄, 지역의 가치를 공연과 전시, 앨범 등 지속 가능한 콘텐츠로 연결합니다.",
    icon: LayoutGrid,
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="about-page">
        <PageIntro
          index="02"
          eyebrow="ABOUT"
          title={<>음악에서 시작해<br /><strong>사람의 이야기</strong>로.</>}
          description="aroundstory는 음악 창작, 예술교육, 음악치료와 프로젝트 기획을 하나의 결로 잇습니다. 듣는 일에서 시작해 각자의 마음과 가능성이 자연스럽게 드러나는 경험을 만듭니다."
          tone="sage"
        />

        <section className="compact-section principle-section">
          <div className="shell">
            <div className="content-heading">
              <p className="section-chip"><span>OUR WAY</span>일하는 방식</p>
              <h2>잘 듣고, 세심하게 만들고,<br />다정하게 연결합니다.</h2>
            </div>
            <div className="story-principles">
              {principles.map(({ label, title, copy, icon: Icon }) => (
                <article className="principle-card" key={label}>
                  <span className="principle-icon" aria-hidden="true"><Icon size={22} strokeWidth={1.7} /></span>
                  <p>{label}</p>
                  <h3>{title}</h3>
                  <span>{copy}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="compact-section service-section">
          <div className="shell">
            <div className="content-heading content-heading-inline">
              <div>
                <p className="section-chip"><span>WHAT WE DO</span>주요 활동</p>
                <h2>음악이 필요한 순간을<br />함께 설계합니다.</h2>
              </div>
              <p>창작과 배움, 돌봄과 문화가 서로 분리되지 않도록 현장의 목적에 맞는 방식으로 조율합니다.</p>
            </div>
            <div className="service-grid">
              {services.map(({ number, title, copy, icon: Icon }) => (
                <article className="service-card" key={number}>
                  <div className="service-card-top">
                    <span className="service-number">{number}</span>
                    <span className="service-icon" aria-hidden="true"><Icon size={22} strokeWidth={1.65} /></span>
                  </div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ari-section">
          <div className="shell ari-strip">
            <div className="ari-visual" aria-hidden="true">
              <span>HELLO, ARI</span>
              <img src={`${publicBasePath}/assets/ari.png`} alt="" />
            </div>
            <div className="ari-copy">
              <p className="section-chip"><span>ARI</span>MUSIC FRIEND</p>
              <h2>낯선 음악의 세계를<br />다정하게 안내하는 친구</h2>
              <p>아리는 듣고, 표현하고, 함께 만드는 과정을 곁에서 응원하는 aroundstory의 음악친구입니다. 아이와 어른 모두가 음악 앞에서 편안하게 자신을 꺼낼 수 있도록 돕습니다.</p>
            </div>
          </div>
        </section>

        <section className="representative-section">
          <div className="shell representative-grid">
            <div>
              <p className="representative-kicker">REPRESENTATIVE</p>
              <h2 className="representative-name">이지은 <span>/ 아리</span></h2>
              <p className="representative-role">작곡가 · 음악치료사 · 예술교육가 · 프로젝트 기획자</p>
              <a className="button button-dark representative-cta" href={sitePath("/projects/")}>주요 프로젝트 보기 <ArrowRight size={17} /></a>
            </div>
            <div className="representative-details" aria-label="대표 주요 이력">
              <div className="representative-detail">
                <GraduationCap size={21} strokeWidth={1.7} aria-hidden="true" />
                <p><span>학력</span>숙명여자대학교 음악치료학 석사</p>
              </div>
              <div className="representative-detail">
                <Music2 size={21} strokeWidth={1.7} aria-hidden="true" />
                <p><span>현재</span>aroundstory / 아리엘 브레인앤뮤직랩 대표</p>
              </div>
              <div className="representative-detail">
                <Award size={21} strokeWidth={1.7} aria-hidden="true" />
                <p><span>수상</span>2025 우수예술교육가 우수상</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
