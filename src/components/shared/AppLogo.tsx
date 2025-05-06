import { ImageSrc } from "@/constants/MediaSrc";
import { AppImage } from "./AppImage";

export default function AppLogo({width, height}: Readonly<{
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
