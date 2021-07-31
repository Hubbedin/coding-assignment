import style from './style.module.scss';
import React, { useEffect, useState } from 'react';
import StreamPlayer from 'agora-stream-player'
import AgoraRTC from 'agora-rtc-sdk'

export type User = {
    nickname: string
    name: string
    picture: string
    email: string
    email_verified: string
}

const HomeComponent = () => {
    const [stream, setStream] = useState(null);
    
    const init = () => {
        let stream = AgoraRTC.createStream({
            streamID: 1024,
            video: true,
            audio: true
          })
          stream.init(() => {
              setStream(stream);
          })
    }

    useEffect(() => {
        init();
    })

    return (
        <div className='call'>
            {stream && <StreamPlayer
                key={1024} 
                video={true} 
                audio={true} 
                stream={stream}
                fit="contain"
                label="A stream"  
            />}
        </div>
    );
}

export default HomeComponent;