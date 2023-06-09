import { Config } from '@/Config'
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'

export const baseQuery = fetchBaseQuery({ baseUrl: Config.BASE_URL })
export const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
  }
  return result
}

export const ws_binance = new WebSocket(
  'wss://stream.binance.com:9443/ws/BNBUSDT@aggTrade',
)
