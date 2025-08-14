
export interface RoadmapStepType {
  id: string;
  title: string;
  description: string;
  resources?: { name: string; url: string }[];
}

export interface RoadmapType {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  steps: RoadmapStepType[];
}

export interface SubjectType {
    name: string;
    notesUrl?: string;
    papersUrl?: string;
    manualsUrl?: string;
}

export interface SemesterType {
    id: number;
    title: string;
    subjects: SubjectType[];
}

export interface QuizQuestionType {
    questionText: string;
    answerOptions: { answerText: string; isCorrect: boolean }[];
}
