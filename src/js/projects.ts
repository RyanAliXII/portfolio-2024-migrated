import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import {
  Project,
  RecentProjects,
  InDevelopmentProjects,
  OldProjects,
} from "./list-of-projects";
import generateShortId from "./short-id";

/*Load templates from page 
   List of template from the page are: 
   - Project template with id  "#projectCardTemplate"
   - Project slide template with id "#projectSlideTemplate"
   - Tech stack template with id  "#techStackListTemplate"
  For more information on how <template> works, please see https://www.w3schools.com/tags/tag_template.asp
*/
const projectCardTemplate: HTMLTemplateElement = document.querySelector(
  "#projectCardTemplate"
);
const projectCard: HTMLAnchorElement =
  projectCardTemplate.content.querySelector("a");

const projectSlideTemplate: HTMLTemplateElement = document.querySelector(
  "#projectSlideTemplate"
);
const projectSlide: HTMLDivElement =
  projectSlideTemplate.content.querySelector("div");
const techStackListTemplate: HTMLTemplateElement = document.querySelector(
  "#techStackListTemplate"
);
const techStackList: HTMLLIElement =
  techStackListTemplate.content.querySelector("li");

//Function to display list of projects in the page using the templates acquired from the page.
const displayProjects = (placeholder: Element, projects: Project[]) => {
  //Loop through each project
  projects.forEach((p) => {
    //Project card is an anchor tag
    const card = document.importNode(projectCard, true);
    card.href = p.link;
    //Replace content of the card
    card.querySelector("#title").textContent = p.title;
    card.querySelector("#description").textContent = p.description;
    //List the project tech stacks using the tech stack list template from the page.
    const lists = card.querySelector("#techStackLists");
    p.stacks.forEach((s) => {
      const list = document.importNode(techStackList, true);
      list.innerText = s;
      lists.append(list);
    });
    // Get the main container and slide placeholder for the slider. Generate a unique ID for the slide container, which is crucial for later initialization.
    const slideContainer = card.querySelector("#slideContainer");
    const slidePlaceholder = card.querySelector("#sliderPlaceholder");
    const slideContainerId = generateShortId();
    slideContainer.id = slideContainerId;

    // Populate the slide placeholder with slides using the images provided
    p.images.forEach((image) => {
      const slide = document.importNode(projectSlide, true);
      slide.querySelector("img").src = image;
      slidePlaceholder.append(slide);
    });

    // Append the completed card to the project list
    placeholder.append(card);

    // Initialize SwiperJS for the slide container. The unique ID generated earlier is used to target the correct element for SwiperJS initialization.
    new Swiper(`#${slideContainerId}`, {
      modules: [Navigation, Pagination],
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });
};

// Display all projects on page load
displayProjects(document.querySelector("#recentProjectLists"), RecentProjects);
displayProjects(
  document.querySelector("#inDevelopmentProjectLists"),
  InDevelopmentProjects
);
displayProjects(document.querySelector("#oldProjectLists"), OldProjects);
