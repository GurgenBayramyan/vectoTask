import {createSlice} from '@reduxjs/toolkit';
import { IMovieInitial } from './moveSliceType';
import data from '../../data.json'
const initialState:IMovieInitial = {
    currentMovie:data.Featured
}
const movieSlice = createSlice({
    name:"moveSlice",
    initialState,
    reducers: {
        setCurentMovie:(state,{payload}) => {
            state.currentMovie = payload
        }
    }
})

export default movieSlice
export const {setCurentMovie}  = movieSlice.actions