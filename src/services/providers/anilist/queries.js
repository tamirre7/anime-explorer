export const ANIME_BY_ID = `query ($id: Int) {
  Media(id: $id, type: ANIME) {
    id
    title { english }
    episodes
    averageScore
    genres
    description(asHtml: false)
    status
    startDate { year }
    endDate { year }
    coverImage { large }
    isAdult
  }
}
`;

export const ANIME_BY_NAME = `
query ($search: String, $page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    media(search: $search, type: ANIME) {
      id
      title { english }
      averageScore
      genres
      startDate { year }
      endDate { year }
      coverImage { large }
    }
  }
}
`;

export const DISCOVER = `
query ($page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    media(type: ANIME, sort: POPULARITY_DESC) {
      id
      title { english }
      averageScore
      genres
      status
      startDate { year }
      endDate { year }
      coverImage { large }
    }
  }
}
`;

export const CHARACTER_BY_NAME = `
query ($search: String, $page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    characters(search: $search) { id name { full } }
  }
}
`;

export const ANIME_BY_CHARACTER = `
query ($id: Int, $page: Int, $perPage: Int) {
  Character(id: $id) {
    media(page: $page, perPage: $perPage, type: ANIME) {
      nodes {
        id
        title { english }
        averageScore
        genres
        startDate { year }
        endDate { year }
        coverImage { large }
      }
    }
  }
}
`;
