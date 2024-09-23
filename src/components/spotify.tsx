import React, { useEffect, useState } from 'react';
import styles from '../components/modules/spotify.module.css'; 

const Spotify: React.FC = () => {
    const [track, setTrack] = useState<any>(null);
    const [token] = useState('');
    const [progress, setProgress] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    useEffect(() => {
        const fetchCurrentlyPlaying = async () => {
            try {
                const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    if (data.item) {
                        if (track && track.id !== data.item.id) {
                            setProgress(0);
                        }
                        setTrack(data.item);
                        setIsPlaying(data.is_playing);
                    } else {
                        setTrack(null);
                    }
                } else {
                    setTrack(null);
                }
            } catch (err) {
                setTrack(null);
            }
        };

        fetchCurrentlyPlaying();
        const intervalId = setInterval(fetchCurrentlyPlaying, 5000);

        return () => clearInterval(intervalId);
    }, [token, track]);

    useEffect(() => {
        const timer = setInterval(() => {
            if (isPlaying && track) {
                setProgress(prev => Math.min(prev + 1000, track.duration_ms));
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [isPlaying, track]);

    useEffect(() => {
        if (track) {
            setIsPlaying(track.is_playing);
        }
    }, [track]);

    const formatTime = (ms: number) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    if (!track) {
        return null;
    }

    return (
        <div className={styles.container}>
            <div className={styles.trackInfo}>
                <img className={styles.albumArt} src={track.album.images[0].url} alt={track.name} />
                <div className={styles.textContainer}>
                    <p className={styles.trackName}>{track.name}</p>
                    <p className={styles.artistName}>{track.artists.map(artist => artist.name).join(', ')}</p>
                    <p className={styles.timestamp}>Current Time: {formatTime(progress)} / {formatTime(track.duration_ms)}</p>
                </div>
            </div>
        </div>
    );
};

export default Spotify;
