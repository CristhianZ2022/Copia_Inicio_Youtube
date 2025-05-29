import '../styles/Aside.css'

import { useFilters } from "../hooks/useFilters.js";
import { ItemsAside, ItemsAsideSecondary } from './ItemsAside.jsx'

export function Aside({ isActive }) {

  const { setFilters } = useFilters();

  const HomeClick = async () => {
    setFilters(prev => ({ ...prev, title : '' }));
  };

  const menuItems = [
    { icon: "home", text: "Home", onClick: HomeClick },
    { icon: "animated_images", text: "Trending" },
    { icon: "subscriptions", text: "Subscriptions" },
    { icon: "account_circle", text: "Account" },
    { icon: "history", text: "Watch History" }
  ];

  const menuItemsSecondary = [
    { icon: "trending_up", text: "Trendings" },
    { icon: "library_music", text: "Music" },
    { icon: "Trophy", text: "Sports" },
    { icon: "lightbulb", text: "Learning" }
  ];

  return (
    <aside style={{ width: isActive ? '150px' : '90px'}}>
      {menuItems.map((item, index) => (
        <ItemsAside
          key={index}
          isActive={isActive}
          icon={item.icon}
          text={item.text}
          onClick={item.text === "Home" ? item.onClick : null}
        />
      ))}
  
      {isActive && <hr width="100%" />}

      {menuItemsSecondary.map((item, index) => (
        <ItemsAsideSecondary
          key={index}
          isActive={isActive}
          icon={item.icon}
          text={item.text}
        />
      ))}
    </aside>
  )
}