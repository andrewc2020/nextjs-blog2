import Image, {ImageLoaderProps} from "next/image";
import getConfig from 'next/config'




type props = {

    src: string,
    loader: any,
    alt: string,
    width: number,
    height: number


}

const { publicRuntimeConfig } = getConfig();

export function imageKitLoader({ src, width, quality }: ImageLoaderProps){

  
  if(src[0] === "/") src = src.slice(1);
  const params = [`w-${width.toString()}`];
  if (quality) {
    params.push(`q-${quality || 75}`);
  }
 
  const paramsString = params.join(",");
  
  let urlEndpoint = publicRuntimeConfig.image_key;


 
  if(urlEndpoint[urlEndpoint.length-1] === "/")
  { urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);}
 
  return `${urlEndpoint}/${src}?tr=${paramsString}`
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