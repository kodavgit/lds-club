document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".group-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.boxShadow =
            "0 15px 35px rgba(212,175,55,0.25)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.boxShadow = "none";
        });

    });

});