import React from "react";
import { getUserById } from "../Store";

const UserProfile = ({ userId }) => {
    const userData = getUserById(userId);
    return (
        <>
            <div className="test">
                <h2 className="profil-title">
                    Bonjour <span className="profil-firstname">{userData.userInfos.firstName}</span>
                </h2>
                <p className="profil-subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
        </>
    );
};

export default UserProfile;
