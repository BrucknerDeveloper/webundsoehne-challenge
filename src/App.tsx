import { useState } from 'react'

//components
import Intro from "./components/Intro";
import SearchBar from "./components/SearchBar/SearchBar";
import Sidebar from "./components/Sidebar/Sidebar"

function App() {

  return (
    <div className="App">
      <Intro />
      <Sidebar />
      <SearchBar />
    </div>
  )
}

export default App
