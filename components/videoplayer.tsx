
import {VideoProps} from '../lib/types'
export default function VideoPlayer(props: VideoProps) {




    return (

        <video width="100%" data-testid="custom-element" controls>
            <source src={props.endpoint} type="video/mp4" />
        </video>

    )

}