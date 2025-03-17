const buttons = Array.from(document.getElementById("header-frame").getElementsByTagName("button"));
buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
        const hoveredOrder = parseInt(window.getComputedStyle(button).order, 10);
        const maxOrder = Math.max(...buttons.map(b => parseInt(window.getComputedStyle(b).order, 10)));

        buttons.forEach(otherButton => {
            const otherOrder = parseInt(window.getComputedStyle(otherButton).order, 10);
            const isLeft = otherOrder === hoveredOrder - 1;
            const isRight = otherOrder === hoveredOrder + 1;
            
            if (isLeft) {
                otherButton.style.borderRadius = otherOrder === 1 ? "50px 100px 100px 50px" : "0 100px 100px 0";
            } else if (isRight) {
                otherButton.style.borderRadius = otherOrder === maxOrder ? "100px 50px 50px 100px" : "100px 0 0 100px";
            }
        });
    });

    button.addEventListener("mouseout", () => {
        buttons.forEach(btn => btn.style.borderRadius = "");
    });
});