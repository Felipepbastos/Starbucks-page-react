import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import About from "./Components/Sobre/About"
import News from "./Components/Novidades/News"
import { GlobalStyle } from "./GlobalStyle"

export default function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
    <Header/>
      <Routes> 
        <Route path="/" element={<Home/>}/> #rotas
        <Route path="/About" element ={<About/>}/>
        <Route path="/News" element={<News/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}