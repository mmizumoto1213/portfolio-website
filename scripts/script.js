document.body.innerHTML += `
  <div class="left-bar"></div>
  <div class="right-bar"></div>
  <div id="header">
    <div class="button-container-home">Home</div>
    <div id="center-space"></div>
    <div class="button-container">
      <div id="icon">
        <button id="js-linkedin-button" class="icon-button">
          <i class="fab fa-linkedin"></i>
        </button>
      </div>
      <div id="icon">
        <button id="js-github-button" class="icon-button">
          <i class="fab fa-github"></i>
        </button>
      </div>
    </div>
  </div>

  <div class="sidebar">
    <div class="sidebar-note">Sections</div>
    <div class="sidebar-section" id="js-intro">Introduction</div>
    <div class="sidebar-section" id="js-about">About Me</div>
    <div class="sidebar-section" id="js-projects">Projects</div>
    <div class="sidebar-section" id="js-skills">Skills & Tools</div>
    <div class="sidebar-section" id="js-education">Education</div>
  </div>
`;

document.getElementById('js-linkedin-button').addEventListener('click', function() {
  // This will open the link in a new tab
  window.open('https://www.linkedin.com/in/matthew-mizumoto-750285252/', '_blank');
});

document.getElementById('js-github-button').addEventListener('click', function() {
  // This will open the link in a new tab
  window.open('https://github.com/mmizumoto1213', '_blank');
});

document.getElementById('js-intro').addEventListener('click', function() {
  // This will open the introduction section
  window.location.href = 'index.html';
});

document.getElementById('js-about').addEventListener('click', function() {
  // This will open the about me section
  window.location.href = 'about.html';
});

document.getElementById('js-projects').addEventListener('click', function() {
  // This will open the projects section
  window.location.href = 'projects.html';
});

document.getElementById('js-skills').addEventListener('click', function() {
  // This will open the skills & tools section
  window.location.href = 'skills.html';
}); 

document.getElementById('js-education').addEventListener('click', function() {
  // This will open the education section
  window.location.href = 'education.html';
});