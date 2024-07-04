import React from "react";

type Pokemon = {
  id: number;
  name: string;
  korean_name: string;
  height: number;
  weight: number;
  sprites: { front_default: string };
  types: { type: { name: string; korean_name: string } }[];
  abilities: { ability: { name: string; korean_name: string } }[];
  moves: { move: { name: string; korean_name: string } }[];
};

const PokemonDetail: React.FC<{ pokemonData: Pokemon }> = ({ pokemonData }) => {
  return (
  <div className="border border-gray-300 ">
    <header className="font-black text-center flex flex-col items-center justify-center">
      {pokemonData.korean_name}
      <p>No. {pokemonData.id}</p>
      <img className="mt-4" src={pokemonData.sprites.front_default} alt="포켓몬 사진"/>
    </header>
    <section className="text-center mt-6 p-2">
      <h1 className="p-3">이름 : {pokemonData.korean_name} ({pokemonData.name})</h1>
      <p className="p-3">키: {pokemonData.height}cm 무게: {pokemonData.weight}kg</p>
      <p className="p-3">타입: {pokemonData.types.map((type) => type.type.korean_name).join(', ')}<br></br>
      특성: {pokemonData.abilities.map((ability) => ability.ability.korean_name).join(', ')}</p>
      <p>기술: </p>
        <div className="grid grid-cols-8">
          {pokemonData.moves.map((move, idx) => (
            <span key={idx} className="rounded p-2 text-center">
              {move.move.korean_name}
            </span>
          ))}
        </div>
    </section>

  </div>
  );
};

export default PokemonDetail;
