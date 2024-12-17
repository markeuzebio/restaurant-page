import hamburguer_homepage_image from "./imgs/hamburguer-homepage.png"

function loadHomePage() {
  const h2_subtitle = document.createElement("h2");
  const p_home_paragraph = document.createElement("p");
  const img_homepage = document.createElement("img");

  h2_subtitle.textContent = "This title is supposed to catch your attention";
  p_home_paragraph.textContent = "Of course, the title couldn't all by itself. It needs to be accompanied with a small amount of text which should make you feel tempted eat our food";
  img_homepage.src = hamburguer_homepage_image;
  img_homepage.width = "500";

  document.body.appendChild(h2_subtitle);
  document.body.appendChild(p_home_paragraph);
  document.body.appendChild(img_homepage);
}

export default loadHomePage;
