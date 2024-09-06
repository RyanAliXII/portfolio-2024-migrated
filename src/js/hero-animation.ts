import gsap, { Power2, Power1 } from "gsap";
const greetings = document.querySelector("#greetings");
const summary = document.querySelector("#summary");
const cta = document.querySelector("#cta");
const tagline = document.querySelector("#tagline");
const arrow = document.querySelector("#arrow");
const timeline = gsap.timeline();
window.addEventListener("load", () => {
  greetings.classList.remove("hidden");
  summary.classList.remove("hidden");
  tagline.classList.remove("hidden");
  cta.classList.remove("hidden");
  timeline.fromTo(
    greetings,
    { translateY: -300, opacity: 0 },
    { translateY: 0, opacity: 1, duration: 0.4, ease: Power2.easeOut }
  );
  timeline.fromTo(
    summary,
    { translateY: 300, opacity: 0 },
    { translateY: 0, opacity: 1, duration: 0.4 }
  );
  timeline.fromTo(
    cta,
    { translateY: 300, opacity: 0 },
    { translateY: 0, opacity: 1, duration: 0.4 }
  );
  timeline.fromTo(
    tagline,
    { translateX: -300, opacity: 0 },
    { translateX: 0, opacity: 1, duration: 0.4, ease: Power2.easeOut }
  );
  gsap.to(arrow, {
    marginLeft: "10px",
    yoyo: true,
    repeat: -1,
    ease: Power1.easeInOut,
    duration: 1,
  });
});
