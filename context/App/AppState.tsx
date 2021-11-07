import { appNav, AppReducer, InitialAppState } from '@/types/App.model'
import React, { FC, useReducer } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import AppCtx from './app-context'
import mainReducer from './app-reducer'

const queryClient = new QueryClient()

const initialState: InitialAppState = {
  nav: 'home'
}

const AppState: FC = ({ children }) => {
  const [state, dispatch] = useReducer<AppReducer>(mainReducer, initialState)

  const setNavigation = (nav: appNav) => {
    dispatch({ type: 'NAVIGATION', payload: nav })
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AppCtx.Provider value={{ state, setNavigation }}>
        {children}
      </AppCtx.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default AppState