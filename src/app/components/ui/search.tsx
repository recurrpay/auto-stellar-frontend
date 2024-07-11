import Image from "next/image";
import Logo from "../../../../public/pm.svg";

export function Search() {
  return (
    <div className="h-12 w-12 rounded-sm bg-black">
      <Image src={Logo} alt="Logo" className="mx-auto h-9 w-9 pt-2" />
    </div>
  );
}
