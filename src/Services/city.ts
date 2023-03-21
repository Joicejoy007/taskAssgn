import { GetCityApiArg, GetCityApiResponse } from '@/Interfaces/city'
import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithInterceptor } from './api'

export const cityApi = createApi({
  reducerPath: 'cityApi',
  baseQuery: baseQueryWithInterceptor,
  tagTypes: [],
  keepUnusedDataFor: 0,
  endpoints: build => ({
    /* Auth API end points */
    getDogs: build.query<GetCityApiResponse, GetCityApiArg>({
      query: () => ({
        url: '/breeds/image/random/50',
      }),
    }),
  }),
})

export const { useGetDogsQuery } = cityApi
