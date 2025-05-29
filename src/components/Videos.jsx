import "../styles/Videos.css";

export function Videos({ isActive, videos }) {

  return (
    <section className="videos-container" style={{ left: isActive ? '150px' : '100px', width: isActive ? 'calc(100% - 150px)' : 'calc(100% - 100px)' }} >
      {videos.map(video => (
        <div key={video.id} className="video">
          <img src="https://th.bing.com/th/id/OIP.B749rKrNWFpRoDAyxDfSTgHaEK?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
          <div className="description">
            <h2>{video.title}</h2>
            <p>{video.releaseYear}</p>
            <span>{video.director}</span>
            <h5>{video.genre}</h5>
          </div>
        </div>
      ))}
    </section>
  );
}