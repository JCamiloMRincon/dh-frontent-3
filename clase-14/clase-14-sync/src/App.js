import { useEffect, useState } from 'react';

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (isLoading) {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((dog) => {
          setIsLoading(false);
          setImageUrl(dog.message);
        })
      }
    }, [isLoading]);

  const randomDog = () => {
    setIsLoading(true);
  }

  if (isLoading) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    )
  }

  return (
    <div className="App">
      <img src={imageUrl} alt="" width="400px" />
      <button onClick={randomDog}>Otro perro</button>
    </div>
  )

}
