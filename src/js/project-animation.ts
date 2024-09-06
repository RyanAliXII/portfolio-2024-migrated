import gsap, { Power2 } from "gsap";
const projectSection = document.querySelector("#projects");
const projectNav: HTMLDivElement = document.querySelector("#projectNav");
const AcceptableWindowWidth = 1500;
const recentProjectLists = document.querySelector("#recentProjectLists");
const inDevelopmentProjectLists = document.querySelector(
  "#inDevelopmentProjectLists"
);

const oldProjectLists = document.querySelector("#oldProjectLists");
const recentNavLine = document
  .querySelector("#recentNavList")
  .querySelector(".line");

const inDevelopmentNavLine = document
  .querySelector("#inDevelopmentNavList")
  .querySelector(".line");
const oldNavLine = document.querySelector("#oldNavList").querySelector(".line");
let isProjectObserverActive = false;
setTimeout(() => {
  isProjectObserverActive = true;
}, 500);
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

  const animateToActive = (line: Element) => {
    gsap.fromTo(
      line,
      { width: "1.25rem", borderColor: "rgb(156 163 175)" },
      { width: "2.5rem", borderColor: "rgb(55 65 81)" }
    );
  };

  const animateToInactive = (line: Element) => {
    gsap.fromTo(
      line,
      { width: "2.5rem", borderColor: "rgb(55 65 81)" },
      { width: "1.25rem", borderColor: "rgb(156 163 175)" }
    );
  };
  const recentProjectObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];

      if (entry.isIntersecting && window.innerWidth >= AcceptableWindowWidth) {
        animateToActive(recentNavLine);
      }
      if (!entry.isIntersecting && window.innerWidth >= AcceptableWindowWidth) {
        animateToInactive(recentNavLine);
      }
    },
    { threshold: 0.2 }
  );

  recentProjectObserver.observe(recentProjectLists);
  const inDevelopmentProjectObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && window.innerWidth >= AcceptableWindowWidth) {
        animateToActive(inDevelopmentNavLine);
      }
      if (!entry.isIntersecting && window.innerWidth >= AcceptableWindowWidth) {
        animateToInactive(inDevelopmentNavLine);
      }
    },
    { threshold: 1 }
  );
  inDevelopmentProjectObserver.observe(inDevelopmentProjectLists);
  const oldProjectObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && window.innerWidth >= AcceptableWindowWidth) {
        animateToActive(oldNavLine);
      }
      if (!entry.isIntersecting && window.innerWidth >= AcceptableWindowWidth) {
        animateToInactive(oldNavLine);
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
