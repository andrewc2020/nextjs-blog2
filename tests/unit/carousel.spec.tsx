import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react'
import Carousel from '../../components/carousel'

it('should render a carousel',()=>{
    render(<Carousel />)
})