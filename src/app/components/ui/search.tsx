import { useTheme } from "next-themes";
import Image from "next/image";
import RecurrpayDark from "../../../../public/recurrPay.svg";
import RecurrpayLight from "../../../../public/recurrPayBlack.svg";

export function Search() {
  const { theme } = useTheme();

  return (
    <div className={`h-12 w-auto rounded-sm`}>
      <Image
        src={
          theme === "dark"
            ? (RecurrpayDark as string)
            : (RecurrpayLight as string)
        }
        alt="Logo"
        className="mx-auto h-9 w-auto pt-2"
      />
    </div>
  );
}
