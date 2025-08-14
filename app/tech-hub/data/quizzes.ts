import { QuizQuestionType } from '../types';

export const QUIZ_QUESTIONS: QuizQuestionType[] = [
    {
        questionText: 'What does HTML stand for?',
        answerOptions: [
            { answerText: 'Hyper Trainer Marking Language', isCorrect: false },
            { answerText: 'Hyper Text Markup Language', isCorrect: true },
            { answerText: 'Hyperlinks and Text Markup Language', isCorrect: false },
            { answerText: 'Home Tool Markup Language', isCorrect: false },
        ],
    },
    {
        questionText: 'Which of the following is a popular JavaScript library for building user interfaces?',
        answerOptions: [
            { answerText: 'Node.js', isCorrect: false },
            { answerText: 'Express', isCorrect: false },
            { answerText: 'React', isCorrect: true },
            { answerText: 'MongoDB', isCorrect: false },
        ],
    },
    {
        questionText: 'In data science, which Python library is primarily used for data manipulation and analysis?',
        answerOptions: [
            { answerText: 'Matplotlib', isCorrect: false },
            { answerText: 'TensorFlow', isCorrect: false },
            { answerText: 'Scikit-learn', isCorrect: false },
            { answerText: 'Pandas', isCorrect: true },
        ],
    },
    {
        questionText: 'What is the purpose of a `git clone` command?',
        answerOptions: [
            { answerText: 'To create a new branch', isCorrect: false },
            { answerText: 'To stage changes for a commit', isCorrect: false },
            { answerText: 'To create a local copy of a remote repository', isCorrect: true },
            { answerText: 'To merge two branches', isCorrect: false },
        ],
    },
    {
        questionText: 'Which algorithm is NOT a type of supervised machine learning?',
        answerOptions: [
            { answerText: 'Linear Regression', isCorrect: false },
            { answerText: 'K-Means Clustering', isCorrect: true },
            { answerText: 'Support Vector Machines', isCorrect: false },
            { answerText: 'Decision Trees', isCorrect: false },
        ],
    },
    {
        questionText: 'What does CSS stand for?',
        answerOptions: [
            { answerText: 'Computer Style Sheets', isCorrect: false },
            { answerText: 'Creative Style Sheets', isCorrect: false },
            { answerText: 'Colorful Style Sheets', isCorrect: false },
            { answerText: 'Cascading Style Sheets', isCorrect: true },
        ],
    },
    {
        questionText: 'Which database model is known for its flexibility and use of JSON-like documents?',
        answerOptions: [
            { answerText: 'Relational (SQL)', isCorrect: false },
            { answerText: 'NoSQL (e.g., MongoDB)', isCorrect: true },
            { answerText: 'Graph (e.g., Neo4j)', isCorrect: false },
            { answerText: 'Columnar (e.g., Cassandra)', isCorrect: false },
        ],
    },
    {
        questionText: 'In cybersecurity, what does "phishing" refer to?',
        answerOptions: [
            { answerText: 'A method for cooling server racks', isCorrect: false },
            { answerText: 'A type of secure network protocol', isCorrect: false },
            { answerText: 'Fraudulent attempts to obtain sensitive information by disguising as a trustworthy entity', isCorrect: true },
            { answerText: 'A physical security measure for data centers', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the primary function of an operating system?',
        answerOptions: [
            { answerText: 'To run applications', isCorrect: false },
            { answerText: 'To manage computer hardware and software resources', isCorrect: true },
            { answerText: 'To provide a user interface', isCorrect: false },
            { answerText: 'To connect to the internet', isCorrect: false },
        ],
    },
    {
        questionText: 'Which framework is used for developing cross-platform mobile apps and was developed by Google?',
        answerOptions: [
            { answerText: 'React Native', isCorrect: false },
            { answerText: 'SwiftUI', isCorrect: false },
            { answerText: 'Flutter', isCorrect: true },
            { answerText: 'Xamarin', isCorrect: false },
        ],
    },
    {
        questionText: 'What does SQL stand for?',
        answerOptions: [
            { answerText: 'Structured Query Language', isCorrect: true },
            { answerText: 'Stylish Question Language', isCorrect: false },
            { answerText: 'Statement Query Language', isCorrect: false },
            { answerText: 'Superior Question Language', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the main purpose of a firewall in network security?',
        answerOptions: [
            { answerText: 'To speed up network traffic', isCorrect: false },
            { answerText: 'To monitor and control incoming and outgoing network traffic', isCorrect: true },
            { answerText: 'To encrypt all data packets', isCorrect: false },
            { answerText: 'To backup network data', isCorrect: false },
        ],
    }
];