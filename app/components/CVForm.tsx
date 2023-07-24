import React, { useState } from 'react';
import { Education, Experience, FormData } from '../types/interfaces';

interface CVFormProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const CVForm: React.FC<CVFormProps> = ({ formData, setFormData }) => {
    const initialEducation: Education = { school: '', degree: '', dates: '' };
    const initialExperience: Experience = { company: '', role: '', dates: '' };

    const [localFormData, setLocalFormData] = useState<FormData>(formData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalFormData({ ...localFormData, [e.target.name]: e.target.value });
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleChangeEducation = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedEducation = [...localFormData.education];
        updatedEducation[index][e.target.name as keyof Education] = e.target.value;
        setLocalFormData({ ...localFormData, education: updatedEducation });
        setFormData({ ...formData, education: updatedEducation });
    };

    const handleChangeExperience = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedExperiences = [...localFormData.experiences];
        updatedExperiences[index][e.target.name as keyof Experience] = e.target.value;
        setLocalFormData({ ...localFormData, experiences: updatedExperiences });
        setFormData({ ...formData, experiences: updatedExperiences });
    };

    const addEducationField = () => {
        setLocalFormData((prevState) => ({
            ...prevState,
            education: [...prevState.education, initialEducation],
        }));
        setFormData((prevState) => ({
            ...prevState,
            education: [...prevState.education, initialEducation],
        }));
    };

    const addExperienceField = () => {
        setLocalFormData((prevState) => ({
            ...prevState,
            experiences: [...prevState.experiences, initialExperience],
        }));
        setFormData((prevState) => ({
            ...prevState,
            experiences: [...prevState.experiences, initialExperience],
        }));
    };

    return (
        <form className="space-y-4">
            {/* Personal information fields... */}
            <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium">Name</label>
                <input
                    type="text"
                    name="name"
                    value={localFormData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="px-2 py-1 border rounded-md"
                />
            </div>

            <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input
                    type="email"
                    name="email"
                    value={localFormData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="px-2 py-1 border rounded-md"
                />
            </div>

            <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium">Phone</label>
                <input
                    type="tel"
                    name="phone"
                    value={localFormData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="px-2 py-1 border rounded-md"
                />
            </div>

            <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium">Skills</label>
                <input
                    type="text"
                    name="skills"
                    value={localFormData.skills}
                    onChange={handleChange}
                    placeholder="Skills"
                    className="px-2 py-1 border rounded-md"
                />
            </div>

            <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium">Languages</label>
                <input
                    type="text"
                    name="languages"
                    value={localFormData.languages}
                    onChange={handleChange}
                    placeholder="Languages"
                    className="px-2 py-1 border rounded-md"
                />
            </div>

            <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium">Certifications</label>
                <input
                    type="text"
                    name="certifications"
                    value={localFormData.certifications}
                    onChange={handleChange}
                    placeholder="Certifications"
                    className="px-2 py-1 border rounded-md"
                />
            </div>

            <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium">Hobbies</label>
                <input
                    type="text"
                    name="hobbies"
                    value={localFormData.hobbies}
                    onChange={handleChange}
                    placeholder="Hobbies"
                    className="px-2 py-1 border rounded-md"
                />
            </div>

            <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium">References</label>
                <input
                    type="text"
                    name="references"
                    value={localFormData.references}
                    onChange={handleChange}
                    placeholder="References"
                    className="px-2 py-1 border rounded-md"
                />
            </div>

            {/* Education fields */}
            {localFormData.education.map((edu, index) => (
                <div key={index} className="space-y-2">
                    <h3 className="text-md font-semibold">Education {index + 1}</h3>
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium">School</label>
                        <input
                            type="text"
                            name="school"
                            value={edu.school}
                            onChange={handleChangeEducation(index)}
                            placeholder="School"
                            className="px-2 py-1 border rounded-md"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium">Degree</label>
                        <input
                            type="text"
                            name="degree"
                            value={edu.degree}
                            onChange={handleChangeEducation(index)}
                            placeholder="Degree"
                            className="px-2 py-1 border rounded-md"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium">Dates</label>
                        <input
                            type="text"
                            name="dates"
                            value={edu.dates}
                            onChange={handleChangeEducation(index)}
                            placeholder="Dates"
                            className="px-2 py-1 border rounded-md"
                        />
                    </div>
                </div>
            ))}
            <button type="button" onClick={addEducationField} className="px-2 py-1 border rounded-md bg-blue-500 text-white">
                Add education
            </button>

            {/* Experience fields */}
            {localFormData.experiences.map((exp, index) => (
                <div key={index} className="space-y-2">
                    <h3 className="text-md font-semibold">Experience {index + 1}</h3>
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium">Company</label>
                        <input
                            type="text"
                            name="company"
                            value={exp.company}
                            onChange={handleChangeExperience(index)}
                            placeholder="Company"
                            className="px-2 py-1 border rounded-md"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium">Role</label>
                        <input
                            type="text"
                            name="role"
                            value={exp.role}
                            onChange={handleChangeExperience(index)}
                            placeholder="Role"
                            className="px-2 py-1 border rounded-md"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium">Dates</label>
                        <input
                            type="text"
                            name="dates"
                            value={exp.dates}
                            onChange={handleChangeExperience(index)}
                            placeholder="Dates"
                            className="px-2 py-1 border rounded-md"
                        />
                    </div>
                </div>
            ))}
            <button type="button" onClick={addExperienceField} className="px-2 py-1 border rounded-md bg-blue-500 text-white">
                Add experience
            </button>
        </form>
    );
};

export default CVForm;
