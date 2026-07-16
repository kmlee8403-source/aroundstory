import { Activity, ArrowLeft, ArrowUpRight, HeartPulse, Music2, PersonStanding, Waves } from "lucide-react";
import { PageIntro } from "../../components/PageIntro";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { sitePath } from "../../site-config";

const SPORTS_VOUCHER_URL = "https://svoucher.kspo.or.kr/course/memberFacilityList.do?menuNo=8&topMenuNo=1&keyword=%EC%95%84%EB%A6%AC%EC%97%98%20%EB%B8%8C%EB%A0%88%EC%9D%B8%EC%95%A4%EB%AE%A4%EC%A7%81%EB%9E%A9";
const PARA_SPORTS_VOUCHER_URL = "https://dvoucher.kspo.or.kr/course/memberFacilityList.do?menuNo=800002&topMenuNo=800001";

const programs = [
  {
    label: "SPORTS VOUCHER PROGRAM",
    title: "WAKE UP MY BRAIN & BODY",
    exactCopy: "수업명 : WAKE UP MY BRAIN & BODY (음악으로 여는 감각·호흡 체조 + 셀프성장코칭)",
    copy: "음악의 박자와 호흡, 부드러운 감각 자극을 연결해 몸을 깨우고 스스로의 변화를 알아차리도록 돕습니다.",
    Icon: HeartPulse,
    tone: "sage",
  },
  {
    label: "PARA SPORTS VOUCHER PROGRAM",
    title: "음악으로 움직이는 몸",
    exactCopy: "장애인스포츠 바우처 : 음악으로 움직이는 몸 - 감각통합 체조와 리듬운동",
    copy: "개인의 움직임과 감각 특성을 존중하며 리듬, 반복, 신체 활동을 편안한 속도로 경험합니다.",
    Icon: PersonStanding,
    tone: "blue",
  },
];

const voucherLinks = [
  { label: "스포츠강좌이용권 등록 시설 보기", href: SPORTS_VOUCHER_URL },
  { label: "장애인스포츠강좌이용권 시설 조회", href: PARA_SPORTS_VOUCHER_URL },
];

export default function MusicTherapyPage() {
  return (
    <>
      <SiteHeader />
      <main className="lab-page">
        <PageIntro
          index="04-A"
          eyebrow="MUSIC THERAPY"
          title={<>음악으로 감각을 깨우고<br /><strong>몸과 마음을 연결합니다.</strong></>}
          description="아리엘브레인앤뮤직랩의 음악치료는 음악, 호흡, 감각과 움직임을 연결해 자신의 리듬을 발견하고 일상의 힘을 키우는 과정을 함께합니다."
          tone="sage"
        />

        <nav className="shell lab-path" aria-label="아리엘브레인앤뮤직랩 하위 경로">
          <a href={sitePath("/lab/")}><ArrowLeft size={15} /> 아리엘브레인앤뮤직랩</a>
          <span aria-hidden="true">/</span>
          <strong>음악치료</strong>
        </nav>

        <section className="lab-therapy-section">
          <div className="shell">
            <div className="lab-heading">
              <div>
                <p>PROGRAMS</p>
                <h2>음악으로 여는<br />감각·호흡·움직임</h2>
              </div>
              <p>참여자의 현재 상태와 움직임 범위를 살피고, 음악의 구조 안에서 편안하게 시도하고 성장할 수 있도록 수업을 조율합니다.</p>
            </div>

            <div className="lab-program-grid">
              {programs.map(({ label, title, exactCopy, copy, Icon, tone }) => (
                <article className={`lab-program-card lab-program-${tone}`} key={title}>
                  <div className="lab-program-icon" aria-hidden="true"><Icon strokeWidth={1.45} /></div>
                  <p>{label}</p>
                  <h3>{title}</h3>
                  <strong>{exactCopy}</strong>
                  <span>{copy}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="lab-voucher-section">
          <div className="shell lab-voucher-grid">
            <div className="lab-voucher-copy">
              <span className="lab-voucher-icon" aria-hidden="true"><Activity strokeWidth={1.45} /></span>
              <p>SPORTS VOUCHER</p>
              <h2>공식 등록 시설에서<br />강좌를 확인하세요.</h2>
            </div>
            <div className="lab-voucher-detail">
              <Waves aria-hidden="true" strokeWidth={1.4} />
              <p>스포츠강좌이용권 공식 시설 조회에서 <strong>아리엘 브레인앤뮤직랩</strong> 등록을 확인했습니다. 첫 번째 버튼을 연 뒤 ‘조회’를 누르면 시설과 강좌를 볼 수 있습니다. 장애인스포츠강좌이용권은 두 번째 공식 조회 화면에서 등록·이용 가능 여부를 확인해 주세요. 대상과 지원 범위는 각 이용권의 최신 기준에 따라 달라질 수 있습니다.</p>
              <div className="lab-voucher-actions">
                {voucherLinks.map((link) => (
                  <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                    {link.label}<ArrowUpRight size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="lab-inquiry-section">
          <div className="shell lab-inquiry-inner">
            <div><p>PROGRAM INQUIRY</p><h2>수업에 대해 궁금한 점을 남겨주세요.</h2></div>
            <div className="lab-inquiry-actions">
              <a href="mailto:ari@aroundstory.com"><Music2 size={16} /> 이메일로 문의하기</a>
              <span aria-disabled="true">카카오톡 오픈채팅 준비 중</span>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
