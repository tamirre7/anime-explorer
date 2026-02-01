import { useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../../../src/theme/colors';

import SearchBar from '../../../src/components/SearchBar/SearchBar';
import Filters from '../../../src/components/Filters/Filters';
import AnimeGrid from '../../../src/components/AnimeGrid/AnimeGrid';

import { SEARCH_BY } from '../../../src/constants/search';
import { DEFAULT_SORT } from '../../../src/constants/animeSort';

import useDiscoverInfinite from '../../../src/hooks/useDiscoverInfinite';
import useSearchAnimeInfinite from '../../../src/hooks/useSearchAnimeInfinite';
import useSearchByCharacter from '../../../src/hooks/useSearchByCharacter';
import useDebouncer from '../../../src/hooks/useDebouncer';

import ErrorState from '../../../src/components/states/ErrorState';
import LoadingState from '../../../src/components/states/LoadingState';
import EmptyState from '../../../src/components/states/EmptyState';

export default function DiscoverTab() {
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
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={{ flex: 1, backgroundColor: colors.bg, paddingTop: 8 }}
    >
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
        <ErrorState message={activeQuery.error?.message} />
      )}

      {!isLoading && !isError && items.length > 0 && (
        <AnimeGrid visibleSeries={items} onEndReached={onEndReached} />
      )}
    </SafeAreaView>
  );
}
