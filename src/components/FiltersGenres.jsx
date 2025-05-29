import { getVideoPlays } from "../services/videoplays";
import { useFilters } from "../hooks/useFilters.js";

import { useState, useEffect, useRef } from 'react'
import '../styles/FiltersGenres.css'


export function FiltersGenres({ isActive }) {
  const { filters, setFilters } = useFilters();
  const [selected, setSelected] = useState('all');
  const [genres, setGenres] = useState([]);
  const [position, setPosition] = useState(0);
  const genresRef = useRef(null);

  useEffect(() => {
    async function fetchGenres() {
      try {
        let videoGenres = await getVideoPlays();

        if (filters.title && filters.title.trim() !== '') {
          videoGenres = videoGenres.filter(video =>
            typeof video.title === 'string' && video.title.toLowerCase().includes(filters.title.toLowerCase())
          );
        }

        const genres = [...new Set(videoGenres.map(video => video.genre))];

        setGenres(genres);

      } catch (error) {
        console.error("Error al obtener géneros:", error);
      }
    }

    fetchGenres();
  }, [filters.title]);

  const handleClickGenre = (e, genre) => {
    setFilters(prev => ({ 
      ...prev,
      genre : genre
    }));

    setSelected(genre);
  };

  const scrollLeft = () => {
    const minScroll = 0;

    setPosition(prev => (prev + 100 < 0 ? prev + 100 : minScroll));
  };

  const scrollRight = () => {
    const maxScroll = 0 - 5775;

    setPosition(prev => (prev - 100 > maxScroll ? prev - 100 : maxScroll));
  };

  return (
    <>
      <button className="left" onClick={scrollLeft} style={{ left: isActive ? '150px' : '100px' }}>
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <section 
        className="filters-genres" 
        style={{ 
          left: isActive ? '150px' : '100px', 
          transform: `translateX(${position}px)` 
        }} 
        ref={genresRef} 
      >
        <button className={`genre ${selected === 'all' ? 'activeGenre' : ''}`} onClick={(e) => {handleClickGenre(e, 'all')}} >
          all
        </button>
        {genres.map((genre, index) => (
          <button 
            className={`genre ${selected === genre ? 'activeGenre' : ''}`} onClick={(e) => {handleClickGenre(e, genre)}} 
            key={`${genre}-${index}`} 
          >
            {genre}
          </button>
        ))}
      </section>
      <button className="right" onClick={scrollRight} >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </>
  )
}