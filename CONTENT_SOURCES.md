# Portfolio content

Updated September 2026.

- Experience, education, skills, publication titles and links: supplied September 2026 resume.
- VideoCommentary AI and Iikshana: latest resume, with public repository links. Iikshana latency is a target, not a measured result.
- FinFluent: supplied project report and public repository README. Personal contributions follow the report's contribution section. Conflicting anomaly precision/F1 values in the report are deliberately omitted.
- VisScore, Patient Voice AI, and Emotion Voice AI: public repository READMEs reviewed September 13, 2026. Patient Voice AI is described as a prototype with simulated refill status, not a live medical service.

Project sources:

- https://github.com/SurajPatelM/FinFluent
- https://github.com/SurajPatelM/video-commentary-ai
- https://github.com/SurajPatelM/iikshana-courtroom-accessibility
- https://github.com/SurajPatelM/VisScore
- https://github.com/SurajPatelM/kyron_medical_ai
- https://github.com/SurajPatelM/emotion-voice-ai

The selection omits duplicate development repositories, coursework forks, training repositories, and proposal scaffolding. It favors projects with substantial documented functionality.

## Editing

Content lives in `src/editable-stuff/config.js`; styles live in `src/scss/_portfolio.scss`. The resume download uses `src/editable-stuff/SurajPatelMutheGowda-Resume.pdf`. Portfolio text uses no em dashes. The supplied PDF is preserved unchanged.

## Local verification

```sh
npm ci
CI=true npm test -- --watchAll=false
npm run build
npm start
```

Build assets use the `/home/` base path for GitHub Pages. No publishing is performed by `npm run build`.

The checked-in `docs/` directory is refreshed from the verified production build for repositories configured to publish GitHub Pages from that folder.

## Google Scholar and organization logos

All four publications were matched to the supplied Google Scholar profile on September 13, 2026: https://scholar.google.com/citations?user=LyL6qLIAAAAJ&hl=en. Added the FRUCT AIOps paper and expanded the ATS title. Citation counts are omitted to avoid stale metrics.

Logos are bundled locally for reliable rendering:
- Amazon: https://commons.wikimedia.org/wiki/File:Amazon_2024.svg
- Apnimed: logo image extracted unchanged from the company presentation at https://apnimed.com/wp-content/uploads/2024/09/Apnimed-intro-Sept-2024_9.18.pdf
- Samsung: existing repository asset.
- Northeastern: https://www.northeastern.edu/wp-content/uploads/wordmark.png
- PES: https://pes.edu/wp-content/uploads/2025/06/PESU-new-logo.png

Expanded skills follow the supplied resume and the previously reviewed project repositories. The homepage offers a direct download of the supplied September 2026 resume; its PDF contents have not been rewritten.
