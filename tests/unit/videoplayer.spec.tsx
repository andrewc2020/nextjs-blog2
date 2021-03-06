import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react'
import { VideoProps } from '@/lib/types';


import VideoPlayer from '@/components/videoplayer'

let source: string = "/public/videos/sample.mp4"
it('should render the videoplayer',() =>{


let params : VideoProps = { "endpoint" : source  }
   
    render(<VideoPlayer {...params} />)

    screen.debug()

 
   expect(screen.getByTestId("custom-element")).toBeTruthy()
  


})