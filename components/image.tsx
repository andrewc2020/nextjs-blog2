import { IKImage, IKContext, IKUpload } from 'imagekitio-react'

export const IKimage = () => {

    return (
        <IKContext urlEndpoint="https://ik.imagekit.io/eudt3rlpetf/" publicKey="public_0oyQxHNakzgBng9AvzCz42+LFT4=">
            {/* // Render an image using a relative path - https://storage.cloud.google.com/my-imagekit-bucket/ */}
            <IKImage path="/profile_4.jpg" alt="Glyn" transformation={[{
                "height": "150",
                "width": "100"
                
            }]} />

        </IKContext>

    )
}

