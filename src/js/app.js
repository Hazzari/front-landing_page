import 'bootstrap/dist/css/bootstrap-reboot.css';
import '../css/style.css';

import UI from "./config/ui.config";

const {tabs,} = UI;
window.addEventListener("DOMContentLoaded", () => {

// events
    tabs.forEach(elem => {
        onClick(elem);
    });

// handlers

    function onClick(elem) {
        elem.addEventListener("click", () => {
            tabs.forEach(otherElem => {
                if (otherElem.classList.contains("tabs__item_active")) {
                    otherElem.classList.remove("tabs__item_active");
                }
            });

            elem.classList.add("tabs__item_active");

        });

    }
});
