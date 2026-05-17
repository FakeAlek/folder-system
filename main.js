/*
SPDX-License-Identifier: CNSCL-1.0
Copyright (c) 2026 Aleksan Kocaaslan
*/

class AppFolder extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        const wrapper = document.createElement("div");

        Object.assign(wrapper.style, {
            width: "120px",
            height: "120px",
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

        wrapper.appendChild(back);
        wrapper.appendChild(front);
        shadow.appendChild(wrapper);
    }
}

customElements.define("app-fldr", AppFolder);