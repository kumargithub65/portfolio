const projects = [
  {
    id: 1,
    title: "Bank Web Application",
    live: "https://bank-app-kumar.netlify.app/",
    github: "https://github.com/kumargithub65/bank-app",
    img: "assets/projects/project1.png",
    techs: ["HTML", "CSS", "JavaScript"],
    description: "Developed mini bank application where users can send , request loan ,check balances from application"
  },
  {
    id: 2,
    title: "Bank static website",
    live: "https://bank-website-kumar.netlify.app/",
    github: "https://github.com/kumargithub65/bank-app",
    img: "assets/projects/project2.png",
    techs: ["HTML", "CSS", "JavaScript"],
    description:
    "The bank website is developed using JavaScript as the primary programming language. It uses JavaScript, HTML and CSS to create a dynamic and interactive user interface for the website."  },
  {
    id: 3,
    title: "Dice roll",
    live: "https://dice-roll-kumar.netlify.app/",
    github: "https://github.com/kumargithub65/dice-roll",
    img: "assets/projects/project3.png",
    techs: ["HTML", "CSS", "JavaScript"],
    description: "The Dice roll Game is built using JavaScript, it uses DOM manipulation, event handling and CSS for styling. The game logic is implemented using JavaScript functions and variables, it listens to user interactions and updates the game state accordingly. "
  },
  {
    id: 4,
    title: "Ecommerce application",
    live: "https://ecommerce-kumar.netlify.app/",
    github:
      "https://github.com/kumargithub65/Ecommerce-Application",
    img: "assets/projects/project4.png",
    techs: ["HTML", "CSS", "JavaScript"],
    description:"Developed and launched an e-commerce platform using React JS,Implemented various features such as product listings, shopping cart, order management, and customer account management. "
  },
  {
    id: 5,
    title: "Recipe Web Application",
    live: "https://swigzom-kumar.netlify.app/#5ed6604591c37cdc054bcd09",
    github: "https://github.com/kumargithub65/swigzom",
    img: "assets/projects/project5.png",
    techs: ["HTML", "CSS", "JavaScript"],
    description:"Recipe Web Application Developed a recipe website where users can search variety of recipes Add a recipe and Bookmark a recipe"
  },
];

const parentElement = document.querySelector(".carousel");

projects.forEach((project) => {
  const { title, live, github, img, techs, description } = project;

  // Create slide container
  const slideContainer = document.createElement("div");
  slideContainer.classList.add(
    "slide",
    "grid",
    "grid-template-columns-2",
    "gap-3"
  );

  // Create project image link
  const imageLink = document.createElement("a");
  imageLink.classList.add("project-img");
  imageLink.href = live;
  imageLink.target = "_blank";
  imageLink.rel = "noopener noreferrer";

  // Create project image
  const image = document.createElement("img");
  image.src = img;
  image.alt = `${title} Image`;

  // Append image to image link
  imageLink.appendChild(image);

  // Create project description container
  const projectDescription = document.createElement("div");
  projectDescription.classList.add("project-description");

  // Create project title
  const projectTitle = document.createElement("h4");
  projectTitle.textContent = title;

  // Create project description text
  const projectText = document.createElement("p");
  projectText.classList.add("section-text");
  projectText.textContent = description;

  // Create technology list
  const techList = document.createElement("ul");
  techList.classList.add("tech-use");

  // Create technology list items
  techs.forEach((tech) => {
    const techItem = document.createElement("li");
    techItem.textContent = tech;
    techList.appendChild(techItem);
  });

  // Create project links container
  const projectLinks = document.createElement("div");
  projectLinks.classList.add(
    "project-links",
    "flex",
    "align-items-center",
    "gap-2"
  );

  // Create source code link
  const sourceCodeLink = document.createElement("a");
  sourceCodeLink.classList.add("project-link");
  sourceCodeLink.title = "Source Code";
  sourceCodeLink.href = github;
  sourceCodeLink.target = "_blank";
  sourceCodeLink.rel = "noopener noreferrer";

  // Create source code icon
  const sourceCodeIcon = document.createElement("i");
  sourceCodeIcon.classList.add("fa-brands", "fa-github", "fa-lg");

  // Append source code icon to source code link
  sourceCodeLink.appendChild(sourceCodeIcon);

  // Create live demo link
  const liveDemoLink = document.createElement("a");
  liveDemoLink.classList.add("project-link");
  liveDemoLink.title = "Live Demo";
  liveDemoLink.href = live;
  liveDemoLink.target = "_blank";
  liveDemoLink.rel = "noopener noreferrer";

  // Create live demo icon
  const liveDemoIcon = document.createElement("i");
  liveDemoIcon.classList.add("fa-solid", "fa-arrow-up-right-from-square");

  // Append live demo icon to live demo link
  liveDemoLink.appendChild(liveDemoIcon);

  // Append all elements to project links container
  projectLinks.appendChild(sourceCodeLink);
  projectLinks.appendChild(liveDemoLink);

  // Append all elements to project description container
  projectDescription.appendChild(projectTitle);
  projectDescription.appendChild(projectText);
  projectDescription.appendChild(techList);
  projectDescription.appendChild(projectLinks);

  // Append image link and project description container to slide container
  slideContainer.appendChild(imageLink);
  slideContainer.appendChild(projectDescription);

  // Append slide container to desired parent element
  parentElement.appendChild(slideContainer);
});
