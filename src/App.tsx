import { useReducer, createContext } from 'react'
import Header from "./components/Header"
import { initialState, reducer } from './reducer'
import { AppContext } from './context'
import Body from './components/Body'


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className='h-screen'>
        <Header />
        <Body />
      </div>
    </AppContext.Provider>
  )
}

export default App
