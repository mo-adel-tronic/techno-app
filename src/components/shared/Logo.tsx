import { ImageSrc } from "@/lib/constants";
import { AppImage } from "./AppImage";

export default function Logo({width, height}: Readonly<{
  width?: number; height?: number;}>) {
  return (
    <AppImage
        src={ImageSrc.LOGO} 
        alt="Logo"
        width={width || 64}
        height={height || 64}
        />
  )
}
