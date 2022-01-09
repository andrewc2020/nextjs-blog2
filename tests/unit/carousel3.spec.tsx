import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react'
import { IKImage, IKContext, IKUpload } from 'imagekitio-react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import Carousel from '../../components/carousel3'

it('should render a carousel tag',()=>{
    render( <IKContext urlEndpoint="https://somestorage.com/my-bucket/" > 
        <Carousel />
    </IKContext>)
    screen.debug()
    expect(screen.findByLabelText('slider')).toBeTruthy()
})