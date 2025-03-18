// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Suraj Patel",
  middleName: "",
  lastName: "Muthe Gowda",
  message: "Building intelligent solutions to transform the world through technology.",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/suraj-patel-m-9460b41b2",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/SurajPatelMutheGowda.jpg"),
  imageSize: 375,
  message:
    "My name is Suraj Patel. I’m a Master's student in Electrical and Computer Engineering at Northeastern University, specializing in Machine Learning, Computer Vision, and Algorithms. Previously, I worked as a Senior Software Development Engineer at Samsung R&D, where I built AI-driven security solutions and optimized system performance. I'm passionate about leveraging technology to solve complex problems, whether in software engineering, AI, or embedded systems. In my free time, I enjoy working on innovative projects, exploring new advancements in AI, and contributing to the tech community.",
  resume: require("../editable-stuff/SurajPatelMutheGowdResume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const projectsData = {
    data: [{
      name: "FinFluent – LLM based Personal Financial Advisor using Python",
      description: [
        "Designed and implemented an LSTM-based stock-pattern predictor for forecasting stock prices using market data.",
        "Developed synthetic financial datasets with realistic spending patterns and seasonality to train AI models.",
        "Integrated SARIMA and LSTM autoencoder models for personalized budget forecasting based on the user’s spending trends, increasing performance by 80 percent when compared to Base-LLM models.",
        "Enhanced AI decision-making by incorporating Chain of Thought (COT) reasoning and ensemble learning models.",
        "Working on incorporating a multi-agent AI architecture to combine structured financial data with LLM recommendations.",
      ],
    },
    {
      name: "Optimization of Cache Management Using AI",
      description: [
        "Developed AI-driven cache management strategies using supervised learning algorithms to predict cache hit/miss patterns, improving memory access efficiency and minimizing processor stalls to enhance performance in high computing environments.",
        "Applied reinforcement learning algorithms to dynamically adjust cache policies based on real-time feedback, leveraging Valgrind and Cachegrind tools to track access patterns, benchmark AI-driven policies against traditional ones, and achieve improvements in energy efficiency and system latency.",
      ],
    },
    {
      name: "Building an Emergency Elevator",
      description: [
        "Designed and developed an emergency elevator system utilizing a wall-climbing framework and pulley mechanism to assist in rescue operations during fire hazards and power outages.",
        "Integrated wireless communication for remote control, allowing efficient operation in hazardous environments where conventional elevators fail.",
        "Implemented thermal sensors to detect environmental conditions, ensuring safe operation in high-temperature and smoke-filled areas.",
        "Designed and programmed motor drives to control elevator movement and maintain stability while climbing walls.",
        "Developed a display monitor interface to provide real-time status updates, emergency alerts, and control functionalities.",
        "Engineered the system to operate independently of traditional building infrastructure, making it an ideal disaster-response solution.",
      ],
    },
    {
      name: "Building a Countdown Timer with a Buzzer",
      description: [
        "Designed and built a countdown timer circuit on a Printed Circuit Board (PCB) using KiCad for schematic design, PCB layout, and testing.",
        "Implemented a three-digit display (0-999 seconds) with user-controlled functionalities such as pause, resume, and reset.",
        "Integrated a buzzer system to provide an audible alert upon countdown completion, ensuring usability in industrial and automation applications.",
        "Developed and tested the circuit for accuracy, stability, and user-friendliness, ensuring reliable timekeeping and alarm triggering.",
      ],
    },
  ],
  show: true,
  heading: "Recent Projects",
};
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "SurajPatelM", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/SurajPatelMutheGowda.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/SurajPatelMutheGowda.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "Java", value: 45 },
    { name: "SQL", value: 50 },
    { name: "Kotlin", value: 50 },
    { name: "GoLang", value: 50 },
    { name: "SQL", value: 75 },  ],
  mlSkills: [
    { name: "Deep Learning", value: 90 },
    { name: "Computer Vision", value: 85 },
    { name: "Large Language Models", value: 65 },
    { name: "Neural Networks", value: 45 },
    { name: "TensorFlow", value: 50 },
    { name: "Pytorch", value: 50 },
    { name: "Hugging Face", value: 50 },
    { name: "Open CV", value: 75 },
    { name: "Model Quantisation", value: 75 },
  ],
  hardwareSkills: [
    { name: "Computer Architecture", value: 90 },
    { name: "Cache Optimization", value: 85 },
    { name: "Fault-Tolearnt Systems", value: 65 },
    { name: "Robotics, Sensing and Naviagtion", value: 45 },
    { name: "Digital Electronics", value: 50 },
    { name: "FPGA", value: 50 },
    { name: "HVHDL", value: 50 },
    { name: "PCB Design", value: 75 },
    { name: "Embedded C", value: 75 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently seeking internships or co-op opportunities in Artificial Intelligence, Machine Learning or Computer Engineering! If you know of any available positions, have any questions, or just want to connect, feel free to reach out to me at. I’d love to chat!",
  email: "muthegowda.s@northeastern.edu",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
    role: "Senior Software Engineer",
      company: "Samsung",
      companylogo: require("../assets/img/SamsungLogo.jpg"),
      date: "Mar 2024 – Aug 2024",
      description: [
        "Engineered a multi-modality threat detection system that identified 10k+ threats daily, boosting device security by 25% with AI-driven anomaly detection across communication channels.",
        "Developed and deployed On-Device vishing protection solutions for Samsung, reducing fraud risk by 40% through real-time machine learning analysis of call patterns, processing up to 100k calls daily.",
        "Developed a deepfake detection solution with 92% accuracy using EfficientNet for image analysis and BERT for content detection, reducing identity theft and misinformation by 30%.",
      ],
      logoStyle: { width: "100px", height: "auto", objectFit: "contain" },
    },
    {
      role: "Software Engineer",
      company: "Samsung",
      companylogo: require("../assets/img/SamsungLogo.jpg"),
      date: "July 2022 - Mar 2024",
      description: [
        "Developed mobile security solutions for Knox AI B2B projects to protect enterprise users from emerging threats, utilizing AI-driven protocols for robust protection.",
        "Optimized AI security models to enhance user security by improving threat detection accuracy by 20% through fine-tuning with real-world data to detect and mitigate vulnerabilities in enterprise devices.",
        "Implemented bootloader-level security features on Exynos and Qualcomm chipsets to ensure secure device startup and protect sensitive user data from unauthorized access.",
        "Integrated DevOps tools for automated data generation and analytics, reducing security update deployment time by 35% and enabling real-time protection for 500k+ users, while enhancing system efficiency in threat detection and mitigation.",
      ],
      logoStyle: { width: "100px", height: "auto", objectFit: "contain" },
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, projectsData };
