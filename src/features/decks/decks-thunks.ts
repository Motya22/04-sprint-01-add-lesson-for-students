import {Dispatch} from "redux";
import {AddDeckParams, decksAPI} from "./decks-api.ts";
import {addDeckAC, fetchDecksAC} from "./decks-reducer.ts";

export const fetchDecksTC = () => (dispatch: Dispatch) => {
    decksAPI.getDecks()
        .then(res => dispatch(fetchDecksAC(res.data.items)))
}

export const addDeckTC = (params: AddDeckParams) => async (dispatch: Dispatch) => {
    return decksAPI.addDeck(params)
        .then(res => dispatch(addDeckAC(res.data)))
}
