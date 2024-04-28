function fadeOut(duration: number): Promise<void> {
  // Use promise so that we can chain two function using .then()
  // To prevent pages get inserted before getting removed.
  const promise = new Promise<void>((resolve) => {
    const element = document.querySelector(".context") as HTMLElement;
  
    element.style.transition = `all ${duration}s ease-in-out`;
    element.style.opacity = "0";
  
    setTimeout(() => {
      element.remove();
      resolve();
    }, duration * 1000);
  })
  return promise;
}

function fadeIn(duration: number, elementFn: () => void) {
  elementFn();
  const target = document.querySelector(".context") as HTMLElement;
  target.style.transition = `all ${duration}s ease-in-out`;
  target.style.opacity = "0";

  setTimeout(() => {
    target.style.opacity = "1";
  }, duration * 1000);
}

export { fadeIn, fadeOut };