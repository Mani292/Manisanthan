import React from 'react';
import { RoadmapType } from '../types';

const WebDevIcon = () => (
    React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-brand-primary",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
    }, React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    }))
);

const DataScienceIcon = () => (
    React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-brand-primary",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
    }, React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    }))
);

const AppDevIcon = () => (
    React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-brand-primary",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
    }, React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    }))
);

const CybersecurityIcon = () => (
    React.createElement('svg', {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-brand-primary",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor"
    }, React.createElement('path', {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944A12.02 12.02 0 0012 21a12.02 12.02 0 009-8.056h-1.338a1.003 1.003 0 01-.983-1.077 4.978 4.978 0 00-1.05-2.572A4.983 4.983 0 0012 8a4.983 4.983 0 00-4.632 3.303 4.978 4.978 0 00-1.05 2.572 1.003 1.003 0 01-.983 1.077H3.382a12.02 12.02 0 008.618-15.016z"
    }))
);

export const ROADMAPS: RoadmapType[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Build modern websites and web applications from scratch. Covers frontend, backend, and full-stack technologies.',
    icon: React.createElement(WebDevIcon),
    steps: [
      { id: 'wd-1', title: 'HTML & CSS', description: 'Learn the fundamental building blocks of all websites.' },
      { id: 'wd-2', title: 'JavaScript Basics', description: 'Understand variables, data types, functions, and the DOM.' },
      { id: 'wd-3', title: 'Git & GitHub', description: 'Master version control for collaborative development.' },
      { id: 'wd-4', title: 'Frontend Framework (React)', description: 'Build dynamic user interfaces with React.' },
      { id: 'wd-5', title: 'Backend Development (Node.js/Express)', description: 'Create servers and APIs to power your applications.' },
      { id: 'wd-6', title: 'Databases (MongoDB/SQL)', description: 'Learn how to store and manage application data.' },
      { id: 'wd-7', title: 'Deployment', description: 'Deploy your applications to the web using services like Vercel or Render.' },
    ],
  },
  {
    id: 'data-science',
    title: 'Data Science & AI',
    description: 'Dive into the world of data, machine learning, and artificial intelligence to solve complex problems.',
    icon: React.createElement(DataScienceIcon),
    steps: [
      { id: 'ds-1', title: 'Python Programming', description: 'Master the core language for data science.' },
      { id: 'ds-2', title: 'Mathematics for ML', description: 'Learn Linear Algebra, Calculus, Statistics, and Probability.' },
      { id: 'ds-3', title: 'Data Analysis Libraries (Pandas, NumPy)', description: 'Learn to manipulate and analyze data effectively.' },
      { id: 'ds-4', title: 'Data Visualization (Matplotlib, Seaborn)', description: 'Create insightful plots and charts.' },
      { id: 'ds-5', title: 'Machine Learning Fundamentals', description: 'Understand algorithms like regression, classification, and clustering.' },
      { id: 'ds-6', title: 'Deep Learning (TensorFlow/PyTorch)', description: 'Build and train neural networks for advanced tasks.' },
      { id: 'ds-7', title: 'Big Data Technologies (Spark)', description: 'Learn to process and analyze massive datasets.' },
    ],
  },
  {
    id: 'app-development',
    title: 'App Development',
    description: 'Create native or cross-platform mobile applications for Android and iOS.',
    icon: React.createElement(AppDevIcon),
    steps: [
      { id: 'ad-1', title: 'Choose Platform: Native or Cross-Platform', description: 'Decide between native (Kotlin/Swift) or cross-platform (React Native/Flutter).' },
      { id: 'ad-2', title: 'Learn a Programming Language (Kotlin/Swift/Dart)', description: 'Master the language for your chosen platform.' },
      { id: 'ad-3', title: 'Understand UI/UX Principles for Mobile', description: 'Design intuitive and user-friendly mobile interfaces.' },
      { id: 'ad-4', title: 'Master a Framework (React Native/Flutter)', description: 'Build your app using a powerful framework.' },
      { id: 'ad-5', title: 'Networking and Data', description: 'Learn to fetch data from APIs and store it locally.' },
      { id: 'ad-6', title: 'State Management', description: 'Manage the state of your application effectively.' },
      { id: 'ad-7', title: 'Publish to App Store/Play Store', description: 'Go through the process of deploying your app to the world.' },
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect systems, networks, and programs from digital attacks. Learn ethical hacking and defense.',
    icon: React.createElement(CybersecurityIcon),
    steps: [
      { id: 'cs-1', title: 'Networking Fundamentals', description: 'Understand TCP/IP, OSI model, and network protocols.' },
      { id: 'cs-2', title: 'Operating Systems Security', description: 'Learn about Linux and Windows security, permissions, and hardening.' },
      { id: 'cs-3', title: 'Web Security Basics', description: 'Learn about common vulnerabilities like OWASP Top 10 (SQLi, XSS).' },
      { id: 'cs-4', title: 'Ethical Hacking & Penetration Testing', description: 'Learn to think like a hacker to find and fix vulnerabilities.' },
      { id: 'cs-5', title: 'Cryptography', description: 'Understand encryption, hashing, and public key infrastructure.' },
      { id: 'cs-6', title: 'Security Operations (SOC)', description: 'Learn about monitoring, incident response, and threat intelligence.' },
      { id: 'cs-7', title: 'Certifications (CompTIA Security+, CEH)', description: 'Prepare for industry-recognized security certifications.' },
    ],
  },
];