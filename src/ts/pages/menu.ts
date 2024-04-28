import { menuData } from "../functions/type";
import data from "../menuData";

function menuItem(data: menuData, reverse = false): HTMLElement {
  const itemContainer = document.createElement("div") as HTMLDivElement;
  itemContainer.classList.add("item-container");

  if(reverse)
    itemContainer.classList.add("reverse");

  const imageContainer = document.createElement("div") as HTMLDivElement;
  imageContainer.classList.add("image-container");

  const image = document.createElement("img") as HTMLImageElement;
  image.src = data.imgSrc;

  imageContainer.appendChild(image);

  const textContainer = document.createElement("div") as HTMLDivElement;
  textContainer.classList.add("text-container");

  const title = document.createElement("h2") as HTMLHeadingElement;
  title.innerHTML = data.title;

  const description = document.createElement("p") as HTMLParagraphElement;
  description.innerHTML = data.description;

  textContainer.appendChild(title);
  textContainer.appendChild(description);

  itemContainer.appendChild(imageContainer)
  itemContainer.appendChild(textContainer);

  return itemContainer;
}

function menu(): void {
  const app = document.querySelector("#app") as HTMLDivElement;

  const menuContainer = document.createElement("div") as HTMLDivElement;
  menuContainer.className = "menu-container context";
  menuContainer.id = "menu";

  data.forEach((d, index) => {
    const isReversed = index % 2 === 1;
    menuContainer.appendChild(menuItem(d, isReversed));
  });

  app.appendChild(menuContainer);
}

export default menu;