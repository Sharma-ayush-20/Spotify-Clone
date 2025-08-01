import React, { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext("")

export const PlayerContextProvider = (props) => {

    const audioRef = useRef() //ref of audio in app
    const seekBg = useRef() //bg of seekbar
    const seekBar = useRef() //bg of hr tag

    const [track, setTrack] = useState(songsData[0]) //for each load of project track is song1
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

    //play songs with Id
    const playWithId = async (id) => {
        await setTrack(songsData[id])
        await audioRef.current.play()
        setPlayStatus(true)
    }

    const previous = async () => {
        if(track.id > 0){
            await setTrack(songsData[track.id - 1])
            await audioRef.current.play()
            setPlayStatus(true)
        }
    }

    const next = async () => {
        if(track.id < songsData.length - 1){
            await setTrack(songsData[track.id + 1])
            await audioRef.current.play()
            setPlayStatus(true)
        }
    }

    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration)   
    }

    //check songs and accordingly set time in minutes and second
    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100) + '%')
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
        playWithId,
        next, previous,
        seekSong
    }

    return (
        <PlayerContext.Provider value={value}>
            {props.children}
        </PlayerContext.Provider>
    )
}