
import React, { useState, useEffect } from 'react';
import { hightlightsSlides } from '../constants';
import { pauseImg, playImg } from '../utils';

const VideoCarousel = () => {
  const videoRef = ([]);
  const videoSpanRef = ([]);
  const videoDivRef = ([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = usestate([]);;

  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  useGSAP(() => {

  }, [isEnd, videoId])
  gsap.to('video', {
    scrollTrigger: {
      trigge: '#video',
      toggleActions: 'restart none none none'
    },
    onComplete: () => {
      setVideo((pre) => ({
        ...pre,
        startPlay: true,
        isPlaying: true,
      }))
    }
  })

  useEffect(() => {
   if(loadedData.length > 3) {
    if(!isPlaying) {
      videoRef.current[videoId].pause();
    } else {
      startPlay && videoRef.current[videoId].play();
    }
   }
  }, [startPlay, videoId, isPlaying, loadedData])

  const handleLoadedMetadata = (i, e) => setLoadedData
  ((pre) => [...pre, e])
   

  useEffect(() => {
    const currentProgress = 0;
    let letSpan = videoSpanRef.current;

    // Add your additional logic for useEffect here
  }, [videoId, startPlay]);

  if(span[videoId]) {
    //animate progress of video
    let anim = gsap.to(span[videoId], {
      onUpdate: () => {
const progress = Math.ceil(anim.progress() * 100);

if(pregree != currentProgress) {
  currentProgress = progress;

  gsap.to(videoDivRef.current[ 0])
}
      },

      onComplete: () => {
      }
    })
  }

}, [videoId, StartPlay])

const handleProcess = (type, i) => {
  switch (type) {
    case 'video-end': setVideo(prevVideo) => ({...pre, isEnd: true, videoId: i + 1 }))
    break;
    case 'video-last': setVideo((pre) => ({...pre, isLastVideo: true }))
      break;
    case 'video-reset': setVideo((pre) => ({...pre, isLastVideo: false, VideoId; 0 }))
    break;
    case 'play': setVideo((pre) => ({...pre, isPlaying: !pre.isPlaying}))
    break;


    dafault:
    return video;
  }
}

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">


                <video id = "video" 
                playsInline = {true} 
                preload = "auto" 
                muted
                ref={(el) => (videoRef.current[i] = el )}
                onPlay = {() => {
                  setVideo(prevVideo) => ({
                    ...prepVideo, isPlaying: true
                  }))
                }}
                 onLoadedMetadata = {(e) => handleLoadedMetadata(i, e)}
                >

                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text) => (
                  <p key={text} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <dv className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 
        bg-grey-300 backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <span key={i} ref={(el) => (videoDivRef.current[i] = el)}
            className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"

            >
     <span className="absolute h-full w-full rounded-full " ref={(el) => (videoSpanRef.current[i] = el)} />
            </span>

          ))}
        </div>
           
           <button className="control-btn">
            <img
            src={isLastVideo ? replayImg :
            !isPlaying ? playImg : pauseImg} 

            alt={isLastVideo ? 'replay' : !isPlaying ? 'play' : pasue} 

            onclick={isLastVideo ? () => handleProcess('video-reset')
            : !isPlaying
            ? () => handleProcess('play')
            : () => handleProcess('pause')
            }
            />

           </button>

      </div>
    </>
  );
};

export default VideoCarousel;
