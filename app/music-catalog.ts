export type Track = {
  title: string;
  searchQuery?: string;
  melon?: number;
  genie?: number;
  bugs?: number;
  vibe?: number;
  apple: [number, number];
};

export type Release = {
  title: string;
  year: number;
  kind: "정규" | "싱글" | "EP";
  accent: "sage" | "blue" | "bronze" | "rose";
  tracks: Track[];
};

export const releases: Release[] = [
  {
    title: "제주에 잇다",
    year: 2025,
    kind: "EP",
    accent: "blue",
    tracks: [
      { title: "평화의 섬, 제주 (Feat. 강정아)", melon: 600382047, genie: 112348619, bugs: 33722241, vibe: 97743766, apple: [1848819394, 1848819395] },
      { title: "해녀의 마음 (Feat. 강정아)", melon: 600382048, genie: 112348620, bugs: 33722242, vibe: 97743767, apple: [1848819394, 1848819396] },
      { title: "바다, 그 깊음이여", melon: 600382049, genie: 112348621, bugs: 33722243, vibe: 97743768, apple: [1848819394, 1848819397] },
    ],
  },
  {
    title: "선생님, 사랑해요",
    year: 2025,
    kind: "싱글",
    accent: "sage",
    tracks: [
      { title: "선생님, 사랑해요 (feat. 오뉴(onyu), 소율(soyul), 주하, 주은, 시윤)", melon: 38994333, genie: 110218508, bugs: 33547792, vibe: 93967591, apple: [1815668954, 1815668955] },
      { title: "선생님, 사랑해요 (Inst.)", melon: 38994334, genie: 110218509, bugs: 33547793, vibe: 93967592, apple: [1815668954, 1815668958] },
    ],
  },
  {
    title: "we can we are we love",
    year: 2025,
    kind: "싱글",
    accent: "rose",
    tracks: [
      { title: "we can we are we love (feat. 오뉴(onyu), 소율(soyul), 주하, 주은, 시윤)", melon: 38645672, genie: 109327277, bugs: 33465609, vibe: 91068662, apple: [1800633431, 1800633432] },
      { title: "we can we are we love (Inst.)", melon: 38645673, genie: 109327278, bugs: 33465610, vibe: 91068663, apple: [1800633431, 1800633434] },
    ],
  },
  {
    title: "헛 (for viola & piano)",
    year: 2024,
    kind: "싱글",
    accent: "bronze",
    tracks: [
      { title: "헛 (for viola & piano)", melon: 37352674, genie: 105838228, bugs: 33129674, vibe: 83777918, apple: [1737958557, 1737958558] },
    ],
  },
  {
    title: "아침을 여는 기도 Vol.2 - 소망",
    year: 2024,
    kind: "정규",
    accent: "blue",
    tracks: [
      { title: "나 같은 죄인 살리신", melon: 37315809, genie: 105771432, bugs: 33124373, vibe: 83654307, apple: [1766490784, 1766490785] },
      { title: "주 안에 있는 나에게", melon: 37315810, genie: 105771433, bugs: 33124374, vibe: 83654308, apple: [1766490784, 1766490786] },
      { title: "나의 사랑하는 책", melon: 37315811, genie: 105771434, bugs: 33124375, vibe: 83654309, apple: [1766490784, 1766490787] },
      { title: "주의 음성을 내가 들으니", melon: 37315812, genie: 105771435, bugs: 33124376, vibe: 83654310, apple: [1766490784, 1766490788] },
      { title: "너 시험을 당해", melon: 37315813, genie: 105771436, bugs: 33124377, vibe: 83654311, apple: [1766490784, 1766490789] },
      { title: "내게 있는 모든 것을", melon: 37315814, genie: 105771437, bugs: 33124378, vibe: 83654312, apple: [1766490784, 1766490790] },
      { title: "저 높은 곳을 향하여", melon: 37315815, genie: 105771438, bugs: 33124379, vibe: 83654313, apple: [1766490784, 1766490791] },
      { title: "내 맘의 주여 소망되소서", melon: 37315816, genie: 105771439, bugs: 33124380, vibe: 83654314, apple: [1766490784, 1766490792] },
      { title: "너 근심 걱정 말아라", melon: 37315817, genie: 105771440, bugs: 33124381, vibe: 83654315, apple: [1766490784, 1766490793] },
      { title: "내 영혼의 그윽히 깊은 데서", melon: 37315818, genie: 105771441, bugs: 33124382, vibe: 83654316, apple: [1766490784, 1766490794] },
      { title: "내 주는 강한 성이요", melon: 37315819, genie: 105771442, bugs: 33124383, vibe: 83654317, apple: [1766490784, 1766490795] },
      { title: "예수 나를 오라 하네", melon: 37315820, genie: 105771443, bugs: 33124384, vibe: 83654318, apple: [1766490784, 1766490796] },
      { title: "오 신실하신 주", melon: 37315821, genie: 105771444, bugs: 33124385, vibe: 83654319, apple: [1766490784, 1766490797] },
    ],
  },
  {
    title: "아침을 여는 기도 Vol.1 - 고백",
    year: 2024,
    kind: "정규",
    accent: "sage",
    tracks: [
      { title: "내 기도하는 그 시간", melon: 37312075, genie: 105753114, bugs: 33121743, vibe: 83638402, apple: [1766488250, 1766488251] },
      { title: "나 같은 죄인 살리신", melon: 37312076, genie: 105753115, bugs: 33121744, vibe: 83638403, apple: [1766488250, 1766488252] },
      { title: "내 모든 시험 무거운 짐을", melon: 37312077, genie: 105753116, bugs: 33121745, vibe: 83638404, apple: [1766488250, 1766488253] },
      { title: "내 주를 가까이 하게 함은", melon: 37312078, genie: 105753117, bugs: 33121746, vibe: 83638405, apple: [1766488250, 1766488254] },
      { title: "그 크신 하나님의 사랑", melon: 37312079, genie: 105753118, bugs: 33121747, vibe: 83638406, apple: [1766488250, 1766488255] },
      { title: "아 하나님의 은혜로", melon: 37312080, genie: 105753119, bugs: 33121748, vibe: 83638407, apple: [1766488250, 1766488256] },
      { title: "내 구주 예수를 더욱 사랑", melon: 37312081, genie: 105753120, bugs: 33121749, vibe: 83638408, apple: [1766488250, 1766488257] },
    ],
  },
  {
    title: "나는 나로 나와",
    year: 2022,
    kind: "정규",
    accent: "rose",
    tracks: [
      { title: "나는 나로 나와 (Narr.)", melon: 35901560, genie: 99347833, bugs: 32721632, vibe: 58926375, apple: [1658273688, 1658273690] },
      { title: "그래도 사랑해", melon: 35901561, genie: 99347834, bugs: 32721633, vibe: 58926376, apple: [1658273688, 1658273694] },
      { title: "걱정이 됐나 봐", melon: 35901562, genie: 99347835, bugs: 32721634, vibe: 58926377, apple: [1658273688, 1658273695] },
      { title: "걱정이 됐나 봐 (Inst.)", melon: 35901563, genie: 99347836, bugs: 32721635, vibe: 58926378, apple: [1658273688, 1658273696] },
      { title: "참 다행이야 (Feat. 담담)", melon: 35901564, genie: 99347837, bugs: 32721636, vibe: 58926379, apple: [1658273688, 1658273697] },
      { title: "참 다행이야 (Inst.)", melon: 35901565, genie: 99347838, bugs: 32721637, vibe: 58926380, apple: [1658273688, 1658273698] },
      { title: "함께해요", melon: 35901566, genie: 99347839, bugs: 32721638, vibe: 58926381, apple: [1658273688, 1658273699] },
      { title: "함께해요 (Inst.)", melon: 35901567, genie: 99347840, bugs: 32721639, vibe: 58926382, apple: [1658273688, 1658273700] },
      { title: "그래도 (hidden track)", searchQuery: "그래도 hidden track 나는 나로 나와 오뉴(onyu) 아리(ari)", genie: 99347841, bugs: 32721640, apple: [1658273688, 1658273701] },
    ],
  },
  {
    title: "제주왈츠",
    year: 2022,
    kind: "싱글",
    accent: "bronze",
    tracks: [
      { title: "제주왈츠", melon: 35541435, genie: 97930227, bugs: 32620741, vibe: 56932340, apple: [1718185717, 1718185718] },
      { title: "제주왈츠 (Inst.)", melon: 35541436, genie: 97930228, bugs: 32620742, vibe: 56932341, apple: [1718185717, 1718185719] },
    ],
  },
  {
    title: "봄, 여름, 가을, 바다 그리고 겨울",
    year: 2021,
    kind: "EP",
    accent: "blue",
    tracks: [
      { title: "This is my Father's world ‘spring’", melon: 34234233, genie: 94844595, bugs: 32374951, vibe: 51552300, apple: [1594768453, 1594768467] },
      { title: "Rainy Jeju", melon: 34234234, genie: 94844596, bugs: 32374952, vibe: 51552301, apple: [1594768453, 1594768471] },
      { title: "바람이 바람에게", melon: 34234235, genie: 94844597, bugs: 32374953, vibe: 51552302, apple: [1594768453, 1594768472] },
      { title: "바다, 그 깊음이여", melon: 34234236, genie: 94844598, bugs: 32374954, vibe: 51552303, apple: [1594768453, 1594768473] },
      { title: "Deep sorrow", melon: 34234237, genie: 94844599, bugs: 32374955, vibe: 51552304, apple: [1594768453, 1594768474] },
    ],
  },
];

export const totalTracks = releases.reduce((sum, release) => sum + release.tracks.length, 0);

export function trackLinks(track: Track, releaseTitle: string) {
  const query = encodeURIComponent(track.searchQuery ?? `${track.title} ${releaseTitle} 아리(ari)`);
  return [
    track.melon ? { label: "Melon", href: `https://www.melon.com/song/detail.htm?songId=${track.melon}`, kind: "direct" } : null,
    track.genie ? { label: "Genie", href: `https://www.genie.co.kr/detail/songInfo?xgnm=${track.genie}`, kind: "direct" } : null,
    track.bugs ? { label: "Bugs", href: `https://music.bugs.co.kr/track/${track.bugs}`, kind: "direct" } : null,
    track.vibe ? { label: "VIBE", href: `https://vibe.naver.com/track/${track.vibe}`, kind: "direct" } : null,
    { label: "Apple Music", href: `https://music.apple.com/kr/song/${track.apple[1]}`, kind: "direct" },
    { label: "Spotify 검색", href: `https://open.spotify.com/search/${query}`, kind: "search" },
    { label: "YouTube Music 검색", href: `https://music.youtube.com/search?q=${query}`, kind: "search" },
  ].filter(Boolean) as { label: string; href: string; kind: "direct" | "search" }[];
}
