import React from "react";
import yoga from "../assets/img/yoga.svg";
import nage from "../assets/img/nage.svg";
import velo from "../assets/img/velo.svg";
import haltere from "../assets/img/haltere.svg";

function Sidebar() {
    return (
        <div className="sidebar-main">
            <div className="sidebar-button-main">
                <button className="sidebar-button">
                    <img src={yoga} alt="" />
                </button>
                <button className="sidebar-button">
                    <img src={nage} alt="" />
                </button>
                <button className="sidebar-button">
                    <img src={velo} alt="" />
                </button>
                <button className="sidebar-button">
                    <img src={haltere} alt="" />
                </button>
            </div>
            <p>Copiryght, SportSee 2020</p>
        </div>
    );
}

export default Sidebar;
