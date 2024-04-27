import RestaurantLogo from "../assets/logo.svg?raw"

function navItem(
  text: string,
  active = false,
  onclick?: () => void
): HTMLElement {

  function resetLinks() {
    const links = document.querySelectorAll(".navbar-link");

    links.forEach(link => link.classList.remove("active"));
  }

  const link = document.createElement("a") as HTMLAnchorElement;

  link.innerHTML = text;
  link.classList.add("navbar-link");

  if (active) {
    link.classList.add("active");
  }

  // User specified click event
  if (onclick) {
    link.addEventListener("click", () => onclick());
  }

  // default click event
  link.addEventListener("click", () => {
    resetLinks();
    link.classList.add("active");
  })

  // For link active indicator.
  const underline = document.createElement("div") as HTMLDivElement;
  underline.classList.add("underline");
  link.appendChild(underline);

  return link;
}

function logo(): HTMLElement {
  const logoContainer = document.createElement("div") as HTMLDivElement;
  logoContainer.classList.add("logo-container");

  const logo = document.createElement('div') as HTMLDivElement;
  logo.classList.add("logo");
  logo.innerHTML = RestaurantLogo;

  const logoText = document.createElement("h1") as HTMLHeadingElement;
  logoText.innerHTML = "Aroma.";

  logoContainer.appendChild(logo);
  logoContainer.appendChild(logoText);

  return logoContainer;
}

function navbar(): void {
  const app = document.querySelector("#app") as HTMLDivElement;
  
  const navbarContainer = document.createElement("div") as HTMLDivElement;
  navbarContainer.classList.add("navbar")

  navbarContainer.appendChild(logo());

  const linksContainer = document.createElement("div") as HTMLDivElement;
  linksContainer.classList.add("links-container");

  const home = navItem("home", true);
  const menu = navItem("menu");
  const contact = navItem("contact");

  linksContainer.appendChild(home);
  linksContainer.appendChild(menu);
  linksContainer.appendChild(contact);

  navbarContainer.appendChild(linksContainer);

  app.appendChild(navbarContainer);
}

export default navbar;
