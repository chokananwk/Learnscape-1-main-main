'use client';

import LandmarkCard from './LandmarkCard';

// สมมุติว่าเราใช้ข้อมูลจาก JSON โดยดึงมา 12 สถานที่  
const MOCKED_LOCATIONS = [  
    {  
      name: "ปราสาทเปือยน้อย",  
      address: "เปือยน้อย อ.เปือยน้อย จ.ขอนแก่น 40340",  
      latitude: 15.88,  
      longitude: 102.9088889,  
      image: "/landmarks/กู่เปือยน้อย.webp"  
    },  
    {  
      name: "จิตรกรรมฝาผนังวัดสระบัวแก้ว",  
      address: "หันโจด อ.หนองสองห้อง จ.ขอนแก่น 40190",  
      latitude: 15.7511111,  
      longitude: 102.7486111,  
      image: "/landmarks/วัดสระบัวแก้ว.jpeg"  
    },  
    {  
      name: "วัดมัชฌิมวิทยาราม",  
      address: "ห่างเสม็ด อ.พระอาราม",  
      latitude: 16.0094444,  
      longitude: 102.8161111,  
      image: "/landmarks/วัดมัชฌิมวิทยาราม.webp"  
    },  
    {  
      name: "ศูนย์วิทยาศาสตร์เพื่อการศึกษาขอนแก่น",  
      address: "มิตรภาพ ในเมือง อ.บ้านไผ่ จังหวัดขอนแก่น 40110",  
      latitude: 16.0508333,  
      longitude: 102.7152778,  
      image: "/landmarks/address.jpg"  
    },  
    {  
      name: "ศาลาไหมไทย",  
      address: "ชนบท อ.ชนบท จ.ขอนแก่น 40180",  
      latitude: 16.0908333,  
      longitude: 102.6094444,  
      image: "/landmarks/images.jpg"  
    },  
    {  
      name: "วัดโนนสวรรค์",  
      address: "ฝั่งตะวันออก อ.เมือง จังหวัดขอนแก่น",  
      latitude: 16.0450,  
      longitude: 102.7163,  
      image: "/landmarks/f4b11ea0-3adb-11ec-a6be-39d10c90f333_webp_original.jpg"  
    },  
    {  
      name: "บึงแก่นนคร",  
      address: "ถนนข้าวเหนียว, เทศบาลนครขอนแก่น",   
      latitude: 16.4209,  
      longitude: 102.8239,  
      image: "/landmarks/637654938593512071-AW-Blog-ขอนแก่น-บึงแก่นนคร-12.jpg"  
    },  
    {  
      name: "ตลาดต้นตาล",  
      address: "ตลาด, อ.เมืองขอนแก่น",  
      latitude: 16.4640,  
      longitude: 102.8319,  
      image: "/landmarks/2768359c-5fd6-4e30-90fe-2427c74a0f77.jpg"  
    },  
    {  
      name: "สวนสาธารณะประตูเชียงทอง",  
      address: "ทางตะวันออกของ ขอนแก่น",  
      latitude: 16.4822,  
      longitude: 102.8253,  
      image: "/landmarks/ดาวน์โหลด.jpg"  
    },  
    {  
      name: "โรงพยาบาลขอนแก่น",  
      address: "ขอนแก่น",  
      latitude: 16.4664,  
      longitude: 102.8313,  
      image: "/landmarks/10670.jpg"  
    },  
    {  
      name: "วัดทุ่งเศรษฐี",  
      address: "ต.ในเมือง อ.เมือง จ.ขอนแก่น",  
      latitude: 16.4567,  
      longitude: 102.8901,  
      image: "/landmarks/4ab66060-e82d-11ea-bb87-1de8b370574f_original.jpg"  
    },  
    {  
      name: "หอสมุดขอนแก่น",  
      address: "ตำบลในเมือง, ขอนแก่น",  
      latitude: 16.4377,  
      longitude: 102.8323,  
      image: "/landmarks/ดาวน์โหลด (1).jpg"  
    }  
  ];

export default function LandmarkDisplay() {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MOCKED_LOCATIONS.slice(0, 12).map((location) => (
                <LandmarkCard
                    key={location.name}
                    landmark={location}
                />
            ))}
        </div>
    );
}