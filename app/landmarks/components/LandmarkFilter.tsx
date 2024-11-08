'use client';  
import { Search } from 'lucide-react';  

interface LandmarkFilterProps {  
  onSearch: (term: string) => void;  
}  

export default function LandmarkFilter({ onSearch }: LandmarkFilterProps) {  
  return (  
    <div className="sticky top-0 z-10 p-4 bg-white shadow-md">  
      <div className="mx-auto max-w-7xl">  
        <div className="relative max-w-md mx-auto">  
          <input  
            type="text"  
            placeholder="ค้นหาชื่อสถานที่..."  
            onChange={(e) => onSearch(e.target.value)}  
            className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"  
          />  
          <Search  
            className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2"  
            size={20}  
          />  
        </div>  
      </div>  
    </div>  
  );  
}