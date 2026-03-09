const counters = document.querySelectorAll(".count span");
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
