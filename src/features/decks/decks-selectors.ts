import {AppRootState} from "../../app/store.ts";
import {Deck} from "./decks-reducer.ts";

export const selectDecks = (state: AppRootState): Deck[] => state.decksReducer.decks