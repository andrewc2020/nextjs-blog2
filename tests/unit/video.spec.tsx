import  test, {screen, render, fireEvent} from '@testing-library/react'
import VideoPlayer from '../../components/videoplayer'

it('should render a video tag', async ()=>{
    render(< VideoPlayer />)
    screen.debug()
    expect(await screen.queryByRole('source')).toBeVisible()

})