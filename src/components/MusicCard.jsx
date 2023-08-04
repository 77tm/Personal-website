import React, { useEffect, useState } from "react";

const MusicCard = () => {

  const clientId = '89020d325d194c1db9ca6244e7ae86c6';
  const clientSecret = '83dc69a3c63848d0997ad2ae06049cdb';
  const accessToken = "BQD-VoB1VR2Pe3n1f6KgYPA5KZk_n5kZI2255PmuCV66H8wO4AwTe468cshC2l7pJfmRlPBl-x-wvPHpGfRY_DmCBqlMfNZm-Hq41xZwsua6_DeJdWg"; // Replace with your Access Token obtained from Spotify API
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  useEffect(() => {

    




    // const getCurrentlyPlayingSong = async () => {
    //   try {
    //     const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    //       headers: {
    //         'Authorization': 'Bearer BQD-VoB1VR2Pe3n1f6KgYPA5KZk_n5kZI2255PmuCV66H8wO4AwTe468cshC2l7pJfmRlPBl-x-wvPHpGfRY_DmCBqlMfNZm-Hq41xZwsua6_DeJdWg', // Replace with your actual access token
    //       },
    //     });

    //     if (!response.ok) {
    //       // Handle error here if needed
    //       console.error('Failed to fetch currently playing song');
    //       return;
    //     }

    //     const data = await response.json();
    //     setCurrentlyPlaying(data);
    //   } catch (error) {
    //     // Handle error here if needed
    //     console.error('Error fetching data:', error);
    //   }
    // };

    // getCurrentlyPlayingSong();
  }, []);

  return (
    <div className="music-card">
      {currentlyPlaying ? (
        <div>
          <h2>Currently Playing:</h2>
          <p>{currentlyPlaying.item.name}</p>
          <p>{currentlyPlaying.item.artists[0].name}</p>
        </div>
      ) : (
        <p>No song currently playing.</p>
      )}
    </div>
  );
};

export default MusicCard;
