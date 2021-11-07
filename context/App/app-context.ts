import { AppContext } from '@/types/App.model'
import { createContext } from 'react'

const AppCtx = createContext<AppContext>({} as AppContext)

export default AppCtx