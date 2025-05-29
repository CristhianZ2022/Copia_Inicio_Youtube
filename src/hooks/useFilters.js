import { useContext, useEffect } from 'react'
import { FilterContext } from '../context/filters.jsx'

export function useFilters() {
  const { filters, setFilters } = useContext(FilterContext)

  // useEffect(() => {
  //   setFilters(prev => ({ ...prev, title: '' })); // Vaciar `title`
  // }, [filters.genre]); borrar por ahora me daña el filtro por título jj.

  const filterVideos = (videos) => {
    return videos.filter(video => {
      const matchesGenre = filters.genre === 'all' || video.genre === filters.genre;
      const matchesTitle = !filters.title || (video.title && video.title.toLowerCase().includes(filters.title.toLowerCase()));



      return matchesGenre && matchesTitle;
    });
  };

  return { filterVideos, filters, setFilters }
}