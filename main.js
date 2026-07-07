/*
SPDX-License-Identifier: CNSCL-1.0
Copyright (c) 2026 Aleksan Kocaaslan
*/

class AppFolder extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        const style = document.createElement("style");
        style.textContent = `
            :host {
                display: inline-block;
                width: var(--folder-size, 120px);
                aspect-ratio: 1.1 / 1;
            }
        `;
        shadow.appendChild(style);

        const wrapper = document.createElement("div");

        Object.assign(wrapper.style, {
            width: "100%",
            height: "100%",
            position: "relative",
            display: "block"
        });

        const color = this.getAttribute("color") || "#bdbdbd";

        // BACK
        const back = document.createElement("div");

        Object.assign(back.style, {
            position: "absolute",
            inset: "0",
            backgroundColor: color,
            backgroundImage: 'url("./img/folder_back.png")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundBlendMode: "multiply",

            WebkitMaskImage: 'url("./img/folder_back.png")',
            maskImage: 'url("./img/folder_back.png")',
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain"
        });

        // FRONT
        const front = document.createElement("div");

        Object.assign(front.style, {
            position: "absolute",
            inset: "0",
            backgroundColor: color,
            backgroundImage: 'url("./img/folder_front.png")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundBlendMode: "multiply",

            WebkitMaskImage: 'url("./img/folder_front.png")',
            maskImage: 'url("./img/folder_front.png")',
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain"
        });

        // Emblem
        const emblem = document.createElement("div");
        const emblem_img = this.getAttribute("icon");

        Object.assign(emblem.style, {
            position: "absolute",
            width: "30%",
            height: "30%",
            right: "6%",
            bottom: "6%",

            backgroundImage: `url("${emblem_img}")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            opacity: "0.8",

            zIndex: "2"
        });

        wrapper.appendChild(back);
        wrapper.appendChild(front);
        wrapper.appendChild(emblem);
        shadow.appendChild(wrapper);
    }
}

customElements.define("app-fldr", AppFolder);