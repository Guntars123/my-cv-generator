"use client"
import React, { useState } from 'react';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';
import { FormData } from './types/interfaces'; // Adjust the import path based on where you saved interfaces.ts

const IndexPage: React.FC = () => {
    const initialFormData: FormData = {
        name: '',
        email: '',
        phone: '',
        skills: '',
        languages: '',
        certifications: '',
        hobbies: '',
        references: '',
        education: [{ school: '', degree: '', dates: '' }],
        experiences: [{ company: '', role: '', dates: '' }],
    };

    const [formData, setFormData] = useState<FormData>(initialFormData);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto max-w-6xl p-8">
            <CVForm formData={formData} setFormData={setFormData} />
            <CVPreview formData={formData} />
        </div>
    );
};

export default IndexPage;