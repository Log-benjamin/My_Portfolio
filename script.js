const topLogo = document.querySelector('.logo-image img');
const topMenu = document.querySelector('.humberger img');
const menuList = document.querySelector('.desk-nav');

topMenu.addEventListener('click', () => {
  topLogo.classList.toggle('active');
  topMenu.classList.toggle('active');
  menuList.classList.toggle('active');
});

window.onscroll = () => {
  topLogo.classList.remove('active');
  topMenu.classList.remove('active');
  menuList.classList.remove('active');
};
/* -----------------------Create Project Section-------------------------*/
const projectDetails = [
  {
    idd: 0,
    seeProjectBtn: 0,
    Pname: 'Survey form',
    description1: 'A website survey is used to collect information about websites, users, or the website itself. Get website visitors to fill in your online survey. Collect valuable data about your website. If you need to start from scratch, make your own survey now! Whether you’re developing a new website or redesigning an old one, use this free Website Survey template to collect the opinions of different target audiences.',
    description2: 'Just customize the form to your needs, embed it on your website, and start collecting responses from users! It’s easy to collect responses on any device — you can even sync submissions to your Dropbox account to view them on any computer. If you want to collect responses from specific users, activate your website survey with email invitations.',
    image: 'assets/PR-image1.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    articleClass: 'pr-d1',
    liveLink: 'https://survey-form.freecodecamp.rocks/',
    sourceLink: 'https://forum.freecodecamp.org/t/survey-form-build-a-survey-form/550578',
  },
  {
    idd: 1,
    seeProjectBtn: 1,
    Pname: 'Netflix Home Page Clone',
    description1: 'Netflix Clone, we all use netflix in our day to day life. And if you are just starting with web development. This project can be a good practice project for you. This netflix clone is a dynamic site and has everything you need for fullstack development practice.',
    description2: 'It runs on a Node.js server. It uses TMDB API for all data.a Netflix login/homepage with interactions, background videos, dropdown menus and notifications divs. It will ask you for some details. You can press enter to have default project details. After executing npm init you should see a package.json file.',
    image: 'assets/PR-image2.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    articleClass: 'pr-d2',
    liveLink: 'https://www.netflix.com/tr-en/',
    sourceLink: 'https://codepen.io/albenis-k-rqeli/pen/eYNGzvJ',
  },
  {
    idd: 3,
    seeProjectBtn: 2,
    Pname: 'Search engine result page',
    description1: 'The page that a search engine returns after a user submits a search query. In addition to organic search results, search engine results pages (SERPs) usually include paid search and pay-per-click (PPC) ads. Thanks to search engine optimization (SEO), ranking position on a SERP can be highly competitive since users are more likely to click on results at the top of the page. With the launch of schema markup, SERPs are becoming much more complex to try to anticipate user needs.',
    description2: 'More than 90% of consumer traffic goes to websites that rank on the first page of Google search results. If your website worry. There are strategies you can use to help boost your ranking, but first, you have to understand what search engine results pages are and how they rank results consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'assets/PR-image3.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    articleClass: 'pr-d3',
    liveLink: 'https://support.similarweb.com/hc/en-us/articles/9228292330397-SERP-Search-Engine-Results-Page-',
    sourceLink: 'https://publicwww.com/',
  },
  {
    idd: 3,
    seeProjectBtn: 3,
    Pname: 'Tribute page',
    description1: 'a sample project from freecode camp that is built using html and css to build static website. A tribute page is a web page where we mention our favorite person and write down their achievements. For example, here, we will create a tribute page for the cricketer Virat Kohli.',
    description2: 'A tribute page is a webpage based on a person who inspired us in our life. In this article, we will create a webpage of Mahatma Gandhi. We are going to use HTML and CSS to create this webpage. On this webpage, we first give a title, and attach a photo below that title. Below that photo, we also write some achievements of Mahatma Gandhi. We are using some HTML tags for designing this webpage.',
    image: 'assets/PR-image4.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    articleClass: 'pr-d4',
    liveLink: 'https://forum.freecodecamp.org/t/tribute-page-build-a-tribute-page/559430',
    sourceLink: 'https://forum.freecodecamp.org/t/tribute-page-build-a-tribute-page/556433',
  },
  {
    idd: 4,
    seeProjectBtn: 4,
    Pname: 'Temperature Converter Website',
    description1: 'The user will input a temperature in either Fahrenheit or Celsius and press a "convert" button. The converted temperature will then be displayed with the correct unit.',
    description2: 'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: 'assets/PR-image5.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    articleClass: 'pr-d5',
    liveLink: 'https://www.onlineconversion.com/temperature.htm',
    sourceLink: 'https://javascript.plainenglish.io/building-a-temperature-converter-app-using-html-css-and-javascript-52097d9d3e98',
  },
  {
    idd: 5,
    seeProjectBtn: 5,
    Pname: 'Basic Portfolio Website',
    description1: 'a personal portfolio responsive mobile first website using html css and javascript. A portfolio website is a unique way to showcase your work and let others know about yourself. It’s like an evergreen platform for your projects, case studies, and information about you. In addition, it’s one of the best ways to express your personality, experience, and capabilities.',
    description2: 'Building coding projects is one of the best ways to learn coding and build your portfolio. However, sometimes a simple project spec may not be enough to help you build your project. This tutorial will walk you through how to build a Temperature converter website, one of the most popular projects on DevProjects.',
    image: 'assets/PR-image6.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    articleClass: 'pr-d6',
    liveLink: 'https://log-benjamin.github.io/My_Portfolio/',
    sourceLink: 'https://log-benjamin/My_Portfolio/',
  },
];
function createProjects() {
  const projectContainer = document.getElementById('portfolio');
  projectDetails.forEach((project) => {
    const articleTemplate = `
          <article class="pr-d ${project.articleClass}">
              <img class="pr1-img" src="${project.image}">
              <div class="pr-d-1">
                  <h3>${project.Pname}</h3>
                  <ul>
                      <li><button type="button" class="HTCS">${project.technologies[0]}</button></li>
                      <li><button type="button" class="RoR">${project.technologies[1]}</button></li>
                      <li><button type="button" class="JS">${project.technologies[2]}</button></li>
                  </ul>
                  <button type="button"  class="seeProject" id="${project.seeProjectBtn}">See this Project <i class="arr fa-sharp fa-solid fa-arrow-right fa-lg"></i></button>
              </div>
          </article>

        <svg class="desk-img4" viewBox="0 0 512 512"><image href="assets/desktop-image4.svg"></image></svg>

        <svg class="desk-img8" viewBox="0 0 250 250"><image href="assets/desktop-image8.svg"></image></svg>
        <svg class="desk-img9" viewBox="0 0 300 300"><image href="assets/desktop-image9.svg"></image></svg>
        <svg class="desk-img10" viewBox="0 0 300 300"><image href="assets/desktop-image10.svg"></image></svg>
        <svg class="desk-img11" viewBox="0 0 300 300"><image href="assets/desktop-image11.svg"></image></svg>
    `;
    projectContainer.innerHTML += articleTemplate;
  });
}

createProjects();
/* -----------------------Create Project Section-------------------------*/

/* -----------------------popup window-------------------------*/

const openPopButtons = document.querySelectorAll('.seeProject');
const overlay = document.querySelector('#overlay');

function createModal(Pname, technologies, image, description1, description2, liveLink, sourceLink) {
  const sampleTemplateModal = `

  <div class="innerPopup">
  <div class="one">
       <div class="close-btn" ><i class="fa-solid fa-x fa-xl"></i></div>
       <h3>${Pname}</h3>

       <ul>
           <li><button type="button" class="HTCS">${technologies[0]}</button></li>
           <li><button type="button" class="RoR">${technologies[1]}</button></li>
           <li><button type="button" class="JS">${technologies[2]}</button></li>
       </ul>

       <div class="slideshow-container">
           <a class="prev"><i class="fa-solid fa-angle-left fa-2xl"></i></a>
           <img class="pr1-img" src="${image}">
           <a class="next"><i class="fa-solid fa-angle-right fa-2xl"></i></a>
       </div>
       
       
       <div class="popContainer"> 
           <img class="popCon-item1" src="${image}">
           <img class="popCon-item2" src="${image}">
           <img class="popCon-item3" src="${image}">
           <img class="popCon-item4" src="${image}">
       </div>

       <article>
           <p>
               ${description1}
               <br>
               <br>
               ${description2}
           </p>
       </article>
       <form>
           <button class="button-4 bu" type="submit" formaction="${liveLink}">See live<i class="upp fa-solid fa-arrow-up-right-from-square"></i></button>
           <button class="button-4 bu" type="submit" formaction="${sourceLink}">See source<i class="upp fa-brands fa-github"></i></button>
       </form>

       <div class="desk-slide-btn"> 
             <button class="ds-li-bt d-l-b-1 slide"><i class="fa-solid fa-arrow-left"></i> Previous Project</button>
             <button class="ds-li-bt d-l-b-2 slide">Next Project <i class="fa-solid fa-arrow-right"></i></button>
       </div>                            
       

   </div>

 </div>
  `;
  return sampleTemplateModal;
}

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('activ');
  overlay.classList.add('activ');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('activ');
  overlay.classList.remove('activ');
}

openPopButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const name = e.target.id;
    const prj = projectDetails[name];
    const modal = createModal(prj.Pname, prj.technologies,
      prj.image, prj.description1, prj.description2, prj.liveLink, prj.sourceLink);
    const element = document.createElement('section');
    element.innerHTML = modal;
    element.classList.add('Popup-window');
    const addElement = document.getElementById('overlay');
    addElement.after(element);
    openModal(element);
    const closePopButtons = document.querySelectorAll('.close-btn');

    closePopButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const modal = button.closest('.Popup-window');
        closeModal(modal);
      });
    });
  });
});
/* -----------------------popup window-------------------------*/


/* -----------------------validate contact form---------------------------*/
const form = document.querySelector('.get-info');
const email = document.querySelector('#email');
const errMsg = document.querySelector('.err-msg');
const msgText = 'Please write your email in lowercase!';

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    errMsg.textContent = msgText;
    errMsg.classList.add('errmsggadd');
    e.preventDefault();
  } else {
    errMsg.classList.add('errmsggrmv');
  }
});
/* -----------------------validate contact form---------------------------*/