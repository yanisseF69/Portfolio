import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Layout from './components/Layout'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Personal from './components/Personal'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/personal' element={<Personal />} />
          
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
