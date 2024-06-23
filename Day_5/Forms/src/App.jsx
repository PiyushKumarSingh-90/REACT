
import './App.css'
import CreateProduct from './PAGES/CreateProduct'
import Product from './PAGES/Product'
import About from './PAGES/About'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  

  return (
    <>
      {/* <CreateProduct/>
      <Product/>
      <About/> */}

      <BrowserRouter>

        <Routes>
            <Route path='/add'element={<CreateProduct/>} />
            <Route path='/product'element={<Product/>} />
            <Route path='*'element={<About/> }  />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
