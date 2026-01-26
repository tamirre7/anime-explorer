# Anime Explorer

A React Native (Expo) anime explorer app built with Expo Router.  
The app focuses on a simple flow: **Discover**, **Search**, **Favorites (local)**, and **Series Details**.

This repository is currently in early development (scaffolding + project structure in progress).

## Tech Stack

- React Native + Expo
- Expo Router (file-based routing)
- AniList GraphQL API (primary provider)
- Planned: Jikan REST API (secondary provider) with an interchangeable provider layer
- Local persistence for favorites (to be implemented)

## Planned Features

- **Discover**: trending/popular anime list with pagination
- **Search**: title-based search
- **Details**: series details page
- **Favorites**: save/remove favorites locally (no backend)
- **Sorting/Filtering**: basic sort options (e.g., rating/year) and genre filtering (TBD)
- **Provider swap**: minimize UI changes when switching between AniList and Jikan

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- Expo CLI (runs via `npx`)

### Install & Run

```bash
npm install
npx expo start
```
