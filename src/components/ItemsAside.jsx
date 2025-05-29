import '../styles/Aside.css'

export function ItemsAside({ isActive, icon, text, onClick }) {
  return (
    <div className={isActive ? 'active' : ''} onClick={onClick} >
      <span className="material-symbols-outlined" >{icon}</span>
      <p>{text}</p>
    </div>
  )
}

export function ItemsAsideSecondary({ isActive, icon, text }) {
  return (
    <div 
      style={{ display: isActive ? 'flex' : 'none'}} 
      className={isActive ? 'active' : ''} 
    >
      <span className="material-symbols-outlined" >{icon}</span>
      <p>{text}</p>
    </div>
  )
}