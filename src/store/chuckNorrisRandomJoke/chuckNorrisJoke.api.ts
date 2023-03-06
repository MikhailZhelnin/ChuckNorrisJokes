import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IRandomJoke} from "../../../models";

export const chuckNorrisJokeApi = createApi({
  reducerPath: 'chuckNorrisJokeApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.chucknorris.io/jokes/'}),
  endpoints: builder => ({
    getChuckNorrisJoke: builder.query<IRandomJoke, undefined>({
      query: () => '/random',
    })
  })
})

export const {useGetChuckNorrisJokeQuery} = chuckNorrisJokeApi