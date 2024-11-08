// import { NextResponse } from 'next/server';  
// import { connectMongoDB } from '../../../lib/mongodb';  
// import User from '../../../models/user';  
// import { getServerSession } from 'next-auth/next';  
// import { authOptions } from '../auth/[...nextauth]/route';  

// export async function GET(request) {  
//   try {  
//     // ตรวจสอบการ login  
//     const session = await getServerSession(request, authOptions);  
//     if (!session) {  
//       return NextResponse.json(  
//         { error: 'You need to be logged in to access your profile' },  
//         { status: 401 }  
//       );  
//     }  

//     await connectMongoDB();  

//     // ดึงข้อมูลผู้ใช้ที่ login  
//     const user = await User.findById(session.user.id);  

//     if (!user) {  
//       return NextResponse.json(  
//         { error: 'User not found' },  
//         { status: 404 }  
//       );  
//     }  

//     // ส่งข้อมูลผู้ใช้กลับเป็น JSON  
//     return NextResponse.json(user);  
//   } catch (error) {  
//     console.error('Error fetching user profile:', error);  
//     return NextResponse.json(  
//       { error: 'Failed to fetch user profile' },  
//       { status: 500 }  
//     );  
//   }  
// }