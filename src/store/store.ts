import {configureStore} from "@reduxjs/toolkit";
import {chuckNorrisJokeApi} from "@/store/chuckNorrisRandomJoke/chuckNorrisJoke.api";

export const store = configureStore({
  reducer: {
    [chuckNorrisJokeApi.reducerPath]: chuckNorrisJokeApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(chuckNorrisJokeApi.middleware)
})