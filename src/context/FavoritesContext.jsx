import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'favorites';

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load favorites from storage on mount
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored) {
          setFavorites(JSON.parse(stored));
        }
      } catch (error) {
        console.error('Failed to load favorites:', error);
      } finally {
        setIsLoaded(true);
      }
    };
    loadFavorites();
  }, []);

  // Save favorites to storage whenever they change
  useEffect(() => {
    if (isLoaded) {
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(favorites)).catch((error) =>
        console.error('Failed to save favorites:', error)
      );
    }
  }, [favorites, isLoaded]);

  const addFavorite = (anime) => {
    setFavorites((prev) => {
      if (prev.some((item) => item.id === anime.id)) {
        return prev;
      }
      return [...prev, anime];
    });
  };

  const removeFavorite = (animeId) => {
    setFavorites((prev) => prev.filter((item) => item.id !== animeId));
  };

  const isFavorite = (animeId) => {
    return favorites.some((item) => item.id === animeId);
  };

  const toggleFavorite = (anime) => {
    if (isFavorite(anime.id)) {
      removeFavorite(anime.id);
    } else {
      addFavorite(anime);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isLoaded,
        addFavorite,
        removeFavorite,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
