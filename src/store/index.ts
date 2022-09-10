import { configureStore } from '@reduxjs/toolkit';
import LogReducer from './features/LogSlice'



export const store = configureStore({
    reducer: {
      logs: LogReducer,
    },
  })
  
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch
  
