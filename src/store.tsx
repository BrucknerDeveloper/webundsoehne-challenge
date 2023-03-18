import { configureStore, createSlice } from "@reduxjs/toolkit"

type Action = {
  type: string,
  payload: {
    id: string,
    url: string
  }
}

const initialGifState: { id: string, isFavourite: boolean, url: string }[] = [];
const items = { ...localStorage };
const keys = Object.keys(items);

keys.forEach((key, index) => {
  //only push gifs (there is a default debug key which should and can not be rendered)
  if (items[key].endsWith("gif")) {
    initialGifState.push({
      id: key,
      isFavourite: true,
      url: items[key]
    })
  }
});

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

      localStorage.setItem(action.payload.id, action.payload.url);
    },
    removeFavourite(state, action: Action) {
      state.forEach((item, i) => {
        if (item.id === action.payload.id) {
          state.splice(i, 1)
        }
      })

      localStorage.removeItem(action.payload.id);
    }
  }
})

export const store = configureStore({
  reducer: gifSlice.reducer
})


export const actions = gifSlice.actions;