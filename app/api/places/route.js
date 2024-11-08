import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Place from "@/models/Place";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(request) {
  try {
    // ตรวจสอบการ login
    const session = await getServerSession(request, authOptions);
    if (!session) {
      return NextResponse.json(
        { error: "You need to be logged in to access your places" },
        { status: 401 }
      );
    }

    await connectMongoDB();

    // ดึงข้อมูลสถานที่ของผู้ใช้ที่ login อยู่
    const places = await Place.find({ userId: session.user.id }).sort({
      createdAt: -1,
    });

    return NextResponse.json(places);
  } catch (error) {
    console.error("Error fetching places:", error);
    return NextResponse.json(
      { error: "Failed to fetch places" },
      { status: 500 }
    );
  }
}

// Get all places (public)
export async function GET() {
  try {
    await connectMongoDB();
    const places = await Place.find()
      .sort({ createdAt: -1 })
      .populate("userId", "name email");

    return NextResponse.json(places);
  } catch (error) {
    console.error("Error fetching places:", error);
    return NextResponse.json(
      { error: "Failed to fetch places" },
      { status: 500 }
    );
  }
}

// Get user's places
export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;
    await connectMongoDB();

    const userPlaces = await Place.find({ userId })
      .sort({ createdAt: -1 })
      .populate("userId", "name email");

    return NextResponse.json(userPlaces);
  } catch (error) {
    console.error("Error fetching user places:", error);
    return NextResponse.json(
      { error: "Failed to fetch places" },
      { status: 500 }
    );
  }
}
