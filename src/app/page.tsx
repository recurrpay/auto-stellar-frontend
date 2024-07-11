"use client";
import ConnectButton from "./components/ui/connect_wallet";
import { World, GlobeConfig } from "./components/ui/globe";
import { UserNav } from "./components/user-nav";

export default function HomePage() {
  const earthColors = {
    globeColor: "#2c3e50", // Dark blueish globe color
    atmosphereColor: "#DBEEFF", // White atmosphere color
    emissive: "#000000", // Black emissive color
    polygonColor: "#9fd8ff", // Light blue polygon (land) color
    ambientLight: "#DBEEFF", // White ambient light
    directionalLeftLight: "#DBEEFF", // White left directional light
    directionalTopLight: "#DBEEFF", // White top directional light
    pointLight: "#DBEEFF", // White point light
  };

  const defaultGlobeConfig: GlobeConfig = {
    ...earthColors,
    pointSize: 20,
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    emissiveIntensity: 0.1,
    shininess: 0.6,
    arcTime: 2,
    arcLength: 0.9,
    rings: 9,
    maxRings: 2,
    initialPosition: {
      lat: 1,
      lng: 1,
    },
    autoRotate: true,
    autoRotateSpeed: 1,
  };
  console.log(defaultGlobeConfig);

  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <main className="mt-[20rem] h-[40rem]">
        <World globeConfig={defaultGlobeConfig} data={earthColors} />
      </main>
    </div>
  );
}
