import 'bootstrap/dist/css/bootstrap-reboot.css';
import smoothscroll from 'smoothscroll-polyfill';

import '../css/style.css';

import UI from "./config/ui.config";
import slider from "./slider";
import { popupWindow as popup } from "./popup";
import forms from "./form";

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
    smoothscroll.polyfill();
    smoothScrolling();
    forms('form')


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

    function smoothScrolling() {
        const anchors = document.querySelectorAll('a[href^="#"]');

        anchors.forEach(anchor => {

            anchor.addEventListener("click", function (e) {
                e.preventDefault(); // Предотвратить стандартное поведение ссылок
                // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
                const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';
                // Плавная прокрутка до элемента с id = href у ссылки

                document.querySelector(goto).scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    }
                );
            });

        });
    }
});


