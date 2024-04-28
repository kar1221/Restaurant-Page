function FadeoutSlideUp(duration: number): Promise<void> {
  const promise = new Promise<void>((resolve) => {
    const element = document.querySelector(".context") as HTMLElement;
    element.style.transition = `all ${duration}s ease-in-out`;
    
    element.style.opacity = "0";
    element.style.transform = "translateX(-50%)";

    setTimeout(() => {
      element.remove();
      resolve();
    }, duration * 1000);
  })

  return promise;
}

function FadeInSlideUp(duration: number, elementFn: () => void): void {
  elementFn();
  const element = document.querySelector(".context") as HTMLElement;
  element.style.transition = `all ${duration}s ease-in-out`;
  element.style.opacity = "0";
  element.style.transform = "translateX(50%)";

  setTimeout(() => {
    element.style.opacity = "1";
    element.style.transform = "translateX(0)";
  }, duration * 1000);
}

export { FadeoutSlideUp, FadeInSlideUp };
