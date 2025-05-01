import { ImageSrc } from "@/lib/constants";
import { AppImage } from "./AppImage";

export default function Logo() {
  return (
    <AppImage
        src={ImageSrc.LOGO} 
        alt="Logo"
        width={64}
        height={64}
        />
  )
}
