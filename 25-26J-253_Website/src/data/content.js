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
import pulasthiImg from '../assets/images/pul.jpeg';
import nisalkaImg from '../assets/images/nisalka.png';
import malikshiImg from '../assets/images/maliksh.jpeg';
import dimalshaImg from '../assets/images/dimalsh.jpeg';
import mahimaImg from '../assets/images/mahima.jpeg';
import osuriImg from '../assets/images/osuri.png';

// Import your field visit photos
import visit1 from '../assets/images/clinic-visit-1.jpeg';
import visit2 from '../assets/images/clinic-visit-2.jpeg';
import visit3 from '../assets/images/clinic-visit-3.jpeg';

// import presentation slides
import propSlide from '../assets/files/proposal_compressed.pdf';
import prog1Slide from '../assets/files/progress1_compressed.pdf';
import prog2Slide from '../assets/files/progress2_compressed.pdf';
//import finalSlide from '../assets/files/progress2_compressed.pdf'; 

// NEW: Document Imports
import charterFile from '../assets/files/charter.pdf';
import researchPaperFile from '../assets/files/research_paper.pdf';
import checklist1File from '../assets/files/checklist1.zip';
//import checklist2File from '../assets/files/checklist2.pdf';
//

// Proposal Report Imports
import propPula from '../assets/files/proposal_pula.pdf';
import propNisalka from '../assets/files/proposal_nisalka.pdf';
import propMalikshi from '../assets/files/proposal_malikshi.pdf';
import propDimalsha from '../assets/files/proposal_dimalsha.pdf';

// Final Report Imports
//import finalMerged from '../assets/files/final_merged.pdf';
//import finalPula from '../assets/files/final_pula.pdf';
//import finalNisalka from '../assets/files/final_nisalka.pdf';
//import finalMalikshi from '../assets/files/final_malikshi.pdf';
//import finalDimalsha from '../assets/files/final_dimalsha.pdf';

export const techLogos = [
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Scikit-Learn', icon: SiScikitlearn, color: '#F7931E' },
  { name: 'Unity 3D', icon: SiUnity, color: '#ffffff' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'XGBoost', icon: FaDatabase, color: '#10B981' }, 
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
  },
  'Why These Technologies?': { 
    title: 'Why These Technologies?',
    text: 'Each technology in the PregAssist stack was selected to meet specific clinical and environmental constraints. Flutter was chosen for its high-performance UI rendering and seamless integration with C++ based Unity 3D engines, which are essential for high-fidelity AR emergency simulations. Python and XGBoost provide the optimal balance between high predictive accuracy for maternal vitals and computational efficiency for mobile deployment. Federated Learning is utilized to ensure that sensitive maternal mental health data never leaves the device, addressing critical privacy gaps found in cloud-based health bots. Finally, Explainable AI (XAI) models were prioritized to build clinician trust by providing transparent reasoning for every automated fetal health diagnosis.'
  }
};

// SLIIT Standard Milestones 
export const milestones = [
  { title: 'Topic Assessment Form (TAF)', date: 'June 2025', marks: '5%', icon: FcDocument, type: 'Individual', details: 'Submission and formal approval of the research topic and scope by the project coordinator.' },
  { title: 'Project Charter', date: 'July 2025', marks: '10%', icon: FcBriefcase, type: 'Group', details: 'Definition of project goals, stakeholders, high-level requirements, and the formal authorization of the research project.' },
  { title: 'Proposal reports (draft)', date: '31st of August 2025', marks: '5%', icon: FcReading, type: 'Group', details: 'Initial comprehensive documentation of the literature survey, problem statement, and proposed methodology.' },
  { title: 'Proposal presentation', date: '8th of September 2025', marks: '15%', icon: FaTv, type: 'Group', details: 'Formal presentation to a panel of examiners to defend the feasibility and clinical significance of the research.' },
  { title: 'Proposal reports (final)', date: '28th of September 2025', marks: '10%', icon: FcDocument, type: 'Group', details: 'Submission of the finalized project proposal incorporating feedback from the viva panel.' },
  { title: 'Progress Presentation – I', date: '5th of January 2026', marks: '10%', icon: FaTv, type: 'Group', details: 'Review of the initial implementation phase, data collection progress, and model prototyping.' },
  { title: 'Check List I', date: '11th of January 2026', marks: '5%', icon: FcSurvey, type: 'Individual', details: 'Verification of individual researcher progress and alignment with initial project objectives.' },
  { title: 'Progress Presentation – II', date: '9th of March 2026', marks: '10%', icon: FaTv, type: 'Group', details: 'Demonstration of the integrated prototype, preliminary results from the Federated Learning and AR modules.' },
  { title: 'Research paper', date: '8th of May 2026', marks: '20%', icon: FcGraduationCap, type: 'Individual', details: 'Submission of the technical research paper detailing the innovative contributions of the study.' },
  { title: 'Final reports', date: '26th of April 2026', marks: '15%', icon: FcDocument, type: 'Group', details: 'Submission of the complete project dissertation covering all technical aspects and final findings.' },
  { title: 'Check List II', date: '27th of April 2026', marks: '5%', icon: FcSurvey, type: 'Individual', details: 'Final individual assessment to confirm completion of all research tasks and deliverables.' },
  { title: 'Final presentation & VIVA', date: '4th of May 2026', marks: '25%', icon: FcGraduationCap, type: 'Group', details: 'Final defense of the project before the examination panel, including a live demonstration of the PregAssist app.' },
  { title: 'Project website', date: '4th of May 2026', marks: '5%', icon: FaLaptopCode, type: 'Group', details: 'Publication of the comprehensive project website containing all research artifacts and team details.' },
  { title: 'Research logbook', date: '4th of May 2026', marks: '5%', icon: FcGallery, type: 'Individual', details: 'Submission of daily/weekly records of research activities and supervisor consultations.' },
  { title: 'Submission of RP', date: '8th of May 2026', marks: 'N/A', icon: FcKindle, type: 'Individual', details: 'Final submission of the research paper for publication consideration.' },
];

export const team = [
  { 
    name: 'Pulasthi Buddika', 
    role: 'Undergraduate Researcher', 
    module: 'Decision Support System for Fetal Health Classification',
    image: pulasthiImg, 
    email: 'pulasthiwork@gmail.com', 
    social: { linkedin: 'https://www.linkedin.com/in/pulasthi-buddika-2ab328268?utm_source=share_via&utm_content=profile&utm_medium=member_android', github: 'https://github.com/pulasthiBuddikaGit' } 
  },
  { 
    name: 'Nisalka Jayasinghe', 
    role: 'Undergraduate Researcher', 
    module: 'AR and AI-Driven Module for Personalized Pregnancy Emergency Training',
    image: nisalkaImg, 
    email: 'nisalka.j@sliit.lk', 
    social: { linkedin: 'https://www.linkedin.com/in/nisalka-j-863b33287?utm_source=share_via&utm_content=profile&utm_medium=member_android', github: 'https://github.com/NisalkaJay' } 
  },
  { 
    name: 'Malikshi Perera', 
    role: 'Undergraduate Researcher', 
    module: 'AI-Based Mental Health Monitoring and Risk Prediction',
    image: malikshiImg, 
    email: 'malikshi.p@sliit.lk', 
    social: { linkedin: 'https://www.linkedin.com/in/malikshi-perera-758474216?utm_source=share_via&utm_content=profile&utm_medium=member_android', github: 'https://github.com/MalikshiPerera' } 
  },
  { 
    name: 'Dimalsha Nethmi', 
    role: 'Undergraduate Researcher', 
    module: 'Physical Health Monitoring and Wellness guidance',
    image: dimalshaImg, 
    email: 'dimalsha.n@sliit.lk', 
    social: { linkedin: 'https://www.linkedin.com/in/dimalsha-nethmini-944123246?utm_source=share_via&utm_content=profile&utm_medium=member_android', github: 'https://github.com/DimalshaWijethunga' } 
  },
  { 
    name: 'Dr. Mahima Weerasinghe', 
    role: 'Supervisor (Senior Lecturer)', 
    image: mahimaImg, 
    email: 'mahima.w@sliit.lk', 
    social: { linkedin: 'https://www.linkedin.com/in/mahimaweerasinghe?utm_source=share_via&utm_content=profile&utm_medium=member_android', github: '' } 
  },
  { 
    name: 'Osuri Dunuwila', 
    role: 'Co-Supervisor (Assistant Lecturer)', 
    image: osuriImg, 
    email: 'osuri.d@sliit.lk', 
    social: { linkedin: 'https://www.linkedin.com/in/osuri-dunuwila-877843107?utm_source=share_via&utm_content=profile&utm_medium=member_android', github: '' } 
  }
];

export const documents = [
  { 
    title: 'Project Charter', 
    description: 'The document gives information regarding the statement of scope, objectives overview, and approximate schedule.', 
    icon: FcBriefcase, 
    file: charterFile 
  },
  { 
    title: 'Project Proposal', 
    description: 'Comprehensive justification of research goals. Includes the 4 individual reports.', 
    icon: FcDocument, 
    links: [
      { label: 'Individual Report - Pulasthi', file: propPula },
      { label: 'Individual Report - Nisalka', file: propNisalka },
      { label: 'Individual Report - Malikshi', file: propMalikshi },
      { label: 'Individual Report - Dimalsha', file: propDimalsha },
    ]
  },
  { 
    title: 'Research Paper', 
    description: 'A technical manuscript detailing the literature review, methodology, analysis, and interpretation.', 
    icon: FcGraduationCap, 
    file: researchPaperFile 
  },
  { 
    title: 'Checklist I', 
    description: 'Consist of ReadMe file and link to the GitHub repository. This checklist is for the first progress presentation', 
    icon: FcSurvey, 
    file: checklist1File 
  },
  { 
    title: 'Checklist II (Provision)', 
    description: 'Consist of MS Planner Report. This checklist is for the final presentation.', 
    icon: FcSurvey, 
    //file: checklist2File 
  },
  { 
    title: 'Final Reports (Provision)', 
    description: 'The complete project dissertation. Includes the merged final report and 4 individual final reports.', 
    icon: FcDocument, 
    links: [
      { label: 'Merged Final Document', file: '' },
      { label: 'Final Report - Pulasthi', file: '' },
      { label: 'Final Report - Nisalka', file: '' },
      { label: 'Final Report - Malikshi', file: '' },
      { label: 'Final Report - Dimalsha', file: '' },
    ]
  },
];

export const presentations = [
  { 
    title: 'Proposal Presentation', 
    description: 'Initial pitch detailing research gap and proposed architecture.', 
    icon: FaTv, 
    file: propSlide
  },
  { 
    title: 'Project Progress 1 Presentation', 
    description: 'Status update on data preprocessing and initial model prototyping.', 
    icon: FaTv, 
    file: prog1Slide
  },
  { 
    title: 'Project Progress 2 Presentation', 
    description: 'Integration update featuring AR training and Federated Learning bot.', 
    icon: FaTv, 
    file: prog2Slide
  },
  { 
    title: 'Final Presentation (Provision)', 
    description: 'Comprehensive overview of research findings and final system evaluation. [cite: 78]', 
    icon: FaTv, 
    //file: finalSlide
  },
];

export const fieldVisits = [
  { 
    image: visit1, 
    title: 'Clinical Requirement Gathering', 
    description: 'Consulting with nursing staff at a local clinic to understand real-world workflows.' 
  },
  { 
    image: visit2, 
    title: 'Doctor Consultation', 
    description: 'Discussing the integration of AI models with medical professionals.' 
  },
  { 
    image: visit3, 
    title: 'Field Interviews', 
    description: 'Gathering qualitative data on healthcare worker challenges.' 
  }
];

export const footerInfo = {
  institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
  location: 'Malabe, Sri Lanka',
  phone: '+94 70 165 8323',
  email: 'pulasthiwork@gmail.com' 
};