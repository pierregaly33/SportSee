import React from "react";

const UserProfile = ({ user }) => {
    return (
        <>
            <div className="test">
                <h2 className="profil-title">
                    Bonjour <span className="profil-firstname">{user.userInfos.firstName}</span>
                </h2>
                <p className="profil-subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
        </>
    );
};

export default UserProfile;
