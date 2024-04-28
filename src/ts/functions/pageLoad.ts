import { FadeInSlideUp, FadeoutSlideUp } from "./animation";

function loadPage(pageFn: () => void): void {

  FadeoutSlideUp(0.2).then(() => FadeInSlideUp(0.2, pageFn));
}

export { loadPage };
