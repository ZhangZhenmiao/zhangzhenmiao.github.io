// Toggle abstract visibility
document.querySelectorAll(".abstract-toggle").forEach(button => {
    button.addEventListener("click", () => {
        const abstract = button.nextElementSibling;
        const isVisible = abstract.style.display === "block";
        abstract.style.display = isVisible ? "none" : "block";
        button.textContent = isVisible ? "Abstract ▸" : "Abstract ▾";
    });
});
