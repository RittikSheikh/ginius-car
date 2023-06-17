import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Routers/Router'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className='max-w-screen-2xl mx-auto p-1 md:p-0'>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
