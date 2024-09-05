import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { NavLink } from "react-router-dom";
import karlPhoto from "../assets/img/karlPhoto.jpg";
import ceciliaPhoto from "../assets/img/ceciliaPhoto.jpeg";

function Home() {
    return (
        <>
            <Navbar />
            <main className="home">
                <Sidebar />
                <div className="container">
                    <NavLink className="12" to="/user/12">
                        <img className="test" src={karlPhoto} alt="user" />
                        <p>Karl</p>
                    </NavLink>
                    <NavLink className="18" to="/user/18">
                        <img className="test" src={ceciliaPhoto} alt="user" />
                        <p>Cecilia</p>
                    </NavLink>
                </div>
            </main>
        </>
    );
}

export default Home;
