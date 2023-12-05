import { useEffect, useState } from "react";
import "./character.css";

export function Character() {
  const [character, setCharacter] = useState([]); //estado

  //llaves
  //useEffect y useState Hooks

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacter(data.results));
  }, []);
  //useEffect recibe una funcion callback, es decir el codigo a ejecutar
  // recibe cuando se va a ejecutar

  return (
    //parentesis

    <>
      <ul className="lista ">
        {character.map(
          (
            item,
            index //recorre el array de characters y se muestra por pantalla el resultado
          ) => (
            <li key={index} className="item">
              <img src={item.image} />
              <div className="t"></div>
              <div className="tex">
                <h3>{item.name}</h3>
                <p>{item.status}</p>
                <div className="img"></div>
                <div className="celda"></div>
              </div>
            </li>
          )
        )}
      </ul>
    </>
  );
}
