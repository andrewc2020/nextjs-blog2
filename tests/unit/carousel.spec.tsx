import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react'
import { IKImage, IKContext, IKUpload } from 'imagekitio-react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import Carousel from '@/components/carousel'



it('should render a carousel tag',()=>{
    render( <IKContext urlEndpoint="https://somestorage.com/my-bucket/" > 
        <CarouselProvider
            naturalSlideWidth={400}
            naturalSlideHeight={325}
            totalSlides={1}
        >
            <Slider>
                <Slide index={0}></Slide>

                <IKImage path="/profile.jpg" alt="Glyn" transformation={[{
                    "height": "150",
                    "width": "100"

                }]} />
            </Slider>
        </CarouselProvider>
    </IKContext>)
    screen.debug()
    expect(screen.findByLabelText('slider')).toBeTruthy()
})

it('should render a carousel tag',()=>{
    render( <IKContext urlEndpoint="https://somestorage.com/my-bucket/" > 
        <Carousel />
    </IKContext>)
    screen.debug()
    expect(screen.findByLabelText('slider')).toBeTruthy()
})

it('should render a carousel tag',()=>{
    render( <IKContext urlEndpoint="https://somestorage.com/my-bucket/" > 
        <Carousel />
    </IKContext>)
    screen.debug()
    expect(screen.findByLabelText('slider')).toBeTruthy()
})