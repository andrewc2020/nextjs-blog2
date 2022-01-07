import getConfig from 'next/config'

export default function VideoPlayer() {
    const { publicRuntimeConfig } = getConfig();
    let endpoint = `${publicRuntimeConfig.image_key}/video/MBVV8571_converted_ia2BjnyJx.mp4`

    return(
        
        <video width="100%" data-testid="custom-element" controls>
      <source src={endpoint} type="video/mp4"/>
     </video>
       
    )

}