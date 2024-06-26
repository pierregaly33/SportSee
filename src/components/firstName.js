import React, { useEffect, useState } from "react";
import { getUserById } from "../Store";

const UserProfile = ({ userId }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // On récupère les informations de l'utilisateur
        const userData = getUserById(userId);
        setUser(userData);
    }, [userId]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2 className="profil-title">
                Bonjour <span className="profil-firstname">{user.userInfos.firstName}</span>
            </h2>
            <p className="profil-subtitle">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
};

export default UserProfile;
