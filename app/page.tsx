import { MobileNav } from "./MobileNav";

const coreServices = [
  {
    number: "01",
    title: "음악 창작 · 프로덕션",
    summary: "이야기의 목적과 대상에 맞는 노래와 음악 콘텐츠를 완성합니다.",
    audience: "아티스트 · 기관 · 학교 · 지역 프로젝트",
    offering: "작사, 작곡, 편곡, 공연음악, 동요, CCM, 캠페인송, 음원 제작",
    outcome: "한 곡의 노래부터 앨범과 무대까지 일관된 음악적 이야기",
  },
  {
    number: "02",
    title: "예술교육 · 창의음악놀이",
    summary: "음악을 중심으로 표현과 관계, 창의성을 키우는 배움의 장을 만듭니다.",
    audience: "유아 · 아동 · 청소년 · 가족 · 특수학급",
    offering: "음악놀이, 그림책 연계, 음악·연극 융합, 가족 참여형 프로그램",
    outcome: "참여자의 언어와 움직임이 살아나는 과정 중심의 예술교육",
  },
  {
    number: "03",
    title: "음악치료 · 정서지원",
    summary: "대상자의 현재와 필요를 세심하게 살피는 맞춤형 음악 경험을 설계합니다.",
    audience: "아동 · 청소년 · 발달장애인 · 가족 · 호스피스",
    offering: "치료적 노래만들기, 자기표현, 의사소통, 정서지원 음악활동",
    outcome: "안전하게 표현하고 연결되며 회복을 경험하는 음악적 환경",
  },
  {
    number: "04",
    title: "프로젝트 · 문화콘텐츠",
    summary: "사람과 지역의 이야기를 공연, 전시, 음원으로 연결합니다.",
    audience: "문화예술기관 · 공공기관 · 교육기관 · 지역사회",
    offering: "프로젝트 기획, 음악감독, 공연·전시, 창작극, 음원·영상 콘텐츠",
    outcome: "기획부터 제작과 현장 운영까지 이어지는 완성도 높은 프로젝트",
  },
];

const supportServices = [
  {
    title: "교구 · 악보 · 출판",
    description: "교육 현장의 필요에서 출발한 음악 교구, 악보와 출판 콘텐츠를 연구하고 제작합니다.",
    label: "Contents & Tools",
  },
  {
    title: "교육연구 · 상담",
    description: "Music & Tech 융합 연구와 다중지능 관점의 상담을 통해 배움과 진로 탐색을 돕습니다.",
    label: "Education Lab",
  },
];

const projects = [
  {
    number: "01",
    year: "2025",
    eyebrow: "MUSIC THERAPY · CREATIVE THEATRE",
    title: "아임소리 2기\n나는 내가 너무 좋아",
    statement: "발달장애 가족의 이야기가 노래와 무대가 된 창작 음악극",
    target: "발달장애인과 가족",
    role: "총괄 기획 · 음악감독 · 지도 · 작곡",
    result: "참여자의 자기표현을 바탕으로 완성한 가족 창작 음악극",
  },
  {
    number: "02",
    year: "2022—2026",
    eyebrow: "ORIGINAL IP · ALBUM · EXHIBITION",
    title: "나는 나로 나와",
    statement: "한 장의 앨범에서 전시와 상영회, 오디오북으로 확장된 자체 IP",
    target: "아동 · 가족 · 지역사회",
    role: "기획 · 작사 · 작곡 · 편곡 · 연주 · 노래 · 프로듀싱",
    result: "정규앨범, 온·오프라인 음악전시, 미디어 상영회, 오디오북",
  },
  {
    number: "03",
    year: "2025",
    eyebrow: "LOCAL CULTURE · MUSIC EXHIBITION",
    title: "제주에 잇다",
    statement: "제주의 사람과 풍경을 음악으로 기록하고 다시 지역에 잇는 프로젝트",
    target: "제주 지역사회와 문화예술 관객",
    role: "기획 · 작사 · 작곡 · 연주 · 프로듀싱",
    result: "미니앨범 발매와 온·오프라인 음악전시",
  },
];

const intelligences = [
  ["대인관계", "다른 사람의 말과 표정, 분위기를 읽고 공감·협력·조율하는 힘"],
  ["자기이해", "자신의 감정과 욕구, 강점과 한계를 돌아보고 목표를 조절하는 힘"],
  ["공간", "색·형태·위치·방향을 파악하고 생각을 이미지와 공간으로 구성하는 힘"],
  ["논리·수학", "규칙과 관계를 발견하고 근거와 수량을 활용해 문제를 해결하는 힘"],
  ["신체·운동", "움직임과 손의 조작을 통해 배우고 균형·타이밍·표현을 조절하는 힘"],
  ["음악", "리듬·음정·음색·구조를 민감하게 듣고 연주와 창작으로 표현하는 힘"],
  ["언어", "말과 글의 의미와 뉘앙스를 이해하고 생각을 정확하게 전하는 힘"],
  ["자연탐구", "생물·사물·현상의 차이를 관찰하고 분류하며 변화의 패턴을 찾는 힘"],
];

const guidanceBenefits = [
  ["다양한 강점 보기", "성적 중심의 관점에서 벗어나 여러 능력과 관심을 균형 있게 살핍니다."],
  ["대화의 시작점 만들기", "말과 행동, 선호 활동을 이해할 질문과 서로를 설명할 언어를 찾습니다."],
  ["학습 방식에 힌트 더하기", "듣기, 움직임, 이미지, 리듬, 관찰 등 알맞은 접근을 탐색합니다."],
  ["강점과 환경 함께 보기", "잘하는 영역과 더 편안하게 참여하기 위해 필요한 환경을 함께 정리합니다."],
  ["생활 속 실천으로 연결", "결과를 점수로 끝내지 않고 가정과 수업에서 시도할 활동으로 이어갑니다."],
];

const process = [
  ["01", "상담 목표 확인", "연령과 현재 고민, 상담에서 알고 싶은 내용을 먼저 듣습니다."],
  ["02", "동의 및 자료 수집", "보호자 동의 후 지문 자료와 관심·행동·학습 경험을 함께 살핍니다."],
  ["03", "참고 프로필 정리", "분류 결과를 면담·관찰 내용과 함께 검토해 강점과 탐색 질문을 정리합니다."],
  ["04", "결과 상담 및 제안", "이해하기 쉬운 설명과 가정·교육 현장에서 시도할 활동을 제안합니다."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="aroundstory 홈">
            <span className="brand-wordmark">aroundstory</span>
            <span className="brand-dot" aria-hidden="true" />
          </a>
          <nav className="desktop-nav" aria-label="주요 메뉴">
            <a href="#about">소개</a>
            <a href="#services">사업 분야</a>
            <a href="#projects">프로젝트</a>
            <a href="#lab">교육연구</a>
            <a href="#director">대표자</a>
            <a className="nav-contact" href="#contact">문의하기</a>
          </nav>
          <MobileNav />
        </div>
      </header>

      <section className="hero" id="top">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">MUSIC · CARE · EDUCATION · STORY</p>
            <h1>작은 소리에 귀 기울여,{" "}<br /><strong>마음이 머무는 음악</strong>을 만듭니다.</h1>
            <p className="hero-lead">
              aroundstory는 창작, 예술교육, 음악치료와 프로젝트 기획을 통해
              사람의 이야기가 음악이 되는 과정을 설계합니다.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#services">사업 분야 보기</a>
              <a className="inline-link" href="#projects">대표 프로젝트 <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <aside className="hero-panel" aria-label="aroundstory 브랜드 메시지">
            <div className="staff-lines" aria-hidden="true"><i /><i /><i /></div>
            <div className="hero-panel-copy">
              <p className="hero-panel-kicker">PLAY · LEARN · GROW</p>
              <blockquote>음악으로 배우고,<br />마음으로 자라는 시간.</blockquote>
              <p className="hero-panel-note">각자의 속도와 목소리를 존중하는 배움을 만듭니다.</p>
            </div>
            <img className="hero-ari" src="/assets/ari.png" alt="" />
            <div className="hero-panel-bottom">
              <span>aroundstory</span>
              <p>Listen closely.<br />Create sincerely.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="shell">
          <div className="section-index"><span>01</span><p>ABOUT aroundstory</p></div>
          <div className="about-grid">
            <div className="about-heading">
              <h2>상담의 깊이와<br />창작의 감각을<br />하나의 이야기로.</h2>
            </div>
            <div className="about-copy">
              <p className="lead-copy">
                우리는 정답보다 먼저 사람의 목소리를 듣습니다. 그리고 각자의
                속도와 필요에 맞는 음악적 장면을 세심하게 설계합니다.
              </p>
              <p>
                한 곡의 노래에서 가족이 함께하는 프로그램, 교실과 치료 현장,
                공연과 전시까지. 음악이 필요한 순간을 따뜻하고 전문적인 방식으로 연결합니다.
              </p>
              <dl className="principles">
                <div><dt>Listen</dt><dd>작은 소리까지 듣기</dd></div>
                <div><dt>Design</dt><dd>필요에 맞게 설계하기</dd></div>
                <div><dt>Connect</dt><dd>사람과 마음을 잇기</dd></div>
              </dl>
            </div>
            <aside className="ari-card">
              <div className="ari-image-wrap">
                <div className="ari-shape" aria-hidden="true" />
                <img src="/assets/ari.png" alt="aroundstory 대표 캐릭터 아리" />
              </div>
              <div className="ari-copy">
                <p className="micro-label">CHARACTER · ARI</p>
                <h3>나답게, 너답게,<br />우리답게.</h3>
                <p>아리는 꿈꾸는 대로 살아가며 서로의 고유함을 응원하는 모두의 음악친구입니다.</p>
                <span>Be Original Life</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="services section section-dark" id="services">
        <div className="shell">
          <div className="section-index section-index-light"><span>02</span><p>WHAT WE DO</p></div>
          <div className="section-title-row">
            <h2>음악으로 시작해,<br />사람의 경험을 설계합니다.</h2>
            <p>핵심 사업은 서로 독립적으로 진행하거나 하나의 프로젝트 안에서 유기적으로 연결할 수 있습니다.</p>
          </div>
          <div className="core-service-grid">
            {coreServices.map((service) => (
              <article className="core-service-card" key={service.number}>
                <div className="service-card-head"><span>{service.number}</span><i aria-hidden="true">↗</i></div>
                <h3>{service.title}</h3>
                <p className="service-summary">{service.summary}</p>
                <dl className="service-details">
                  <div><dt>대상</dt><dd>{service.audience}</dd></div>
                  <div><dt>제공</dt><dd>{service.offering}</dd></div>
                  <div><dt>결과</dt><dd>{service.outcome}</dd></div>
                </dl>
              </article>
            ))}
          </div>
          <div className="support-services">
            <p className="support-label">EXTENDED PRACTICE</p>
            {supportServices.map((service) => (
              <article key={service.title}>
                <span>{service.label}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="shell">
          <div className="section-index"><span>03</span><p>SELECTED PROJECTS</p></div>
          <div className="section-title-row projects-title-row">
            <h2>기획부터 창작과 현장까지,<br />끝까지 완성한 프로젝트</h2>
            <p>aroundstory의 역량을 가장 잘 보여주는 세 개의 작업을 엄선했습니다.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card project-${index + 1}`} key={project.number}>
                <div className="project-topline"><span>{project.number}</span><time>{project.year}</time></div>
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                <p className="project-statement">{project.statement}</p>
                <dl>
                  <div><dt>대상</dt><dd>{project.target}</dd></div>
                  <div><dt>역할</dt><dd>{project.role}</dd></div>
                  <div><dt>결과</dt><dd>{project.result}</dd></div>
                </dl>
              </article>
            ))}
          </div>
          <div className="proof-strip" aria-label="aroundstory 주요 역량 지표">
            <div><strong>2008—현재</strong><span>음악교육 활동</span></div>
            <div><strong>2</strong><span>등록 특허</span></div>
            <div><strong>3</strong><span>등록 브랜드</span></div>
            <div><strong>2025</strong><span>우수예술교육가 우수상</span></div>
          </div>
        </div>
      </section>

      <section className="lab section" id="lab">
        <div className="shell">
          <div className="section-index"><span>04</span><p>EDUCATION & GUIDANCE</p></div>
          <div className="lab-intro-grid">
            <div>
              <p className="lab-brand">ARIEL BRAIN & MUSIC LAB</p>
              <h2>아이를 한 가지 점수로<br />설명하지 않습니다.</h2>
            </div>
            <div className="lab-intro-copy">
              <p className="lead-copy">다중지능 관점으로 살펴보는 지문적성 상담</p>
              <p>
                사람의 강점은 언어와 수리 능력만으로 다 설명되지 않습니다.
                다중지능 관점은 관계, 자기이해, 공간, 논리·수학, 신체·운동,
                음악, 언어, 자연탐구처럼 서로 다른 능력 영역을 함께 바라보는 교육적 틀입니다.
              </p>
              <p>
                aroundstory는 지문 자료를 하나의 참고 정보로 활용하고,
                보호자·학습자와의 대화와 평소의 관심·행동·학습 경험을 함께 살펴
                교육과 소통의 실마리를 찾습니다.
              </p>
            </div>
          </div>

          <div className="lab-subsection">
            <div className="subsection-head"><p>상담에서 함께 찾는 것</p><span>01 / 03</span></div>
            <div className="benefit-grid">
              {guidanceBenefits.map(([title, description], index) => (
                <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>
              ))}
            </div>
          </div>

          <div className="lab-subsection">
            <div className="subsection-head"><p>8가지 강점의 관점</p><span>02 / 03</span></div>
            <div className="intelligence-grid">
              {intelligences.map(([title, description], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title} 지능</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="lab-subsection process-section">
            <div className="subsection-head"><p>상담 진행 과정</p><span>03 / 03</span></div>
            <ol className="process-list">
              {process.map(([number, title, description]) => (
                <li key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></li>
              ))}
            </ol>
          </div>

          <p className="lab-notice">
            본 프로그램은 교육·상담을 위한 참고 서비스이며, 의학적·심리학적 진단이나
            표준화된 지능검사를 대체하지 않습니다. 지문 자료만으로 개인의 지능, 성격,
            적성 또는 미래를 확정하지 않으며, 결과는 면담과 생활 관찰을 포함한 다양한 정보와 함께 활용합니다.
          </p>
        </div>
      </section>

      <section className="director section" id="director">
        <div className="shell director-grid">
          <div className="director-quote">
            <p className="micro-label">CREATIVE DIRECTOR</p>
            <blockquote>“글을 씁니다.<br />곡을 씁니다.<br /><strong>그리고 마음을 씁니다.</strong>”</blockquote>
          </div>
          <div className="director-copy">
            <div className="director-name"><h2>이지은 / 아리</h2><span>ari</span></div>
            <p className="director-role">작곡가 · 음악치료사 · 예술교육가 · 프로젝트 기획자</p>
            <p>
              아동, 청소년, 가족, 발달장애인과 지역사회 구성원이 음악을 통해
              자기표현과 관계, 회복과 성장을 경험하도록 음악적 장면을 설계합니다.
            </p>
            <dl className="credentials">
              <div><dt>현재</dt><dd>aroundstory / 아리엘 브레인앤뮤직랩 대표</dd></div>
              <div><dt>전공</dt><dd>숙명여자대학교 음악치료학 석사</dd></div>
              <div><dt>활동</dt><dd>음악치료·문화예술교육·창작음악 프로젝트 2016—현재</dd></div>
              <div><dt>연구</dt><dd>치료적 노래만들기와 아동의 자기표현·의사소통·학업적 자기효능감</dd></div>
              <div><dt>선정</dt><dd>2025 우수예술교육가 발굴대회 우수상</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-inner">
          <div>
            <p className="eyebrow eyebrow-light">LET&apos;S MAKE YOUR STORY SING.</p>
            <h2>당신의 이야기에 필요한<br />음악을 들려주세요.</h2>
          </div>
          <div className="contact-action">
            <p>창작, 교육, 음악치료와 프로젝트 협업에 관한 상담을 기다립니다.</p>
            <a href="mailto:ari@aroundstory.com">ari@aroundstory.com <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner">
          <a className="footer-brand" href="#top" aria-label="aroundstory 홈">aroundstory</a>
          <p>모두의 음악친구 aroundstory</p>
          <div><a href="#top">맨 위로 ↑</a><span>© {new Date().getFullYear()} aroundstory</span></div>
        </div>
      </footer>
    </main>
  );
}
