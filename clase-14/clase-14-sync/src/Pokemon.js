import { useEffect, useState } from 'react';

export default function Pokemon() {

    const [isLoading, setIsLoading] = useState(true);
    const [imageUrl, setImageUrl] = useState(null);

    return (
        <div>
            <form>
                <p>Pokemon: <input type="text" name="pokemon"/></p>
            </form>
            <button>Search pokemon</button>
        </div>
    )

}
