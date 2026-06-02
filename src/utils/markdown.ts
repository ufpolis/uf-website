import { marked } from 'marked';

export function toHtml(md: string | null | undefined): string {
  if (!md) return '';
  return marked.parse(md) as string;
}
