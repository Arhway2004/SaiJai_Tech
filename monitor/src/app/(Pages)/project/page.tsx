'use client';

import { useState, useEffect } from 'react';
import Search from 'antd/es/transfer/search';
import Navbar from '../../components/navbar';
import {mockData} from '../../data/mockData';
import {NavbarData} from '../../types/types';
import Image from 'next/image';
import Link from 'next/link';

import ProjectFrom from '../../components/Form/ProjectFrom';

const Project: React.FC = () => {
    const navbarData: NavbarData = mockData["/project"];
    const [userRole, setUserRole] = useState<string>('');
    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    const [showProjectForm, setShowProjectForm] = useState<boolean>(false);
    const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
    const [currentProject, setCurrentProject] = useState<any>(null);
    
    const [projects, setProjects] = useState([
        {id: 1, name: "Project A", link:"dmosmcdsc", logo:"logo.jpg", type:"Water Flow"}
    ]);
    
    const totalProjects = projects.length;
    
    useEffect(() => {
        const fetchUserRole = async () => {
            try {
                const mockRole = 'Admin'; 
                setUserRole(mockRole);
                setIsAdmin(mockRole === 'Admin');
            } catch (error) {
                console.error('Error fetching user role:', error);
                setUserRole('User'); 
                setIsAdmin(false);
            }
        };
        
        fetchUserRole();
    }, []);

    const handleAddProject = (newProject) => {
        // Generate a new ID (in a real app, this would come from the backend)
        const newId = projects.length + 1;
        setProjects([...projects, { ...newProject, id: newId }]);
        setShowProjectForm(false);
    };
    
    const handleEditProject = (updatedProject) => {
        // Update the project in the projects array
        setProjects(projects.map(project => 
            project.id === updatedProject.id ? updatedProject : project
        ));
        setShowProjectForm(false);
    };
    
    const openAddForm = () => {
        setFormMode('add');
        setCurrentProject(null);
        setShowProjectForm(true);
    };
    
    const openEditForm = (project) => {
        setFormMode('edit');
        setCurrentProject(project);
        setShowProjectForm(true);
    };
    
    return (
        <>
            <Navbar leftText={navbarData.leftText} rightText={navbarData.rightText}></Navbar>
            <div className='p-4'>
                <div className='flex justify-between items-center mb-4'>
                    <div className='flex items-center'>
                        <div className='relative'>
                            <input
                                type="search"
                                className="bg-white w-full p-2 pr-8 rounded-lg border border-gray-300"
                                placeholder="Search..."
                            />
                            <button className='absolute right-2 top-2.5 text-[#FC213D] cursor-pointer'>
                                <Image src={"/search.png"} alt='' width={20} height={20}/>
                            </button>
                        </div>
                        <span className='ml-4 mt-5 text-gray-500 font-normal text-xs whitespace-nowrap'>
                            Total {totalProjects} project
                        </span>
                    </div>

                    <div className='flex items-center'>
                        <Link href="/project/filter" className='bg-gray-300 hover:bg-gray-400 text-black font-bold mr-2 px-5 py-2 rounded-lg'>
                            Filter
                        </Link>
                        {isAdmin && (
                            <button 
                                onClick={openAddForm}
                                className='bg-[#FC213D] hover:bg-[#e21d36] text-white font-bold px-6 py-2 rounded-lg'>
                                Add
                            </button>
                        )}
                    </div>
                </div>

                <div className="">
                    {projects.map((project) => (
                        <div key={project.id} className="flex items-center justify-between bg-gray-200 p-4 mb-2 rounded">
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gray-300 mr-4 relative overflow-hidden">
                                    <Image 
                                        src={`/${project.logo}`} 
                                        alt={`${project.name} logo`}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div>
                                    <h3 className="font-bold">{project.name}</h3>
                                    <div className="flex gap-4 text-sm">
                                        <span>{project.type}</span>
                                        <span></span>
                                        <a className='text-blue-900' href={project.link} target="_blank" rel="noopener noreferrer">Link</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex gap-2">
                                <Link 
                                    href={`/project/${project.id}/view`} 
                                    className="bg-blue-800 text-white px-4 py-2 rounded">
                                    View
                                </Link>
                                
                                {isAdmin && (
                                    <>
                                        <button 
                                            onClick={() => openEditForm(project)}
                                            className="bg-gray-300 text-black px-4 py-2 rounded">
                                            Edit
                                        </button>
                                        <button 
                                            onClick={() => {
                                                if(confirm('Are you sure you want to delete this project?')) {
                                                    // Remove the project from the array
                                                    setProjects(projects.filter(p => p.id !== project.id));
                                                }
                                            }}
                                            className="bg-red-500 text-white px-4 py-2 rounded">
                                            Delete
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-4 text-sm text-gray-500">
                    Current user role: {userRole}
                </div>
            </div>
            
            {showProjectForm && (
                <ProjectFrom 
                    onClose={() => setShowProjectForm(false)}
                    onSubmit={formMode === 'add' ? handleAddProject : handleEditProject}
                    editData={currentProject}
                    mode={formMode}
                />
            )}
        </>
    );
};

export default Project;