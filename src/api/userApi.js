async function userApi(userId) {
    let rep = await fetch(`http://localhost:3000/user/${userId}`);
    let reponse = await rep.json();
    return reponse.data;
}

export default userApi;
