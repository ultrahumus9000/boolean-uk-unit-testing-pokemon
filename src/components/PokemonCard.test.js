import "@testing-library/jest-dom";
import { logRoles, render, screen, within } from "@testing-library/react";
// import React from "react";
import PokemonCard from "./PokemonCard";

const pokemon = {
  name: "bulbasaur",
  sprites: {
    back_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    back_female: null,
    back_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
    back_shiny_female: null,
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    front_female: null,
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
    front_shiny_female: null,
    other: {
      dream_world: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        front_female: null,
      },
      "official-artwork": {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
    },
  },
  stats: [
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: "hp",
        url: "https://pokeapi.co/api/v2/stat/1/",
      },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: {
        name: "attack",
        url: "https://pokeapi.co/api/v2/stat/2/",
      },
    },
    {
      base_stat: 49,
      effort: 0,
      stat: {
        name: "defense",
        url: "https://pokeapi.co/api/v2/stat/3/",
      },
    },
    {
      base_stat: 65,
      effort: 1,
      stat: {
        name: "special-attack",
        url: "https://pokeapi.co/api/v2/stat/4/",
      },
    },
    {
      base_stat: 65,
      effort: 0,
      stat: {
        name: "special-defense",
        url: "https://pokeapi.co/api/v2/stat/5/",
      },
    },
    {
      base_stat: 45,
      effort: 0,
      stat: {
        name: "speed",
        url: "https://pokeapi.co/api/v2/stat/6/",
      },
    },
  ],
  id: 1,
};

describe("should have a heading of pokemon", () => {
  it("", () => {
    render(<PokemonCard pokemon={pokemon} />);
    logRoles(document.body);
    const h2El = screen.getByRole("heading", { name: "Bulbasaur" });

    expect(h2El).toBeInTheDocument();
  });
  it("", () => {
    render(<PokemonCard pokemon={pokemon} />);
    logRoles(document.body);
    const imgEl = screen.getByRole("img");
    expect(imgEl).toBeInTheDocument();
  });
  it("", () => {
    render(<PokemonCard pokemon={pokemon} />);
    logRoles(document.body);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
  });
});

// Test a single pokemon card:
//  - heading
//  - image
//  - button

// Import a single pokemon object to test the component.

// Do we need to test the Stats List here?
