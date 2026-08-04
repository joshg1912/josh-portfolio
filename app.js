// Get modal elements
const modal = document.getElementById("projectModal");
const closeBtn = document.querySelector(".close-btn");
const modalTitle = document.getElementById("modalTitle");
const modalDesktopImg = document.getElementById("modalDesktopImg");
const modalMobileImg = document.getElementById("modalMobileImg");

// Get all "View Site" buttons
const viewButtons = document.querySelectorAll(".view-project-btn");

// Open modal and populate data when a button is clicked
viewButtons.forEach(button => {
    button.addEventListener("click", () => {
        const title = button.getAttribute("data-title");
        const desktopSrc = button.getAttribute("data-desktop");
        const mobileSrc = button.getAttribute("data-mobile");

        modalTitle.textContent = title;
        modalDesktopImg.src = desktopSrc;
        modalMobileImg.src = mobileSrc;

        modal.style.display = "block";
    });
});

// Close modal when clicking the 'X'
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
