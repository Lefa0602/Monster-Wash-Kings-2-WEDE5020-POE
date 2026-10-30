
document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling for internal page links.
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            if (targetId && targetId.length > 1) {
                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });
    });

    // Prevent booking dates in the past.
    const dateInput = document.getElementById("date");

    if (dateInput) {
        const now = new Date();

        dateInput.min = [
            now.getFullYear(),
            String(now.getMonth() + 1).padStart(2, "0"),
            String(now.getDate()).padStart(2, "0")
        ].join("-");
    }

    console.log("Monster Wash Kings JavaScript loaded successfully.");
});
