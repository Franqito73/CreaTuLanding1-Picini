import './App.css'
import CustomNavBar from './components/CustomNavbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router"


function App() {
  return (
    <BrowserRouter>
    <CustomNavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />}></Route>
      <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
