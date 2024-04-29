function contact() {
  const app = document.querySelector("#app") as HTMLElement;

  const contactContainer = document.createElement("div") as HTMLDivElement;
  contactContainer.classList.add("contact-container");
  contactContainer.classList.add("context");

  const contactTitle = document.createElement("h1") as HTMLHeadingElement;
  contactTitle.innerHTML = "Question?";
  contactContainer.appendChild(contactTitle);

  const contactText = document.createElement("p") as HTMLParagraphElement;
  contactText.innerHTML = "Feel free to contact us.";
  
  const contactForm = document.createElement("form") as HTMLFormElement;
  contactForm.classList.add("contact-form");

  contactForm.appendChild(contactTitle);
  contactForm.appendChild(contactText);

  const nameInput = document.createElement("input") as HTMLInputElement;
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.placeholder = "Full Name";
  nameInput.autocomplete = "on";

  const emailInput = document.createElement("input") as HTMLInputElement;
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.placeholder = "Email";
  emailInput.autocomplete = "on";

  const messageInput = document.createElement("textarea") as HTMLTextAreaElement;
  messageInput.name = "message";
  messageInput.placeholder = "Message";
  messageInput.cols = 30;
  messageInput.rows = 5;

  const submitButton = document.createElement("button") as HTMLButtonElement;
  submitButton.type = "submit";
  submitButton.innerHTML = "Submit";
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
  });

  contactForm.appendChild(nameInput);
  contactForm.appendChild(emailInput);
  contactForm.appendChild(messageInput);
  contactForm.appendChild(submitButton);

  contactContainer.appendChild(contactForm);

  app.appendChild(contactContainer);
}

export default contact;