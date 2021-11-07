export interface InitialAppState {
  nav: appNav
}

export type appNav = 'home' | 'profile' | 'user'

export type AppActions = {
  type: 'NAVIGATION'
  payload: appNav
}

export type AppReducer = (state: InitialAppState, action: AppActions) => any

export interface AppContext {
  state?: InitialAppState
  setNavigation?: (nav: appNav) => void
}

// export interface 