"use client";
import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import * as L from "leaflet";
import "leaflet-defaulticon-compatibility";
import { useSession } from "next-auth/react";
import Navbar from "../../components/Navbar";

import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

const landmarks = [
  {
    name_th: "บริษัท เมตามีเดีย เทคโนโลยี จำกัด",
    position: [13.722642, 100.529316],
  },
  {
    name_th: "ไทยอินโฟนิตี้",
    position: [13.8879702244, 100.57575681],
  },
  {
    name_th: "ตลาดหลักทรัพย์แห่งประเทศไทย",
    position: [13.7226197709, 100.559361563],
  },
  {
    name_th: "ธนาบุตร",
    position: [13.7467971294, 100.52886221],
  },
  {
    name_th: "คลินิกเวชกรรม พญ.เฟื่องเพชร",
    position: [13.752618, 100.531037],
  },
  {
    name_th: "ภัตตาคารท่องกี่",
    position: [13.7367122274, 100.560670232],
  },
  {
    name_th: "ร้านเจริญชัยพานิช",
    position: [13.7429992726, 100.504315939],
  },
  {
    name_th: "ธนาคารอาคารสงเคราะห์สาขาลาดกระบัง",
    position: [13.7737937558, 100.746660367],
  },
  {
    name_th: "คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย",
    position: [13.7370034741, 100.533475558],
  },
  {
    name_th: "ซาคานา (ประเทศไทย) / บ.เพอร์เฟ็คท์ฟู้ด จก.",
    position: [13.7806128116, 100.459529965],
  },
];


const position = [13, 100];

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click(e) {
      map.locate();
      map.flyTo(e.latlng, 10);
    },
    locationfound(e) {
      setPosition(e.latlng);
      // map.flyTo(e.latlng, 10)
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default function Maps() {
  const { data: session } = useSession();
  return (
    <>
      <Navbar session={session} />
      <div style={{ width: "100%", height: "700px", aspectRatio: 1.5 }}>
        <MapContainer
          style={{ width: "100%", height: "100%" }}
          center={position}
          zoom={10}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {landmarks.map((landmark, index) => (
            <Marker key={index} position={landmark.position}>
              <Popup>{landmark.name_th}</Popup>
            </Marker>
          ))}
          <LocationMarker />
        </MapContainer>
      </div>
    </>
  );
}
