// ?1
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};
const loadersRef = document.querySelectorAll(".loader");

const callback = (entries, observer) => {
  entries.forEach((entrie) => {
    if (entrie.isIntersecting && entrie.target.hasAttribute("data-src")) {
      entrie.target.src = entrie.target.getAttribute("data-src");
      entrie.target.classList.add("visible");
      loadersRef.forEach((loader) => {
        loader.style.display = "none";
      });
    } else if (!entrie.isIntersecting) {
      entrie.target.classList.remove("visible");
      loadersRef.forEach((loader) => {
        loader.style.display = "block";
      });
    }
  });
};

const observer = new IntersectionObserver(callback, options);

document.querySelectorAll(".imgs__item img").forEach((img) => {
  observer.observe(img);
});
