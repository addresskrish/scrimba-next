"use client"


import { useState, useEffect } from "react";

type Pokemon = {
  name: string;
  id: number;
  height: number;
  weight: number;
};

async function getPokemon(name: string): Promise<Pokemon> {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return data.json();
}

export default function Home() {
  const [pokemonName, setPokemonName] = useState<string>("bulbasaur");
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    getPokemon(pokemonName)
      .then((data) => setPokemon(data))
      .catch(() => setError("Pokemon not found"))
      .finally(() => setLoading(false));
  }, [pokemonName]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-4xl font-bold">Welcome to the Pokedex!</h1>
      <input
        className="border border-gray-300 p-2 rounded"
        type="text"
        placeholder="Enter Pokemon name"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value.toLowerCase())}
      />
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {pokemon && !error && (
        <>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => console.log(`Searching for ${pokemonName}`)}
          >
            Search
          </button>
          <img src={`https://pokeapi.co/media/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
          <p className="text-4xl font-bold">{pokemon.name}</p>
        </>
      )}
    </div>
  );
}
