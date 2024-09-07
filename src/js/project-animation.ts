import gsap, { Power2 } from "gsap";
import { getTheme } from "./theme";
const projectSection = document.querySelector("#projects");
const projectNav: HTMLDivElement = document.querySelector("#projectNav");
const AcceptableWindowWidth = 1500;
const recentProjectLists = document.querySelector("#recentProjectLists");
const inDevelopmentProjectLists = document.querySelector(
  "#inDevelopmentProjectLists"
);

const oldProjectLists = document.querySelector("#oldProjectLists");

const recentNav = document.querySelector("#recentNavList");
const recentNavLine = recentNav.querySelector(".line");
const recentNavText = recentNav.querySelector(".text");

const inDevelopmentNav = document.querySelector("#inDevelopmentNavList");
const inDevelopmentNavLine = inDevelopmentNav.querySelector(".line");
const inDevelopmentNavText = inDevelopmentNav.querySelector(".text");

const oldNav = document.querySelector("#oldNavList");
const oldNavLine = oldNav.querySelector(".line");
const oldNavText = oldNav.querySelector(".text");

let isProjectObserverActive = false;
setTimeout(() => {
  isProjectObserverActive = true;
}, 1000);
window.addEventListener("load", () => {
  const projectSectionObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (
        entry.isIntersecting &&
        window.innerWidth >= AcceptableWindowWidth &&
        isProjectObserverActive
      ) {
        gsap.fromTo(
          projectNav,
          {
            display: "none",
            translateX: -300,
            opacity: 0,
          },
          {
            translateX: 0,
            opacity: 1,
            display: "flex",
            position: "fixed",
            ease: Power2.easeOut,
          }
        );
      }
      if (
        !entry.isIntersecting &&
        window.innerWidth >= AcceptableWindowWidth &&
        isProjectObserverActive
      ) {
        gsap.fromTo(
          projectNav,
          {
            translateX: 0,
            display: "flex",
            position: "fixed",
            ease: Power2.easeOut,
          },
          {
            display: "none",
            opacity: 0,
            translateX: -300,
          }
        );
      }
    },
    { threshold: 0.25 }
  );

  projectSectionObserver.observe(projectSection);

  const animateToActive = (line: Element, text: Element) => {
    const theme = getTheme();
    if (theme === "light") {
      gsap.fromTo(
        line,
        { width: "1.25rem", borderColor: "rgb(156 163 175)" },
        { width: "2.5rem", borderColor: "rgb(55 65 81)" }
      );
      gsap.fromTo(
        text,
        { color: "rgb(148 163 184)" },
        { color: "rgb(51 65 85)" }
      );
    } else {
      gsap.fromTo(
        line,
        { width: "1.25rem", borderColor: "rgb(55 65 81)" },
        { width: "2.25rem", borderColor: "rgb(156 163 175)" }
      );
      gsap.fromTo(
        text,
        { color: "rgb(51 65 85)" },
        { color: "rgb(148 163 184)" }
      );
    }
  };

  const animateToInactive = (line: Element, text: Element) => {
    const theme = getTheme();
    if (theme === "light") {
      gsap.fromTo(
        line,
        { width: "2.5rem", borderColor: "rgb(55 65 81)" },
        { width: "1.25rem", borderColor: "rgb(156 163 175)" }
      );
      gsap.fromTo(
        text,
        { color: "rgb(51 65 85)" },
        { color: "rgb(148 163 184)" }
      );
    } else {
      gsap.fromTo(
        line,
        { width: "2.25rem", borderColor: "rgb(156 163 175)" },
        { width: "1.25rem", borderColor: "rgb(55 65 81)" }
      );
      gsap.fromTo(
        text,
        { color: "rgb(148 163 184)" },
        { color: "rgb(51 65 85)" }
      );
    }
  };

  const recentProjectObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];

      if (entry.isIntersecting && window.innerWidth >= AcceptableWindowWidth) {
        animateToActive(recentNavLine, recentNavText);
      }
      if (!entry.isIntersecting && window.innerWidth >= AcceptableWindowWidth) {
        animateToInactive(recentNavLine, recentNavText);
      }
    },
    { threshold: 0.2 }
  );

  recentProjectObserver.observe(recentProjectLists);
  const inDevelopmentProjectObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && window.innerWidth >= AcceptableWindowWidth) {
        animateToActive(inDevelopmentNavLine, inDevelopmentNavText);
      }
      if (!entry.isIntersecting && window.innerWidth >= AcceptableWindowWidth) {
        animateToInactive(inDevelopmentNavLine, inDevelopmentNavText);
      }
    },
    { threshold: 1 }
  );
  inDevelopmentProjectObserver.observe(inDevelopmentProjectLists);
  const oldProjectObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && window.innerWidth >= AcceptableWindowWidth) {
        animateToActive(oldNavLine, oldNav);
      }
      if (!entry.isIntersecting && window.innerWidth >= AcceptableWindowWidth) {
        animateToInactive(oldNavLine, oldNavText);
      }
    },
    { threshold: 1 }
  );
  oldProjectObserver.observe(oldProjectLists);
});

window.addEventListener("resize", (event) => {
  const target = event.target as Window;
  if (target.innerWidth < AcceptableWindowWidth) {
    projectNav.style.display = "none";
  }
});
