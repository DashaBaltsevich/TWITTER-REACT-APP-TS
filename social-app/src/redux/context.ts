import React from 'react'
import { RootState } from './redux-store'

export const MyContext = React.createContext<RootState | null>(null)
