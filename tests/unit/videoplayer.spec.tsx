import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react'
import { VideoProps } from '../../lib/types';


import VideoPlayerParam from '../../components/videoplayerparam'

let source: string = "/public/videos/sample.mp4"
it('should render the videoplayer',() =>{


let params : VideoProps = { "endpoint" : source  }
   
    render(<VideoPlayerParam {...params} />)

    screen.debug()

 
   expect(screen.getByTestId("custom-element")).toBeTruthy()
  


})