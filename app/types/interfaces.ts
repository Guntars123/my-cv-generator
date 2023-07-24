export interface Education {
    school: string;
    degree: string;
    dates: string;
}

export interface Experience {
    company: string;
    role: string;
    dates: string;
}

export interface FormData {
    name: string;
    email: string;
    phone: string;
    skills: string;
    languages: string;
    certifications: string;
    hobbies: string;
    references: string;
    education: Education[];
    experiences: Experience[];
}