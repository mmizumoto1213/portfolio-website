document.getElementById('js-linkedin-button').addEventListener('click', function() {
  // This will open the link in a new tab
  window.open('https://www.linkedin.com/in/matthew-mizumoto-750285252/', '_blank');
});

document.getElementById('js-resume-button').addEventListener('click', function() {
  // This will open the link in a new tab
  window.open('./pdfs/resume.pdf', '_blank');
});

const intro = document.querySelectorAll('.js-intro');
intro.forEach(element => {
  element.addEventListener('click', function() {
    // This will open the introduction section
    window.location.href = 'index.html';
  });
});

const about = document.querySelectorAll('.js-about');
about.forEach(element => {
  element.addEventListener('click', function() {
    // This will open the about me section
    window.location.href = 'about.html';
  });
});

const projects = document.querySelectorAll('.js-projects');
projects.forEach(element => {
  element.addEventListener('click', function() {
    // This will open the projects section
    window.location.href = 'projects.html';
  });
});

const skills = document.querySelectorAll('.js-skills');
skills.forEach(element => {
  element.addEventListener('click', function() {
    // This will open the projects section
    window.location.href = 'skills.html';
  });
});

const education = document.querySelectorAll('.js-education');
education.forEach(element => {
  element.addEventListener('click', function() {
    // This will open the projects section
    window.location.href = 'education.html';
  });
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

document.getElementById("js-portfolio-website").addEventListener("click", function() {
  // This will open the portfolio website section
  document.getElementById("js-main-content").innerHTML = `
    <div class="project-back-button" id="js-back-button">&#8592; Back to Projects</div>

    <div class="title-text">Portfolio Website</div>
    <div class="description">My website portfolio is a fully coded personal showcase built with HTML, CSS, and JavaScript that highlights my background, projects, technical skills, and education as a software engineer.</div>

    <div class="description">The website portfolio was designed and developed from scratch using HTML, CSS, and JavaScript, serving as a professional platform to introduce myself as a software engineer. The introduction and about me sections create the foundation of the site, formatted with clean HTML structure and styled using modern CSS techniques such as flexbox and grid layouts to ensure responsiveness across devices. JavaScript adds subtle interactivity—such as smooth scrolling between sections and animated transitions—to make the site more dynamic and engaging for visitors. These sections work together to communicate both my technical skills and personal story in an approachable, polished way.</div>

    <div class="description">The projects section functions as the centerpiece of the portfolio, showcasing the software and AI projects I’ve developed. Each project card is dynamically structured using HTML templates and styled through reusable CSS components, ensuring a consistent look and feel. JavaScript enhances the user experience by allowing for features like expandable project details, image carousels, and hover animations that highlight each project’s technologies and impact. This combination of structure, style, and interactivity provides a clean yet visually compelling way to explore my work.</div>

    <div class="description">Key Features:
      <li>Fully hand-coded using HTML, CSS, and JavaScript for structure, style, and interactivity</li>
      <li>Responsive layout with flexbox and grid design to ensure accessibility on all screen sizes</li>
      <li>Dynamic project showcase with hover effects, expandable details, and JavaScript-driven sorting</li>
      <li>Consistent custom color palette and typography to reflect a cohesive personal brand</li>
    </div>

    <div class="github-link" id="js-github-link">GitHub</div>
  `;

  document.getElementById('js-back-button').addEventListener('click', function() {
    // This will open the projects section
    window.location.href = 'projects.html';
  });

  document.getElementById('js-github-link').addEventListener('click', function() {
    window.open('https://github.com/mmizumoto1213/portfolio-website', '_blank');
  });
});

document.getElementById("js-raytracer").addEventListener("click", function() {
  // This will open the raytracer section
  document.getElementById("js-main-content").innerHTML = `
    <div class="project-back-button" id="js-back-button">&#8592; Back to Projects</div>

    <div class="title-text">Raytracer Application</div>
    <div class="description">My raytracer is a C++ and OpenGL-based rendering engine capable of simulating realistic lighting and reflections on complex 3D scenes containing spheres and triangle meshes.</div>

    <div class="description">The raytracer was developed using C++ and OpenGL to simulate the physical behavior of light within 3D environments. It works by tracing the path of individual rays as they interact with virtual objects, calculating how light bounces, reflects, and refracts to create realistic images. The program supports multiple lighting models—including ambient, diffuse, emission, and specular components—allowing for nuanced and natural-looking illumination. By combining efficient algorithms with OpenGL visualization, the raytracer can accurately compute pixel colors based on light interactions in real time or near-real time.</div>

    <div class="description">At its core, the raytracer can detect ray-object intersections for both spheres and triangles, the two fundamental primitives used in 3D graphics. It calculates accurate surface normals and uses them to determine how light scatters across each object’s surface. The system supports both point lights and directional lights, offering flexibility in how scenes are illuminated. These capabilities enable the rendering of detailed and visually appealing scenes, ranging from simple geometric arrangements to complex 3D models.</div>

    <div class="description">In testing and demonstration, the raytracer successfully rendered several well-known benchmarks in computer graphics. This included a Cornell Box, used to validate lighting accuracy and color realism, a scene with over a thousand spheres to test performance and optimization, and a Stanford Dragon model containing more than 50,000 triangles to demonstrate scalability and robustness. The results highlight the raytracer’s ability to balance precision, performance, and visual quality, making it a solid foundation for further exploration in physically based rendering and computer graphics research.</div>

    <div class="description">Key Features:
      <li>Developed using C++ and OpenGL for efficient rendering and visualization</li>
      <li>Supports ambient, diffuse, emission, and specular lighting models for realistic shading</li>
      <li>Handles ray-object intersections with both spheres and triangle meshes</li>
      <li>Simulates point light and directional light sources for flexible illumination control</li>
      <li>Successfully rendered a Cornell Box, 1,000-sphere scene, and the Stanford Dragon (50,000 triangles)</li>
    </div>

    <div class="github-link" id="js-github-link">GitHub</div>
  `;

  document.getElementById('js-back-button').addEventListener('click', function() {
    // This will open the projects section
    window.location.href = 'projects.html';
  });

  document.getElementById('js-github-link').addEventListener('click', function() {
    window.open('https://github.com/mmizumoto1213/raytracer', '_blank');
  });
});

document.getElementById("js-live-asl-translator").addEventListener("click", function() {
  // This will open the asl translator section
  document.getElementById("js-main-content").innerHTML = `
    <div class="project-back-button" id="js-back-button">&#8592; Back to Projects</div>

    <div class="title-text">Live ASL Translator</div>
    <div class="description">The Live ASL Translator is a Python and PyTorch-based convolutional neural network that recognizes and translates American Sign Language alphabet gestures using YOLOv8 for real-time hand detection.</div>

    <div class="description">The ASL translator was developed in Python using PyTorch as the core deep learning framework, with the goal of accurately recognizing and translating American Sign Language (ASL) letters. The system is built around a convolutional neural network (CNN) trained on a large set of synthetic ASL alphabet images that were augmented to improve performance in real-world conditions. This approach allows the model to generalize effectively to different lighting, hand orientations, and backgrounds, making it capable of reliable gesture recognition outside of controlled environments.</div>

    <div class="description">To enable real-time translation, the system incorporates YOLOv8, a state-of-the-art object detection model, to locate and isolate the hand from an input image or live video stream. Once detected, the hand region is passed to the CNN for classification, which outputs the corresponding ASL letter. This two-stage process ensures both speed and accuracy, allowing for continuous gesture recognition that feels responsive and natural. The model’s modular design also makes it adaptable for potential future expansion beyond alphabet recognition to full ASL word or sentence translation.</div>

    <div class="description">The project demonstrates the integration of computer vision, deep learning, and real-time inference to solve a meaningful communication challenge. By combining synthetic data training, data augmentation, and modern detection models, the translator bridges the gap between digital systems and sign language users. The project highlights not only technical proficiency in machine learning and computer vision but also a strong focus on accessibility and inclusivity through technology.</div>

    <div class="description">Key Features:
      <li>Built in Python using PyTorch for model training and inference</li>
      <li>Utilizes a CNN trained on synthetic ASL alphabet data for gesture classification</li>
      <li>Employs extensive data augmentation to simulate real-world variability in lighting, angle, and background</li>
      <li>Integrates YOLOv8 for efficient real-time hand detection before classification</li>
    </div>

    <div class="github-link" id="js-github-link">GitHub</div>

    <div class="github-link" id="js-report-link">Report</div>
  `;

  document.getElementById('js-back-button').addEventListener('click', function() {
    // This will open the projects section
    window.location.href = 'projects.html';
  });

  document.getElementById('js-github-link').addEventListener('click', function() {
    window.open('https://github.com/doanhandonly/CSE151B_Project/tree/matthew-ken-cnn-only', '_blank');
  });

  document.getElementById('js-report-link').addEventListener('click', function() {
    window.open('./pdfs/asl_report.pdf', '_blank');
  });
});

document.getElementById("js-microprocessor").addEventListener("click", function() {
  // This will open the microprocessor section
  document.getElementById("js-main-content").innerHTML = `
    <div class="project-back-button" id="js-back-button">&#8592; Back to Projects</div>

    <div class="title-text">Custom Microprocessor</div>
    <div class="description">My 8-bit microprocessor is a SystemVerilog-designed accumulator-based CPU with a custom ISA capable of performing operations such as maximum Hamming distance between 64-bit values and 32-bit multiplication.</div>

    <div class="description">The 8-bit microprocessor was designed and implemented using SystemVerilog, showcasing a complete custom CPU architecture built from the ground up. It features a unique instruction set architecture (ISA) consisting of both R-type and I-type instructions, supporting a total of 16 instructions and 16 general-purpose registers. The processor follows an accumulator-based design, where register zero serves as the primary accumulator used for most arithmetic and logical computations. This structure allows for efficient instruction execution and simpler hardware implementation while maintaining flexibility for complex operations.</div>

    <div class="description">One of the key functionalities of the microprocessor is its ability to perform specialized operations such as computing the maximum Hamming distance between two 64-bit values and multiplication between two 32-bit values. These features demonstrate the processor’s capability to handle both bit-level and arithmetic-heavy computations efficiently. The inclusion of custom instructions to support these operations extends its functionality beyond traditional 8-bit architectures, making it suitable for computationally intensive tasks that require optimized logic at the hardware level.</div>

    <div class="description">The design is modular, consisting of several key components coded in SystemVerilog: a top-level module, program counter, register file, ALU, data memory file, and a program counter lookup table. Each module interacts cohesively to execute instructions, manage data flow, and maintain control over program execution. The modular organization simplifies testing and debugging, allowing each component to be validated independently before integration. Overall, the project demonstrates strong digital design principles, efficient hardware organization, and an understanding of custom CPU architecture development.</div>

    <div class="description">Key Features:
      <li>Designed and implemented entirely in SystemVerilog</li>
      <li>Custom ISA with R-type and I-type instructions, 16 registers, and 16 operations</li>
      <li>Accumulator-based architecture where register zero handles primary computation</li>
      <li>Supports maximum Hamming distance (64-bit) and multiplication (32-bit) operations</li>
    </div>

    <div class="github-link" id="js-github-link">GitHub</div>
  `;

  document.getElementById('js-back-button').addEventListener('click', function() {
    // This will open the projects section
    window.location.href = 'projects.html';
  });

  document.getElementById('js-github-link').addEventListener('click', function() {
    window.open('https://github.com/mmizumoto1213/microprocessor', '_blank');
  });
});