import Image, {ImageLoaderProps} from "next/image";




type props = {

    src: string,
    loader: any,
    alt: string
}

export function imageKitLoader({ src, width, quality }: ImageLoaderProps){
  if(src[0] === "/") src = src.slice(1);
  const params = [`w-${width.toString()}`];
  if (quality) {
    params.push(`q-${quality || 75}`);
  }
 
  const paramsString = params.join(",");
  var urlEndpoint = "https://ik.imagekit.io/eudt3rlpetf/";
  if(urlEndpoint[urlEndpoint.length-1] === "/") urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
 
  return `${urlEndpoint}/${src}?tr=${paramsString}`
}

export const MyImage = (props: props) => {
  return (
    <Image
      loader={imageKitLoader}
      src= {props.src}
      alt= {props.alt}
      width={400}
      height={400}
    />
  );
};