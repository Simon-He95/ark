import { createContext } from '../../utils'
import type { UseSwitchReturn } from './use-switch'

export interface SwitchContext extends UseSwitchReturn {}

export const [SwitchProvider, useSwitchContext] = createContext<SwitchContext>('SwitchContext')