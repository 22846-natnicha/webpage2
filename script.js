```javascript
const elements =
    document.querySelectorAll('.fade');

elements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(18px)";

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.style.transition =
                            "opacity .6s ease, transform .6s ease";

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

    observer.observe(element);

});
```
