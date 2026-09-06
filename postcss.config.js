// Tailwind v4 runs via @tailwindcss/vite, so no PostCSS plugins are needed here.
// This file exists to stop PostCSS from walking up and picking up a parent
// directory's (Tailwind v3) postcss.config.js.
export default { plugins: {} };
