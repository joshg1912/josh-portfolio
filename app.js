viewButtons.forEach(button => {
    button.addEventListener("click", () => {
        const title = button.getAttribute("data-title");
        const desktopSrc = button.getAttribute("data-desktop");
        const mobileSrc = button.getAttribute("data-mobile");

        modalTitle.textContent = title;
        modalDesktopImg.src = desktopSrc;
        modalMobileImg.src = mobileSrc;

        // Force it to display as a fixed overlay when clicked
        modal.style.setProperty("display", "block", "important");
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.setProperty("display", "none", "important");
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.setProperty("display", "none", "important");
    }
});
