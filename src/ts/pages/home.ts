import { loadPage } from "../functions/pageLoad";
import menu from "./menu";

function home(): void {
  const app = document.querySelector("#app") as HTMLDivElement;
  const homeContainer = document.createElement("div") as HTMLDivElement;

  homeContainer.classList.add("home-container");
  homeContainer.classList.add("context");
  homeContainer.id = "home";

  const sloganOne = document.createElement("h2") as HTMLHeadingElement;
  sloganOne.innerHTML = "Start you day";

  const sloganTwo = document.createElement("h2") as HTMLHeadingElement;
  sloganTwo.innerHTML = "With a nice cup of coffee.";

  const button = document.createElement("button") as HTMLButtonElement;
  button.innerHTML = "Learn more";
  button.addEventListener("click", () => {
    loadPage(menu);
    const links = document.querySelectorAll(".navbar-link");
    links.forEach((link) => link.classList.remove("active"));
    
    const menuAnchor = document.querySelector(".navbar-link:nth-child(2)") as HTMLAnchorElement;
    menuAnchor.classList.add("active");
  });

  homeContainer.appendChild(sloganOne);
  homeContainer.appendChild(sloganTwo);
  homeContainer.appendChild(button);

  app.appendChild(homeContainer);
}

export default home;
