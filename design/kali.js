// Kali, KalaLab's elephant. One drawing (front view, viewBox 200x200) + accessories per situation.
// Every moving part has its own class so CSS can animate it (see KALI_CSS).
const KALI_INK = "#141414";
const KALI = { body: "#c9b8f0", shade: "#b39fe6", inner: "#f7c9d9", light: "#fbeee0", bow: "#7b68c4", cheek: "#ff9fb8" };
function kali(acc = "bow", label = "Kali, l'éléphante de KalaLab") {
  const I = KALI_INK, C = KALI;
  const ear = (s) => `<g class="ear${s > 0 ? "L" : "R"}">
    <path d="M${100 - s * 28} 60 C${100 - s * 72} 30, ${100 - s * 100} 64, ${100 - s * 90} 106 C${100 - s * 84} 136, ${100 - s * 50} 138, ${100 - s * 32} 114 Z" fill="${C.body}" stroke="${I}" stroke-width="4" stroke-linejoin="round"/>
    <path d="M${100 - s * 36} 70 C${100 - s * 66} 50, ${100 - s * 86} 76, ${100 - s * 79} 104 C${100 - s * 74} 122, ${100 - s * 52} 124, ${100 - s * 39} 108 Z" fill="${C.inner}"/></g>`;
  const lashes = (x, s) => `<path d="M${x + s * 5.5} 84 l${s * 6} -3.5 M${x + s * 6.5} 88.5 l${s * 6.5} -0.5" stroke="${I}" stroke-width="2.3" stroke-linecap="round"/>`;
  const extras = {
    bow: "",
    cap: `<g class="extra"><path d="M60 50 L100 32 L140 50 L100 66 Z" fill="${I}"/><rect x="82" y="54" width="36" height="12" rx="3" fill="${I}"/>
      <path d="M140 50 v20" stroke="#ffd27a" stroke-width="3"/><circle cx="140" cy="72" r="4.5" fill="#ffd27a" stroke="${I}" stroke-width="2"/></g>`,
    phones: `<g class="extra"><path d="M56 88 C56 30, 144 30, 144 88" fill="none" stroke="${I}" stroke-width="7" stroke-linecap="round"/>
      <rect x="46" y="80" width="18" height="28" rx="8" fill="${C.bow}" stroke="${I}" stroke-width="4"/><rect x="136" y="80" width="18" height="28" rx="8" fill="${C.bow}" stroke="${I}" stroke-width="4"/></g>`,
    book: `<g class="extra"><path d="M68 150 l32 6 32 -6 v24 l-32 6 -32 -6 z" fill="${C.light}" stroke="${I}" stroke-width="4" stroke-linejoin="round"/><path d="M100 156 v24" stroke="${I}" stroke-width="3"/>
      <path d="M76 158 h16 M76 165 h14 M108 160 h16 M110 167 h14" stroke="${I}" stroke-width="2" opacity=".4"/></g>`,
  };
  // the bow stays on her head with every outfit except the cap
  const bow = acc === "cap" ? "" : `<g class="bow"><path d="M100 46 C88 34, 76 40, 80 50 C83 58, 94 54, 100 48 C106 54, 117 58, 120 50 C124 40, 112 34, 100 46 Z" fill="${C.bow}" stroke="${I}" stroke-width="3.5" stroke-linejoin="round"/>
    <circle cx="100" cy="47" r="5" fill="#ffd27a" stroke="${I}" stroke-width="3"/></g>`;
  return `<svg class="kali" viewBox="-12 -16 224 226" role="img" aria-label="${label}">
  <g class="all">
    <g class="tail"><path d="M134 160 q15 -1 17 -15" fill="none" stroke="${I}" stroke-width="4" stroke-linecap="round"/><path d="M151 145 l-4 -7 M151 145 l3 -8 M151 145 l7 -4" stroke="${I}" stroke-width="3" stroke-linecap="round"/></g>
    ${ear(1)}${ear(-1)}
    <rect x="72" y="150" width="22" height="36" rx="10" fill="${C.body}" stroke="${I}" stroke-width="4"/>
    <rect x="106" y="150" width="22" height="36" rx="10" fill="${C.body}" stroke="${I}" stroke-width="4"/>
    <path d="M76 183 h4 M84 183 h4 M110 183 h4 M118 183 h4" stroke="${C.light}" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="100" cy="150" rx="40" ry="30" fill="${C.body}" stroke="${I}" stroke-width="4"/>
    <ellipse cx="100" cy="157" rx="22" ry="15" fill="${C.inner}" opacity=".85"/>
    <ellipse cx="100" cy="92" rx="50" ry="46" fill="${C.body}" stroke="${I}" stroke-width="4"/>
    <ellipse cx="82" cy="66" rx="16" ry="8" fill="#fff" opacity=".35" transform="rotate(-18 82 66)"/>
    <ellipse cx="73" cy="108" rx="9" ry="6" fill="${C.cheek}" opacity=".8"/><ellipse cx="127" cy="108" rx="9" ry="6" fill="${C.cheek}" opacity=".8"/>
    <g class="eyes">
      <ellipse cx="82" cy="89" rx="6.5" ry="8.5" fill="${I}"/><ellipse cx="118" cy="89" rx="6.5" ry="8.5" fill="${I}"/>
      <circle cx="84.5" cy="85.5" r="2.7" fill="#fff"/><circle cx="120.5" cy="85.5" r="2.7" fill="#fff"/><circle cx="80.5" cy="92" r="1.2" fill="#fff"/><circle cx="116.5" cy="92" r="1.2" fill="#fff"/>
      ${lashes(82, -1)}${lashes(118, 1)}
    </g>
    <path d="M86 117 q6 8 12 3" fill="none" stroke="${I}" stroke-width="3.5" stroke-linecap="round"/>
    <g class="trunk">
      <path d="M100 104 C100 126, 104 140, 120 138 C132 136, 138 124, 132 116" fill="none" stroke="${I}" stroke-width="20" stroke-linecap="round"/>
      <path d="M100 104 C100 126, 104 140, 120 138 C132 136, 138 124, 132 116" fill="none" stroke="${C.body}" stroke-width="12.5" stroke-linecap="round"/>
      <path d="M104 122 h6 M107 131 h6" stroke="${I}" stroke-width="2.5" stroke-linecap="round" opacity=".5"/>
    </g>
    ${bow}${extras[acc] || ""}
  </g>
  <g class="hearts" font-size="22"><text x="150" y="40">💜</text><text x="38" y="34">✨</text><text x="160" y="82">💛</text></g>
</svg>`;
}
const KALI_CSS = `
.kali { width: 100%; height: 100%; overflow: visible; filter: drop-shadow(4px 4px 0 rgba(20,20,20,.9)); }
.kali * { transform-box: fill-box; }
.kali .all { transform-origin: 50% 100%; animation: k-bob 2.6s ease-in-out infinite; }
.kali .earL { transform-origin: 100% 30%; animation: k-flapL 2.6s ease-in-out infinite; }
.kali .earR { transform-origin: 0% 30%; animation: k-flapR 2.6s ease-in-out infinite; }
.kali .trunk { transform-origin: 30% 0%; animation: k-swing 2.6s ease-in-out infinite; }
.kali .eyes { transform-origin: 50% 50%; animation: k-blink 4.2s infinite; }
.kali .tail { transform-origin: 0% 100%; animation: k-wag 1.1s ease-in-out infinite; }
.kali .bow { transform-origin: 50% 80%; animation: k-bow 2.6s ease-in-out infinite; }
.kali .extra { transform-origin: 50% 100%; animation: k-hop 2.6s ease-in-out infinite; }
@keyframes k-bob { 0%,100% { transform: translateY(0) scale(1,1); } 50% { transform: translateY(-6px) scale(1.01,.99); } }
@keyframes k-flapL { 0%,100% { transform: rotate(0); } 25% { transform: rotate(-10deg); } 50% { transform: rotate(3deg); } }
@keyframes k-flapR { 0%,100% { transform: rotate(0); } 25% { transform: rotate(10deg); } 50% { transform: rotate(-3deg); } }
@keyframes k-swing { 0%,100% { transform: rotate(0); } 30% { transform: rotate(-9deg); } 65% { transform: rotate(6deg); } }
@keyframes k-blink { 0%,44%,48%,100% { transform: scaleY(1); } 46% { transform: scaleY(.1); } }
@keyframes k-wag { 0%,100% { transform: rotate(-12deg); } 50% { transform: rotate(14deg); } }
@keyframes k-bow { 0%,100% { transform: rotate(-4deg); } 50% { transform: rotate(5deg); } }
@keyframes k-hop { 0%,100% { transform: translateY(0) rotate(-3deg); } 50% { transform: translateY(-4px) rotate(3deg); } }
.kali.happy .all { animation: k-jump .7s cubic-bezier(.34,1.56,.64,1); }
.kali.happy .trunk { animation: k-toot .7s ease-in-out; }
.kali.happy .earL { animation: k-flapL .35s 2 ease-in-out; } .kali.happy .earR { animation: k-flapR .35s 2 ease-in-out; }
.kali.wave .trunk { animation: k-wave .5s 3 ease-in-out; }
@keyframes k-jump { 0% { transform: translateY(0) scale(1); } 20% { transform: translateY(4px) scale(1.06,.92); } 55% { transform: translateY(-26px) scale(.96,1.05); } 100% { transform: translateY(0) scale(1); } }
@keyframes k-toot { 40% { transform: rotate(-28deg); } }
@keyframes k-wave { 50% { transform: rotate(-24deg); } }
.kali .hearts { pointer-events: none; } .kali .hearts text { opacity: 0; }
.kali.happy .hearts text { animation: k-float 1s ease-out; }
.kali.happy .hearts text:nth-child(2) { animation-delay: .12s; } .kali.happy .hearts text:nth-child(3) { animation-delay: .24s; }
@keyframes k-float { 0% { opacity: 0; transform: translateY(6px) scale(.6); } 30% { opacity: 1; } 100% { opacity: 0; transform: translateY(-30px) scale(1.1); } }
`;
function kaliCheer(svg) { if (!svg) return; svg.classList.remove("happy"); void svg.getBoundingClientRect(); svg.classList.add("happy"); setTimeout(() => svg.classList.remove("happy"), 1100); }
