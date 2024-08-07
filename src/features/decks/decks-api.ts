import axios from 'axios'
import {Deck} from "./decks-reducer.ts";

type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

type GetDecksResponse = {
  items: Deck[],
  pagination: Pagination
}

export type AddDeckParams = {
  name: string
}

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksAPI = {
  getDecks: () => instance.get<GetDecksResponse>('/v2/decks'),
  addDeck: (params: AddDeckParams) => instance.post<Deck>('/v1/decks', params)
}
