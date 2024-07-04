import PokemonDetail from "@/app/components/PokemonDetail";
import axios from "axios";
import React from "react";
import { Pokemon } from "../../types/pokemon";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

const fetchPokemonData = async (id: string): Promise<Pokemon> => {
  const res = await axios.get(`http://localhost:3000/api/pokemons/${id}`);
  return res.data;
};


const PokemonDetailPage: React.FC<Props> = async ({ params }) => {
  const pokemonData = await fetchPokemonData(params.id);

  return (
    <div>
      <PokemonDetail pokemonData={pokemonData} />
      <div className="mt-4 flex flex-col justify-center items-center">
        <Link href="/" className="bg-blue-400 text-white px-4 rounded">뒤로 가기</Link>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
