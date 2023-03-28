import localKey, { KEY } from "../localKey";



const VideoPlayer = () => { 

    return (
        <div className="videoplayer">
            <iframe id="player" type="text/html" width="325" height="200"
        src="https://www.youtube.com/embed/HmjUKMTOKig"{...KEY}></iframe>
        </div>
        
    )

}

export default VideoPlayer;
