import React from 'react'
import LandingPage from './pages/LandingPage'
import NewLetterPage from './pages/NewLetterPage'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/create" element={<NewLetterPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
