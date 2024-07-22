import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Soon() {
    return (
        <>
            <Navbar />
            <main className="home">
                <Sidebar />
                <div className="soon">Coming Soon ...</div>
            </main>
        </>
    );
}

export default Soon;
