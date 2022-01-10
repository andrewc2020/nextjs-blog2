import getConfig from 'next/config'
import {ImageLoaderProps} from "next/image";

export function imageKitLoader({ src, width, quality }: ImageLoaderProps){

    const { publicRuntimeConfig } = getConfig();
    if(src[0] === "/") src = src.slice(1);
    const params = [`w-${width.toString()}`];
    if (quality) {
      params.push(`q-${quality || 75}`);
    }
    else{
      params.push('q-75');
    }
   
    const paramsString = params.join(",");
    
    let urlEndpoint = publicRuntimeConfig.image_key;
  
  
   
    if(urlEndpoint[urlEndpoint.length-1] === "/")
    { urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);}
   
    return `${urlEndpoint}/${src}?tr=${paramsString}`
  }