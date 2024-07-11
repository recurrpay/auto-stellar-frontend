"use client";
import ConnectButton from "./components/ui/connect_wallet";
import { World, GlobeConfig } from "./components/ui/globe";
import { MainNav } from "./components/user-nav";
import { Search } from "./components/ui/search";
import { UserNav } from "./components/ui/nav";
import Landing from "./components/ui/landing_text";

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
    <div>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <UserNav />
            </div>
          </div>
        </div>
        <Landing />
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          <main className="mt-[20rem] h-[40rem]">
            <h6 className="font-heading fixed left-[20%] top-[63%] text-center text-8xl">
              Recurr
            </h6>
            <h6 className="font-heading fixed right-[32rem] top-[63%] text-center text-8xl">
              Pay
            </h6>

            {/* <World globeConfig={defaultGlobeConfig} data={earthColors} />  */}
          </main>
        </div>
      </div>
    </div>
  );
}
