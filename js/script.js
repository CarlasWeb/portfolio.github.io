const panels = document.querySelectorAll(".panel");


panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");

        const cardText = panel.querySelector('.card-text');

        if (cardText) {
            if (cardText) {
                setTimeout(() => {
                cardText.classList.remove('hidden');
            }, 700);
        }
          

          const cssStyles = `
            .panel .card-text {
                opacity: 0;
                transition: opacity .2s ease-in .1s;
            }

            .panel .card-text.show {
                opacity: 1;
            }
          `;

            const styleElement = document.createElement('style');
                styleElement.type = 'text/css';
            if (styleElement.styleSheet) {
                styleElement.styleSheet.cssText = cssStyles;
            } else {
                styleElement.appendChild(document.createTextNode(cssStyles));
            }
            document.head.appendChild(styleElement);

          
            setTimeout(() => {
                cardText.classList.add('show');
            }, 800); 
        }
    });
});


function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove("active");

        const cardText = panel.querySelector('.card-text');

        if (cardText) {
            cardText.classList.remove('show');
            cardText.classList.add('hidden');
        }
    });
}