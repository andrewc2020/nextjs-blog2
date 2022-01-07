import { IKImage, IKContext, IKUpload } from 'imagekitio-react'
import getConfig from 'next/config'

export const IKimage = () => {
// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
// Will only be available on the server-side


    return (
        <IKContext urlEndpoint={publicRuntimeConfig.image_key} publicKey={publicRuntimeConfig.image_key}>
            {/* // Render an image using a relative path - https://storage.cloud.google.com/my-imagekit-bucket/ */}
            <IKImage path="/profile_4.jpg" alt="Glyn" transformation={[{
                "height": "150",
                "width": "100"
                
            }]} />

        </IKContext>

    )
}

