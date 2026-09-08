# KeDA Frontend Coding Assignment

Stockly is a responsive React landing page for the ERP concept described in the
KeDA frontend assignment. The implementation focuses on clear inventory and
profit messaging, three pricing tiers, simple forms, and readable code.

## Technology choices

- **Vite + React JavaScript** keeps the project small and matches the React JS requirement.
- **Plain CSS** handles the visual theme, responsive layout, and automatic dark mode.
- **Outfit Variable** is bundled locally to avoid an external font request.
- **Native HTML** provides anchor navigation, form validation, and the login dialog.
- **Vitest and React Testing Library** verify visible behavior.
- **ESLint** checks JavaScript and React code quality.

Next.js is not used because this is a single landing page without server rendering,
API routes, or complex routing. Tailwind, Sass, state-management, and animation
libraries are also unnecessary for the assignment.

## Run locally

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run test
npm run lint
npm run build
```

## Project structure

```text
src/
  algorithms/   Empty placeholders for Test 1
  assets/       Free unDraw illustrations
  components/   Landing page sections and login dialog
  App.jsx       Page composition and dialog state
  App.test.jsx  User-facing component tests
  styles.css    Responsive light and dark visual system
```

## Illustration sources

No AI-generated image is included. The project uses free illustrations from
[unDraw](https://undraw.co/) under the [unDraw license](https://undraw.co/license):

- [Analytics Setup](https://undraw.co/illustration/analytics-setup_ptrz)
- [Order Status](https://undraw.co/illustration/order-status_swsl)

The license permits free commercial and personal use without required attribution.

## Requirement checklist

- React JS landing page
- Responsive desktop, tablet, and mobile layout
- Visual direction based on the supplied KeDA reference
- About, Pricing, and Contact sections
- Basic, Business, and Entrepreneur tiers
- Front-end-only login dialog
- Front-end-only contact form
- Unit tests for implemented behavior
- Technology choices documented

## Test 1 status

The three algorithm exercises are intentionally not implemented. These files are
empty placeholders and are not imported or tested:

- `src/algorithms/sortDescending.js`
- `src/algorithms/maxSubarraySum.js`
- `src/algorithms/sumEvenNestedValues.js`

## Scope

This repository has no backend, database, real authentication, message delivery,
ERP dashboard, Excel export, charting engine, or AI integration. Product features
are represented only as landing-page plan benefits.
