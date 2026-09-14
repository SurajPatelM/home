// Portfolio content. Dates and experience follow the September 2026 resume.
const navBar = { show: true };
const mainBody = {
  firstName: "Suraj Patel", middleName: "", lastName: "Muthe Gowda",
  message: "Building intelligent solutions that turn advances in machine learning into real-world impact.",
  icons: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=LyL6qLIAAAAJ&hl=en" },
    { image: "fa-github", label: "GitHub", url: "https://github.com/SurajPatelM" },
    { image: "fa-linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/suraj-patel-m-9460b41b2" }
  ]
};
const about = {
  show: true, heading: "About",
  imageLink: require("./SurajPatelMutheGowda.jpg"), imageSize: 280,
  message: ["My work brings together machine learning, software engineering, and data analysis. At Amazon, I built tools to evaluate and optimize AI agents. At Apnimed, I developed deep learning pipelines for wearable health data. At Samsung, I worked on multimodal threat detection and efficient on-device inference.", "My strengths are turning complex data into useful models, evaluating what actually improves performance, and building the software around those models. My projects span language and vision models, conversational agents, streaming APIs, and statistical analysis.", "I’m currently pursuing a master’s in Computer Engineering at Northeastern University, focused on Machine Learning and Computer Vision, with graduation expected in December 2026. I’m exploring opportunities in machine learning, AI software engineering, NLP, computer vision, data science, and data analytics."],
  resume: require("./SurajPatelMutheGowda-Resume.pdf")
};
const projectsData = {
  "show": true,
  "heading": "Selected projects",
  "data": [
    {
      "name": "FinFluent: Personal Financial Advisor",
      "category": "Multi-agent AI",
      "summary": "A personal finance assistant that brings budgeting, anomaly detection, stock sentiment, and portfolio analysis into one conversation.",
      "description": [
        "Co-developed a LLaMA 3.1 system with four specialist agents, SARIMA forecasting, and Isolation Forest anomaly detection.",
        "Contributed anomaly detection and analysis, prompt tuning, Fernet encryption, and synthetic financial data generation."
      ],
      "technologies": [
        "LLaMA 3.1",
        "Python",
        "scikit-learn",
        "Streamlit"
      ],
      "url": "https://github.com/SurajPatelM/FinFluent"
    },
    {
      "name": "VideoCommentary AI",
      "category": "Vision and language",
      "summary": "Context-aware natural-language commentary generated from video frames.",
      "description": [
        "Combined a BLIP-2 vision encoder with a custom Transformer decoder and temporal frame aggregation.",
        "Developed a training pipeline over annotated video-text pairs with mixed-precision computation on Apple Silicon."
      ],
      "technologies": [
        "PyTorch",
        "BLIP-2",
        "Transformers"
      ],
      "url": "https://github.com/SurajPatelM/video-commentary-ai"
    },
    {
      "name": "Real-Time Courtroom Language Accessibility System",
      "category": "Accessible AI",
      "summary": "A research prototype for real-time courtroom language accessibility with human oversight.",
      "description": [
        "Integrated speech recognition, translation, and speech output through a FastAPI and WebSocket streaming backend.",
        "Included confidence handling for human review, with a target of approximately two seconds end-to-end latency."
      ],
      "technologies": [
        "FastAPI",
        "WebSockets",
        "React",
        "MLflow"
      ],
      "url": "https://github.com/SurajPatelM/iikshana-courtroom-accessibility"
    },
    {
      "name": "VisScore",
      "category": "Computer vision",
      "summary": "A visualization quality classifier that evaluates charts using CNNs and vision-language models.",
      "description": [
        "Supports synthetic chart generation, CNN training, Grad-CAM explanations, and a combined CNN and VLM verdict.",
        "Provides Streamlit and CLI workflows for chart scoring and generating charts from CSV data."
      ],
      "technologies": [
        "PyTorch",
        "CNNs",
        "VLMs",
        "Streamlit"
      ],
      "url": "https://github.com/SurajPatelM/VisScore"
    },
    {
      "name": "Patient Voice AI",
      "category": "Conversational AI",
      "summary": "A patient assistant prototype with connected chat and phone workflows.",
      "description": [
        "Supports appointment scheduling, specialist matching, and simulated prescription refill status through Claude tool calling.",
        "Connects voice sessions through Vapi, with email confirmations and opt-in SMS notifications."
      ],
      "technologies": [
        "Next.js",
        "TypeScript",
        "Claude",
        "Vapi"
      ],
      "url": "https://github.com/SurajPatelM/kyron_medical_ai"
    },
    {
      "name": "Emotion Voice AI",
      "category": "Audio machine learning",
      "summary": "Speech emotion recognition across neutral, happy, angry, and sad classes.",
      "description": [
        "Preprocesses RAVDESS and CREMA-D audio and extracts MFCC and spectrogram features.",
        "Includes Random Forest, SVM, and CNN training and inference workflows."
      ],
      "technologies": [
        "Python",
        "librosa",
        "scikit-learn",
        "CNNs"
      ],
      "url": "https://github.com/SurajPatelM/emotion-voice-ai"
    }
  ]
};
const experiences = {
  "show": true,
  "heading": "Experience",
  "data": [
    {
      "company": "Amazon",
      "role": "Software Development Engineer (AI) Intern",
      "date": "Jun 2026 - Aug 2026",
      "location": "Seattle, WA",
      "description": [
        "Built an AWS service to analyze and optimize system prompts of more than 15,000 tokens across production AI agents.",
        "Developed a statistical framework to measure prompt-section impact across seven quality dimensions.",
        "Designed held-out validation that enabled up to 12% fewer prompt tokens with no significant response quality loss."
      ]
    },
    {
      "company": "Apnimed",
      "role": "Machine Learning Research Co-op",
      "date": "Jul 2025 - Dec 2025",
      "location": "Cambridge, MA",
      "description": [
        "Built a CNN-BiLSTM pipeline using more than 200,000 labeled wearable samples, improving four-class sleep-stage agreement from 0.60 to 0.80 Cohen’s kappa.",
        "Engineered preprocessing, quality filtering, and balanced sampling pipelines, achieving 94.52% sensitivity in sleep/wake classification.",
        "Added per-class evaluation, distribution-shift detection, and MLflow tracking."
      ]
    },
    {
      "company": "Samsung Research and Development Institute",
      "role": "Senior Machine Learning Engineer",
      "date": "Jan 2022 - Aug 2024",
      "location": "Bengaluru, India",
      "description": [
        "Developed multimodal vishing detection using call transcripts, OCR text, and sequential features, achieving 94.44% accuracy.",
        "Optimized inference on Samsung S24 to 250 ms with 16-bit post-training quantization, reducing model size by 40% and runtime memory by 38%.",
        "Developed a BERT-based threat classification pipeline with fine-tuning, evaluation, and production monitoring."
      ]
    }
  ]
};
const skills = {
  "show": true,
  "heading": "Skills",
  "groups": [
    {
      "name": "Machine learning",
      "summary": "Training and evaluating models for complex, real-world data.",
      "featured": [
        "PyTorch",
        "TensorFlow",
        "scikit-learn",
        "Time-series classification"
      ],
      "items": [
        "CNNs",
        "LSTMs / BiLSTMs",
        "Random Forest",
        "SVM",
        "Isolation Forest"
      ]
    },
    {
      "name": "NLP and generative AI",
      "summary": "Building systems that understand language and support AI agents.",
      "featured": [
        "Transformers",
        "BERT",
        "LLMs",
        "RAG"
      ],
      "items": [
        "AI agents",
        "LangChain",
        "Hugging Face",
        "Embeddings",
        "Prompt / context engineering",
        "Text classification"
      ]
    },
    {
      "name": "ML inference and MLOps",
      "summary": "Optimizing models and delivering reliable inference services.",
      "featured": [
        "ONNX",
        "Post-training quantization",
        "FastAPI",
        "MLflow"
      ],
      "items": [
        "REST APIs",
        "WebSockets",
        "Mixed-precision training",
        "CI/CD",
        "Docker",
        "Kubernetes"
      ]
    },
    {
      "name": "Software engineering for AI",
      "summary": "Building APIs, applications, and cloud services around AI models.",
      "featured": [
        "Python",
        "C++",
        "SQL",
        "AWS ECS Fargate"
      ],
      "items": [
        "Java",
        "JavaScript",
        "TypeScript",
        "Bash",
        "Data structures and algorithms",
        "Git",
        "Linux / Unix",
        "Amazon S3",
        "Amazon SQS",
        "Amazon EventBridge",
        "React",
        "Next.js",
        "Streamlit",
        "API integration"
      ]
    },
    {
      "name": "Data science and evaluation",
      "summary": "Preparing data, testing hypotheses, and measuring model impact.",
      "featured": [
        "pandas",
        "NumPy",
        "Model evaluation",
        "Statistical testing"
      ],
      "items": [
        "Data preprocessing",
        "Data quality filtering",
        "Class-balanced sampling",
        "Synthetic data generation",
        "Anomaly detection",
        "SARIMA forecasting",
        "Matplotlib",
        "OLS regression",
        "Wilcoxon tests",
        "Bootstrap confidence intervals",
        "Bonferroni correction",
        "Ablation studies",
        "Agentic evaluation",
        "KL / JS divergence",
        "Distribution-shift detection"
      ]
    },
    {
      "name": "Computer vision and multimodal AI",
      "summary": "Combining visual and language signals for richer understanding.",
      "featured": [
        "BLIP-2",
        "Vision-language models",
        "Video understanding",
        "Multimodal learning"
      ],
      "items": [
        "Image captioning",
        "Temporal frame aggregation",
        "OCR feature integration",
        "Grad-CAM"
      ]
    }
  ]
};
const education = [
  {
    "name": "Northeastern University",
    "qualification": "Master’s in Computer Engineering",
    "detail": "Machine Learning and Computer Vision",
    "date": "Expected Dec 2026",
    "location": "Boston, MA",
    "gpa": "4.0 / 4.0"
  },
  {
    "name": "PES University",
    "qualification": "Bachelor’s in Electrical and Electronics Engineering",
    "detail": "Embedded Systems",
    "date": "May 2022",
    "location": "Bengaluru, India",
    "gpa": "3.8 / 4.0"
  }
];
const publications = [
{"title": "Observability and AIOps in Cloud-Scale DevOps: Technologies, Architectures, Challenges, and Future Trends", "venue": "38th FRUCT Conference", "date": "2025", "url": "https://scholar.google.com/citations?view_op=view_citation&user=LyL6qLIAAAAJ&citation_for_view=LyL6qLIAAAAJ:2osOgNQ5qMEC"},
  {
    "title": "Deep Learning Optimization of Sleep Stage Classification Using Wearable-Derived SpO2, Pulse Rate, and Movement Features",
    "venue": "ATS 2026",
    "date": "May 2026",
    "url": "https://ats2026.d365.events/education/abstracts/abstracts/396c9803-32b6-4a2f-b760-44625bb95200"
  },
  {
    "title": "AI-Driven Architectures for Real-Time Decision-Making in Autonomous Vehicles",
    "venue": "IEEE ICAD 2025",
    "date": "Jun 2025",
    "url": "https://ieeexplore.ieee.org/abstract/document/11114074"
  },
  {
    "title": "Multimodal Strategy to Defend Mobile Devices Against Vishing Attacks",
    "venue": "ACM MobiCom 2024",
    "date": "Dec 2024",
    "url": "https://doi.org/10.1145/3636534.3690683"
  }
];
const organizationLogos = {
  Amazon: require("../assets/logos/amazon.svg").default,
  Apnimed: require("../assets/logos/apnimed.png"),
  "Samsung Research and Development Institute": require("../assets/logos/samsung.jpg"),
  "Northeastern University": require("../assets/logos/northeastern.png"),
  "PES University": require("../assets/logos/pes.png")
};
experiences.data.forEach(item => { item.logo = organizationLogos[item.company]; });
education.forEach(item => { item.logo = organizationLogos[item.name]; });
publications.sort((a, b) => Number(b.date.slice(-4)) - Number(a.date.slice(-4)));
const getInTouch = {
  show: true, heading: "Let’s connect",
  message: "For conversations about machine learning, AI systems, research, or collaboration, get in touch.",
  email: "muthegowda.s@northeastern.edu"
};
export { navBar, mainBody, about, projectsData, experiences, skills, education, publications, getInTouch };
