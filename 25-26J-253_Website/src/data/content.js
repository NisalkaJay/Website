import {
  FaBrain, FaEye, FaMicrophone, FaBookOpen, FaFileAlt,
  FaChalkboard, FaUsers, FaEnvelope, FaMapMarkerAlt,
  FaPhone, FaDownload, FaUserCircle, FaTv, FaFilePdf, FaImage, FaLaptopCode, FaAws,
  FaStethoscope, FaHeartbeat, FaVrCardboard, FaMobileAlt, FaDatabase
} from 'react-icons/fa';
import {
  SiTensorflow, SiPython, SiReact, SiRender,
  SiOpencv, SiGooglecloud, SiNvidia, SiFlutter, SiGooglecolab, SiKeras, SiUnity, SiScikitlearn
} from 'react-icons/si';
import {
  FcDocument, FcBriefcase, FcReading, FcGraduationCap, FcKindle, FcSurvey, FcGallery
} from 'react-icons/fc';

// ==========================================
import pulasthiImg from '../assets/images/pula.png';
import nisalkaImg from '../assets/images/nisalka.png';
import malikshiImg from '../assets/images/malikshi.png';
import dimalshaImg from '../assets/images/dimalsha.png';
import mahimaImg from '../assets/images/mahima.jpeg';
import osuriImg from '../assets/images/osuri.png';

// Import your field visit photos
import visit1 from '../assets/images/clinic-visit-1.png';
import visit2 from '../assets/images/clinic-visit-2.png';
import visit3 from '../assets/images/clinic-visit-3.png';

// import presentation slides
import propSlide from '../assets/files/proposal.pdf';
import prog1Slide from '../assets/files/progress1.pdf';
import prog2Slide from '../assets/files/progress2.pdf';
import finalSlide from '../assets/files/progress2.pdf'; // put actual one after finalizing

export const techLogos = [
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Scikit-Learn', icon: SiScikitlearn, color: '#F7931E' },
  { name: 'Unity 3D', icon: SiUnity, color: '#ffffff' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'XGBoost', icon: FaDatabase, color: '#10B981' }, // Generic icon for XGBoost/Data
  { name: 'Federated Learning', icon: FaBrain, color: '#6D28D9' },
  { name: 'Explainable AI', icon: FaEye, color: '#3B82F6' }
];

export const features = [
  {
    title: "Decision Support System for Fetal Health Classification",
    description: "Offline-capable and explainable cardiotocography classification to assist clinical decision-making.",
    icon: FaStethoscope,
    color: "#4ade80"
  },
  {
    title: "Physical Health Monitoring & Wellness Guidance",
    description: "XGBoost-driven analysis with SHAP interpretability to generate personalized maternal health alerts.",
    icon: FaHeartbeat,
    color: "#f87171"
  },
  {
    title: "AI-Based Mental Health Monitoring & Risk Prediction",
    description: "Multimodal emotion recognition utilizing federated learning to preserve sensitive user data on-device.",
    icon: FaBrain,
    color: "#60a5fa"
  },
  {
    title: "AR & AI-Driven Personalized Pregnancy Emergency Training",
    description: "Immersive, deterministic expert system offering protocol-adherent simulations for obstetric crises.",
    icon: FaVrCardboard,
    color: "#c084fc"
  }
];

export const domainContent = {
  'Literature Survey': {
    title: 'Literature Survey',
    text: 'Recent advancements in AI, mobile health, and immersive learning have transformed maternal healthcare. However, existing research highlights that most solutions remain functionally isolated. In fetal surveillance, CTG automation has evolved from rule-based systems to modern machine learning pipelines. Yet, adoption barriers persist because many high-performing deep learning models operate as "black boxes," limiting clinical trust. Furthermore, comprehensive care requires mental health monitoring, but existing conversational agents often rely on centralized processing and single-modality data, raising privacy concerns. Immersive technologies have also proven valuable for medical training, but high-fidelity Augmented Reality remains confined to professional clinical training, leaving a void for consumer-facing emergency tools capable of empowering laypersons safely.'
  },
  'Research Problem': {
    title: 'Research Problem',
    text : 'Pregnancy care requires continuous monitoring, rapid risk identification, and effective communication between mothers and healthcare professionals. Currently, most existing digital health solutions focus on isolated functionalities—such as basic symptom tracking—rather than providing a unified, comprehensive platform. Manual interpretation of vital fetal data (like CTG) is highly subjective and prone to inter-observer variability. Additionally, untreated maternal mental health disorders remain highly prevalent due to stigma and lack of accessible, private care. Finally, while routine care is tracked, there is a severe lack of tools to prepare pregnant women and their families for sudden, high-stakes obstetric emergencies before reaching a hospital.'
  },
  'Research Gap': {
    title: 'Research Gap',
    text : 'A significant divide exists in current maternal mHealth tools. While predictive machine learning works well for continuous physical risk monitoring, relying on stochastic ML models for acute self-triage introduces unacceptable false-negative risks during emergencies. Additionally, many existing CTG decision-support tools require cloud inference, making them completely impractical for low-resource environments. Mental health chatbots currently lack multimodal capabilities (combining facial and text data) and fail to protect user data through decentralized on-device training. There is a critical need for an integrated system that combines offline-capable Explainable AI (XAI) for diagnosis, deterministic rule-based frameworks for emergency AR simulations, and federated learning for privacy-preserving mental health assessments.'
  },
  'Research Objective': {
    title: 'Research Objective',
    text: `The primary objective of this research is to develop "PregAssist", a comprehensive mobile-integrated support system that assists both pregnant mothers and doctors. The platform aims to synthesize four core components into a single, highly optimized mobile architecture: (1) An offline-capable decision support system for fetal health classification using cardiotocography data with explainable outputs; (2) An XGBoost-driven physical health module for predicting maternal risk levels; (3) A privacy-preserving, multimodal mental health conversational assistant powered by federated learning; and (4) An Augmented Reality-driven emergency training module utilizing a deterministic rule-based expert system to guarantee clinical protocol adherence. Together, these modules aim to bridge the gap between routine antenatal diagnosis and rapid emergency response, optimizing performance even in resource-constrained environments.`
  },
  'Methodology': {
    title: 'Methodology',
    text : 'PregAssist utilizes a Hybrid Mobile Architecture that securely couples a native Flutter logic layer with a high-fidelity Unity 3D engine using deep-linking. The fetal health module applies a Regularized Random Forest classifier optimized with a lightweight "shadow" surrogate to generate clinician-readable Explainable AI (XAI) counterfactuals entirely on-device. The physical health module processes normalized maternal vital signs through an XGBoost model. For mental health, a multimodal fusion mechanism evaluates text via TF-IDF/Logistic Regression and facial imagery via CNNs, employing federated learning to update models locally without exposing sensitive user data. Finally, the emergency training module intentionally substitutes probabilistic ML with a deterministic Forward-Chaining Rule-Based Expert System to ensure zero stochastic error and strict adherence to WHO/ACOG clinical guidelines during AR simulations.'
  },
'Technologies': {
  title: 'Technologies',
  text: `The project leverages a robust stack of mobile and machine learning technologies to deliver zero-latency, offline-capable assistance. The front-end framework is built on Flutter for cross-platform mobile compatibility, directly interfacing with a nested Unity 3D engine to render high-fidelity Augmented Reality environments. The machine learning backend relies on Python and Flask REST APIs. Data modeling is executed using Extreme Gradient Boosting (XGBoost) for physiological risk prediction and Random Forest for CTG classification. The mental health module integrates Convolutional Neural Networks (CNN) for facial emotion recognition via the AffectNet dataset, and Logistic Regression with TF-IDF vectorization for text analysis via the GoEmotions dataset. Local storage, deep-linking protocols, and federated learning architecture ensure the system remains functional and secure in low-connectivity settings.`
}
};

// SLIIT Standard Milestones
export const milestones = [
  { title: 'Topic Assessment Form (TAF)', date: 'June 2025', marks: '5%', icon: FcDocument, type: 'Individual' },
  { title: 'Project Charter', date: 'July 2025', marks: '10%', icon: FcBriefcase, type: 'Group' },
  { title: 'Proposal reports (draft)', date: '31st of August 2025', marks: '5%', icon: FcReading, type: 'Group' },
  { title: 'Proposal presentation', date: '8th of September 2025', marks: '15%', icon: FaTv, type: 'Group' },
  { title: 'Proposal reports (final)', date: '28th of September 2025', marks: '10%', icon: FcDocument, type: 'Group' },
  { title: 'Progress Presentation – I', date: '5th of January 2026', marks: '10%', icon: FaTv, type: 'Group' },
  { title: 'Check List I', date: '11th of January 2026', marks: '5%', icon: FcSurvey, type: 'Individual' },
  { title: 'Progress Presentation – II', date: '9th of March 2026', marks: '10%', icon: FaTv, type: 'Group' },
  { title: 'Research paper', date: '8th of May 2026', marks: '20%', icon: FcGraduationCap, type: 'Individual' },
  { title: 'Final reports', date: '26th of April 2026', marks: '15%', icon: FcDocument, type: 'Group' },
  { title: 'Check List II', date: '27th of April 2026', marks: '5%', icon: FcSurvey, type: 'Individual' },
  { title: 'Final presentation & VIVA', date: '4th of May 2026', marks: '25%', icon: FcGraduationCap, type: 'Group' },
  { title: 'Project website', date: '4th of May 2026', marks: '5%', icon: FaLaptopCode, type: 'Group' },
  { title: 'Research logbook', date: '4th of May 2026', marks: '5%', icon: FcGallery, type: 'Individual' },
  { title: 'Submission of RP', date: '8th of May 2026', marks: 'N/A', icon: FcKindle, type: 'Individual' },
];

export const team = [
  { 
    name: 'Pulasthi Buddika', 
    role: 'Undergraduate Researcher', 
    module: 'Decision Support System for Fetal Health Classification',
    image: pulasthiImg, 
    social: { linkedin: 'https://www.linkedin.com/in/pulasthi-buddika-2ab328268?utm_source=share_via&utm_content=profile&utm_medium=member_android', github: 'https://github.com/pulasthiBuddikaGit' } 
  },
  { 
    name: 'Nisalka Jayasinghe', 
    role: 'Undergraduate Researcher', 
    module: 'AR and AI-Driven Module for Personalized Pregnancy Emergency Training',
    image: nisalkaImg, 
    social: { linkedin: 'https://www.linkedin.com/in/nisalka-j-863b33287?utm_source=share_via&utm_content=profile&utm_medium=member_android', github: 'https://github.com/NisalkaJay' } 
  },
  { 
    name: 'Malikshi Perera', 
    role: 'Undergraduate Researcher', 
    module: 'AI-Based Mental Health Monitoring and Risk Prediction',
    image: malikshiImg, 
    social: { linkedin: 'https://www.linkedin.com/in/malikshi-perera-758474216?utm_source=share_via&utm_content=profile&utm_medium=member_android', github: 'https://github.com/MalikshiPerera' } 
  },
  { 
    name: 'Dimalsha Nethmi', 
    role: 'Undergraduate Researcher', 
    module: 'Physical Health Monitoring and Wellness guidance',
    image: dimalshaImg, 
    social: { linkedin: 'https://www.linkedin.com/in/dimalsha-nethmini-944123246?utm_source=share_via&utm_content=profile&utm_medium=member_android', github: 'https://github.com/DimalshaWijethunga' } 
  },
  { 
    name: 'Dr. Mahima Weerasinghe', 
    role: 'Supervisor (Senior Lecturer)', 
    image: mahimaImg, 
    social: { linkedin: 'https://www.linkedin.com/in/mahimaweerasinghe?utm_source=share_via&utm_content=profile&utm_medium=member_android', github: '' } 
  },
  { 
    name: 'Osuri Dunuwila', 
    role: 'Co-Supervisor (Assistant Lecturer)', 
    image: osuriImg, 
    social: { linkedin: 'https://www.linkedin.com/in/osuri-dunuwila-877843107?utm_source=share_via&utm_content=profile&utm_medium=member_android', github: '' } 
  }
];

export const documents = [
  { title: 'Project Charter', description: 'The document gives the information regarding the statement of scope, objectives overview, an outline of scope, an approximate schedule and people who are participating in a project.', icon: FcBriefcase, file: '#' },
  { title: 'Project Proposal', description: 'The document contains details like goals, objectives, important dates, milestones and requirements needed to start and complete the project.', icon: FcDocument, file: '#' },
  { title: 'Research Paper', description: 'A research paper contains writing that provides Literature review, Research methodology, analysis, interpretation, and argument based on in-depth independent research.', icon: FcGraduationCap, file: '#' },
];

export const presentations = [
  { 
    title: 'Proposal Presentation', 
    description: 'Initial pitch detailing the research gap, objectives, and proposed architecture for the PregAssist platform.', 
    icon: FaTv, 
    file: propSlide
  },
  { 
    title: 'Project Progress 1 Presentation', 
    description: 'Status update covering initial dataset preprocessing, CTG classification, and physical risk model training.', 
    icon: FaTv, 
    file: prog1Slide
  },
  { 
    title: 'Project Progress 2 Presentation', 
    description: 'Demonstration of the integrated AR emergency module and the federated learning mental health chatbot.', 
    icon: FaTv, 
    file: prog2Slide
  },
  { 
    title: 'Final Presentation', 
    description: 'Comprehensive overview of all research findings, system evaluations, and final demonstration of the complete app.', 
    icon: FaTv, 
    file: finalSlide
  },
];

export const fieldVisits = [
  { 
    image: visit1, 
    title: 'Clinical Requirement Gathering', 
    description: 'Consulting with nursing staff at a local clinic to understand the real-world workflow of maternal care.' 
  },
  { 
    image: visit2, 
    title: 'Doctor Consultation', 
    description: 'Discussing the integration of our decision support system and risk prediction models with medical professionals.' 
  },
  { 
    image: visit3, 
    title: 'Field Interviews', 
    description: 'Gathering qualitative data on the challenges faced by healthcare workers during routine antenatal checkups.' 
  }
];

export const footerInfo = {
  institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
  location: 'Malabe, Sri Lanka',
  phone: '+94 70 165 8323', // Update this if needed
  email: 'pulasthiwork@gmail.com'
};

