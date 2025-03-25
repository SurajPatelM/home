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
        "Stock Market Forecasting – Engineered an LSTM-based stock pattern predictor, leveraging market data for accurate price forecasts.",
        "Synthetic Financial Data – Created realistic financial datasets with spending patterns and seasonality to enhance AI model training.",
        "Advanced Budget Forecasting – Integrated SARIMA and LSTM autoencoder models, improving personalized budget predictions by 80% over Base-LLM models.",
        "AI Decision Optimization – Strengthened AI reasoning through Chain of Thought (COT) models and ensemble learning for better financial recommendations.",
      ],
    },
    {
      name: "Optimization of Cache Management Using AI",
      description: [
        "Smart Cache Prediction – Designed AI-based cache management strategies using supervised learning to reduce processor stalls and improve memory access efficiency.",
        "Adaptive Cache Policies – Applied reinforcement learning algorithms to dynamically adjust cache settings in real-time for optimal system performance.",
        "Performance Benchmarking – Used Valgrind and Cachegrind to analyze memory access patterns, demonstrating notable gains in energy efficiency and reduced latency compared to traditional policies.",
      ],
    },
    {
      name: "Building an Emergency Elevator",
      description: [
        "Innovative Climbing Mechanism – Developed an autonomous emergency elevator with a wall-climbing framework to assist in rescue operations.",
        "Wireless Remote Control – Integrated wireless communication for seamless operation in hazardous environments where conventional elevators fail.",
        "Environmental Safety Features – Implemented thermal sensors to detect fire hazards, ensuring safe operation in high-risk conditions.",
        "Precision Motor Control – Engineered stability-driven motor systems for controlled ascent and descent along building structures.",
        "Real-Time Monitoring – Designed a display interface with emergency alerts and live status updates for enhanced usability.",
      ],
    },
    {
      name: "Building a Countdown Timer with a Buzzer",
      description: [
        "Custom PCB Design – Designed and fabricated a countdown timer circuit using KiCad, ensuring optimized layout and performance.",
        "User-Controlled Timer – Implemented a three-digit display (0-999 seconds) with functionalities like pause, resume, and reset.",
        "Audible Alarm Integration – Integrated a buzzer system to provide clear alerts upon countdown completion, enhancing usability in automation systems.",
        "Reliable Performance – Developed and tested the circuit for accuracy, stability, and user-friendly operation in industrial applications.",
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
    { name: "Data Structures", value: 90 },
    { name: "C/C++", value: 85 },
    { name: "Java", value: 85 },
    // { name: "SQL", value: 50 },
    { name: "CUDA", value: 75 },
    { name: "Embedded C", value: 65 },
    { name: "GoLang", value: 75 },  ],
  mlSkills: [
    { name: "Deep Learning", value: 90 },
    { name: "Computer Vision", value: 85 },
    { name: "Large Language Models", value: 85 },
    { name: "Neural Networks", value: 85 },
    { name: "TensorFlow", value: 85 },
    { name: "Pytorch", value: 85 },
    { name: "Hugging Face", value: 85 },
    { name: "Open CV", value: 85 },
    { name: "Model Quantisation", value: 85 },
  ],
  hardwareSkills: [
    { name: "Computer Architecture", value: 90 },
    { name: "Cache Optimization", value: 85 },
    { name: "Fault-Tolearnt Systems", value: 75 },
    { name: "Robotics, Sensing and Naviagtion", value: 65 },
    { name: "Digital Electronics", value: 80 },
    { name: "FPGA", value: 80 },
    { name: "VHDL", value: 80 },
    { name: "PCB Design", value: 80 },
    // { name: "Embedded C", value: 75 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 90 },
    { name: "Adaptability", value: 90 },
    { name: "Problem Solving", value: 90 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 90 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently seeking internships or co-op opportunities in Artificial Intelligence, Machine Learning or Computer Engineering! If you know of any available positions, have any questions, or just want to connect, feel free to reach out to me at muthegowda.s@northeastern.edu. I’d love to chat!",
  // email: "muthegowda.s@northeastern.edu",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
    role: "Senior Machine Learning Engineer",
      company: "Samsung",
      companylogo: require("../assets/img/SamsungLogo.jpg"),
      date: "Mar 2024 – Aug 2024",
      description: [
        "Intelligent Threat Detection – Designed and implemented a multi-modal AI system capable of detecting 10,000+ security threats daily, strengthening device protection by 25% through advanced anomaly detection.",
        "Vishing Protection at Scale – Engineered an On-Device AI-powered fraud detection system, analyzing 100,000+ calls daily in real time, reducing phishing and scam risks by 40%.",
        " Deepfake Defense – Developed a high-precision deepfake detection model (92% accuracy) using EfficientNet and BERT, mitigating identity theft and misinformation by 30%.",
      ],
      logoStyle: { width: "100px", height: "auto", objectFit: "contain" },
    },
    {
      role: "Machine Learning Engineer",
      company: "Samsung",
      companylogo: require("../assets/img/SamsungLogo.jpg"),
      date: "July 2022 - Mar 2024",
      description: [
        "Enterprise-Grade Threat Protection – Developed AI-powered security solutions for Knox AI B2B, safeguarding enterprise users against evolving cyber threats with intelligent, adaptive protection protocols.",
        "Enhanced AI Security Models – Optimized AI-based threat detection, boosting accuracy by 20% through real-world data fine-tuning, ensuring proactive vulnerability mitigation in enterprise devices.",
        "Chipset-Level Security – Engineered bootloader security enhancements for Exynos and Qualcomm chipsets, fortifying device startup processes and preventing unauthorized access to sensitive user data.",
        "Automated Security Operations – Integrated DevOps-driven automation for data generation and analytics, accelerating security update rollouts by 35%, enabling real-time protection for 500K+ users, and enhancing system efficiency in threat detection.",
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
