import { fadeOut, fadeIn } from "./animation";

function loadPage(pageFn: () => void): void {
  const duration = 0.15;

  fadeOut(duration / 2).then(() => fadeIn(duration / 2, pageFn));
}

export { loadPage };
