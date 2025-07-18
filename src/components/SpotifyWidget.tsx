import React, { useState, useEffect } from 'react';
import { Music, Play, Pause } from 'lucide-react';

// Enhanced Spotify Widget - Complete working version
const SpotifyWidget = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState<{
        name: string;
        artist: string;
        album: string;
        image: string;
        external_url?: string;
        progress_ms?: number;
        duration_ms?: number;
    } | null>(null);
    const [isOnline, setIsOnline] = useState(true);
    const [progress, setProgress] = useState(0);

    // Format time from milliseconds to MM:SS
    const formatTime = (ms: number) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    // Fetch current playing track from Netlify function
    const fetchNowPlaying = async () => {
        try {
            const response = await fetch('/.netlify/functions/spotify-now-playing');
            const data = await response.json();

            if (data.error) {
                console.error('Spotify API error:', data.error);
                setIsOnline(false);
                return;
            }

            setIsOnline(true);
            setIsPlaying(data.isPlaying);
            setCurrentTrack(data.track);

            if (data.track && data.track.progress_ms && data.track.duration_ms) {
                setProgress((data.track.progress_ms / data.track.duration_ms) * 100);
            }
        } catch (error) {
            console.error('Error fetching now playing:', error);
            setIsOnline(false);
            setCurrentTrack(null);
            setIsPlaying(false);
        }
    };

    useEffect(() => {
        fetchNowPlaying();
        const interval = setInterval(fetchNowPlaying, 3000); // Update every 3 seconds
        return () => clearInterval(interval);
    }, []);

    // Update progress bar every second when playing - more accurate calculation
    useEffect(() => {
        if (!isPlaying || !currentTrack?.progress_ms || !currentTrack?.duration_ms) return;

        const startTime = Date.now();
        const initialProgress = currentTrack.progress_ms;

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const currentProgressMs = initialProgress + elapsed;
            const newProgress = (currentProgressMs / currentTrack.duration_ms!) * 100;

            if (newProgress >= 100) {
                setProgress(100);
                clearInterval(interval);
            } else {
                setProgress(newProgress);
            }
        }, 100); // Update every 100ms for smoother animation

        return () => clearInterval(interval);
    }, [isPlaying, currentTrack]);

    if (!isOnline) {
        return (
            <div className="fixed bottom-8 left-8 z-40 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 max-w-sm shadow-2xl">
                <div className="flex items-center gap-3 mb-3">
                    <span className="text-white font-medium">neyo is currently offline</span>
                    <div className="text-gray-400">
                        <Music className="w-5 h-5" />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                        <Music className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="flex-1">
                        <div className="text-gray-300 font-medium">Not listening to Spotify</div>
                        <div className="text-gray-500 text-sm">Offline</div>
                    </div>
                </div>
            </div>
        );
    }

    if (!currentTrack || !isPlaying) {
        return (
            <div className="fixed bottom-8 left-8 z-40 bg-gray-900/95 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 max-w-sm shadow-2xl">
                <div className="flex items-center gap-3 mb-3">
                    <span className="text-white font-medium">neyo is currently listening to:</span>
                    <div className="text-green-500">
                        <Music className="w-5 h-5" />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                        <Music className="w-6 h-6 text-gray-400" />
                    </div>
                    <div className="flex-1">
                        <div className="text-gray-300 font-medium">Nothing playing</div>
                        <div className="text-gray-500 text-sm">Paused or stopped</div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed bottom-8 left-8 z-40 p-4 bg-gray-900/90 backdrop-blur-sm border border-green-500/50 rounded-2xl max-w-xs hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-2">
                <div className="relative">
                    <img
                        src={currentTrack.image || '/api/placeholder/48/48'}
                        alt="Album Art"
                        className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        {isPlaying ? <Play className="w-2 h-2 text-white" /> : <Pause className="w-2 h-2 text-white" />}
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-white font-medium text-sm">neyo is listening to</p>
                    <a
                        href={currentTrack.external_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 font-semibold text-sm truncate hover:text-green-300 transition-colors block"
                    >
                        {currentTrack.name}
                    </a>
                    <p className="text-gray-400 text-xs truncate">by {currentTrack.artist}</p>
                </div>
            </div>

            {/* Compact Progress Bar */}
            {currentTrack.duration_ms && (
                <div className="space-y-1">
                    <div className="w-full bg-gray-700 rounded-full h-1">
                        <div
                            className="bg-green-500 h-1 rounded-full transition-all duration-1000 ease-linear"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>{formatTime((progress / 100) * currentTrack.duration_ms)}</span>
                        <span>{formatTime(currentTrack.duration_ms)}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SpotifyWidget;