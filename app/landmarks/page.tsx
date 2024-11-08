"use client";

import { useState } from "react";
import LandmarkFilter from "./components/LandmarkFilter";
import LandmarkList from "./components/LandmarkList";
import { landmarks } from "./data/landmacks";
import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar";

export default function LandmarksPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: session } = useSession();

  return (
    <>
      <Navbar session={session} />
      <div className="min-h-screen pb-20 bg-gray-50">
        <div className="p-4 mx-auto max-w-7xl">
          <h1 className="mb-8 text-3xl font-bold text-center">สถานที่สำคัญ</h1>

          <LandmarkFilter onSearch={setSearchQuery} />

          <LandmarkList landmarks={landmarks} searchTerm={searchQuery} />
        </div>
      </div>
    </>
  );
}
