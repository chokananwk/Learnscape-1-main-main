'use client';  

import LandmarkCard from './LandmarkCard';  
import { Landmark } from '../data/landmacks';  

interface LandmarkListProps {  
  landmarks: Landmark[];  
  searchTerm?: string;  
}  

export default function LandmarkList({ landmarks, searchTerm }: LandmarkListProps) {  
  const filteredLandmarks = landmarks.filter((landmark) => {  
    return searchTerm  
      ? landmark.name.toLowerCase().includes(searchTerm.toLowerCase())  
      : true;  
  });  

  if (filteredLandmarks.length === 0) {  
    return (  
      <div className="py-10 text-center text-gray-500">  
        ไม่พบสถานที่ที่ค้นหา  
      </div>  
    );  
  }  

  return (  
    <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">  
      {filteredLandmarks.map((landmark) => (  
        <LandmarkCard  
          key={landmark.name}  
          landmark={landmark}  
        />  
      ))}  
    </div>  
  );  
}