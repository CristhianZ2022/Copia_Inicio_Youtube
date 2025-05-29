import { getVideoPlays, searchVideos } from './services/videoplays.js'
import { useFilters } from './hooks/useFilters.js'

import { Header } from './components/Header.jsx'
import { Aside } from './components/Aside.jsx'
import { Videos } from './components/Videos.jsx'

import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isActive, setIsActive] = useState(false);
  const [videos, setVideos] = useState([]);
  const { filters, setFilters, filterVideos } = useFilters();

  useEffect(() => {
  async function fetchVideos() {
    try {
      let videos;
      
      if (filters.title && filters.title.trim() !== '') {
        videos = await searchVideos({ title: filters.title });
      } else {
        videos = await getVideoPlays();
      }

      setVideos(videos);

      const uniqueGenres = [...new Set(videos.map(video => video.genre))];
      setFilters(prev => ({ ...prev, availableGenres: uniqueGenres }));
      
    } catch (error) {
      setVideos([]);
    }
  }

  fetchVideos();
}, [filters.title]);

  const filteredVideos = filterVideos(videos);

  return (
    <>
      <Header isActive={isActive} onClick={() => setIsActive(!isActive)} />
      <Aside isActive={isActive} />
      <Videos isActive={isActive} videos={filteredVideos} />
    </>
  )
}

export default App
