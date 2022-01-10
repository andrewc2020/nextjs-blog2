import { imageKitLoader } from "@/lib/imagekitloader";
import Image from "next/image";




type props = {

    src: string,
    alt: string,
    width: number,
    height: number


}
function MyImage(props: props) {
  return (
    <Image
      loader={imageKitLoader}
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height} />
  );
}

export {imageKitLoader, MyImage}