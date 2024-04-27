function home(): void {
  const app = document.querySelector("#app") as HTMLDivElement;
  const homeContainer = document.createElement("div") as HTMLDivElement;

  homeContainer.classList.add("home-container");

  const sloganOne = document.createElement("h2") as HTMLHeadingElement;
  sloganOne.innerHTML = "Start you day";

  const sloganTwo = document.createElement("h2") as HTMLHeadingElement;
  sloganTwo.innerHTML = "With a nice cup of coffee.";

  const button = document.createElement("button") as HTMLButtonElement;
  button.innerHTML = "Learn more";

  homeContainer.appendChild(sloganOne);
  homeContainer.appendChild(sloganTwo);
  homeContainer.appendChild(button);
  
  app.appendChild(homeContainer);
}

export default home;