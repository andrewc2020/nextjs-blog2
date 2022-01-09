import { imageKitLoader } from "@/lib/imagekitloader";
import Image from "next/image";




type props = {

    src: string,
    loader: any,
    alt: string,
    width: number,
    height: number


}





export const MyImage = (props: props) => {
  return (
    <Image
      loader={imageKitLoader}
      src= {props.src}
      alt= {props.alt}
      width={props.width}
      height={props.height}
    />
  );
};