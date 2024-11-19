"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    var image1 = $("#image1");
    var image2 = $("#image2");
    let timer1 = null;
    let timer2 = null;

    // preload images
    var links = $("#image_list").querySelectorAll("a");

    // attach mouseover and mouseout events for each image
    for ( let link of links) {
        const image = new Image();
        image.src = link.href;
    }

    const imagesMouseOn = () => {
        image1.src = "images/release.jpg";
        image2.src = "images/deer.jpg";
        timer2 = setTimeout(imagesMouseOff, 1000);
    }

    const imagesMouseOff = () => {
        image1.src = "images/hero.jpg";
        image2.src = "images/bison.jpg";
    }

    timer1 = setTimeout(imagesMouseOn, 1000);

    for (let link of links) {
        image1.addEventListener("mouseover", () => {
            image1.src = "images/release.jpg";
        });
        image1.addEventListener("mouseout", () => {
            image1.src = "images/hero.jpg";
        });
        image2.addEventListener("mouseover", () => {
            image2.src = "images/deer.jpg";
        });
        image2.addEventListener("mouseout", () => {
            image2.src = "images/bison.jpg";
        });           
    }

});
