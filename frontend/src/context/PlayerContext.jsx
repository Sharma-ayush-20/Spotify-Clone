import React, { createContext, useEffect, useRef, useState } from "react";
import axios from 'axios'

export const PlayerContext = createContext("")

export const PlayerContextProvider = (props) => {

    const audioRef = useRef() //ref of audio in app
    const seekBg = useRef() //bg of seekbar
    const seekBar = useRef() //bg of hr tag

    const url = 'http://localhost:4000'; //backend url
    const [songsData, setSongsData] = useState([]);
    const [albumsData, setAlbumsData] = useState([]);

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
        await songsData.map((item) => {
            if(id === item._id){
                setTrack(item);
            }
        })
        await audioRef.current.play();
        setPlayStatus(true)
    }

    const previous = async () => {
        songsData.map(async (item, index) => {
            if(track._id === item._id && index > 0){
                await setTrack(songsData[index-1])
                await audioRef.current.play()
                setPlayStatus(true)
            }
        })
    }

    const next = async () => {
        songsData.map(async (item, index) => {
            if(track._id === item._id && index < songsData.length){
                await setTrack(songsData[index+1])
                await audioRef.current.play()
                setPlayStatus(true)
            }
        })
    }

    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration)
    }

    const getSongsData = async () => {
        try {
            const response = await axios.get(`${url}/api/song/list`);

            if (response.data.success) {
                setSongsData(response.data.message)
                // console.log(response.data.message)
                setTrack(response.data.message[0])
            }

        } catch (error) {
            console.log(error)
        }
    }

    const getAlbumsData = async () => {
        try {
            const response = await axios.get(`${url}/api/album/list`);
            if (response.data.success) {
                setAlbumsData(response.data.albums)
            }
        } catch (error) {
            console.log(error)
        }
    }

    //check songs and accordingly set time in minutes and second
    useEffect(() => {
        if (!audioRef.current) return;

        audioRef.current.ontimeupdate = () => {
            if (!audioRef.current || !seekBar.current) return;

            seekBar.current.style.width =
                Math.floor(
                    (audioRef.current.currentTime / audioRef.current.duration) * 100
                ) + '%';

            setTime({
                currentTime: {
                    second: Math.floor(audioRef.current.currentTime % 60),
                    minute: Math.floor(audioRef.current.currentTime / 60),
                },
                totalTime: {
                    second: Math.floor(audioRef.current.duration % 60),
                    minute: Math.floor(audioRef.current.duration / 60),
                }
            });
        };
    }, [audioRef, seekBar]);

    useEffect(() => {
        getSongsData();
        getAlbumsData();
    }, [])


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
        seekSong,
        songsData,
        albumsData,
    }

    return (
        <PlayerContext.Provider value={value}>
            {props.children}
        </PlayerContext.Provider>
    )
}