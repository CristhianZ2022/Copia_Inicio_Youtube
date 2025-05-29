import '../styles/Header.css'

import { FiltersGenres } from './FiltersGenres.jsx';
import { PerfilMenu } from './PerfilMenu.jsx';

import { useFilters } from '../hooks/useFilters.js';
import { searchVideos } from '../services/videoplays.js';
import { useEffect, useState } from 'react';

export function Header({ onClick, isActive }) {
  const [searchValue, setSearchValue] = useState('');
  const [activeToggle, setActiveToggle] = useState(false);
  const [isNight, setIsNight] = useState(false);
  const [videos, setVideos] = useState([]);
  const { setFilters } = useFilters();

  useEffect(() => {
    if (!searchValue.trim()) return;

    async function fetchVideos() {
    try {
      const videos = await searchVideos({ title: searchValue });
      const titles = videos.map(video => video.title);
      setVideos(titles);
    } catch (error) {
      error.message;
    }
  }

    fetchVideos();
  }, [searchValue]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue.trim() === '') return;

    setFilters(prev => ({ ...prev, title: searchValue }));
    setSearchValue('');
  };

  const handleNight = () => {
    setIsNight(!isNight);
    document.body.classList.toggle('night');
  };

  const handleToggle = () => {
    setActiveToggle(!activeToggle);
  };

  return (
    <header>
      <div className="menu">
        <span className="material-symbols-outlined" 
          onClick={onClick}
        >
          menu
        </span>
      </div>
      <form className="searching" onSubmit={handleSubmit} >
        <input type="text" placeholder="Search..." autoComplete='off' value={searchValue} onChange={handleSearchChange} />
        <button className='btn-search' onClick={handleSubmit} >
          <span className="material-symbols-outlined" >search</span>
        </button>
        <button className='btn-mic'>
          <span className="material-symbols-outlined">mic</span>
        </button>
        
      </form>
      <div className="options-user">
        <span className="material-symbols-outlined"  onClick={handleNight}>moon_stars</span>
        <div onClick={handleToggle}>
          <img src="https://avatars.githubusercontent.com/u/10594716?v=4" alt="" />
        </div>
      </div>
      <FiltersGenres isActive={isActive} />

      {activeToggle && <PerfilMenu />}
    </header>
  )
}