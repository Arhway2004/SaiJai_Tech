'use client';

import React from 'react';
import Navbar from '../../components/navbar';
import { mockData } from '../../data/mockData';
import { NavbarData } from '../../types/types';

const Profile: React.FC = () => {
  const navbarData: NavbarData = mockData["/profile"];
  
  const handleEdit = () => {
    console.log('Edit profile clicked');
    // Add your edit logic here
  };

  return (
    <div>
      <Navbar leftText={navbarData.leftText} rightText={navbarData.rightText} />
      
      <div className="p-4">
        <div className="flex flex-col md:flex-row">
          {/* Profile Image */}
          <div className="w-60 h-60 bg-gray-300 flex-shrink-0 mb-4 md:mb-0 md:mr-6"></div>
          
          {/* Profile Information */}
          <div className="flex-grow">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">Username (ชื่อ)</h2>
              <button 
                onClick={handleEdit}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
              >
                Edit
              </button>
            </div>
            
            <div className="space-y-2">
              <p><span className="block">ชื่อนา</span></p>
              <p><span className="block">ตำแหน่งงาน</span></p>
              <p><span className="block">Role</span></p>
              <p><span className="block">เบอร์ติดต่อ</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;