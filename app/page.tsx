const services = [
  {
    number: "01",
    title: "음악창작",
    en: "Creative Music",
    description:
      "클래식, 대중가요, CCM, 어린이 뮤지컬, 동요와 캠페인송까지 이야기의 결을 살린 음악을 만듭니다.",
    tags: ["작사", "작곡", "편곡", "프로듀싱"],
  },
  {
    number: "02",
    title: "예술교육 & 음악놀이",
    en: "Arts Education",
    description:
      "유아·아동·청소년의 창의성과 자기표현을 깨우는 음악 중심 융합교육 프로그램을 설계합니다.",
    tags: ["음악놀이", "그림책 연계", "가족 참여", "융합예술"],
  },
  {
    number: "03",
    title: "음악치료",
    en: "Music Therapy",
    description:
      "정서적·심리적·신체적 안정과 회복을 돕는 대상자 중심의 맞춤형 음악 경험을 제안합니다.",
    tags: ["정서지원", "노래만들기", "의사소통", "발달재활"],
  },
  {
    number: "04",
    title: "콘텐츠 & 교구",
    en: "Contents & Tools",
    description:
      "교육 현장의 필요에서 출발해 악보, 음악 교구, 출판 콘텐츠를 연구하고 직접 제작합니다.",
    tags: ["교구 개발", "악보 출판", "제품 디자인", "교육 콘텐츠"],
  },
  {
    number: "05",
    title: "프로젝트 기획",
    en: "Creative Direction",
    description:
      "공연, 전시, 음원, 지역문화 프로젝트를 하나의 이야기와 음악적 장면으로 엮습니다.",
    tags: ["공연", "전시", "음원", "문화기획"],
  },
  {
    number: "06",
    title: "교육연구",
    en: "Music & Tech Lab",
    description:
      "Music & Tech 융합 연구와 다중지능 기반 상담을 통해 배움과 진로의 새로운 가능성을 탐색합니다.",
    tags: ["Music & Tech", "다중지능", "진로코칭", "교육자문"],
  },
];

const featuredWorks = [
  {
    year: "2025",
    category: "음악치료 · 창작극",
    title: "아임소리 2기 — 나는 내가 너무 좋아",
    description:
      "발달장애 가족이 자신의 이야기를 노래와 장면으로 완성한 창작 음악극. 총괄 기획, 음악감독, 지도와 작곡을 맡았습니다.",
  },
  {
    year: "2025",
    category: "앨범 · 음악전시",
    title: "제주에 잇다",
    description:
      "제주의 사람과 풍경을 음악으로 잇는 미니앨범과 온·오프라인 음악전시. 작사, 작곡, 연주와 프로듀싱을 진행했습니다.",
  },
  {
    year: "2024",
    category: "가족 음악활동",
    title: "아임소리 1기 — 가족합창단",
    description:
      "발달장애 가족이 함께 목소리를 찾고 무대에 서는 과정. 프로그램 총괄 기획, 지도와 창작곡 제작을 맡았습니다.",
  },
  {
    year: "2023",
    category: "청소년 정서지원",
    title: "Our Jeju, Our Story, Our Music",
    description:
      "청소년이 자신의 감정과 제주에서의 삶을 음악으로 표현한 꿈다락문화예술학교 정서지원 프로그램입니다.",
  },
];

const assessmentImages = [
  { src: "/assets/fingerprint-intro.jpg", label: "지문적성검사 소개" },
  { src: "/assets/fingerprint-process.jpg", label: "검사 진행 흐름" },
  { src: "/assets/fingerprint-parenting.jpg", label: "검사와 자녀교육 안내" },
  { src: "/assets/multiple-intelligences.jpg", label: "8가지 다중지능 안내" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="어라운드스토리 홈">
          <img src="/assets/aroundstory-logo.png" alt="Around Story" />
        </a>
        <nav className="desktop-nav" aria-label="주요 메뉴">
          <a href="#about">소개</a>
          <a href="#work">사업 분야</a>
          <a href="#ari">Ari</a>
          <a href="#projects">프로젝트</a>
          <a href="#contact">문의</a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="메뉴 열기"><span /><span /></summary>
          <nav aria-label="모바일 메뉴">
            <a href="#about">소개</a>
            <a href="#work">사업 분야</a>
            <a href="#ari">Ari</a>
            <a href="#projects">프로젝트</a>
            <a href="#contact">문의</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Music · Care · Education · Story</p>
          <h1>
            작은 소리에 귀 기울여,
            <br />
            <em>마음이 머무는 음악</em>을 만듭니다.
          </h1>
          <blockquote>
            “언어가 끝나는 곳에서 음악은 시작된다.”
            <cite>— W. A. Mozart</cite>
          </blockquote>
          <p className="hero-intro">
            어라운드스토리는 오랜 상담과 음악 작업 경험을 바탕으로 고객의
            이야기를 듣고, 창작·교육·치료를 잇는 맞춤형 음악 활동을
            제안합니다.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">우리가 하는 일</a>
            <a className="text-link" href="#projects">선별 프로젝트 보기 <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="어라운드스토리의 대표 캐릭터 아리">
          <div className="music-orbit orbit-one" aria-hidden="true">♪</div>
          <div className="music-orbit orbit-two" aria-hidden="true">•</div>
          <div className="hero-arch" />
          <img src="/assets/ari.png" alt="꿈을 향해 걸어가는 아리 캐릭터" />
          <p className="hero-note">Be Original Life</p>
        </div>
        <p className="scroll-note" aria-hidden="true">SCROLL <span /></p>
      </section>

      <section className="manifesto" id="about">
        <div className="section-label"><span>01</span> About Aroundstory</div>
        <div className="manifesto-grid">
          <h2>상담의 깊이와<br />창작의 감각을<br />하나의 이야기로.</h2>
          <div className="manifesto-copy">
            <p className="lead">
              우리는 정답보다 먼저 사람의 목소리를 듣습니다. 그리고 각자의
              속도와 필요에 맞는 음악적 장면을 세심하게 설계합니다.
            </p>
            <p>
              한 곡의 노래에서 가족이 함께하는 프로그램, 교실과 치료 현장,
              공연과 전시까지. 음악이 필요한 모든 순간을 따뜻하고 전문적인
              방식으로 연결합니다.
            </p>
            <div className="principles" aria-label="어라운드스토리의 핵심 가치">
              <div><strong>Listen</strong><span>작은 소리까지 듣기</span></div>
              <div><strong>Design</strong><span>필요에 맞게 설계하기</span></div>
              <div><strong>Connect</strong><span>사람과 마음을 잇기</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="work">
        <div className="section-heading">
          <div className="section-label"><span>02</span> What We Do</div>
          <h2>음악을 중심으로,<br />가능성을 넓히는 일</h2>
          <p>창작에서 돌봄과 교육, 연구와 콘텐츠까지 유연하게 연결합니다.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span>{service.number}</span>
                <p>{service.en}</p>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul aria-label={`${service.title} 세부 분야`}>
                {service.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="ari-section" id="ari">
        <div className="ari-visual">
          <p className="oversized-word" aria-hidden="true">ARI</p>
          <div className="ari-circle" />
          <img src="/assets/ari.png" alt="어라운드스토리 대표 캐릭터 아리" />
        </div>
        <div className="ari-story">
          <div className="section-label light"><span>03</span> Character</div>
          <p className="ari-kicker">꿈 많은 모두의 음악친구</p>
          <h2>Ari,<br /><em>Be Original.</em></h2>
          <p>
            아리는 꿈꾸는 대로, 말하는 대로, 믿음대로 살아가는 소녀입니다.
            아리를 만나는 사람들이 “나답게, 너답게, 우리답게” 살아갈 수
            있도록 곁에서 음악친구가 되어줄 거예요.
          </p>
          <p className="ari-signoff">아리의 Be Original Life를 함께 응원해주세요.</p>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="projects-intro">
          <div className="section-label"><span>04</span> Selected Stories</div>
          <h2>사람과 음악이<br />함께 만든 장면들</h2>
          <p>
            작곡가·음악치료사·예술교육가 이지은 / 아리가 진행한 활동 중
            어라운드스토리의 사업과 연결되는 프로젝트를 선별했습니다.
          </p>
        </div>
        <div className="project-list">
          {featuredWorks.map((project, index) => (
            <article className="project-row" key={project.title}>
              <span className="project-index">0{index + 1}</span>
              <div>
                <p className="project-meta">{project.year} · {project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="assessment" id="assessment">
        <div className="assessment-copy">
          <div className="section-label"><span>05</span> Education Lab</div>
          <p className="assessment-kicker">Ariel Brain & Music Lab</p>
          <h2>다중지능 기반<br />적성 탐색과 진로 코칭</h2>
          <p>
            개인의 강점과 학습 선호를 폭넓게 살펴보고, 상담을 통해 자신에게
            맞는 학습 방향과 진로 가능성을 탐색합니다. 검사 결과는 교육과
            상담을 돕는 참고 자료로 활용하며, 한 사람의 가능성을 단정하지
            않습니다.
          </p>
          <ul className="check-list">
            <li>강점과 선호에 대한 이해</li>
            <li>학습 및 진로 방향 상담</li>
            <li>보호자·교육자 코칭</li>
          </ul>
          <details className="materials">
            <summary>검사 안내 자료 살펴보기 <span aria-hidden="true">+</span></summary>
            <div className="material-grid">
              {assessmentImages.map((image) => (
                <figure key={image.src}>
                  <img src={image.src} alt={image.label} loading="lazy" />
                  <figcaption>{image.label}</figcaption>
                </figure>
              ))}
            </div>
          </details>
        </div>
        <div className="assessment-visual">
          <img src="/assets/fingerprint-intro.jpg" alt="지문적성검사 안내 자료" loading="lazy" />
          <p><strong>8</strong><span>가지 다중지능 관점</span></p>
        </div>
      </section>

      <section className="profile">
        <div className="profile-quote">
          <p>“글을 씁니다.<br />곡을 씁니다.<br /><em>그리고 마음을 씁니다.</em>”</p>
        </div>
        <div className="profile-copy">
          <div className="section-label"><span>06</span> Creative Director</div>
          <h2>이지은 / 아리 <small>ari</small></h2>
          <p className="profile-role">작곡가 · 음악치료사 · 예술교육가 · 프로젝트 기획자</p>
          <p>
            아동, 청소년, 가족, 발달장애인과 지역사회 구성원이 음악을 통해
            자기표현과 관계, 회복과 성장을 경험하도록 음악적 장면을
            설계합니다.
          </p>
          <dl className="profile-facts">
            <div><dt>현재</dt><dd>어라운드스토리 / 아리엘 브레인앤뮤직랩 대표</dd></div>
            <div><dt>전공</dt><dd>숙명여자대학교 음악치료학 석사</dd></div>
            <div><dt>활동</dt><dd>음악치료·문화예술교육·창작음악 프로젝트 2016—현재</dd></div>
            <div><dt>선정</dt><dd>2025 우수예술교육가 발굴대회 우수상</dd></div>
          </dl>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Let&apos;s make your story sing.</p>
        <h2>당신의 이야기에<br />필요한 음악을 들려주세요.</h2>
        <p>창작, 교육, 음악치료, 프로젝트 협업에 관한 상담을 기다립니다.</p>
        <a className="contact-link" href="mailto:ari@aroundstory.com">ari@aroundstory.com <span aria-hidden="true">↗</span></a>
        <img src="/assets/ari.png" alt="" aria-hidden="true" />
      </section>

      <footer>
        <img src="/assets/aroundstory-logo.png" alt="Around Story" />
        <p>모두의 음악친구 어라운드스토리</p>
        <div>
          <a href="#top">Back to top ↑</a>
          <span>© {new Date().getFullYear()} Aroundstory.</span>
        </div>
      </footer>
    </main>
  );
}
