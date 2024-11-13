import HomePage from "./pages/HomePage"

import { Routes,Route } from "react-router"
import HotelsPage from "./pages/HotelsPage"
import HotelDetails from "./pages/HotelDetails"
import Login from "./pages/Login"
import Signup from "./pages/Signup"


function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/hotels" element={<HotelsPage/>}/>
        <Route path="/search/:term" element={<HotelsPage/>}/>
        <Route path="/hotels/:id" element={<HotelDetails/>}/>
      </Routes>
    </>
  )
}

export default App
