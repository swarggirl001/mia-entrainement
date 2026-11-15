// Kali, KalaLab's elephant. Front view, viewBox 200x200. She has arms, and one outfit per situation,
// each with its own animation (CSS classes .o-<outfit> on the <svg>, see KALI_CSS).
const KALI_INK = "#141414";
const KALI = { body: "#c9b8f0", inner: "#f7c9d9", light: "#fbeee0", bow: "#7b68c4", cheek: "#ff9fb8", butter: "#ffd27a", blue: "#a9c2f5", mint: "#a9e0c8", peach: "#f7b9a0", rose: "#f5a3bd" };
const KALI_OUTFITS = ["bonjour", "dj", "lecture", "diplomee", "sport", "dodo", "detective", "fete"];

function kali(outfit = "bonjour", label = "Kali, l'éléphante de KalaLab") {
  const I = KALI_INK, C = KALI, o = KALI_OUTFITS.includes(outfit) ? outfit : "bonjour";
  const tube = (d, w = 17, inner = 10.5, col = C.body) => `<path d="${d}" fill="none" stroke="${I}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${col}" stroke-width="${inner}" stroke-linecap="round" stroke-linejoin="round"/>`;
  const ear = (s) => `<g class="ear${s > 0 ? "L" : "R"}">
    <path d="M${100 - s * 28} 60 C${100 - s * 72} 30, ${100 - s * 100} 64, ${100 - s * 90} 106 C${100 - s * 84} 136, ${100 - s * 50} 138, ${100 - s * 32} 114 Z" fill="${C.body}" stroke="${I}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M${100 - s * 36} 70 C${100 - s * 66} 50, ${100 - s * 86} 76, ${100 - s * 79} 104 C${100 - s * 74} 122, ${100 - s * 52} 124, ${100 - s * 39} 108 Z" fill="${C.inner}"/></g>`;

  // what she holds in her right hand (drawn inside the arm, so it moves with it)
  const magnifier = `<g><path d="M146 172 L156 190" stroke="#8a5a3b" stroke-width="7" stroke-linecap="round"/>
    <circle cx="160" cy="198" r="11" fill="#dff3ff" fill-opacity=".7" stroke="${I}" stroke-width="4"/><path d="M155 193 q3 -3 7 -2" stroke="#fff" stroke-width="2.5" stroke-linecap="round" fill="none"/></g>`;
  const arms = `
    <g class="armL">${tube("M70 139 L57 167")}<path d="M54 167 h3 M58 170 h3" stroke="${C.light}" stroke-width="2.5" stroke-linecap="round"/></g>
    <g class="armR">${tube("M130 139 L143 167")}<path d="M140 170 h3 M144 167 h3" stroke="${C.light}" stroke-width="2.5" stroke-linecap="round"/>${o === "detective" ? magnifier : ""}</g>`;

  // eyes: open, asleep, or looking around (the pupils move)
  const lashes = (x, s) => `<path d="M${x + s * 5.5} 84 l${s * 6} -3.5 M${x + s * 6.5} 88.5 l${s * 6.5} -0.5" stroke="${I}" stroke-width="2.3" stroke-linecap="round"/>`;
  const eyes = o === "dodo"
    ? `<g class="eyes sleep"><path d="M75 90 q7 6 14 0 M111 90 q7 6 14 0" fill="none" stroke="${I}" stroke-width="3.5" stroke-linecap="round"/>${lashes(82, -1)}${lashes(118, 1)}</g>`
    : `<g class="eyes"><g class="pupils"><ellipse cx="82" cy="89" rx="6.5" ry="8.5" fill="${I}"/><ellipse cx="118" cy="89" rx="6.5" ry="8.5" fill="${I}"/>
       <circle cx="84.5" cy="85.5" r="2.7" fill="#fff"/><circle cx="120.5" cy="85.5" r="2.7" fill="#fff"/><circle cx="80.5" cy="92" r="1.2" fill="#fff"/><circle cx="116.5" cy="92" r="1.2" fill="#fff"/></g>${lashes(82, -1)}${lashes(118, 1)}</g>`;
  const mouth = o === "dodo" ? `<ellipse cx="92" cy="119" rx="3" ry="2.5" fill="${I}"/>` : `<path d="M86 117 q6 8 12 3" fill="none" stroke="${I}" stroke-width="3.5" stroke-linecap="round"/>`;

  // headwear
  const bow = `<g class="bow"><path d="M100 46 C88 34, 76 40, 80 50 C83 58, 94 54, 100 48 C106 54, 117 58, 120 50 C124 40, 112 34, 100 46 Z" fill="${C.bow}" stroke="${I}" stroke-width="3.5" stroke-linejoin="round"/><circle cx="100" cy="47" r="5" fill="${C.butter}" stroke="${I}" stroke-width="3"/></g>`;
  const head = {
    bonjour: bow,
    dj: `${bow}<g class="phones"><path d="M54 92 C52 30, 148 30, 146 92" fill="none" stroke="${I}" stroke-width="8" stroke-linecap="round"/><path d="M54 92 C52 30, 148 30, 146 92" fill="none" stroke="${C.mint}" stroke-width="3" stroke-linecap="round"/>
      <rect x="42" y="78" width="20" height="32" rx="9" fill="${C.bow}" stroke="${I}" stroke-width="4"/><rect x="138" y="78" width="20" height="32" rx="9" fill="${C.bow}" stroke="${I}" stroke-width="4"/>
      <circle cx="52" cy="94" r="4" fill="${C.mint}"/><circle cx="148" cy="94" r="4" fill="${C.mint}"/></g>`,
    lecture: `${bow}<g class="glasses"><circle cx="82" cy="89" r="12" fill="#fff" fill-opacity=".25" stroke="${I}" stroke-width="3.5"/><circle cx="118" cy="89" r="12" fill="#fff" fill-opacity=".25" stroke="${I}" stroke-width="3.5"/><path d="M94 88 q6 -4 12 0" fill="none" stroke="${I}" stroke-width="3.5"/></g>`,
    diplomee: `<g class="cap"><path d="M58 52 L100 33 L142 52 L100 69 Z" fill="${I}"/><path d="M80 58 v10 q20 8 40 0 v-10" fill="${I}"/><g class="tassel"><path d="M142 52 v22" stroke="${C.butter}" stroke-width="3.5"/><path d="M138 74 h8 l-1 8 h-6 z" fill="${C.butter}" stroke="${I}" stroke-width="2"/></g></g>`,
    sport: `<g class="band"><path d="M52 74 Q100 46 148 74 L148 86 Q100 58 52 86 Z" fill="${C.rose}" stroke="${I}" stroke-width="3.5" stroke-linejoin="round"/><path d="M60 77 Q100 54 140 77" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="6 6"/></g>`,
    dodo: `<g class="nightcap"><path d="M56 70 Q80 20 136 28 Q172 34 176 70 Q160 56 148 66 Q104 46 56 70 Z" fill="${C.blue}" stroke="${I}" stroke-width="3.5" stroke-linejoin="round"/>
      <path d="M92 40 l2 5 5 1 -4 3 1 5 -4 -3 -4 3 1 -5 -4 -3 5 -1z" fill="${C.butter}"/><path d="M128 36 l1.5 4 4 .5 -3 2.5 1 4 -3.5 -2 -3.5 2 1 -4 -3 -2.5 4 -.5z" fill="${C.butter}"/>
      <path d="M54 68 Q100 46 146 66 l2 10 Q100 56 56 80 Z" fill="${C.light}" stroke="${I}" stroke-width="3.5" stroke-linejoin="round"/><circle class="pompom" cx="178" cy="74" r="9" fill="#fff" stroke="${I}" stroke-width="3.5"/></g>`,
    detective: `<g class="hat"><path d="M60 62 Q100 22 140 62 Z" fill="#b08968" stroke="${I}" stroke-width="3.5" stroke-linejoin="round"/><path d="M50 64 Q100 50 150 64 Q100 74 50 64 Z" fill="#8a5a3b" stroke="${I}" stroke-width="3.5" stroke-linejoin="round"/><path d="M68 56 Q100 44 132 56" fill="none" stroke="#5e3b24" stroke-width="5"/></g>`,
    fete: `<g class="party"><path d="M100 4 L124 54 Q100 62 76 54 Z" fill="${C.butter}" stroke="${I}" stroke-width="3.5" stroke-linejoin="round"/>
      <circle cx="96" cy="30" r="3.5" fill="${C.rose}"/><circle cx="108" cy="42" r="3.5" fill="${C.blue}"/><circle cx="90" cy="48" r="3.5" fill="${C.mint}"/><circle cx="104" cy="18" r="3" fill="${C.bow}"/>
      <circle class="pompom" cx="100" cy="2" r="7" fill="${C.rose}" stroke="${I}" stroke-width="3"/></g>`,
  }[o];

  // things in front of her body
  const front = {
    lecture: `<g class="book"><path d="M66 146 Q84 140 100 148 Q116 140 134 146 V174 Q116 168 100 176 Q84 168 66 174 Z" fill="${C.light}" stroke="${I}" stroke-width="4" stroke-linejoin="round"/>
      <path d="M100 148 V176" stroke="${I}" stroke-width="3"/><path d="M73 153 h20 M73 160 h18 M73 167 h16 M107 153 h20 M109 160 h18" stroke="${I}" stroke-width="2" opacity=".35"/>
      <path class="page" d="M100 148 Q116 140 134 146 V174 Q116 168 100 176 Z" fill="#fff" stroke="${I}" stroke-width="3" stroke-linejoin="round"/>
      <circle cx="68" cy="160" r="7" fill="${C.body}" stroke="${I}" stroke-width="3.5"/><circle cx="132" cy="160" r="7" fill="${C.body}" stroke="${I}" stroke-width="3.5"/></g>`,
    fete: `<g class="balloon"><path d="M56 168 C40 120, 30 90, 26 58" fill="none" stroke="${I}" stroke-width="2"/><ellipse cx="24" cy="40" rx="17" ry="20" fill="${C.rose}" stroke="${I}" stroke-width="3.5"/><path d="M19 30 q4 -5 9 -4" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M21 60 l3 -2 3 2 z" fill="${C.rose}" stroke="${I}" stroke-width="2"/></g>`,
  }[o] || "";

  // little things floating around her
  const note = (x, y, c) => `<g transform="translate(${x} ${y})"><g><path d="M8 0 V16" stroke="${I}" stroke-width="3"/><path d="M8 0 q8 2 9 9" fill="none" stroke="${I}" stroke-width="3" stroke-linecap="round"/><ellipse cx="4" cy="17" rx="5.5" ry="4.5" fill="${c}" stroke="${I}" stroke-width="2.5"/></g></g>`;
  const conf = (x, y, c, r) => `<g transform="translate(${x} ${y}) rotate(${r})"><rect x="-4.5" y="-2.5" width="9" height="5" rx="1.5" fill="${c}" stroke="${I}" stroke-width="1.5"/></g>`;
  const Z = (x, y, size) => `<g transform="translate(${x} ${y})"><text font-family="Bagel Fat One, Arial Black, sans-serif" font-size="${size}" fill="${C.light}" stroke="${I}" stroke-width="2" paint-order="stroke">Z</text></g>`;
  const float = {
    dj: [note(160, 20, C.mint), note(22, 40, C.butter), note(170, 96, C.rose)],
    dodo: [Z(150, 30, 22), Z(172, 8, 16)],
    diplomee: [conf(30, 30, C.butter, 20), conf(170, 40, C.mint, -30), conf(36, 112, C.rose, 50), conf(174, 120, C.blue, 10)],
    fete: [conf(160, 30, C.butter, 20), conf(178, 92, C.mint, -30), conf(150, 8, C.blue, 50)],
    sport: [`<g transform="translate(156 52)"><path d="M0 0 q6 10 0 14 q-6 -4 0 -14 z" fill="#bfe6ff" stroke="${I}" stroke-width="2.5"/></g>`],
    detective: [`<g transform="translate(28 40)"><text font-family="Bagel Fat One, Arial Black, sans-serif" font-size="26" fill="${C.butter}" stroke="${I}" stroke-width="2.5" paint-order="stroke">?</text></g>`],
  }[o] || [];
  const floats = float.length ? `<g class="float">${float.map((f) => f.replace(/^<g transform="([^"]+)">/, '<g transform="$1"><g class="fl">')).map((f) => f + "</g>").join("")}</g>` : "";

  const heart = (x, y, c) => `<path transform="translate(${x} ${y})" d="M0 6 C0 -1 9 -1 9 5 C9 -1 18 -1 18 6 C18 12 11 16 9 19 C7 16 0 12 0 6Z" fill="${c}" stroke="${I}" stroke-width="2.5" stroke-linejoin="round"/>`;
  return `<svg class="kali o-${o}" viewBox="-14 -18 228 230" role="img" aria-label="${label}">
  <defs><radialGradient id="kblush"><stop offset="0" stop-color="#ff86ab" stop-opacity=".85"/><stop offset=".6" stop-color="#ff9fb8" stop-opacity=".45"/><stop offset="1" stop-color="#ff9fb8" stop-opacity="0"/></radialGradient></defs>
  <g class="all">
    <g class="tail"><path d="M134 160 q15 -1 17 -15" fill="none" stroke="${I}" stroke-width="4" stroke-linecap="round"/><path d="M151 145 l-4 -7 M151 145 l3 -8 M151 145 l7 -4" stroke="${I}" stroke-width="3" stroke-linecap="round"/></g>
    ${ear(1)}${ear(-1)}
    <g class="legs"><rect x="74" y="152" width="21" height="34" rx="10" fill="${C.body}" stroke="${I}" stroke-width="4"/><rect x="105" y="152" width="21" height="34" rx="10" fill="${C.body}" stroke="${I}" stroke-width="4"/>
      <path d="M78 183 h4 M86 183 h4 M109 183 h4 M117 183 h4" stroke="${C.light}" stroke-width="4" stroke-linecap="round"/></g>
    <ellipse cx="100" cy="150" rx="38" ry="29" fill="${C.body}" stroke="${I}" stroke-width="4"/>
    <ellipse cx="100" cy="157" rx="21" ry="14" fill="${C.inner}" opacity=".85"/>
    <g class="head">
      <ellipse cx="100" cy="92" rx="50" ry="46" fill="${C.body}" stroke="${I}" stroke-width="4"/>
      <ellipse cx="82" cy="66" rx="16" ry="8" fill="#fff" opacity=".35" transform="rotate(-18 82 66)"/>
      <g class="blush"><ellipse cx="72" cy="107" rx="13" ry="8.5" fill="url(#kblush)"/><ellipse cx="128" cy="107" rx="13" ry="8.5" fill="url(#kblush)"/>
        <path d="M66 105 l-2.5 4 M71 105 l-2.5 4 M76 105 l-2.5 4 M126 105 l-2.5 4 M131 105 l-2.5 4 M136 105 l-2.5 4" stroke="#e8789c" stroke-width="1.6" stroke-linecap="round" opacity=".55"/></g>
      ${eyes}${mouth}
      ${head}
    </g>
    ${arms}
    <g class="head"><g class="trunk">
      <!-- open at the top, so it grows out of the face; the two lines end round at the top, the tip is rounded -->
      <path d="M100 105 C100 126, 104 140, 120 138 C132 136, 138 124, 132 116" fill="none" stroke="${I}" stroke-width="20" stroke-linecap="butt"/><circle cx="132" cy="116" r="10" fill="${I}"/><circle cx="91.875" cy="105" r="1.875" fill="${I}"/><circle cx="108.125" cy="105" r="1.875" fill="${I}"/>
      <path d="M100 101 L100 105 C100 126, 104 140, 120 138 C132 136, 138 124, 132 116" fill="none" stroke="${C.body}" stroke-width="12.5" stroke-linecap="butt"/><circle cx="132" cy="116" r="6.25" fill="${C.body}"/>
      <path d="M104 122 h6 M107 131 h6" stroke="${I}" stroke-width="2.5" stroke-linecap="round" opacity=".5"/></g></g>
    ${front}
  </g>
  ${floats}
  <g class="hearts">${heart(146, 18, C.body)}<path transform="translate(30 14)" d="M10 0 l3 7 7 3 -7 3 -3 7 -3-7 -7-3 7-3z" fill="${C.butter}" stroke="${I}" stroke-width="2.5" stroke-linejoin="round"/>${heart(160, 62, C.butter)}</g>
</svg>`;
}

const KALI_CSS = `
.kali { width: 100%; height: 100%; overflow: visible; filter: drop-shadow(4px 4px 0 rgba(20,20,20,.9)); }
.kali * { transform-box: fill-box; }
.kali .armL, .kali .armR, .kali .head, .kali .all, .kali .balloon { transform-box: view-box; }
.kali .all { transform-origin: 100px 186px; animation: k-bob 2.6s ease-in-out infinite; }
.kali .head { transform-origin: 100px 132px; }
.kali .armL { transform-origin: 70px 139px; animation: k-armL 2.6s ease-in-out infinite; }
.kali .armR { transform-origin: 130px 139px; animation: k-armR 2.6s ease-in-out infinite; }
.kali .earL { transform-origin: 100% 30%; animation: k-flapL 2.6s ease-in-out infinite; }
.kali .earR { transform-origin: 0% 30%; animation: k-flapR 2.6s ease-in-out infinite; }
.kali .trunk { transform-box: view-box; transform-origin: 100px 106px; animation: k-swing 2.6s ease-in-out infinite; }
.kali .eyes:not(.sleep) { transform-origin: 50% 50%; animation: k-blink 4.2s infinite; }
.kali .tail { transform-origin: 0% 100%; animation: k-wag 1.1s ease-in-out infinite; }
.kali .bow { transform-origin: 50% 80%; animation: k-bow 2.6s ease-in-out infinite; }
@keyframes k-bob { 0%,100% { transform: translateY(0) scale(1,1); } 50% { transform: translateY(-6px) scale(1.01,.99); } }
@keyframes k-armL { 0%,100% { transform: rotate(0); } 50% { transform: rotate(8deg); } }
@keyframes k-armR { 0%,100% { transform: rotate(0); } 50% { transform: rotate(-8deg); } }
@keyframes k-flapL { 0%,100% { transform: rotate(0); } 25% { transform: rotate(-10deg); } 50% { transform: rotate(3deg); } }
@keyframes k-flapR { 0%,100% { transform: rotate(0); } 25% { transform: rotate(10deg); } 50% { transform: rotate(-3deg); } }
@keyframes k-swing { 0%,100% { transform: rotate(0); } 30% { transform: rotate(-9deg); } 65% { transform: rotate(6deg); } }
@keyframes k-blink { 0%,44%,48%,100% { transform: scaleY(1); } 46% { transform: scaleY(.1); } }
@keyframes k-wag { 0%,100% { transform: rotate(-12deg); } 50% { transform: rotate(14deg); } }
@keyframes k-bow { 0%,100% { transform: rotate(-4deg); } 50% { transform: rotate(5deg); } }

/* waving only when asked (arrival, coming back on screen, on the logo) */
.kali.waving .armR { animation: k-wave .8s ease-in-out 3 !important; }
@keyframes k-wave { 0%,100% { transform: rotate(-84deg); } 50% { transform: rotate(-112deg); } }

/* dj: head bobbing, arms dancing, music notes rising */
.kali.o-dj .head { animation: k-groove .6s ease-in-out infinite; }
.kali.o-dj .armL { animation: k-danceL .6s ease-in-out infinite; } .kali.o-dj .armR { animation: k-danceR .6s ease-in-out infinite; }
.kali.o-dj .all { animation: k-bounce .6s ease-in-out infinite; }
@keyframes k-groove { 0%,100% { transform: rotate(-5deg); } 50% { transform: rotate(5deg); } }
@keyframes k-danceL { 0%,100% { transform: rotate(10deg); } 50% { transform: rotate(70deg); } }
@keyframes k-danceR { 0%,100% { transform: rotate(-70deg); } 50% { transform: rotate(-10deg); } }
@keyframes k-bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }

/* lecture: arms hold the book, a page turns, she nods */
.kali.o-lecture .armL { animation: none; transform: rotate(-62deg); } .kali.o-lecture .armR { animation: none; transform: rotate(62deg); }
.kali.o-lecture .head { animation: k-nod 3s ease-in-out infinite; }
.kali.o-lecture .page { transform-origin: 0% 50%; animation: k-page 3s ease-in-out infinite; }
@keyframes k-nod { 0%,100% { transform: rotate(0); } 40% { transform: rotate(4deg) translateY(2px); } }
@keyframes k-page { 0%,55% { transform: scaleX(1); opacity: 1; } 78% { transform: scaleX(-1); opacity: 1; } 100% { transform: scaleX(-1); opacity: 0; } }

/* diplomee: both arms up, little jumps, the tassel swings */
.kali.o-diplomee .armL { animation: k-cheerL 1.3s ease-in-out infinite; } .kali.o-diplomee .armR { animation: k-cheerR 1.3s ease-in-out infinite; }
.kali.o-diplomee .all { animation: k-hopping 1.3s cubic-bezier(.34,1.56,.64,1) infinite; }
.kali.o-diplomee .tassel { transform-origin: 50% 0%; animation: k-wag .65s ease-in-out infinite; }
@keyframes k-cheerL { 0%,100% { transform: rotate(78deg); } 50% { transform: rotate(104deg); } }
@keyframes k-cheerR { 0%,100% { transform: rotate(-78deg); } 50% { transform: rotate(-104deg); } }
@keyframes k-hopping { 0%,100% { transform: translateY(0) scale(1); } 15% { transform: translateY(2px) scale(1.04,.95); } 45% { transform: translateY(-14px) scale(.98,1.03); } 70% { transform: translateY(0); } }

/* sport: arms pumping like running, sweat drop */
.kali.o-sport .armL { animation: k-runL .5s ease-in-out infinite; } .kali.o-sport .armR { animation: k-runR .5s ease-in-out infinite; }
.kali.o-sport .all { animation: k-bounce .25s ease-in-out infinite; }
@keyframes k-runL { 0%,100% { transform: rotate(-35deg); } 50% { transform: rotate(35deg); } }
@keyframes k-runR { 0%,100% { transform: rotate(35deg); } 50% { transform: rotate(-35deg); } }

/* dodo: slow breathing, the nightcap pompom swings, Z floating */
.kali.o-dodo .all { animation: k-breathe 3.6s ease-in-out infinite; }
.kali.o-dodo .armL, .kali.o-dodo .armR, .kali.o-dodo .trunk, .kali.o-dodo .earL, .kali.o-dodo .earR { animation-duration: 3.6s; }
.kali.o-dodo .pompom { transform-origin: 0% 0%; animation: k-wag 3.6s ease-in-out infinite; }
@keyframes k-breathe { 0%,100% { transform: scale(1, 1); } 50% { transform: scale(1.03, .97); } }

/* detective: magnifier up to her face, eyes looking around */
.kali.o-detective .armR { animation: k-search 3s ease-in-out infinite; }
.kali.o-detective .pupils { animation: k-look 3s ease-in-out infinite; }
@keyframes k-search { 0%,100% { transform: rotate(-112deg); } 50% { transform: rotate(-94deg); } }
@keyframes k-look { 0%,20%,100% { transform: translateX(0); } 35%,55% { transform: translateX(4px); } 70%,85% { transform: translateX(-4px); } }

/* fete: balloon bobbing, waving the other arm, party hat dancing */
.kali.o-fete .armR { animation: k-cheerR 1.6s ease-in-out infinite; }
.kali.o-fete .armL { animation: none; }
.kali.o-fete .balloon { transform-origin: 56px 168px; animation: k-balloon 2.4s ease-in-out infinite; }
.kali.o-fete .party { transform-origin: 50% 100%; animation: k-bow 1.2s ease-in-out infinite; }
@keyframes k-balloon { 0%,100% { transform: rotate(-4deg); } 50% { transform: rotate(5deg); } }

/* floating things */
.kali .fl { transform-origin: 50% 50%; animation: k-rise 2.4s ease-in-out infinite; }
.kali .float > :nth-child(2) .fl { animation-delay: .8s; } .kali .float > :nth-child(3) .fl { animation-delay: 1.6s; } .kali .float > :nth-child(4) .fl { animation-delay: 1.2s; }
@keyframes k-rise { 0% { opacity: 0; transform: translateY(10px) rotate(-8deg); } 30%,70% { opacity: 1; } 100% { opacity: 0; transform: translateY(-14px) rotate(8deg); } }

/* tap: a happy jump with hearts */
.kali.happy .all { animation: k-jump .7s cubic-bezier(.34,1.56,.64,1); }
.kali.happy .trunk { animation: k-toot .7s ease-in-out; }
.kali.happy .earL { animation: k-flapL .35s 2 ease-in-out; } .kali.happy .earR { animation: k-flapR .35s 2 ease-in-out; }
.kali.wave .trunk { animation: k-wavet .5s 3 ease-in-out; }
@keyframes k-jump { 0% { transform: translateY(0) scale(1); } 20% { transform: translateY(4px) scale(1.06,.92); } 55% { transform: translateY(-26px) scale(.96,1.05); } 100% { transform: translateY(0) scale(1); } }
@keyframes k-toot { 40% { transform: rotate(-28deg); } }
@keyframes k-wavet { 50% { transform: rotate(-24deg); } }
.kali .blush { transform-origin: 50% 50%; transition: opacity .3s; }
.kali.happy .blush, .kali.waving .blush { animation: k-blush 1.1s ease-in-out; }
@keyframes k-blush { 40% { transform: scale(1.18); opacity: 1; } }
.kali .hearts { pointer-events: none; } .kali .hearts > * { opacity: 0; }
.kali.happy .hearts > * { animation: k-float 1s ease-out; }
.kali.happy .hearts > :nth-child(2) { animation-delay: .12s; } .kali.happy .hearts > :nth-child(3) { animation-delay: .24s; }
@keyframes k-float { 0% { opacity: 0; transform: translateY(6px) scale(.6); } 30% { opacity: 1; } 100% { opacity: 0; transform: translateY(-30px) scale(1.1); } }
`;
function kaliWave(svg) { if (!svg) return; svg.classList.remove("waving"); void svg.getBoundingClientRect(); svg.classList.add("waving"); setTimeout(() => svg.classList.remove("waving"), 2500); }
function kaliCheer(svg) { if (!svg) return; svg.classList.remove("happy"); void svg.getBoundingClientRect(); svg.classList.add("happy"); setTimeout(() => svg.classList.remove("happy"), 1100); }
