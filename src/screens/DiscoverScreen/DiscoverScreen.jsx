import { useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import AnimeGrid from '../../components/AnimeGrid/AnimeGrid';
import Filters from '../../components/Filters/Filters';
import SearchBar from '../../components/SearchBar/SearchBar';
import EmptyState from '../../components/states/EmptyState';
import ErrorState from '../../components/states/ErrorState';
import LoadingState from '../../components/states/LoadingState';

import { DEFAULT_SORT } from '../../constants/animeSort';
import { SEARCH_BY } from '../../constants/search';

import useDebouncer from '../../hooks/useDebouncer';
import useDiscoverInfinite from '../../hooks/useDiscoverInfinite';
import useSearchAnimeInfinite from '../../hooks/useSearchAnimeInfinite';
import useSearchByCharacter from '../../hooks/useSearchByCharacter';

import { discoverScreenStyles } from './styles';

export default function DiscoverScreen() {
  const [query, setQuery] = useState('');
  const [searchBy, setSearchBy] = useState(SEARCH_BY.TITLE);
  const [sort, setSort] = useState(DEFAULT_SORT);

  const debouncedQuery = useDebouncer(query, 400);
  const trimmedQuery = debouncedQuery.trim();
  const isSearching = trimmedQuery.length > 0;

  const discoverQuery = useDiscoverInfinite(sort);

  const searchByTitleQuery = useSearchAnimeInfinite(trimmedQuery, sort);

  const searchByCharacterQuery = useSearchByCharacter(trimmedQuery, {
    enabled: trimmedQuery.length > 0 && searchBy === SEARCH_BY.CHARACTER,
  });

  const activeQuery = useMemo(() => {
    if (!isSearching) return discoverQuery;
    if (searchBy === SEARCH_BY.CHARACTER) return searchByCharacterQuery;
    return searchByTitleQuery;
  }, [
    isSearching,
    searchBy,
    discoverQuery,
    searchByTitleQuery,
    searchByCharacterQuery,
  ]);

  const items = useMemo(() => {
    if (!isSearching) {
      return discoverQuery.data?.pages.flatMap((p) => p.items) ?? [];
    }

    if (searchBy === SEARCH_BY.CHARACTER) {
      return searchByCharacterQuery.data ?? [];
    }

    return searchByTitleQuery.data?.pages.flatMap((p) => p.items) ?? [];
  }, [
    isSearching,
    searchBy,
    discoverQuery.data,
    searchByTitleQuery.data,
    searchByCharacterQuery.data,
  ]);

  const isLoading = activeQuery.isLoading;
  const isError = !!activeQuery.error;
  const isEmpty = items.length === 0;

  const onEndReached = () => {
    if (!isSearching || searchBy === SEARCH_BY.TITLE) {
      if (activeQuery.hasNextPage && !activeQuery.isFetchingNextPage) {
        activeQuery.fetchNextPage();
      }
    }
  };

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={discoverScreenStyles.container}>
      <SearchBar
        query={query}
        onQueryChange={setQuery}
        searchBy={searchBy}
        onSearchByChange={setSearchBy}
      />

      <Filters sort={sort} onSortChange={setSort} />

      {isLoading && <LoadingState />}

      {isEmpty && !isError && !isLoading && <EmptyState />}

      {isError && !isLoading && (
        <ErrorState
          message={activeQuery.error?.message}
          onRetry={() => activeQuery.refetch()}
        />
      )}

      {!isLoading && !isError && items.length > 0 && (
        <AnimeGrid
          visibleSeries={items}
          onEndReached={onEndReached}
          onRefresh={() => activeQuery.refetch()}
          refreshing={activeQuery.isRefetching}
        />
      )}
    </SafeAreaView>
  );
}
