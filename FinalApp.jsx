import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Outlet, Link, Routes } from "react-router-dom";
import App from "./App"
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
//This change is made:removed axios 


export default function FinalApp() {

    const [authstate, setauthstate] = useState({
        status: false
    })
    useEffect(()=>{
        
    })
    return (
        <>
            
            <BrowserRouter>
                    <React.Fragment>
                        <Header setauthstate={setauthstate} authstate={authstate} />
                    </React.Fragment>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/register' element={
                        <>

                            <Register />
                        </>
                    } />
                    <Route path='/login' element={
                        <>

                            <Login setauthstate={setauthstate} authstate={authstate} />
                        </>
                    } />

                </Routes>
            </BrowserRouter>
        </>
    )
}
