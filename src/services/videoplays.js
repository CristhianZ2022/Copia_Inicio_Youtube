export async function getVideoPlays() {
  const response = await fetch(
    'https://playground.mockoon.com/movies'
  );
  const data = await response.json();

  return data;
}

export const searchVideos= async ({ title }) => {
  if (!title || title.trim() === '') {
    throw new Error('Title is required');
  }

  try { 
    const response = await fetch(
      `https://playground.mockoon.com/movies?title=${title}`
    );

    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    const json = await response.json();

    const videos = json.map(video => ({
      image: 'https://th.bing.com/th/id/OIP.B749rKrNWFpRoDAyxDfSTgHaEK?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      title: video.title,
      releaseYear: video.releaseYear,
      director: video.director,
      genre: video.genre
    }));

    return videos;

  } catch (error) {
    throw new Error('Something went wrong');
  }
}