import { create } from "zustand";


  interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
  }


  interface GameQueryStore{
    gameQuery: GameQuery;
    setSearchtext: (searchText: string) => void;
    setSortOrder: (sortOrder: string) => void;
    setPlatformId: (platformId: number) => void;
    setGenreId: (genreId: number) => void;
  }


  const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchtext: searchText => set(() => ({gameQuery: {searchText}})),
    setSortOrder: sortOrder => set(store => ({gameQuery: {...store.gameQuery, sortOrder}})),
    setPlatformId: platformId => set(store => ({gameQuery: {...store.gameQuery, platformId}})),
    setGenreId: genreId => set(store => ({gameQuery: {...store.gameQuery, genreId}})),
  }))
  

  export default useGameQueryStore