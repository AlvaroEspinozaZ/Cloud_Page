import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home.tsx";
import MainHeader from "./common/MainHeader.tsx";
import MainNav from "./common/MainNav.tsx";
import MainFooter from "./common/MainFooter.tsx";
import Game from "./pages/Game.tsx";
import Game2 from "./pages/Game2.tsx";
import Game3 from "./pages/Game3.tsx";
import Login from "./pages/Login.tsx";
import {SetStateAction, useState} from "react";
import Game4 from "./pages/Game4.tsx";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    const handleLogin = (data: SetStateAction<null>) => {
        setIsAuthenticated(true);
        console.log(data);
    };

    return (
        <>
            <BrowserRouter>
                <MainHeader />
                <MainNav />
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/game1' element={<Game/>}/>
                    <Route path='/game2' element={<Game2/>}/>
                    <Route path='/game3' element={<Game3/>}/>
                    <Route path='/game4' element={<Game4/>}/>
                    <Route path='/login' element={<Login onLogin={(data: any) => handleLogin(data)} isAuthenticated={isAuthenticated} />}/>
                </Routes>

                <MainFooter />
            </BrowserRouter>

        </>
    );
}


export default App
