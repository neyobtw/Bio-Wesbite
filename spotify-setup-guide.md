# Complete Spotify Widget Setup Guide

## Files You Need

1. **spotify-widget.tsx** - The React component
2. **spotify-function.js** - The Netlify serverless function (place in `netlify/functions/spotify-now-playing.js`)
3. **Environment variables** - Your Spotify API credentials

## Step 1: Spotify App Setup

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new app with these settings:
   - **Redirect URI**: `https://your-site.netlify.app/callback`
   - **Scopes**: `user-read-currently-playing user-read-playback-state`

## Step 2: Get Your Credentials

You already have these from your current setup:
- **Client ID**: `a04d450b61f04771a231fb762c50c2ea`
- **Client Secret**: `309be95d02264e439ddee70e70934c7c`
- **Refresh Token**: `AQDHPabKH4FEvqauUqbRdVLDdpjQNQpoDBz-Oaer5sHzEXHJ0gJMJfRjzxWgFE2yFlLPXgTDAEaAi8jeYzQPQgcQ6P9xlavgR-4Ih5tmo_niPjqYYMno-nqlIaD1c9DDrjE`

## Step 3: File Structure

```
your-project/
├── src/
│   └── components/
│       └── SpotifyWidget.tsx
├── netlify/
│   └── functions/
│       └── spotify-now-playing.js
└── .env
```

## Step 4: Environment Variables

Add these to your Netlify environment variables:

```env
SPOTIFY_CLIENT_ID=a04d450b61f04771a231fb762c50c2ea
SPOTIFY_CLIENT_SECRET=309be95d02264e439ddee70e70934c7c
SPOTIFY_REFRESH_TOKEN=AQDHPabKH4FEvqauUqbRdVLDdpjQNQpoDBz-Oaer5sHzEXHJ0gJMJfRjzxWgFE2yFlLPXgTDAEaAi8jeYzQPQgcQ6P9xlavgR-4Ih5tmo_niPjqYYMno-nqlIaD1c9DDrjE
```

## Step 5: Usage in Your New Site

```tsx
import SpotifyWidget from './components/SpotifyWidget';

function App() {
  return (
    <div>
      {/* Your other components */}
      <SpotifyWidget />
    </div>
  );
}
```

## Step 6: Required Dependencies

Make sure your new project has these dependencies:

```bash
npm install lucide-react
```

## Features

✅ **Real-time updates** - Updates every 3 seconds  
✅ **Smooth progress bar** - Updates every 100ms  
✅ **Album artwork** - Shows actual album covers  
✅ **Clickable links** - Song titles link to Spotify  
✅ **Time display** - Current time / Total duration  
✅ **Responsive design** - Works on all screen sizes  
✅ **Error handling** - Graceful fallbacks for offline/errors  

## Troubleshooting

- **Widget shows "offline"**: Check environment variables in Netlify
- **No song data**: Make sure you're playing music on Spotify
- **Function errors**: Check Netlify function logs
- **CORS errors**: The function handles CORS automatically

## Customization

You can easily customize:
- **Position**: Change `fixed bottom-8 left-8` in the className
- **Colors**: Modify the color classes (green-500, gray-900, etc.)
- **Size**: Adjust `max-w-xs` and padding classes
- **Update frequency**: Change the 3000ms interval
- **Animation speed**: Modify transition durations

The widget is fully self-contained and will work on any React website with Netlify hosting!