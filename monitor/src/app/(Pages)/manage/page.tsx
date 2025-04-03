'use client';

import React from 'react';
import Navbar from '../../components/navbar';
import { mockData } from '../../data/mockData';
import { NavbarData } from '../../types/types';

interface Employee {
  id: string;
  name: string;
  location: string;
  phoneNumber: string;
}

const Manage: React.FC = () => {
  const navbarData: NavbarData = mockData["/manage"];
  
  // This would come from your actual data source
  const employees: Employee[] = [
    {
      id: '1',
      name: 'name',
      location: 'location',
      phoneNumber: 'Phone number'
    },
    // Add more employees as needed
  ];

  const handleEdit = (id: string) => {
    console.log(`Edit employee with id: ${id}`);
    // Add your edit logic here
  };

  const handleDelete = (id: string) => {
    console.log(`Delete employee with id: ${id}`);
    // Add your delete logic here
  };

  return (
    <div>
      <Navbar leftText={navbarData.leftText} rightText={navbarData.rightText} />
      
      <div className="p-4">
        {employees.map((employee) => (
          <div key={employee.id} className="bg-gray-100 mb-4 rounded">
            <div className="flex items-center p-4">
              <div className="w-16 h-16 bg-gray-300 mr-4"></div>
              <div className="flex-grow">
                <div className="font-bold">{employee.name}</div>
                <div className="text-sm flex">
                  <div className="mr-8">{employee.location}</div>
                  <div>{employee.phoneNumber}</div>
                </div>
              </div>
              <div className="flex">
                <button 
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2"
                  onClick={() => handleEdit(employee.id)}
                >
                  Edit
                </button>
                <button 
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manage;