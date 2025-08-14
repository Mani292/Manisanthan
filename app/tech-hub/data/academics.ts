import { SemesterType } from '../types';

export const SEMESTERS: SemesterType[] = [
    {
        id: 1,
        title: "Semester 1",
        subjects: [
            { name: "Engineering Mathematics - I" },
            { name: "Engineering Physics" },
            { name: "Basic Electrical Engineering" },
            { name: "Engineering Graphics & Design" },
            { name: "Communication Skills" },
        ],
    },
    {
        id: 2,
        title: "Semester 2",
        subjects: [
            { name: "Engineering Mathematics - II" },
            { name: "Engineering Chemistry" },
            { name: "Programming for Problem Solving (C)" },
            { name: "Basic Mechanical Engineering" },
            { name: "Environmental Science" },
        ],
    },
    {
        id: 3,
        title: "Semester 3",
        subjects: [
            { name: "Data Structures & Algorithms", notesUrl: "#", papersUrl: "#" },
            { name: "Digital Logic Design", notesUrl: "#" },
            { name: "Object Oriented Programming (Java/C++)", notesUrl: "#", manualsUrl: "#" },
            { name: "Discrete Mathematics", notesUrl: "#" },
            { name: "Database Management Systems", notesUrl: "#", papersUrl: "#" },
        ],
    },
    {
        id: 4,
        title: "Semester 4",
        subjects: [
            { name: "Operating Systems" },
            { name: "Computer Organization & Architecture" },
            { name: "Design & Analysis of Algorithms" },
            { name: "Software Engineering" },
            { name: "Formal Languages & Automata Theory" },
        ],
    },
    {
        id: 5,
        title: "Semester 5",
        subjects: [
            { name: "Computer Networks" },
            { name: "Compiler Design" },
            { name: "Web Technologies" },
            { name: "Artificial Intelligence" },
            { name: "Elective I" },
        ],
    },
    {
        id: 6,
        title: "Semester 6",
        subjects: [
            { name: "Machine Learning" },
            { name: "Cryptography & Network Security" },
            { name: "Distributed Systems" },
            { name: "Mobile Computing" },
            { name: "Elective II" },
        ],
    },
    {
        id: 7,
        title: "Semester 7",
        subjects: [
            { name: "Cloud Computing" },
            { name: "Big Data Analytics" },
            { name: "Internet of Things (IoT)" },
            { name: "Project I" },
            { name: "Elective III" },
        ],
    },
    {
        id: 8,
        title: "Semester 8",
        subjects: [
            { name: "Project II" },
            { name: "Internship" },
            { name: "Professional Ethics" },
            { name: "Elective IV" },
        ],
    },
];