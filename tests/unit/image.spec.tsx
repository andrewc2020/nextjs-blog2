import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react'
import { IKImage, IKContext, IKUpload } from 'imagekitio-react'

it('should render an img tag',()=>{
    render( <IKContext urlEndpoint="https://storage.cloud.google.com/my-imagekit-bucket/" > 
    <IKImage path="/profile.jpg" alt="Glyn" transformation={[{
        "height": "150",
        "width": "100"
        
    }]} />
    </IKContext>)
    screen.debug()
    expect(screen.findByRole(<img />)).toBeTruthy()
})