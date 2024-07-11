const getUserById = async (id) => {
    let rep = await fetch(`http://localhost:3000/user/${id}`);
    let reponse = await rep.json();
    return reponse.data;
};

const getUserActivity = async (id) => {
    let rep = await fetch(`http://localhost:3000/user/${id}/activity`);
    let reponse = await rep.json();
    return reponse.data;
};

const getUserSession = async (id) => {
    let rep = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
    let reponse = await rep.json();
    return reponse.data;
};

const getUserPerformance = async (id) => {
    let rep = await fetch(`http://localhost:3000/user/${id}/performance`);
    let reponse = await rep.json();
    return reponse.data;
};
export { getUserById, getUserActivity, getUserSession, getUserPerformance };
