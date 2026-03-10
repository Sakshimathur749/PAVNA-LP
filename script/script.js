const counters = document.querySelectorAll(".count span");

document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".custom-card").forEach((card) => {
    observer.observe(card);
  });
});
counters.forEach((counter) => {
  const target = +counter.getAttribute("data-target");
  counter.innerText = "0";

  const updateCounter = () => {
    const current = +counter.innerText;
    const increment = Math.ceil(target / 700);

    if (current < target) {
      counter.innerText = current + increment;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
