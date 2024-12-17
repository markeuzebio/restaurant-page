const div_content = document.querySelector("#content");

function loadAboutPage() {
    const h2_subtitle = document.createElement("h2");

    h2_subtitle.textContent = "There is not an About section here yet";

    div_content.appendChild(h2_subtitle);
}

export default loadAboutPage;