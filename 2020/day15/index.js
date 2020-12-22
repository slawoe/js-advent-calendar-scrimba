const prev = document.querySelector(".previous");
const next = document.querySelector(".next");
const images = document.querySelectorAll(".card");
const gallery = document.querySelector(".gallery");
const gallerySizeInPx = 220;
let pixels = 0;

function checkTranslation(pixels) {
  if (pixels >= 0) {
    prev.style.opacity = "0.3";
    next.style.opacity = "1";
  } else if (pixels < 0 && pixels > (images.length - 1) * -gallerySizeInPx) {
    prev.style.opacity = "1";
    next.style.opacity = "1";
  } else {
    prev.style.opacity = "1";
    next.style.opacity = "0.3";
  }
}

prev.addEventListener("click", () => {
  if (pixels >= 0) {
    return;
  } else {
    pixels += gallerySizeInPx;
    gallery.style.transform = `translateX(${pixels}px)`;
    gallery.style.transition = "transform .7s ease-in-out";
    checkTranslation(pixels);
  }
});

next.addEventListener("click", () => {
  if (pixels <= (images.length - 1) * -gallerySizeInPx) {
    return;
  } else {
    pixels -= gallerySizeInPx;
    gallery.style.transform = `translateX(${pixels}px)`;
    gallery.style.transition = "transform .7s ease-in-out";
    checkTranslation(pixels);
  }
});
