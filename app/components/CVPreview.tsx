"use client"
import React from 'react';
import { Education, Experience, FormData } from '../types/interfaces';
import html2pdf from 'html2pdf.js';

interface CVPreviewProps {
    formData: FormData;
}

const handleGeneratePDF = () => {
    const element = document.getElementById('cv-preview'); // The ID of the container element you want to convert to PDF
    const opt = {
        margin: 10,
        filename: 'my_cv.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().set(opt).from(element).save();
};

const CVPreview: React.FC<CVPreviewProps> = ({ formData }) => {
    if (!formData) {
        return <div>Loading...</div>;
    }

    return (
        <div id="cv-preview" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">CV Preview</h2>

            {/* Personal Information */}
            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{formData.name}</h3>
                <p className="text-gray-600 mb-1">Email: {formData.email}</p>
                <p className="text-gray-600 mb-1">Phone: {formData.phone}</p>
                <p className="text-gray-600 mb-1">Skills: {formData.skills}</p>
                <p className="text-gray-600 mb-1">Languages: {formData.languages}</p>
                <p className="text-gray-600 mb-1">Certifications: {formData.certifications}</p>
                <p className="text-gray-600 mb-1">Hobbies: {formData.hobbies}</p>
                <p className="text-gray-600 mb-1">References: {formData.references}</p>
            </div>

            {/* Education Information */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Education</h3>
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
                <h3 className="text-lg font-semibold mb-4">Experience</h3>
                {formData.experiences.length > 0 ? formData.experiences.map((exp: Experience, index: number) => (
                    <div key={index} className="mb-3 border p-2 rounded-md">
                        <p className="text-gray-600 mb-1 font-semibold">Company: {exp.company}</p>
                        <p className="text-gray-600 mb-1">Role: {exp.role}</p>
                        <p className="text-gray-600 mb-1">Dates: {exp.dates}</p>
                    </div>
                )) : <p className="text-gray-600">No experience information provided</p>}
            </div>
            <button onClick={handleGeneratePDF}>Generate PDF</button>
        </div>
    );
};

export default CVPreview;