import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react'
import { IKImage, IKContext, IKUpload } from 'imagekitio-react'
import getConfig from 'next/config'

it('should render an img tag',()=>{
    render( <IKContext urlEndpoint="https://somestorage.com/my-bucket/" > 
    <IKImage path="/profile.jpg" alt="Glyn" transformation={[{
        "height": "150",
        "width": "100"
        
    }]} />
    </IKContext>)
    screen.debug()
    expect(screen.findByRole(<img />)).toBeTruthy()
})

it('should render an img tag from a mocked endpoint',()=>{
// getConfig is being mocked in jest.setup.js
    const {publicRuntimeConfig } = getConfig()
    let endpoint = publicRuntimeConfig.image_key;

    render( <IKContext urlEndpoint={endpoint} > 
    <IKImage path="/profile.jpg" alt="Glyn" transformation={[{
        "height": "150",
        "width": "100"
        
    }]} />
    </IKContext>)
    screen.debug()
    expect(screen.findByRole(<img />)).toBeTruthy()
})