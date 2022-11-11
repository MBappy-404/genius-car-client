import {  RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes'
function App() {

  
  return (
    <div   className='max-w-7xl m-auto'>

      <RouterProvider router={router}></RouterProvider>

     
    </div>
  );
}

export default App;
