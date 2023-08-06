import React, {useState} from 'react';
import {Education, Experience, FormData} from '../types/interfaces';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface CVFormProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const CVForm: React.FC<CVFormProps> = ({formData, setFormData}) => {
    const initialEducation: Education = {
        school: '',
        degree: '',
        dates: {
            from: null,
            to: null,
        }
    };

    const initialExperience: Experience = {
        company: '',
        role: '',
        dates: {
            from: null,
            to: null,
        }
    };

    const [localFormData, setLocalFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        education: [
            {
                school: '',
                degree: '',
                dates: {
                    from: null,
                    to: null,
                }
            }
        ],
        experiences: [
            {
                company: '',
                role: '',
                dates: {
                    from: null,
                    to: null,
                }
            }
        ],
        skills: '',
        languages: '',
        certifications: '',
        hobbies: '',
        references: '',
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setLocalFormData({...localFormData, [name]: value});
        setFormData({...formData, [name]: value});
    };

    const handleChangeEducation = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        let updatedEducation = [...localFormData.education];

        if (e.target.name === 'dates') {
            console.error("The 'dates' field should not be an input field");
        } else {
            updatedEducation[index][e.target.name as keyof Omit<Education, 'dates'>] = e.target.value;
        }

        setLocalFormData({...localFormData, education: updatedEducation});
        setFormData({...formData, education: updatedEducation});
    }

    const handleChangeExperience = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        let updatedExperiences = [...localFormData.experiences];

        if (e.target.name === 'dates') {
            console.error("The 'dates' field should not be an input field");
        } else {
            updatedExperiences[index][e.target.name as keyof Omit<Experience, 'dates'>] = e.target.value;
        }

        setLocalFormData({...localFormData, experiences: updatedExperiences});
        setFormData({...formData, experiences: updatedExperiences});
    }

    const handleChangeEducationDates = (index: number, key: keyof Education['dates']) => (date: Date) => {
        const updatedEducation = [...localFormData.education];

        // Check if updatedEducation at index is an object before trying to access its dates property
        if (typeof updatedEducation[index] === 'object' && updatedEducation[index] !== null) {
            updatedEducation[index].dates[key] = date;
            setLocalFormData({...localFormData, education: updatedEducation});
            setFormData({...formData, education: updatedEducation});
        } else {
            console.error(`Invalid education object at index ${index}`, updatedEducation[index]);
        }
    };

    const handleChangeExperienceDates = (index: number, key: keyof Experience['dates']) => (date: Date) => {
        const updatedExperiences = [...localFormData.experiences];
        updatedExperiences[index].dates[key] = date;
        setLocalFormData({...localFormData, experiences: updatedExperiences});
        setFormData({...formData, experiences: updatedExperiences});
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

    const removeEducationField = (index: number) => {
        const newEducation = [...localFormData.education];
        newEducation.splice(index, 1);
        setLocalFormData({...localFormData, education: newEducation});
        setFormData({...formData, education: newEducation});
    };

    const removeExperienceField = (index: number) => {
        const newExperiences = [...localFormData.experiences];
        newExperiences.splice(index, 1);
        setLocalFormData({...localFormData, experiences: newExperiences});
        setFormData({...formData, experiences: newExperiences});
    };

    return (
        <form className="bg-gray-200 rounded-lg shadow-md p-6 space-y-4">
            {/* Personal information fields... */}
            <h3 className="text-md font-semibold">Personal info</h3>
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
                            onChange={(e) => handleChangeEducation(e, index)}
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
                            onChange={(e) => handleChangeEducation(e, index)}
                            placeholder="Degree"
                            className="px-2 py-1 border rounded-md"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium">From Date</label>
                        <DatePicker
                            selected={edu.dates.from}
                            onChange={handleChangeEducationDates(index, 'from')}
                            dateFormat="MM/yyyy"
                            showMonthYearPicker
                            className="px-2 py-1 border rounded-md"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium">To Date</label>
                        <DatePicker
                            selected={edu.dates.to}
                            onChange={handleChangeEducationDates(index, 'to')}
                            dateFormat="MM/yyyy"
                            showMonthYearPicker
                            className="px-2 py-1 border rounded-md"
                        />
                    </div>
                    <button type="button" onClick={() => removeEducationField(index)}
                            className="px-2 py-1 border rounded-md bg-red-500 text-white">
                        Remove education
                    </button>
                </div>
            ))}
            <button type="button" onClick={addEducationField}
                    className="px-2 py-1 border rounded-md bg-blue-500 text-white">
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
                            onChange={(e) => handleChangeExperience(e, index)}
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
                            onChange={(e) => handleChangeExperience(e, index)}
                            placeholder="Role"
                            className="px-2 py-1 border rounded-md"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium">From Date</label>
                        <DatePicker
                            selected={exp.dates.from}
                            onChange={handleChangeExperienceDates(index, 'from')}
                            dateFormat="MM/yyyy"
                            showMonthYearPicker
                            className="px-2 py-1 border rounded-md"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium">To Date</label>
                        <DatePicker
                            selected={exp.dates.to}
                            onChange={handleChangeExperienceDates(index, 'to')}
                            dateFormat="MM/yyyy"
                            showMonthYearPicker
                            className="px-2 py-1 border rounded-md"
                        />
                    </div>
                    <button type="button" onClick={() => removeExperienceField(index)}
                            className="px-2 py-1 border rounded-md bg-red-500 text-white">
                        Remove experience
                    </button>
                </div>
            ))}
            <button type="button" onClick={addExperienceField}
                    className="px-2 py-1 border rounded-md bg-blue-500 text-white">
                Add experience
            </button>


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
        </form>
    );
};

export default CVForm;
