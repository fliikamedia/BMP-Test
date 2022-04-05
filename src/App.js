import "./App.css";
import BitmovinPlayer from "./bitmovinPlayer";
import React, { useState } from "react";


const App = () => {

const movieData = ({
  play_url : "https://fliikamediaservice-usea.streaming.media.azure.net/40b69b0f-acb9-4585-bfc9-bc5770504fe8/Godzilla.vs.Kong.ism/manifest(format=m3u8-aapl)",
  poster : "https://fliikaimages.azureedge.net/movies/Godzilla-vs-Kong/godzillavskong.jpg ",
  rating :  "PG-13",
  title : "Godzilla vs Kong"

})



  
  return (
    <BitmovinPlayer
        playerSource={{
          hls:movieData.play_url, 
          poster: movieData.poster,
          title: movieData.title,
          rating: movieData.film_rating, 
          subtitleTracks:[
              {
                  label: 'English [CC]',
                  language: 'en-US',
                  url:'https://bitdash-a.akamaihd.net/content/sintel/subtitles/subtitles_en.vtt'
              }
          ],


      }} 
    />
        
  )
}

export default App

