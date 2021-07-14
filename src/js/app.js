import 'bootstrap/dist/css/bootstrap-reboot.css';

import '../css/style.css';

import UI from "./config/ui.config";
import slider from "./slider";
import popup, { popupWindow } from "./popup";

const {tabs,} = UI;
window.addEventListener("DOMContentLoaded", () => {

// events
    tabs.forEach(elem => {
        onClick(elem);
    });
    slider({
        container: '.carousel',
        slide: '.carousel__element',
        prevArrow: '.carousel__arrow-left',
        nextArrow: '.carousel__arrow-right',

        wrapper: '.carousel__hider',
        field: '.carousel__list',

    });

    popup('[data-popup]', '.popup');


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


