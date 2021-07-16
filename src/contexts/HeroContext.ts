import React from "react";
import { IHero } from '../types/IHero';

export interface IHeroContext {
    heroes: IHero[];
    setHeroes: React.Dispatch<React.SetStateAction<IHero[]>>;
}

export const HeroContext = React.createContext<IHeroContext>({
    heroes: [],
    setHeroes: () => {}
})