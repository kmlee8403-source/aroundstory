import { ArrowRight, Brain, Fingerprint, Music2 } from "lucide-react";
import { PageIntro } from "../components/PageIntro";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { sitePath } from "../site-config";

const labCategories = [
  {
    index: "04-A",
    eyebrow: "MUSIC THERAPY",
    title: "음악치료",
    copy: "음악과 움직임, 호흡과 리듬을 매개로 몸의 감각을 깨우고 일상의 성장 경험을 함께 만듭니다.",
    href: "/lab/music-therapy/",
    Icon: Music2,
    tone: "sage",
    keywords: ["감각 · 호흡", "리듬운동", "셀프성장코칭"],
  },
  {
    index: "04-B",
    eyebrow: "MULTIPLE INTELLIGENCES",
    title: "다중지능지문적성검사",
    copy: "검사 결과를 하나의 답으로 단정하지 않고, 강점과 편안한 배움의 방식을 상담 안에서 함께 살펴봅니다.",
    href: "/assessment/",
    Icon: Fingerprint,
    tone: "blue",
    keywords: ["8가지 지능", "강점 발견", "상담 · 제안"],
  },
];

export default function LabPage() {
  return (
    <>
      <SiteHeader />
      <main className="lab-page">
        <PageIntro
          index="04"
          eyebrow="ARIEL BRAIN & MUSIC LAB"
          title={<>몸의 감각과 마음의 강점을<br /><strong>함께 발견하는 시간</strong></>}
          description="아리엘브레인앤뮤직랩은 음악치료와 다중지능지문적성검사를 중심으로, 각자의 리듬과 가능성을 세심하게 살피는 교육·상담 공간입니다."
          tone="sage"
        />

        <section className="lab-overview-section">
          <div className="shell">
            <div className="lab-heading">
              <div>
                <p>PROGRAM AREAS</p>
                <h2>두 가지 길로 만나는<br />아리엘브레인앤뮤직랩</h2>
              </div>
              <p>음악으로 몸과 마음의 움직임을 돕고, 다중지능의 관점으로 고유한 강점과 배움의 방식을 함께 찾습니다.</p>
            </div>

            <div className="lab-category-grid">
              {labCategories.map(({ index, eyebrow, title, copy, href, Icon, tone, keywords }) => (
                <a className={`lab-category-card lab-category-${tone}`} href={sitePath(href)} key={href}>
                  <div className="lab-category-top">
                    <span>{index}</span>
                    <span className="lab-category-icon" aria-hidden="true"><Icon strokeWidth={1.5} /></span>
                  </div>
                  <div className="lab-category-copy">
                    <p>{eyebrow}</p>
                    <h3>{title}</h3>
                    <span>{copy}</span>
                    <ul aria-label={`${title} 주요 내용`}>
                      {keywords.map((keyword) => <li key={keyword}>{keyword}</li>)}
                    </ul>
                  </div>
                  <span className="lab-category-link">자세히 보기 <ArrowRight size={17} /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="lab-principle-section">
          <div className="shell lab-principle-inner">
            <span className="lab-principle-icon" aria-hidden="true"><Brain strokeWidth={1.4} /></span>
            <div>
              <p>OUR APPROACH</p>
              <h2>결과보다 사람을 먼저 봅니다.</h2>
              <span>몸의 반응과 마음의 속도, 생활 환경을 함께 살피며 지금 필요한 경험을 무리 없이 설계합니다.</span>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
