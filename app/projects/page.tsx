import { ArrowRight, ArrowUpRight, BookHeart, MapPinned, Mic2, RadioTower } from "lucide-react";
import { PageIntro } from "../components/PageIntro";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { sitePath } from "../site-config";

const projects = [
  {
    index: "01",
    category: "창작 음악교육",
    title: "아임소리 2기",
    copy: "아이들의 소리와 선택에서 출발하는 참여형 창작 음악교육 프로젝트. 함께 듣고, 쓰고, 노래하며 하나의 음악을 완성합니다.",
    tags: ["어린이", "음악교육", "공동창작"],
    icon: Mic2,
  },
  {
    index: "02",
    category: "앨범 · 음악전시",
    title: "나는 나로 나와",
    copy: "각자의 속도와 모습을 음악으로 존중하는 창작 앨범 및 전시 프로젝트. 노래와 이야기로 자기다움을 만납니다.",
    tags: ["앨범", "마음", "자기다움"],
    icon: BookHeart,
  },
  {
    index: "03",
    category: "제주 창작 프로젝트",
    title: "제주에 잇다",
    copy: "제주의 자연, 사람, 기억을 오늘의 음악으로 잇습니다. 해녀의 마음과 평화의 섬 제주를 노래에 담았습니다.",
    tags: ["제주", "기억", "창작음원"],
    icon: MapPinned,
  },
  {
    index: "04",
    category: "기억 · 돌봄",
    title: "Melodies of Memory",
    copy: "호스피스 환우들이 들려준 신청곡과 사연을 음악으로 이어가는 기억의 프로젝트입니다.",
    tags: ["호스피스", "신청곡", "음악돌봄"],
    icon: RadioTower,
  },
];

const exhibitions = [
  {
    year: "2021",
    title: "봄, 여름, 가을, 바다 그리고 겨울",
    note: "Deep sorrow",
    href: "https://www.youtube.com/watch?v=b_LJYarUGlA",
  },
  {
    year: "2022",
    title: "나는 나로 나와",
    note: "그래도 사랑해 · 걱정이 됐나 봐 · 참 다행이야",
    href: "https://www.youtube.com/watch?v=eHAk52PnZcw",
  },
  {
    year: "2024",
    title: "헛 / Deep Sorrow",
    note: "비올라와 피아노로 만나는 전시의 음악",
    href: "https://www.youtube.com/watch?v=S1TqKuOjtV8",
  },
  {
    year: "2025",
    title: "제주에 잇다",
    note: "평화의 섬, 제주",
    href: "https://www.youtube.com/watch?v=mT7iXB-YR-Q",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="projects-page">
        <PageIntro
          index="03"
          eyebrow="PROJECTS"
          title={<>서로 다른 이야기가<br /><strong>음악으로 이어지는 곳</strong></>}
          description="배움과 창작, 돌봄과 지역의 기억을 한 번의 행사로 끝내지 않습니다. 참여자의 목소리를 중심에 두고 오래 남을 노래와 장면을 함께 만듭니다."
          tone="paper"
        />

        <section className="compact-section major-projects-section">
          <div className="shell">
            <div className="content-heading content-heading-inline">
              <div>
                <p className="section-chip"><span>SELECTED</span>주요 프로젝트</p>
                <h2>각자의 목적과 현장에 맞춘<br />네 가지 음악의 방식</h2>
              </div>
              <p>모든 프로젝트를 같은 크기로 살펴볼 수 있도록, 대표 활동을 균형 있게 모았습니다.</p>
            </div>

            <div className="project-grid">
              {projects.map(({ index, category, title, copy, tags, icon: Icon }) => (
                <article className="project-card" key={title}>
                  <div className="project-card-top">
                    <span className="project-index">{index}</span>
                    <span className="project-icon" aria-hidden="true"><Icon size={23} strokeWidth={1.65} /></span>
                  </div>
                  <p className="project-kind">{category}</p>
                  <h3>{title}</h3>
                  <p className="project-copy">{copy}</p>
                  <ul className="project-tags" aria-label={`${title} 키워드`}>
                    {tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="exhibition-section">
          <div className="shell">
            <div className="content-heading content-heading-inline exhibition-heading">
              <div>
                <p className="section-chip section-chip-light"><span>ARCHIVE</span>당신만을 위한 음악전시회</p>
                <h2>해마다 다른 이야기로<br />이어온 음악전시회</h2>
              </div>
              <p>연도를 선택하면 해당 음악전시회의 대표 영상으로 이동합니다.</p>
            </div>

            <div className="exhibition-grid">
              {exhibitions.map(({ year, title, note, href }) => (
                <a
                  className="exhibition-card"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  key={year}
                  aria-label={`${year} 음악전시회 대표 영상 보기`}
                >
                  <span className="exhibition-year">{year}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{note}</p>
                  </div>
                  <span className="exhibition-play" aria-hidden="true"><ArrowUpRight size={19} /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="project-bridge">
          <div className="shell project-bridge-inner">
            <div>
              <p>PROJECT TO PLAYLIST</p>
              <h2>프로젝트에서 태어난 음악을<br />공식 음원으로 이어서 들어보세요.</h2>
            </div>
            <a className="button button-dark" href={sitePath("/music/")}>아리(ari) 음원 보기 <ArrowRight size={17} /></a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
