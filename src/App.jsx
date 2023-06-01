import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Routers/Router'

function App() {

  return (
    <div className='max-w-screen-2xl mx-auto p-1 md:p-0'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
