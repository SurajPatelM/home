// Portfolio content. Dates and experience follow the September 2026 resume.
const navBar = { show: true };
const mainBody = {
  firstName: "Suraj Patel", middleName: "", lastName: "Muthe Gowda",
  message: "I turn AI research into systems people can use.",
  icons: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=LyL6qLIAAAAJ&hl=en" },
    { image: "fa-github", label: "GitHub", url: "https://github.com/SurajPatelM" },
    { image: "fa-linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/suraj-patel-m-9460b41b2" }
  ]
};
const about = {
  show: true, heading: "About",
  imageLink: require("./SurajPatelMutheGowda.jpg"), imageSize: 280,
  message: "I’m a machine learning engineer and a master’s student in Computer Engineering at Northeastern University, graduating in December 2026. My work spans AI agent evaluation at Amazon, wearable health research at Apnimed, and on-device multimodal security at Samsung. I’m interested in building useful AI systems with careful evaluation, efficient inference, and clear human interaction.",
  resume: require("./SurajPatelMutheGowda-Resume.pdf")
};
const projectsData = {
  "show": true,
  "heading": "Selected projects",
  "data": [
    {
      "name": "FinFluent",
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
      "name": "Iikshana",
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
      "name": "Languages",
      "items": [
        "Python",
        "C++",
        "Java",
        "SQL",
        "JavaScript",
        "TypeScript",
        "Bash"
      ]
    },
    {
      "name": "Machine learning",
      "items": [
        "PyTorch",
        "TensorFlow",
        "scikit-learn",
        "Transformers",
        "CNNs",
        "LSTMs",
        "Computer vision",
        "NLP",
        "Multimodal learning"
      ]
    },
    {
      "name": "Generative AI",
      "items": [
        "LLMs",
        "AI agents",
        "RAG",
        "LangChain",
        "Hugging Face",
        "Embeddings",
        "Prompt engineering",
        "Context engineering"
      ]
    },
    {
      "name": "Evaluation and MLOps",
      "items": [
        "Model evaluation",
        "Agentic evaluation",
        "MLflow",
        "Distribution-shift detection",
        "Statistical testing",
        "CI/CD",
        "Git"
      ]
    },
    {
      "name": "ML systems and applications",
      "items": [
        "FastAPI",
        "REST APIs",
        "WebSockets",
        "React",
        "ONNX",
        "Quantization",
        "Streamlit"
      ]
    },
    {
      "name": "Cloud and infrastructure",
      "items": [
        "AWS ECS Fargate",
        "Amazon S3",
        "Amazon SQS",
        "Amazon EventBridge",
        "Docker",
        "Kubernetes",
        "Linux / Unix"
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
