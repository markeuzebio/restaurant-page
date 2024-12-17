import hamburguer_homepage_image from "./imgs/hamburguer-homepage.png";
import "./styles.css";

const div_content = document.querySelector("#content");

function loadMenuPage() {
    const h2_subtitle = document.createElement("h2");
    const main_menu_container = document.createElement("main");
    const div_menu_cards = [];

    // Just create 6 div menu cards
    for(let i = 0 ; i < 6 ; i++) {
        const img_card_image = document.createElement("img");
        const p_card_description = document.createElement("p");
        div_menu_cards[i] = document.createElement("div");

        // Values for recent created elements
        img_card_image.src = hamburguer_homepage_image;
        img_card_image.width = "300";
        p_card_description.textContent = "A fancy hamburguer";

        // Apply class to recent created card
        div_menu_cards[i].classList.add("menu-card");

        div_menu_cards[i].appendChild(img_card_image);    
        div_menu_cards[i].appendChild(p_card_description);
        main_menu_container.appendChild(div_menu_cards[i]);
    }

    // Apply class to menu-container
    main_menu_container.classList.add("menu-container");

    div_content.appendChild(main_menu_container);
}

export default loadMenuPage;