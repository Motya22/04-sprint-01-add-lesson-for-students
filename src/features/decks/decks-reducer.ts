type Author = {
    id: string
    name: string
}

export type Deck = {
    isFavorite: boolean
    author: Author
    id: string
    userId: string
    name: string
    isPrivate: boolean
    cover: string
    created: string
    updated: string
    cardsCount: number
}

const initialState = {
    decks: [] as Deck[],
    searchParams: {
        name: '',
    },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
    switch (action.type) {
        case 'FETCH_DECKS':
            return {...state, decks: action.decks}
        case 'ADD_DECK':
            return {...state, decks: [action.deck, ...state.decks]}
        default:
            return state
    }
}

export const fetchDecksAC = (decks: Deck[]) => ({
    type: 'FETCH_DECKS',
    decks
} as const)

export const addDeckAC = (deck: Deck) => ({
    type: 'ADD_DECK',
    deck
} as const)

type DecksActions = ReturnType<typeof fetchDecksAC> | ReturnType<typeof addDeckAC>
