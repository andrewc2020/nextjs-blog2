import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react'
import { IKContext } from 'imagekitio-react'

import Carousel from '@/components/carousel2'

it('should render a carousel tag',()=>{
    render( <IKContext urlEndpoint="https://somestorage.com/my-bucket/" > 
        <Carousel />
    </IKContext>)
    screen.debug()
    expect(screen.findByLabelText('slider')).toBeTruthy()
})