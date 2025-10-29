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

document.getElementById('js-matthew-mizumoto').addEventListener('click', function() {
  // This will open the introduction section
  window.location.href = 'index.html';
});

document.getElementById("js-pantrypal").addEventListener("click", function() {
  // This will open the pantry pal section
  document.getElementById("js-main-content").innerHTML = `
    <div class="title-text">PantryPal</div>
    <div class="description">PantryPal is an intelligent recipe recommendation platform built to assist students in discovering meals they can make using the ingredients they already have on hand. The project was developed in Java, featuring a fully implemented front end and back end using JavaFX for the user interface and custom server-side logic to handle API communication and data management. The system combines voice recognition, AI-driven recipe generation, and image synthesis to create a seamless and engaging cooking companion.</div>

    <div class="description">On the back end, PantryPal was designed around a robust server architecture that handles requests efficiently. Each major API integration—such as the ChatGPT API, Whisper API, and DALL·E API—was assigned its own HTTP handler, allowing for clear separation of functionality and easier debugging. To prevent unnecessary token usage during development, mock handlers were also implemented, simulating API responses for both ChatGPT and DALL·E. This setup allowed for full end-to-end testing without incurring API costs, ensuring a smooth and efficient development workflow. The backend also connected to MongoDB, which served as the primary database for user management and data persistence. Each user could create an account, log in, and store their favorite recipes for future access, making the experience personalized and convenient.</div>

    <div class="description">On the front end, the application was built using JavaFX, offering a clean, intuitive, and responsive interface. The UI was designed with simplicity and usability in mind, allowing users to easily input ingredients, view recommended recipes, and save their favorites. PantryPal also includes several quality-of-life features, such as the ability to share recipes with friends, and sort recipes by type (breakfast, lunch, or dinner), alphabetically, or by the date they were generated. Additionally, once a recipe was generated, the application used DALL·E to produce a custom AI-generated image representing what the final dish might look like, giving users a more immersive experience.</div>

    <div class="description">Voice interaction was a key component of the user experience. By integrating OpenAI’s Whisper API, users could simply speak aloud their list of ingredients, which the system would automatically transcribe and process. These ingredients were then sent to the ChatGPT API, which generated personalized recipe suggestions based on the available items. This integration made the process fast, natural, and accessible, especially for users who preferred hands-free interaction.</div>

    <div class="description">To organize and manage the development process, the team used GitHub Projects as a storyboard. This allowed for clear task tracking, issue management, and collaborative progress monitoring. Tasks were sorted into categories such as “To Do,” “In Progress,” and “Completed,” helping the team stay organized and meet milestones efficiently.</div>
`;
});

document.getElementById("js-pantrypal").addEventListener("click", function() {
  // This will open the pantry pal section
  document.getElementById("js-main-content").innerHTML = `
    <div class="project-back-button" id="js-back-button">&#8592; Back to Projects</div>

    <div class="title-text">PantryPal</div>
    <div class="description">PantryPal is an AI-powered recipe recommendation app that helps users find meals they can make using the ingredients they already have.</div>

    <div class="description">By integrating intelligent AI systems, PantryPal makes meal planning both convenient and engaging. Users can input their ingredients manually or through voice using the Whisper API, and the application instantly generates a list of possible recipes tailored to what’s available. This approach eliminates the hassle of searching for meals online and makes cooking more accessible to anyone on a budget or with limited supplies.</div>

    <div class="description">Behind the scenes, PantryPal is powered by a robust backend and a user-friendly JavaFX front end. The backend includes individual HTTP handlers for each integrated API—ChatGPT, Whisper, and DALL·E—and even mock handlers for testing API responses without consuming tokens. MongoDB serves as the main database, managing user accounts, storing saved recipes, and ensuring data persistence across sessions. Together, these systems form a reliable infrastructure that balances performance, scalability, and efficiency.</div>

    <div class="description">The JavaFX interface was designed with simplicity and usability in mind, featuring clear navigation and thoughtful quality-of-life features. Users can sort recipes by type (breakfast, lunch, dinner), alphabetically, or by generation date, and even share their favorite creations with friends. Each recipe comes with a DALL·E-generated image, providing a visual preview of the dish. Throughout development, the team used GitHub Projects to organize tasks, track progress, and ensure a structured workflow, resulting in a polished and cohesive final product.</div>

    <div class="description">Key Features:
      <li>AI-driven recipe recommendations using the ChatGPT API</li>
      <li>Voice input through the Whisper API for hands-free ingredient entry</li>
      <li>AI-generated meal images via the DALL·E API</li>
      <li>Account management and recipe saving with MongoDB</li>
      <li>Clean, interactive UI with sorting and sharing options built in JavaFX</li>
    </div>

    <div class="github-link" id="js-github-link">GitHub</div>
  `;

  document.getElementById('js-back-button').addEventListener('click', function() {
    // This will open the projects section
    window.location.href = 'projects.html';
  });

  document.getElementById('js-github-link').addEventListener('click', function() {
    window.open('https://github.com/ucsd-cse110-fa23/Pantry_Pal', '_blank');
  });
});