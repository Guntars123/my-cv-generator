"use client"
import React, {useState} from 'react';
/*import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';
import {FormData} from './types/interfaces';

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
        education: [{school: '', degree: '', dates: {from: null, to: null}}],
        experiences: [{company: '', role: '', dates: {from: null, to: null}}],
    };

    const [formData, setFormData] = useState<FormData>(initialFormData);

    return (
        <div>
            <h1 className="text-2xl sm:text-4xl font-semibold text-center m-8">CV Generator</h1>
            <div className="grid grid-cols-1 gap-8 mx-auto p-4 sm:p-8 sm:grid-cols-2 sm:max-w-6xl">
                <CVForm formData={formData} setFormData={setFormData}/>
                <div className="bg-gray-200 shadow-lg p-4 sm:p-8" style={{minHeight: '500px'}}>
                    <CVPreview formData={formData}/>
                </div>
            </div>
        </div>
    );
};*/

const IndexPage: React.FC = () => {
    return (
        <div>
            <h1>Hello, world!</h1>
        </div>
    );
};

export default IndexPage;