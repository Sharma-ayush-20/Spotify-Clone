import React, { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext("")

export const PlayerContextProvider = (props) => {

    const audioRef = useRef() //ref of audio in app
    const seekBg = useRef() //bg of seekbar
    const seekBar = useRef() //bg of hr tag

    const [track, setTrack] = useState(songsData[1]) //for each load of project track is song1
    const [playStatus, setPlayStatus] = useState(false) //in starting playstatus is false means pause
    const [time, setTime] = useState({ //time of the songs
        currentTime: {
            second: 0,
            minute: 0,
        },
        totalTime: {
            second: 0,
            minute: 0,
        }
    })

    //function to play the song
    const play = () => {
        audioRef.current.play();
        setPlayStatus(true)
    }

    //function to pause the song
    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false)
    }

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60),
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60),
                    }
                })
            }
        }, 1000)
    }, [audioRef])

    const value = {
        audioRef,
        seekBar,
        seekBg,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        play, pause,
    }

    return (
        <PlayerContext.Provider value={value}>
            {props.children}
        </PlayerContext.Provider>
    )
}