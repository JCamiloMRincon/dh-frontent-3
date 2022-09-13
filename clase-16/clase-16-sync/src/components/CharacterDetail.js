import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../services/api";
import styles from "../styles/detail.module.css"

const CharacterDetail = () => {
  const [character, setCharacter] = useState({})
  const {id} = useParams();

  useEffect( () => {
    getCharacterById(id).then( (response) => {
        setCharacter(response.data)
    })
  }, [id])


  return (
    <div>
      <h2 className={styles.name}>{character.name}</h2>
      <div style={{
        display: "flex",
        justifyContent: "space-around",
      }}>
        <img className={styles.image} src={character.image} alt=''/>
        <div style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Location: {character.location.name}</p>
        </div>
      </div>
      
    </div>

  )
}
export default CharacterDetail;