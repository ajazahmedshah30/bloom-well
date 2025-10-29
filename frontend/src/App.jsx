import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import store from './store'

function App() {


  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </Provider>
  )
}


export default App
