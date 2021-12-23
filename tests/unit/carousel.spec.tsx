import  test, {screen, render, fireEvent} from '@testing-library/react'
import Carousel from '../../components/carousel'


it('back button should be disabled on first photo', async ()=>{
    render(< Carousel />)
    
    expect(await (await screen.getByLabelText(/previous/i))).toBeDisabled()

})

it('next button should be disabled on first photo', async ()=>{
    render(< Carousel />)
    
    expect(await (await screen.getByLabelText(/next/i))).toBeEnabled()

})

it('clicking on next button should enable the previous button', async ()=>{
    render(< Carousel />)
    fireEvent.click(screen.getByLabelText(/next/i))
    expect(await (await screen.getByLabelText(/previous/i))).toBeEnabled()

})