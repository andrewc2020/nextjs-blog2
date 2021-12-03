import Image from "next/image";

interface imageProps{
    
        src: string,
        width: number,
        quality: string
       

    
}
type props = {
    loader: string
}

export const imageKitLoader: any = ({ src, width, quality }: imageProps) => {
  if(src[0] === "/") src = src.slice(1);
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
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
      src="default-image.jpg"
      alt="Sample image"
      width={400}
      height={400}
    />
  );
};