'use client';

import Image from 'next/image';

interface LandmarkProps {
  landmark: {
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    image: string;
  };
}

export default function LandmarkCard({ landmark }: LandmarkProps) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] h-full">
      <div className="relative w-full h-48">
        <Image
          src={landmark.image}
          alt={landmark.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
        />
      </div>
      <div className="flex flex-col flex-grow p-4">
        <div className="flex-grow">
          <h3 className="mb-2 text-xl font-semibold line-clamp-2">{landmark.name}</h3>
          <p className="mb-2 text-gray-600">{landmark.address}</p>
          <p className="text-gray-500">
            พิกัด: {landmark.latitude}, {landmark.longitude}
          </p>
        </div>
        <a
          href={`https://www.google.com/maps?q=${landmark.latitude},${landmark.longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full gap-2 px-4 py-2 mt-4 text-center text-white transition-colors bg-blue-500 rounded-full hover:bg-blue-600"
        >
          ดูแผนที่
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}