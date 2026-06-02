import type { APIRoute, GetStaticPaths } from 'astro';
import eventsData from '../../data/events.json';

// Only generate .ics files for events that have confirmed dates.
// When startISO is null the board hasn't set a date yet — no file is generated.
const scheduledEvents = (eventsData.events as any[]).filter(
  (e) => e.startISO && e.slug
);

export const getStaticPaths: GetStaticPaths = () =>
  scheduledEvents.map((e) => ({ params: { slug: e.slug } }));

export const GET: APIRoute = ({ params }) => {
  const event = scheduledEvents.find((e) => e.slug === params.slug);
  if (!event) return new Response('Not found', { status: 404 });

  // Compact ISO format required by iCalendar: 20260604T180000 (no separators, no Z = local time)
  const fmt = (iso: string) => iso.replace(/[-:]/g, '').split('.')[0];

  const uid = `${event.slug}-polis-uf@ufpolis.com`;

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'CALSCALE:GREGORIAN',
    'PRODID:-//POLIS UF//Events//EN',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTART:${fmt(event.startISO)}`,
    `DTEND:${fmt(event.endISO)}`,
    `SUMMARY:${event.name}`,
    `DESCRIPTION:${(event.description as string).replace(/\n/g, '\\n')}`,
    `LOCATION:${event.location}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ];

  return new Response(lines.join('\r\n'), {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': `attachment; filename="${event.slug}.ics"`,
    },
  });
};
