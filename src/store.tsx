import { configureStore, createSlice } from "@reduxjs/toolkit"

type Action = {
    type: string,
    payload: {
      id: string,
      url: string
    }
}

const initialGifState: { id: string, isFavourite: boolean, url: string }[] = [];

const gifSlice = createSlice({
    name: 'gif',
    initialState: initialGifState,
    reducers: {
      addFavourite(state, action: Action) {
        state.push({
          id: action.payload.id,
          isFavourite: true,
          url: action.payload.url,
        })
      },
      removeFavourite(state, action: Action) {
        state.forEach((item, i) =>{
          if(item.id === action.payload.id) {
            state.splice(i, 1)
          }
        })
      }
    }
  })

export const store = configureStore({
    reducer: gifSlice.reducer
})


export const actions = gifSlice.actions;