import React, { useEffect, useState } from 'react';
import {Education, Experience, FormData} from '../types/interfaces';
import {MdEmail, MdPhone, MdSchool, MdWork, MdLanguage, MdVerifiedUser, MdStar} from 'react-icons/md';

interface CVPreviewProps {
    formData: FormData;
}

const CVPreview: React.FC<CVPreviewProps> = ({formData}) => {
    const [html2pdf, setHtml2pdf] = useState<any>(null);

    useEffect(() => {
        import('html2pdf.js').then((module) => {
            setHtml2pdf(() => module.default);
        });
    }, []);

    const handleGeneratePDF = () => {
        if (html2pdf && typeof window !== "undefined") {
            const element = document.getElementById('cv-preview');
            const opt = {
                margin: 10,
                filename: 'my_cv.pdf',
                image: {type: 'jpeg', quality: 0.98},
                html2canvas: {scale: 2},
                jsPDF: {unit: 'mm', format: 'a4', orientation: 'portrait'},
            };

            html2pdf().from(element).set(opt).save();
        }
    };

    if (!formData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-gray-200 rounded-lg shadow-md p-6">
            <div id="cv-preview">
                <div className="flex justify-center mb-6">
                    <h2 className="text-4xl font-semibold mb-6">Curriculum vitae</h2>
                </div>

                {/* Personal Information */}
                <div className="mb-6 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 mr-2">{formData.name}</h3>
                    <div className="flex items-center">
                        <MdEmail className="text-gray-600 mr-1"/>
                        <p className="text-gray-600 mb-1">{formData.email}</p>
                    </div>
                    <div className="flex items-center">
                        <MdPhone className="text-gray-600 mr-1"/>
                        <p className="text-gray-600 mb-1">{formData.phone}</p>
                    </div>
                </div>

                {/* Education Information */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">
                        <MdSchool className="inline-block text-gray-600 mr-2"/>
                        Education</h3>
                    {formData.education.length > 0 ? formData.education.map((edu: Education, index: number) => (
                        <div key={index} className="mb-3 border p-2 rounded-md">
                            <p className="text-gray-600 mb-1 font-semibold">School: {edu.school}</p>
                            <p className="text-gray-600 mb-1">Degree: {edu.degree}</p>
                            <p className="text-gray-600 mb-1">Dates: {edu.dates}</p>
                        </div>
                    )) : <p className="text-gray-600">No education information provided</p>}
                </div>

                {/* Experience Information */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">
                        <MdWork className="inline-block text-gray-600 mr-2"/>
                        Experience</h3>
                    {formData.experiences.length > 0 ? formData.experiences.map((exp: Experience, index: number) => (
                        <div key={index} className="mb-3 border p-2 rounded-md">
                            <p className="text-gray-600 mb-1 font-semibold">Company: {exp.company}</p>
                            <p className="text-gray-600 mb-1">Role: {exp.role}</p>
                            <p className="text-gray-600 mb-1">Dates: {exp.dates}</p>
                        </div>
                    )) : <p className="text-gray-600">No experience information provided</p>}
                </div>

                <div className="mb-6">
                    <p className="text-gray-600 mb-1">
                        <MdStar className="inline-block text-gray-600 mr-2"/>
                        Skills: {formData.skills}</p>
                    <p className="text-gray-600 mb-1">
                        <MdLanguage className="inline-block text-gray-600 mr-2"/>
                        Languages: {formData.languages}</p>
                    <p className="text-gray-600 mb-1">
                        <MdVerifiedUser className="inline-block text-gray-600 mr-2"/>
                        Certifications: {formData.certifications}</p>
                    <p className="text-gray-600 mb-1">
                        <MdStar className="inline-block text-gray-600 mr-2"/>
                        Hobbies: {formData.hobbies}</p>
                    <p className="text-gray-600 mb-1">
                        <MdVerifiedUser className="inline-block text-gray-600 mr-2"/>
                        References: {formData.references}</p>
                </div>

            </div>
            <button onClick={handleGeneratePDF} className="px-2 py-1 border rounded-md bg-blue-500 text-white">Generate
                PDF
            </button>
        </div>
    );
};

export default CVPreview;