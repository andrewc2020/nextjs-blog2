import react from 'react'
import getConfig from 'next/config'



export default function VideoPlayer() {
    const { publicRuntimeConfig } = getConfig();
    
    let endpoint = `${publicRuntimeConfig.image_key}/video/different_sound_track_drones_final_converted_QqzAlEcbT.mp4`

    return(
        
        <video width="100%"  data-testid="custom-element" controls>
      <source src={endpoint}  type="video/mp4"/>
     </video>
       
    )

}