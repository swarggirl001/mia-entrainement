// KalaLab icons: drawn in the same sticker style as Kali (ink outline, pastel fills). viewBox 48x48.
const IC = { ink: "#141414", cream: "#fbeee0", lilac: "#c9b8f0", violet: "#7b68c4", butter: "#ffd27a", peach: "#f7b9a0", mint: "#a9e0c8", blue: "#a9c2f5", rose: "#f5b8cc" };
const ICON_PATHS = {
  home: `<path d="M9 22 L24 9 L39 22 V40 H9 Z" fill="${IC.cream}"/><path d="M5 24 L24 7 L43 24" fill="none"/><path d="M9 22 V40 H39 V22"/><rect x="20" y="28" width="8" height="12" rx="2" fill="${IC.lilac}"/><circle cx="33" cy="15" r="0" />`,
  books: `<rect x="7" y="13" width="9" height="28" rx="2" fill="${IC.lilac}"/><rect x="17" y="8" width="10" height="33" rx="2" fill="${IC.butter}"/><rect x="29" y="12" width="9" height="29" rx="2" fill="${IC.mint}" transform="rotate(10 33 26)"/><path d="M7 19 h9 M17 14 h10 M17 34 h10"/>`,
  dialogue: `<path d="M6 9 h22 a4 4 0 0 1 4 4 v9 a4 4 0 0 1 -4 4 h-13 l-6 5 1-5 h-4 a4 4 0 0 1 -4 -4 v-9 a4 4 0 0 1 4 -4 z" fill="${IC.lilac}"/><path d="M42 24 h-18 a4 4 0 0 0 -4 4 v7 a4 4 0 0 0 4 4 h11 l6 4 -1-4 h2 a4 4 0 0 0 4 -4 v-7 a4 4 0 0 0 -4 -4 z" fill="${IC.butter}"/><circle cx="13" cy="17.5" r="1.6" fill="${IC.ink}" stroke="none"/><circle cx="18" cy="17.5" r="1.6" fill="${IC.ink}" stroke="none"/><circle cx="23" cy="17.5" r="1.6" fill="${IC.ink}" stroke="none"/>`,
  letters: `<rect x="7" y="9" width="34" height="30" rx="7" fill="${IC.cream}"/><text x="24" y="31" text-anchor="middle" font-family="Bagel Fat One, Arial Black, sans-serif" font-size="17" fill="${IC.violet}" stroke="none">Aa</text><path d="M13 39 v4 l5 -4"  fill="${IC.cream}"/>`,
  sparkle: `<path d="M22 6 l4 12 12 4 -12 4 -4 12 -4-12 -12-4 12-4z" fill="${IC.butter}"/><path d="M38 30 l1.8 5 5 1.8 -5 1.8 -1.8 5 -1.8-5 -5-1.8 5-1.8z" fill="${IC.lilac}"/>`,
  headphones: `<path d="M9 30 V24 a15 15 0 0 1 30 0 V30" fill="none" stroke-width="4"/><rect x="5" y="26" width="10" height="15" rx="5" fill="${IC.lilac}"/><rect x="33" y="26" width="10" height="15" rx="5" fill="${IC.lilac}"/>`,
  mic: `<rect x="17" y="5" width="14" height="23" rx="7" fill="${IC.lilac}"/><path d="M11 22 a13 13 0 0 0 26 0" fill="none"/><path d="M24 35 v6 M16 42 h16"/><path d="M21 12 h6 M21 17 h6" stroke-width="2"/>`,
  pencil: `<g transform="rotate(-40 24 24)"><rect x="18" y="4" width="12" height="30" rx="2" fill="${IC.butter}"/><rect x="18" y="4" width="12" height="7" rx="2" fill="${IC.peach}"/><path d="M18 34 L24 44 L30 34 Z" fill="${IC.cream}"/><path d="M22.3 41 L24 44 L25.7 41 Z" fill="${IC.ink}"/></g>`,
  trophy: `<path d="M15 8 h18 v10 a9 9 0 0 1 -18 0 z" fill="${IC.butter}"/><path d="M15 11 h-6 a6 6 0 0 0 7 9 M33 11 h6 a6 6 0 0 1 -7 9" fill="none"/><path d="M24 27 v6"/><rect x="15" y="33" width="18" height="8" rx="2" fill="${IC.lilac}"/>`,
  flame: `<path d="M24 5 C28 13, 38 17, 38 29 a14 14 0 0 1 -28 0 C10 21, 15 18, 17 12 C19 16, 21 18, 22 19 C22 13, 22 9, 24 5 Z" fill="${IC.peach}"/><path d="M24 24 c3 4 7 6 7 11 a7 7 0 0 1 -14 0 c0-4 3-6 4-9 c1 2 2 3 3 3 z" fill="${IC.butter}"/>`,
  flag: `<path d="M12 6 V43"/><path d="M12 8 h22 l-5 7 5 7 h-22 z" fill="${IC.lilac}"/><circle cx="12" cy="43" r="0"/>`,
  user: `<circle cx="24" cy="16" r="9" fill="${IC.cream}"/><path d="M8 42 a16 14 0 0 1 32 0 z" fill="${IC.lilac}"/>`,
  moon: `<path d="M30 6 a17 17 0 1 0 12 26 a14 14 0 0 1 -12 -26 z" fill="${IC.butter}"/><circle cx="20" cy="22" r="2" fill="${IC.ink}" stroke="none" opacity=".2"/>`,
  sun: `<circle cx="24" cy="24" r="9" fill="${IC.butter}"/><path d="M24 4 v6 M24 38 v6 M4 24 h6 M38 24 h6 M10 10 l4 4 M34 34 l4 4 M38 10 l-4 4 M14 34 l-4 4"/>`,
  speaker: `<path d="M8 19 h7 l10 -8 v26 l-10 -8 h-7 z" fill="${IC.cream}"/><path d="M31 18 a8 8 0 0 1 0 12 M35 13 a14 14 0 0 1 0 22" fill="none"/>`,
  check: `<circle cx="24" cy="24" r="17" fill="${IC.mint}"/><path d="M16 24 l6 6 11 -12" fill="none" stroke-width="4"/>`,
  lock: `<path d="M16 22 v-6 a8 8 0 0 1 16 0 v6" fill="none" stroke-width="4"/><rect x="11" y="21" width="26" height="20" rx="5" fill="${IC.butter}"/><circle cx="24" cy="30" r="2.5" fill="${IC.ink}" stroke="none"/><path d="M24 31 v4"/>`,
  target: `<circle cx="22" cy="26" r="16" fill="${IC.peach}"/><circle cx="22" cy="26" r="10" fill="${IC.cream}"/><circle cx="22" cy="26" r="4" fill="${IC.peach}"/><path d="M22 26 L40 8 M34 8 h6 v6" fill="none"/>`,
  play: `<path d="M14 9 L38 24 L14 39 Z" fill="${IC.lilac}"/>`,
  bookopen: `<path d="M24 13 C18 8, 10 9, 5 11 V38 C10 36, 18 36, 24 40 Z" fill="${IC.cream}"/><path d="M24 13 C30 8, 38 9, 43 11 V38 C38 36, 30 36, 24 40 Z" fill="${IC.lilac}"/><path d="M24 13 V40"/>`,
  arrow: `<path d="M8 24 H38 M28 14 L39 24 L28 34" fill="none" stroke-width="4"/>`,
  star: `<path d="M24 5 l5.6 11.6 12.7 1.8 -9.2 9 2.2 12.6 -11.3-6 -11.3 6 2.2-12.6 -9.2-9 12.7-1.8z" fill="${IC.butter}"/>`,
};
function icon(name, cls = "ico") {
  return `<svg class="${cls}" viewBox="0 0 48 48" aria-hidden="true" fill="none" stroke="${IC.ink}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${ICON_PATHS[name] || ""}</svg>`;
}
// swaps every <i data-ic="name"></i> in the page for its drawing
function paintIcons(rootEl = document) { rootEl.querySelectorAll("i[data-ic]").forEach((i) => { i.outerHTML = icon(i.dataset.ic, "ico " + (i.className || "")); }); }
