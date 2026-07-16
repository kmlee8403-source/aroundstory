import {
  ArrowLeft,
  Binary,
  BookOpen,
  ClipboardList,
  Compass,
  Fingerprint,
  Heart,
  Home,
  Languages,
  Leaf,
  MessageCircleHeart,
  MessagesSquare,
  Music2,
  PersonStanding,
  ScanSearch,
  Shapes,
  Sparkles,
  Users,
} from "lucide-react";
import { PageIntro } from "../components/PageIntro";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { sitePath } from "../site-config";

const intelligences = [
  { name: "대인관계", text: "다른 사람의 말과 표정, 분위기를 읽고 공감·협력·조율하는 힘", Icon: Users },
  { name: "자기이해", text: "자신의 감정과 욕구, 강점과 한계를 돌아보고 목표를 조절하는 힘", Icon: Heart },
  { name: "공간", text: "색·형태·위치·방향을 머릿속에 그리고 이미지로 표현하는 힘", Icon: Shapes },
  { name: "논리·수학", text: "규칙과 관계를 발견하고 근거를 따라 문제를 풀어 가는 힘", Icon: Binary },
  { name: "신체·운동", text: "움직임과 손의 조작으로 생각과 감정을 섬세하게 표현하는 힘", Icon: PersonStanding },
  { name: "음악", text: "리듬·음정·음색·구조를 듣고 기억하며 새롭게 구성하는 힘", Icon: Music2 },
  { name: "언어", text: "말과 글의 의미를 이해하고 자신의 생각을 효과적으로 전하는 힘", Icon: Languages },
  { name: "자연탐구", text: "생물·사물·현상의 특징을 관찰하고 분류하며 연결하는 힘", Icon: Leaf },
];

const discoveries = [
  { title: "다양한 강점 보기", text: "성적 중심의 한 가지 기준을 넘어 아이가 가진 여러 가능성을 살펴봅니다.", Icon: Sparkles },
  { title: "대화의 시작점 만들기", text: "말과 행동 뒤에 있는 마음과 필요를 함께 이해할 실마리를 찾습니다.", Icon: MessagesSquare },
  { title: "학습 방식에 힌트 더하기", text: "아이에게 편안한 이해·기억·표현 방식을 일상과 학습에 연결합니다.", Icon: BookOpen },
  { title: "강점과 환경 함께 보기", text: "개인의 특성뿐 아니라 관계와 환경이 주는 영향도 함께 살핍니다.", Icon: Compass },
  { title: "생활 속 실천으로 연결", text: "결과를 설명하는 데서 멈추지 않고 가정에서 시도할 작은 변화를 제안합니다.", Icon: Home },
];

const process = [
  { step: "01", title: "상담 목표 확인", text: "현재의 고민과 기대를 듣고 상담에서 함께 살펴볼 질문을 정합니다.", Icon: ClipboardList },
  { step: "02", title: "동의 및 자료 수집", text: "검사 목적과 한계를 안내한 뒤 필요한 기본 정보와 자료를 확인합니다.", Icon: Fingerprint },
  { step: "03", title: "참고 프로필 정리", text: "검사 결과와 관찰 내용을 종합해 강점과 지원 환경을 정리합니다.", Icon: ScanSearch },
  { step: "04", title: "결과 상담 및 제안", text: "이해하기 쉬운 언어로 나누고 가정과 학습에서의 실천 방향을 함께 찾습니다.", Icon: MessageCircleHeart },
];

export default function AssessmentPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageIntro
          index="04-B"
          eyebrow="MULTIPLE INTELLIGENCES"
          title={<>손끝의 무늬보다<br /><strong>아이의 가능성</strong>을 봅니다.</>}
          description="다중지능 관점의 지문적성검사를 참고 자료로 활용해, 아이의 강점과 편안한 배움의 방식을 상담 안에서 함께 찾아갑니다."
          tone="blue"
        />

        <nav className="shell lab-path" aria-label="아리엘브레인앤뮤직랩 하위 경로">
          <a href={sitePath("/lab/")}><ArrowLeft size={15} /> 아리엘브레인앤뮤직랩</a>
          <span aria-hidden="true">/</span>
          <strong>다중지능지문적성검사</strong>
        </nav>

        <section className="content-section intelligence-section">
          <div className="shell">
            <div className="section-heading split-heading">
              <div><p>8 INTELLIGENCES</p><h2>서로 다른 여덟 가지 힘</h2></div>
              <p>하나의 지능이 우열을 정하지 않습니다. 각 지능은 서로 연결되며 사람마다 고유한 조합과 표현 방식을 가집니다.</p>
            </div>
            <div className="intelligence-grid">
              {intelligences.map(({ name, text, Icon }, index) => (
                <article className="icon-card" key={name}>
                  <span className="icon-number">{String(index + 1).padStart(2, "0")}</span>
                  <Icon aria-hidden="true" strokeWidth={1.5} />
                  <h3>{name} 지능</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section discovery-section">
          <div className="shell">
            <div className="section-heading centered-heading">
              <p>IN COUNSELING</p>
              <h2>상담에서 함께 찾는 것</h2>
            </div>
            <div className="discovery-grid">
              {discoveries.map(({ title, text, Icon }) => (
                <article className="discovery-card" key={title}>
                  <Icon aria-hidden="true" strokeWidth={1.5} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section process-section">
          <div className="shell process-layout">
            <div className="section-heading sticky-heading">
              <p>PROCESS</p>
              <h2>상담 진행 과정</h2>
              <p>필요에 따라 단계와 소요 시간은 달라질 수 있습니다.</p>
            </div>
            <ol className="process-list">
              {process.map(({ step, title, text, Icon }) => (
                <li key={step}>
                  <div className="process-icon"><Icon aria-hidden="true" strokeWidth={1.5} /></div>
                  <div><span>{step}</span><h3>{title}</h3><p>{text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="assessment-note">
          <div className="shell note-card">
            <strong>검사 결과는 진단이나 미래를 단정하는 자료가 아닙니다.</strong>
            <p>지문적성검사는 개인을 이해하기 위한 여러 참고 자료 중 하나입니다. 실제 상담에서는 발달 단계, 생활 경험, 관계와 환경을 함께 살피며 결과를 고정된 낙인으로 사용하지 않습니다.</p>
            <div className="lab-contact-stack">
              <a href="mailto:ari@aroundstory.com">이메일로 검사·상담 문의</a>
              <span className="lab-contact-pending" aria-disabled="true">카카오톡 오픈채팅 준비 중</span>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
