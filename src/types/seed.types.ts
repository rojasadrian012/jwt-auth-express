interface Option {
    value: number;
    label: string;
    labelEn: string;
}

interface Question {
    id: number;
    scale: "personal_burnout" | "work_burnout" | "client_burnout";
    question: string;
    questionEn: string;
    options: Option[];
    reverseScored?: boolean;
}

export interface ISeedCbi {
    questions: Question[];
}