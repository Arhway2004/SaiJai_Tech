'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import {mockData} from '../../data/mockData';
import {NavbarData} from '../../types/types';
import StationForm from '../../components/Form/StationFrom';

const Station: React.FC = () => {
    const navbarData: NavbarData = mockData["/project"];
    const [userRole, setUserRole] = useState<string>('Admin');
    const [isAdmin, setIsAdmin] = useState<boolean>(true);
    const [showProjectForm, setShowProjectForm] = useState<boolean>(false);
    const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
    const [currentProject, setCurrentProject] = useState<any>(null);
    
    const [projects, setProjects] = useState([
        {
            id: 1, 
            name: "Project A", 
            organize: "Org A", 
            phoneNumber: "123-456-7890", 
            location: "Location A", 
            mapLink: "https://maps.google.com/location?q=123,456&z=14", 
            measurement: "100", 
            organizingAgency: "Agency A", 
            type: "WaterFlow",//
            projectDetail: "Ground water"
        }
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
        const newId = projects.length + 1;
        
        // Format the project type based on the form selection
        let projectType = newProject.type;
        let projectDetail = "";
        
        if (projectType === "Electricity") {
            projectDetail = newProject.electricityPhase || "Phase 1";
        } else {
            projectDetail = newProject.waterFlowType || "Ground water";
        }
        
        const formattedProject = {
            ...newProject,
            id: newId,
            projectDetail
        };
        
        setProjects([...projects, formattedProject]);
        setShowProjectForm(false);
    };
    
    const handleEditProject = (updatedProject) => {
        // Similar type formatting for edit
        let projectType = updatedProject.type;
        let projectDetail = "";
        
        if (projectType === "Electricity") {
            projectDetail = updatedProject.electricityPhase || "Phase 1";
        } else {
            projectDetail = updatedProject.waterFlowType || "Ground water";
        }
        
        const formattedProject = {
            ...updatedProject,
            projectDetail
        };
        
        setProjects(projects.map(project => 
            project.id === updatedProject.id ? formattedProject : project
        ));
        setShowProjectForm(false);
    };
    
    const openAddForm = () => {
        setFormMode('add');
        setCurrentProject(null);
        setShowProjectForm(true);
    };
    
    const openEditForm = (project) => {
        // Prepare the project data for editing
        const editableProject = {
            ...project,
            // Set these properties for the form to initialize correctly
            electricityPhase: project.type === "Electricity" ? project.projectDetail : "Phase 1",
            waterFlowType: project.type === "WaterFlow" ? project.projectDetail : "Ground water",
        };
        
        setFormMode('edit');
        setCurrentProject(editableProject);
        setShowProjectForm(true);
    };
    
    // Function to truncate long text with ellipsis
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
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
                            <button className='absolute right-2 top-2.5 text-red-500 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </button>
                        </div>
                        <span className='ml-4 text-gray-500 font-normal text-sm'>
                            Total {totalProjects} project
                        </span>
                    </div>

                    <div className='flex items-center'>
                        <button 
                            className='bg-gray-300 hover:bg-gray-400 text-black font-bold mr-2 px-5 py-2 rounded-lg'>
                            Filter
                        </button>
                        {isAdmin && (
                            <button 
                                onClick={openAddForm}
                                className='bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-2 rounded-lg'>
                                Add
                            </button>
                        )}
                    </div>
                </div>

                {/* Updated grid columns to give more space to Map Link and Type */}
                <div className="mb-4">
                    <div className='grid grid-cols-12 gap-4 bg-gray-400 p-3 font-medium'>
                        <div className="col-span-1">Name</div>
                        <div className="col-span-1">Organize</div>
                        <div className="col-span-1">Phone</div>
                        <div className="col-span-1">Location</div>
                        <div className="col-span-2">Map Link</div>
                        <div className="col-span-1">Measurement</div>
                        <div className="col-span-1">Agency</div>
                        <div className="col-span-2">Type</div>
                        <div className="col-span-2"></div>
                    </div>
                </div>

                {projects.map((project) => (
                    <div key={project.id} className="grid grid-cols-12 gap-4 bg-gray-200 p-3 mb-2 items-center">
                        <div className="col-span-1 text-sm">{project.name}</div>
                        <div className="col-span-1 text-sm">{project.organize}</div>
                        <div className="col-span-1 text-sm">{project.phoneNumber}</div>
                        <div className="col-span-1 text-sm">{project.location}</div>
                        <div className="col-span-2 text-sm overflow-hidden">
                            <a 
                                className='text-blue-900 hover:underline' 
                                href="#"
                                title={project.mapLink} // Show full link on hover
                            >
                                {truncateText(project.mapLink, 30)}
                            </a>
                        </div>
                        <div className="col-span-1 text-sm">{project.measurement}</div>
                        <div className="col-span-1 text-sm">{project.organizingAgency}</div>
                        <div className="col-span-2 text-sm">
                            {project.type} 
                            {project.projectDetail && ` (${project.projectDetail})`}
                        </div>
                        <div className="col-span-2 flex gap-2 justify-end">
                            <button 
                                className="bg-blue-800 text-white px-4 py-2 rounded">
                                View
                            </button>
                            
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
                
                <div className="mt-4 text-sm text-gray-500">
                    Current user role: {userRole}
                </div>
            </div>
            
            {/* Render the StationForm when needed */}
            {showProjectForm && (
                <StationForm 
                    onClose={() => setShowProjectForm(false)}
                    onSubmit={formMode === 'add' ? handleAddProject : handleEditProject}
                    editData={currentProject}
                    mode={formMode}
                />
            )}
        </>
    );
};

export default Station;