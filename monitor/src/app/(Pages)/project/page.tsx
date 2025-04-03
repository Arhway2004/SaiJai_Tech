'use client';

import Search from 'antd/es/transfer/search';
import Navbar from '../../components/navbar';
import {mockData} from '../../data/mockData';
import {NavbarData} from '../../types/types';
import Image from 'next/image';
import Link from 'next/link';

const Project: React.FC = () => {
    const navbarData: NavbarData = mockData["/project"];
    const projects = [
        {id: 1, name: "Project A", link:"dmosmcdsc", logo:"logo.jpg", type:"Water Flow"}
    ];
    
    const totalProjects = projects.length;
    
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
                        <Link href="/project/add" className='bg-[#FC213D] hover:bg-[#e21d36] text-white font-bold px-6 py-2 rounded-lg'>
                            Add
                        </Link>
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
                                <Link 
                                    href={`/project/${project.id}/edit`} 
                                    className="bg-gray-300 text-black px-4 py-2 rounded">
                                    Edit
                                </Link>
                                <button 
                                    onClick={() => {
                                        if(confirm('Are you sure you want to delete this project?')) {
                                            console.log('Deleting project:', project.id);
                                            // Add delete logic here
                                        }
                                    }}
                                    className="bg-red-500 text-white px-4 py-2 rounded">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Project;