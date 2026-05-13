import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <div className="app">
      {/* Notice the brackets are removed from the basename */}
      <BrowserRouter basename="/Flash">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
