import React from 'react';
import './App.css';
import { Header } from "./components/Header/Header";
import { Profile } from "./components/Profile/Profile";
import { Footer } from "./components/Footer/Footer";
import { Navigation } from "./components/Navigation/Navigation";

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Navigation />
            <Profile />
            <Footer />
        </div>
    );
}

export default App;
