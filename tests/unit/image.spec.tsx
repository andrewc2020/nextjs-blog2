import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react'
import { IKImage, IKContext, IKUpload } from 'imagekitio-react'
import {MyImage} from '@/components/nextimage'
import getConfig from 'next/config'
import {imageKitLoader} from '@/lib/imagekitloader'


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

it('should render an img tag from a mocked SERVER SIDE from base64 encoded data',()=>{
    // getConfig is being mocked in jest.setup.js
        const {serverRuntimeConfig } = getConfig()
        let endpoint = serverRuntimeConfig.image_key;
    
        render( <IKContext urlEndpoint={endpoint} > 
        <IKImage path="/profile.jpg" alt="Glyn" transformation={[{
            "height": "150",
            "width": "100"
            
        }]} />
        </IKContext>)
        screen.debug()
        expect(screen.findByRole(<img />)).toBeTruthy()
    })

it('should render a next image using an endpoint supplied by imagekitloader', () =>{
    render(<MyImage src={'/view/w5429742.jpg'} alt={'my rendered image'} width={400} height={350} /> )
    screen.debug()
    expect(screen.findByRole(<img/>)).toBeTruthy()
})

it('should dynamically create a mocked url for the image', () =>{

    let url = imageKitLoader( {src:'/view/w5429742.jpg', width:400, quality:75})
    console.log(url)
   
    expect(url).toBeTruthy()
})

it('should dynamically create a mocked url for the image which is a viable link with a default quality', () =>{

    let url = imageKitLoader( {src:'/view/w5429742.jpg', width:400})
    console.log(url)
   
    expect(url).toBeTruthy()
})

