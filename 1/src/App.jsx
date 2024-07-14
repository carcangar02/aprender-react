import "./App.css";
import { TwCard } from "./tw-card.jsx";

const usersFollow = [
  {"userName": "ana92", "name": "Ana García", "isFollowing": true},
  {"userName": "pedro46", "name": "Pedro López", "isFollowing": true},
  {"userName": "sonia17", "name": "Sonia Pérez", "isFollowing": true},
  {"userName": "raul83", "name": "Raúl Hernández", "isFollowing": false},
  {"userName": "jorge52", "name": "Jorge Sánchez", "isFollowing": true},
  {"userName": "laura68", "name": "Laura Rodríguez", "isFollowing": false},
  {"userName": "carlos25", "name": "Carlos Ramírez", "isFollowing": false},
]

export function App() {
  


  
  return (
    <section className="App">
      {
        usersFollow.map(user => {
          const {userName, name, isFollowing} = user
          return(
            <TwCard  key={userName} inicialIsFollowing ={isFollowing} userName={userName}>{name}</TwCard>
          )
        }

        )
      }
        
      
      
        
      
    </section>
  );
}
