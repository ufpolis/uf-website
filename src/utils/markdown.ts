import { marked } from 'marked';

export function toHtml(md: string | null | undefined): string {
  if (!md) return '';
  return marked.parse(md) as string;
}

// Renders Markdown, adds class="lede" to the first <p>, and injects a gold fleuron
// ornament (❦) after the drop-cap letter positioned to its upper-left.
//
// Positioning is inlined rather than class-driven so it survives the brief CSS-swap
// gap that Astro's ClientRouter (View Transitions) creates on back-navigations.
// Color and font-size remain in .lede-ornament in global.css (purely decorative).
const ORNAMENT_STYLE = 'position:absolute;top:0;left:0;transform:translateX(-100%);pointer-events:none';

export function toHtmlLede(md: string | null | undefined): string {
  const html = toHtml(md);
  if (!html) return '';

  return html.replace(/^<p>([\s\S]*?)<\/p>/, (_match, content: string) => {
    if (!content || content.length < 2) return `<p class="lede" style="position:relative">${content}</p>`;
    const firstChar = content[0];
    const rest = content.slice(1);
    return `<p class="lede" style="position:relative">${firstChar}<span class="lede-ornament" aria-hidden="true" style="${ORNAMENT_STYLE}">❦</span>${rest}</p>`;
  });
}

// Returns only the first <p> from toHtmlLede output (with drop-cap + ornament).
// Use this to render the opening paragraph before a pull quote.
export function toHtmlLedeFirstPara(md: string | null | undefined): string {
  const html = toHtmlLede(md);
  if (!html) return '';
  const match = html.match(/^<p[\s\S]*?<\/p>/);
  return match ? match[0] : html;
}

// Returns everything after the first <p> from plain toHtml output.
// Use this to render the remaining paragraphs after a pull quote.
export function toHtmlAfterFirstPara(md: string | null | undefined): string {
  const html = toHtml(md);
  if (!html) return '';
  return html.replace(/^<p>[\s\S]*?<\/p>\n?/, '');
}
