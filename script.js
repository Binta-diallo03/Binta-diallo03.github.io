document.addEventListener("DOMContentLoaded", () => {

```
const elements = document.querySelectorAll(
    ".hero-text, .hero-photo, .section-title, .skill-card, .project-card"
);

elements.forEach((element, index) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";

    setTimeout(() => {

        element.style.transition = "all 0.7s ease";
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";

    }, index * 80);

});
```

});

