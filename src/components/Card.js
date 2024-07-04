import React from "react";
import caloriesIcon from "../assets/img/calories-icon.svg";
import glucidesIcon from "../assets/img/glucides-icon.svg";
import lipidesIcon from "../assets/img/lipides-icon.svg";
import proteinesIcon from "../assets/img/protein-icon.svg";

function Card(props) {
    const type = props.type;
    let icon, unit;
    const value = props.value;

    if (type === "Calories") {
        icon = caloriesIcon;
        unit = "kCal";
    } else if (type === "Glucides") {
        icon = glucidesIcon;
        unit = "g";
    } else if (type === "Lipides") {
        icon = lipidesIcon;
        unit = "g";
    } else if (type === "Proteines") {
        icon = proteinesIcon;
        unit = "g";
    }
    return (
        <div className={`card ${type}`}>
            <img src={icon} alt="icon" className="card-icon" />
            <div className="card-title">
                <p className="card-value">
                    {value}
                    {unit}
                </p>
                <p className="card-type">{type}</p>
            </div>
        </div>
    );
}

export default Card;
