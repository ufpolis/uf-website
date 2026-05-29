<!--
  CLAUDE.md  —  PROJECT INSTRUCTIONS FOR CLAUDE CODE
  Project: POLIS UF (Pi Lambda Sigma, University of Florida chapter) website
  This file is read automatically by Claude Code at the start of every session.
  It is written as HTML so it renders cleanly in a browser, but it functions as
  the canonical project brief. Keep it updated as the single source of truth.
-->
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>CLAUDE.md — POLIS UF Website Project Brief</title>
</head>
<body>

<h1>POLIS UF Website — Project Brief for Claude Code</h1>

<p><strong>Read this entire file before doing anything.</strong> It is the single source of
truth for this project. When the user asks for work, check this file first. If a request
conflicts with something here, pause and ask. Keep this file updated as decisions change.</p>

<hr>

<h2>1. What we are building</h2>

<p>A public marketing and recruitment website for <strong>POLIS UF</strong>, the founding
chapter of <strong>Pi Lambda Sigma</strong> (also called POLIS) at the University of Florida.
Pi Lambda Sigma is a nonpartisan pre-professional government and pre-law society for students
interested in law, public service, policy, government, and leadership.</p>

<p>The chapter is brand new and currently recruiting its <strong>Founding Class</strong>. The
site has no general members yet, so several pages are intentionally forward-looking ("planned,"
"coming soon," "building our network") rather than showcasing past activity.</p>

<p><strong>Reference sites</strong> (match structure and professional tone, do not copy text or
assets): columbiapolis.com and upennpolis.com. The site should feel polished, professional,
prestigious, welcoming, and founding-class focused.</p>

<h2>2. Tech stack (do not deviate without asking)</h2>

<ul>
  <li><strong>Framework:</strong> Astro (latest stable). Static output. No server runtime.</li>
  <li><strong>Styling:</strong> Tailwind CSS via the official Astro Tailwind integration.</li>
  <li><strong>Images:</strong> Astro's built-in <code>&lt;Image /&gt;</code> and
      <code>&lt;Picture /&gt;</code> components from <code>astro:assets</code>. This is critical
      for performance (see Section 7).</li>
  <li><strong>Content/CMS (later phase, not first run):</strong> Sanity. Do NOT wire this up yet.
      For the first build, content lives in structured local data files (see Section 6) so the
      site is fully functional standalone.</li>
  <li><strong>Applications:</strong> External Google Form (link below). Embedded or linked, not
      built natively.</li>
  <li><strong>Hosting:</strong> Netlify free tier, auto-deploying from GitHub on every push.</li>
  <li><strong>Repo:</strong> GitHub, repo name <code>uf-website</code>.</li>
  <li><strong>Domain:</strong> Custom domain to be purchased later; build domain-agnostic.</li>
</ul>

<p><strong>Why this stack:</strong> Astro ships near-zero JavaScript, builds to static HTML, and
has best-in-class image optimization. This keeps the site fast, accessible, cheap (free hosting),
and easy to hand off to a non-technical board. There is no server, database, or plugin layer to
maintain.</p>

<h2>3. Hard requirements (non-negotiable)</h2>

<ul>
  <li><strong>Accessibility:</strong> Target WCAG 2.2 Level AA. This is a hard requirement, not a
      nice-to-have. See Section 8 for the concrete checklist.</li>
  <li><strong>Modularity:</strong> A non-technical board member must be able to add an event, swap
      a headshot, or edit copy by editing ONE clearly-commented data file, without touching layout
      code. Structure everything around this goal.</li>
  <li><strong>Ownership:</strong> All content original to POLIS UF. Do not copy text, images, or
      code from the reference sites. The provided copy (Section 5) is the approved source text.</li>
  <li><strong>No fabrication:</strong> Do not invent member names, bios, events, dates, statistics,
      or partner organizations. Use the provided content. Where something is unknown, use a clearly
      labeled placeholder (e.g. <code>[EVENT NAME]</code>, <code>placeholder-headshot.jpg</code>).</li>
  <li><strong>No em-dashes</strong> anywhere in site copy. Use commas, periods, or restructure.</li>
</ul>

<h2>4. Site structure and navigation</h2>

<p>Primary navigation, left to right:</p>

<ol>
  <li><strong>Home</strong></li>
  <li><strong>Network</strong></li>
  <li><strong>Members</strong> (dropdown — note: called "Members," NOT "Brothers," for
      inclusivity and professionalism)
    <ul>
      <li>Executive Board</li>
      <li>Active Members</li>
      <li>Alumni</li>
    </ul>
  </li>
  <li><strong>Programming</strong></li>
  <li><strong>Philanthropy</strong></li>
  <li><strong>Join</strong></li>
  <li><strong>Contact</strong></li>
</ol>

<p>The Members dropdown must be keyboard-accessible and screen-reader friendly (see Section 8).</p>

<h2>5. Page-by-page content (approved source text)</h2>

<h3>Home</h3>
<p>Hero uses the <code>polis_main</code> image asset. Hero text:</p>
<blockquote>
  <p><strong>Pi Lambda Sigma</strong></p>
  <p>The University of Florida's foremost pre-professional government society for students
  interested in government, policy, and public service.</p>
</blockquote>

<p>Strong call-to-action buttons: <strong>Apply Now</strong>, <strong>Meet the Executive
Board</strong>, <strong>Follow Us on Instagram</strong>. Emphasize that we are recruiting our
Founding Class.</p>

<p><strong>Who We Are</strong></p>
<p>Pi Lambda Sigma, also known as POLIS, was founded in 2016 by Cornell alumnus Sam Barnett as a
pre-professional government society for students interested in public service, government, policy,
and legal studies. Since its founding, POLIS has grown into a network of chapters at universities
including the University of Pennsylvania, Columbia University, Dartmouth College, and now the
University of Florida.</p>
<p>POLIS UF brings together students from all majors who are passionate about public service and
the institutions that shape society. Our mission is to create a strong support system for students
pursuing careers in public service, politics, legal studies, government, policy, advocacy, and
civic leadership while providing professional development opportunities, mentorship, and hands-on
experience.</p>
<p>Our fellows have diverse interests ranging from legal studies and foreign policy to economics,
education, public health, immigrant rights, climate justice, and community advocacy. Through this
diversity of interests and experiences, POLIS UF aims to make public service more accessible,
inclusive, and representative while building a network of future leaders committed to ethical
public service leadership.</p>

<p><strong>Why POLIS?</strong></p>
<p>POLIS UF is more than a professional society. It is a community for students who want to lead,
serve, and shape the future of public leadership. Through professional development, mentorship,
advocacy, service, and networking opportunities, POLIS UF prepares students to pursue careers in
public service, politics, legal studies, government, policy, and civic leadership.</p>
<p>As a Founding Fellow, you will not only join POLIS UF. You will help build its culture,
traditions, programming, and long-term impact at the University of Florida.</p>

<p><strong>Mission</strong></p>
<p>Our mission is to build a strong community of students pursuing careers in public service,
politics, law, government, and policy while providing professional development opportunities,
mentorship, and hands-on experience.</p>
<p>POLIS UF is committed to preparing students for careers in law, government, policy, public
service, and civic leadership while making those fields more accessible, inclusive, and
representative. As a nonpartisan pre-professional society, we bring together students from all
majors who are passionate about public service, ethical leadership, and the institutions that
shape society.</p>
<p>Our work goes beyond traditional professional development. POLIS UF aims to build a support
network for future leaders years before they enter the field, creating a community where students
can develop the skills, confidence, and connections needed to pursue careers in public service and
beyond.</p>

<p><strong>Our mission is centered on three key goals:</strong></p>
<ul>
  <li><strong>Public Service &amp; Ethical Leadership.</strong> We aim to cultivate future leaders
  who are committed to serving their communities with integrity, responsibility, and purpose.
  Through speaker events, policy discussions, advocacy projects, and hands-on public service
  initiatives, POLIS UF encourages students to think critically about how leadership can be used
  to create stronger institutions and better policies.</li>
  <li><strong>Inclusive Governance &amp; Accessibility.</strong> POLIS UF is committed to making
  careers in government, law, policy, and public service more accessible to students from all
  backgrounds. We recognize that many professional spaces have systemic barriers, including unpaid
  or low-paid internships, limited mentorship, lack of access to professional resources, and
  unequal exposure to networking opportunities. Our goal is to help reduce those barriers by
  connecting students with guidance, resources, and support.</li>
  <li><strong>Professional Development with Public Purpose.</strong> Through workshops, alumni and
  guest speaker panels, recruitment resources, networking opportunities, and mentorship, POLIS UF
  helps students build practical career skills while staying grounded in a larger commitment to
  public purpose. Our programming focuses on resume building, interview preparation, elevator
  pitches, networking, internship searches, and professional confidence.</li>
</ul>
<p>As a founding chapter, POLIS UF seeks to build more than a professional organization. We are
building a community of students who care about service, representation, and the future of public
leadership.</p>

<h3>Network</h3>
<p>Large header: <strong>"Where We Work."</strong> A responsive grid of picture assets showing
where members work and intern. Include <strong>10 placeholder images</strong> now, since more will
arrive over time. Drive the grid from a data file so the board can add or remove logos easily.</p>

<h3>Members → Executive Board</h3>
<p>Founding executive board members, each with: headshot, name, position, major/year, short bio.
Drive from a data file (see Section 6). Use placeholder headshots and
<code>[NAME] / [POSITION] / [MAJOR, YEAR] / [BIO]</code> placeholders until real content is
supplied.</p>

<h3>Members → Active Members</h3>
<p>Headline: <strong>"Join Our Founding Class."</strong> Explain that POLIS UF is currently
recruiting its first founding class of active members, and that founding members will help shape
the chapter's culture, programming, traditions, and professional network from the ground up.
Include an <strong>"Apply to Join POLIS UF"</strong> button (links to the Google Form).</p>

<h3>Members → Alumni</h3>
<p>Headline: <strong>"Building Our Alumni Network."</strong> Explain that this page will eventually
highlight alumni, professional placements, and the long-term network created by our founding
members.</p>

<h3>Programming</h3>
<p>Frame everything as <strong>upcoming/planned programming</strong>, not past events. Provide a
standardized, easy-to-update template. Build a <strong>3-event scroll/carousel</strong> with design
placeholders, each event card containing: <strong>EVENT NAME, EVENT DESCRIPTION, DATE, LOCATION,
IMAGE.</strong> Drive from a data file so the board can add events trivially.</p>
<p>Example event types to seed as placeholders: law panels, public service panels, resume and
LinkedIn workshops, voter registration / civic engagement events, speaker panels, coffee chats,
networking nights, professional headshot events, law school admissions panels.</p>

<h3>Philanthropy</h3>
<p>Tagline: <strong>"Service rooted in public purpose."</strong></p>
<p>As University of Florida students and members of the Gainesville community, POLIS UF seeks to
give back in meaningful and impactful ways that reflect our commitment to public service, ethical
leadership, education, and inclusive governance. Our philanthropy efforts are designed to address
real community needs while helping students understand the role of service in building stronger
institutions and more equitable communities.</p>
<p>POLIS UF's philanthropic work goes beyond traditional charitable drives. While we value
hands-on service and community donations, our broader goal is to connect service with advocacy,
accessibility, education, and public purpose. Through community partnerships, civic engagement
initiatives, immigrant rights programming, professional clothing drives, policy proposals, and
structured service requirements, we aim to support both the Gainesville community and the students
preparing to serve it.</p>

<p><strong>Our Philanthropy Focus Areas</strong></p>
<ul>
  <li><strong>Community Engagement.</strong> Partnering with local organizations, schools,
  nonprofits, and public service groups to support Gainesville residents through meaningful service
  opportunities.</li>
  <li><strong>Education &amp; Resource Access.</strong> Creating programming that expands access to
  educational, professional, and civic resources for students and community members. This may
  include workshops, resource guides, mentorship opportunities, and initiatives that help reduce
  barriers to professional and public service careers.</li>
  <li><strong>Immigrant Rights &amp; Inclusive Advocacy.</strong> Developing programming and
  partnerships that support immigrant communities, highlight immigrant rights issues, and encourage
  students to engage with the legal, policy, and human impact of immigration-related advocacy.</li>
  <li><strong>Policy Proposals &amp; Civic Engagement.</strong> Encouraging members to research
  community issues, develop policy proposals, and participate in civic engagement projects that
  promote informed, responsible, and solution-oriented public service.</li>
  <li><strong>Access to Professional Opportunity.</strong> Organizing initiatives such as
  professional clothing drives, career-readiness workshops, networking support, and mentorship
  opportunities to help reduce barriers for students pursuing careers in law, government, policy,
  and public service.</li>
  <li><strong>Structured Service Requirements.</strong> Requiring members to participate in service
  opportunities each semester to ensure that POLIS UF's commitment to public service is active,
  consistent, and connected to the Gainesville community.</li>
</ul>

<p><strong>Future Initiatives.</strong> As a founding chapter, POLIS UF is currently developing its
first philanthropy and advocacy initiatives. Future projects may include professional clothing
drives, voter registration and education events, immigrant rights programming, Gainesville
nonprofit partnerships, community service days, policy proposal projects, educational workshops,
and resource-building efforts for students entering public service fields.</p>

<h3>Join</h3>
<p>Headline: <strong>Join POLIS UF.</strong> Application Google Form:
<code>https://docs.google.com/forms/d/e/1FAIpQLSe1g7HSRXR4G9rdsw4vzKg1itcRVdx518P4UVzI7e3AxmbtOg/viewform</code></p>
<p>"Applications for our Founding Class are coming soon."</p>
<p>For students interested in becoming a POLIS Fellow, recruitment will take place at the beginning
of each Fall and Spring semester. Our recruitment process is designed to help us get to know
applicants beyond their resumes and better understand their interests in public service, politics,
law, government, policy, advocacy, and civic leadership.</p>
<p>The recruitment process will include an information session, coffee chats, an online
application, interview rounds, and invite-only recruitment events designed to help applicants learn
more about POLIS UF and the community we are building.</p>
<p>As a founding chapter, POLIS UF is looking for students who are passionate, authentic,
ambitious, and committed to growing as future public service leaders. Students from all majors and
backgrounds are encouraged to apply.</p>
<p>"Recruitment timeline coming soon." Include a placeholder timeline component the board can fill
in later.</p>

<p><strong>Frequently Asked Questions</strong></p>
<ul>
  <li><strong>Do I have to be a political science or pre-law student to apply?</strong> No. POLIS UF
  is open to students from all majors who are interested in public service, politics, law,
  government, policy, advocacy, civic engagement, or related fields.</li>
  <li><strong>What is a POLIS Fellow?</strong> A POLIS Fellow is an active member of Pi Lambda
  Sigma. Fellows participate in professional development, service initiatives, speaker events,
  mentorship, advocacy projects, and chapter programming.</li>
  <li><strong>What does it mean to join the Founding Class?</strong> Joining the Founding Class
  means becoming part of POLIS UF's first active member class. Founding Fellows will help shape the
  chapter's culture, traditions, programming, and long-term impact at the University of Florida.</li>
  <li><strong>Is POLIS UF partisan?</strong> No. POLIS UF is a nonpartisan pre-professional society
  focused on public service, ethical leadership, professional development, and civic engagement.</li>
  <li><strong>Do I need prior experience in law, government, or public service?</strong> No. We
  value passion, curiosity, authenticity, professionalism, and a willingness to grow.</li>
  <li><strong>Who can I contact with questions?</strong> If you have any questions about
  recruitment, applications, or membership, please reach out to us through Instagram, LinkedIn, or
  email.</li>
</ul>
<p>At the bottom of the page, include an <strong>"Apply Now"</strong> button linking to the Google
Form.</p>

<h3>Contact</h3>
<p>Clickable buttons that directly open each channel:</p>
<ul>
  <li><strong>Follow us on Instagram</strong> — @ufpolis (https://www.instagram.com/ufpolis)</li>
  <li><strong>Connect with us on LinkedIn</strong> —
  https://www.linkedin.com/company/university-of-florida-polis/</li>
  <li><strong>Email us</strong> — ufpolis@gmail.com (use a <code>mailto:</code> link)</li>
</ul>

<h2>6. Modularity model (how the board edits the site)</h2>

<p>This is the most important architectural goal after accessibility. The board is non-technical.
Every piece of changeable content must live in a <strong>single, well-commented data file</strong>,
separated from layout. Suggested structure (adjust to Astro conventions, but keep the spirit):</p>

<ul>
  <li><code>src/data/executiveBoard.json</code> — array of {name, position, major, year, bio,
      headshot}.</li>
  <li><code>src/data/events.json</code> — array of {name, description, date, location, image}.</li>
  <li><code>src/data/network.json</code> — array of {orgName, logo, alt}.</li>
  <li><code>src/data/site.json</code> — global values: Instagram URL, LinkedIn URL, email,
      application form URL, so a link change happens in ONE place.</li>
</ul>

<p>At the top of every data file, include a plain-English comment block explaining exactly how to
add, edit, or remove an entry, written for someone who has never coded. Pages map over these arrays
to render cards. Adding an event should never require editing a <code>.astro</code> layout file.</p>

<p>Also produce, at the end of the first build, a top-level <code>EDITING-GUIDE.md</code> written
for non-technical board members, covering: how to edit each data file, how to add an image, how to
push a change, and how the site redeploys automatically.</p>

<h2>7. Image and performance strategy (answers the ~50-image concern)</h2>

<p>The site will eventually hold roughly 50 images. GitHub only stores source files and does not
serve them to visitors; Netlify serves optimized output from its CDN. Still, follow all of these so
the site stays fast and the repo stays lean:</p>

<ul>
  <li><strong>Always use Astro's <code>&lt;Image /&gt;</code> / <code>&lt;Picture /&gt;</code></strong>
      from <code>astro:assets</code>. Never use a raw <code>&lt;img&gt;</code> tag for content
      images. Astro auto-converts to WebP/AVIF, generates responsive <code>srcset</code> sizes, and
      strips metadata at build time.</li>
  <li><strong>Lazy-load everything below the fold.</strong> Set <code>loading="lazy"</code> on all
      non-hero images (Network grid, lower-page content). The hero image
      (<code>polis_main</code>) may use <code>loading="eager"</code> and
      <code>fetchpriority="high"</code>.</li>
  <li><strong>Always set explicit width and height</strong> on every image to reserve space and
      prevent layout shift (also a Lighthouse and WCAG win).</li>
  <li><strong>Source image discipline:</strong> originals committed to the repo should be capped at
      about 1600px on the long edge and compressed before commit. Add this rule to
      <code>EDITING-GUIDE.md</code> so the board keeps the repo lean. Store source images under
      <code>src/assets/</code> (so Astro processes them), NOT in <code>public/</code> (which serves
      files unoptimized).</li>
  <li><strong>Provide a reusable image component</strong> wrapping <code>&lt;Image /&gt;</code> that
      requires an <code>alt</code> prop, so no image can ship without alt text.</li>
  <li><strong>Placeholders:</strong> for the 10 Network placeholders, founding board headshots, and
      event images, generate lightweight local placeholder assets (simple labeled SVG or solid
      blocks). Do not pull external/stock images.</li>
</ul>

<p>Net effect: each visitor downloads small, modern-format, lazy-loaded images from a CDN, so a
50-image site still loads quickly on mobile.</p>

<h2>8. Accessibility checklist (WCAG 2.2 AA target)</h2>

<ul>
  <li>Semantic HTML: one <code>&lt;h1&gt;</code> per page, logical heading order, landmark elements
      (<code>header</code>, <code>nav</code>, <code>main</code>, <code>footer</code>).</li>
  <li>Skip-to-content link as the first focusable element.</li>
  <li>The Members dropdown must work with keyboard (Enter/Space to open, Escape to close, arrow
      keys to move, focus trapped sensibly) and expose <code>aria-expanded</code> /
      <code>aria-haspopup</code>. It must also be usable on touch and not rely on hover alone.</li>
  <li>All images have meaningful <code>alt</code> text; decorative images use empty
      <code>alt=""</code>.</li>
  <li>Color contrast at least 4.5:1 for normal text, 3:1 for large text and UI components. Verify
      the brand palette against this; if a brand color fails, use it for large elements only and
      flag it.</li>
  <li>Visible focus indicators on every interactive element. Never remove focus outlines without a
      visible replacement.</li>
  <li>All buttons and links have descriptive, unique accessible names (no bare "click here").</li>
  <li>External links that open new tabs announce it; use <code>rel="noopener noreferrer"</code>.</li>
  <li>The site is fully operable at 200% zoom and on a 320px-wide viewport.</li>
  <li>Run axe DevTools, Lighthouse, and WAVE before each deploy; fix all AA-level failures.</li>
</ul>

<h2>9. Design direction</h2>

<ul>
  <li><strong>Aesthetic:</strong> refined, editorial, institutional-prestige. Think a clean
      collegiate/government feel: confident headings, generous whitespace, restrained palette,
      strong photography. Not flashy, not generic startup. Intentional and polished.</li>
  <li><strong>Typography (DECIDED):</strong> use a prestigious web serif rather than literal Times
      New Roman. Headings: <strong>EB Garamond</strong> (Google Font). Body: a clean, highly
      readable companion. Use <strong>Source Sans 3</strong> (Google Font) for body and UI text, OR
      EB Garamond for body too if a fully-serif editorial look is preferred. Load fonts locally or
      via Google Fonts with <code>font-display: swap</code>. Set both as CSS variables
      (<code>--font-heading</code>, <code>--font-body</code>) so they can be swapped in one place.
      Do not hardcode font names across components.</li>
  <li><strong>Color (DECIDED):</strong> official POLIS UF brand palette below. Define every color as
      a CSS variable / Tailwind theme token in one config file. Do not scatter hex codes through
      components.
    <ul>
      <li><strong>Gold</strong> <code>#ce9537</code> — primary accent (CTAs, links, highlights).</li>
      <li><strong>Dark Blue</strong> <code>#152e46</code> — primary brand color (headers, footer,
          nav, dark sections).</li>
      <li><strong>Gray</strong> <code>#d9d9d9</code> — neutral backgrounds, dividers, card
          surfaces.</li>
      <li><strong>Light Blue</strong> <code>#b9d9eb</code> — secondary accent / soft section
          backgrounds. NOTE: not an official brand color; this is Columbia Blue, used on the
          reference site, supplied here as a sensible approximation. Board may adjust.</li>
      <li><strong>White</strong> <code>#ffffff</code> — primary background and light text.</li>
      <li><strong>Black</strong> <code>#000000</code> — body text where pure black is wanted; prefer
          Dark Blue for large headings.</li>
    </ul>
    <strong>Contrast warning:</strong> Gold <code>#ce9537</code> on white is roughly 2.9:1, which
    FAILS WCAG AA for normal body text. Use Gold only for large text (24px+ / 19px+ bold), icons,
    borders, and button fills with dark text, NOT for small body copy on white. Dark Blue on white
    and white on Dark Blue both pass comfortably. Verify every combination before shipping.</li>
  <li><strong>Layout:</strong> mirror the reference sites' structure (full-width hero, section
      headers, card grids, clear CTAs) without copying their exact design or content.</li>
  <li><strong>Responsive:</strong> mobile-first. Test at 320px, 768px, 1024px, 1440px.</li>
</ul>

<h2>10. Brand assets on hand</h2>

<ul>
  <li><code>polis_main</code> — primary logo / hero image. Use on the Home hero and where a wide
      lockup fits.</li>
  <li><code>polis_square</code> — square logo. Use for the nav bar, favicon source, and social
      card.</li>
  <li>A full brand kit (colors, fonts) exists and is approved; values to be transcribed into the
      Tailwind theme config (see Section 11).</li>
</ul>

<h2>11. Open decisions / placeholders (do not invent answers)</h2>

<ul>
  <li><strong>Font: RESOLVED.</strong> EB Garamond headings, Source Sans 3 body (see Section 9).</li>
  <li><strong>Brand colors: RESOLVED.</strong> Palette in Section 9. Light Blue is an approximation
      (Columbia Blue) the board may adjust.</li>
  <li><strong>Application form: RESOLVED.</strong> Google Form (link in Section 5, Join). Not Tally.</li>
  <li><strong>Executive board content:</strong> names, positions, majors/years, bios, headshots not
      yet supplied. Use labeled placeholders.</li>
  <li><strong>Network logos and event details:</strong> use placeholders; real assets arrive over
      time.</li>
  <li><strong>Pi Lambda Sigma national branding rules:</strong> user is confirming whether national
      has naming, logo, or approval requirements. Do not finalize logo usage or chapter-name
      formatting until confirmed.</li>
</ul>

<h2>12. Build order (first run)</h2>

<ol>
  <li>Scaffold Astro + Tailwind. Confirm <code>npm run dev</code> serves a blank site locally.</li>
  <li>Set up the Tailwind theme config with CSS-variable color and font tokens (placeholder values,
      clearly marked).</li>
  <li>Build shared layout: header with accessible Members dropdown, footer, skip link, reusable
      accessible <code>&lt;Image&gt;</code> wrapper.</li>
  <li>Create the data files in <code>src/data/</code> with non-technical comment blocks.</li>
  <li>Build all pages/routes using the approved copy in Section 5, mapping over data files.</li>
  <li>Add the 10 Network placeholders, board placeholders, and 3 seed events.</li>
  <li>Wire CTAs and Contact links from <code>site.json</code>.</li>
  <li>Run the Section 8 accessibility checklist and fix failures.</li>
  <li>Write <code>EDITING-GUIDE.md</code> and update the <code>README</code>.</li>
  <li>Commit and push to the <code>uf-website</code> GitHub repo so Netlify deploys a preview.</li>
</ol>

<h2>13. Working agreement with the user</h2>

<ul>
  <li>The user (Luke) is the technical lead; the board is non-technical. Optimize handoff.</li>
  <li>When content or a decision is missing, use a clearly labeled placeholder and list it, rather
      than inventing facts.</li>
  <li>Prefer small, reviewable commits with clear messages.</li>
  <li>Keep this CLAUDE.md updated when decisions are made (especially Section 11).</li>
  <li>No em-dashes in any site copy or generated content.</li>
</ul>

</body>
</html>
