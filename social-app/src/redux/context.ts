import React from 'react'
import { StoreTypes } from '../types'

export const MyContext = React.createContext<StoreTypes | null>(null)
