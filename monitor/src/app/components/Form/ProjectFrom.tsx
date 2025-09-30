"use client"
import { Radio } from 'antd';
import React, { useState, useEffect } from 'react';

// Enhanced prop types for both add and edit functionality
interface ProjectFromProps {
    onClose: () => void;
    onSubmit: (projectData: any) => void;
    editData?: {
        id: number;
        name: string;
        link: string;
        logo: string;
        type: string;
    } | null;
    mode?: 'add' | 'edit';
}

export default function ProjectFrom({ onClose, onSubmit, editData = null, mode = 'add' }: ProjectFromProps) {
    // Initialize form data - if in edit mode and editData exists, use that data
    const [formData, setFormData] = useState({
        id: editData?.id || 0,
        name: editData?.name || '',
        link: editData?.link || '',
        logo: editData?.logo || 'logo.jpg',
        type: editData?.type || 'Electricity'
    });
    
    const [fileName, setFileName] = useState<string>(editData?.logo || "No file choosen");

    // Update form data if editData changes (for instance, if the component is reused)
    useEffect(() => {
        if (editData) {
            setFormData({
                id: editData.id,
                name: editData.name,
                link: editData.link,
                logo: editData.logo,
                type: editData.type
            });
            setFileName(editData.logo);
        }
    }, [editData]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length > 0){
            setFileName(e.target.files[0].name);
            // In a real app, you would upload the file to a server and get a URL back
            // For now, just use the filename
            setFormData({...formData, logo: e.target.files[0].name});
        } else {
            setFileName("No file choosen");
        }
    }
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    };
    
    const handleTypeChange = (e: any) => {
        setFormData({...formData, type: e.target.value});
    }

    const handleSubmit = () => {
        // Validate form data
        if (!formData.name || !formData.link) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Pass the form data to the parent component
        onSubmit(formData);
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"> 
            <div className="bg-gray-100 w-[30%] h-auto rounded-2xl relative pointer-events-auto">
                <div
                    className="text-[#FC213D] text-lg text-right px-5 pt-2 font-bold cursor-pointer absolute top-0 right-0"
                    onClick={onClose}
                >
                    X
                </div>
                <div className="font-bold text-xl text-center pt-8 pb-4">
                    <h2>{mode === 'add' ? 'Add' : 'Edit'} Project Form</h2>
                </div>

                <div className="px-5 pt-2">
                    <label className="block w-full mb-1">Name</label>
                    <input 
                        type="text" 
                        name="name"
                        className="bg-white w-full p-2 rounded-lg border border-gray-300"
                        placeholder="Enter project name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required        
                    />
                </div>
                <div className="px-5 pt-2">
                    <label className="block w-full mb-1">Project link</label>
                    <input 
                        type="text"
                        name="link"
                        className="bg-white w-full p-2 rounded-lg border border-gray-300"
                        placeholder="Enter your project link"
                        value={formData.link}
                        onChange={handleInputChange}
                        required 
                    />
                </div>
                
                <div className="px-5 pt-2">
                    <label className="block w-full mb-1">Logo</label>
                    <div className="flex items-center w-full border border-gray-300 rounded-lg bg-white">
                        <div className="relative">
                            <input 
                                type="file" 
                                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            <button className="bg-gray-200 border border-gray-400 rounded text-black m-1 px-2 py-1" type="button">
                                Choose file
                            </button>
                        </div>
                        <span className="text-gray-500 text-sm ml-1">
                            {fileName}
                        </span>
                    </div>
                </div>

                <div className="px-5 pt-2">
                    <label className="block mb-1">Type</label>
                    <div className='w-full'>
                        <Radio.Group 
                            className="w-full grid grid-cols-2 gap-0"
                            onChange={handleTypeChange}
                            value={formData.type}
                        >
                            <Radio.Button 
                                value="Electricity"  
                                className="text-center border rounded-xs" 
                                style={{ width: '50%' }}
                            >
                                Electricity
                            </Radio.Button>
                            <Radio.Button 
                                value="Water Flow" 
                                className="text-center border rounded-xs"
                                style={{ width: '50%' }}
                            >
                                Water Flow
                            </Radio.Button>
                        </Radio.Group>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-6 mb-6 space-x-4">
                    <button 
                        type="button" 
                        onClick={onClose} 
                        className="bg-gray-300 text-black rounded-lg px-4 py-2 font-bold hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button 
                        type="button" 
                        onClick={handleSubmit} 
                        className="bg-[#374879] text-white rounded-lg px-4 py-2 font-bold hover:bg-[#2b3c6e]"
                    >
                        {mode === 'add' ? 'Submit' : 'Update'}
                    </button>
                </div>
            </div>
        </div>
    );
}