export interface DateRange {
    from: Date | null;
    to: Date | null;
}

export interface Education {
    school: string;
    degree: string;
    dates: DateRange;
}

export interface Experience {
    company: string;
    role: string;
    dates: DateRange;
}

export interface FormData {
    name: string,
    email: string,
    phone: string,
    education: Education[],
    experiences: Experience[],
    skills: string,
    languages: string,
    certifications: string,
    hobbies: string,
    references: string,
}