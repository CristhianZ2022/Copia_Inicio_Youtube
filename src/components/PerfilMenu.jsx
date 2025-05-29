import '../styles/PerfilMenu.css';

export function PerfilMenu() {
  const menuPerfil = [
    { icon: "person", text: "Cuenta de YouTube" },
    { icon: "person_book", text: "Cambiar de cuenta" },
    { icon: "logout", text: "Cerrar sesión" },
    { icon: "paid", text: "Suscripciones" },
    { icon: "account_circle", text: "Tus datos en YouTube" },
    { icon: "translate", text: "Español" },
    { icon: "language", text: "Ubicación" },
    { icon: "settings", text: "Ajustes" },
    { icon: "help", text: "Ayuda y soporte" },
    { icon: "feedback", text: "Comentarios" }
  ]

  return (
    <div className="menu-perfil">
      <div className="menu-perfil-title">
        <img src="https://avatars.githubusercontent.com/u/10594716?v=4" alt="" />
        <p>Cristhian Zambrano Nuñez</p>
      </div>
      <div className='menu-perfil-items'>
        { menuPerfil.map((item, index) => {
          return (
            <div key={index} className="menu-perfil-item">
              <span className={`material-symbols-outlined`}>{item.icon}</span>
              <p>{item.text}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}