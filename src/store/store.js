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

const getUserSessions = (id) => {
    return {
        userId: 12,
        sessions: [
            {
                day: 1,
                sessionLength: 30,
            },
            {
                day: 2,
                sessionLength: 23,
            },
            {
                day: 3,
                sessionLength: 45,
            },
            {
                day: 4,
                sessionLength: 50,
            },
            {
                day: 5,
                sessionLength: 0,
            },
            {
                day: 6,
                sessionLength: 0,
            },
            {
                day: 7,
                sessionLength: 60,
            },
        ],
    };
};

const getUserPerformance = (id) => {
    return {
        userId: 12,
        kind: {
            1: "cardio",
            2: "energy",
            3: "endurance",
            4: "strength",
            5: "speed",
            6: "intensity",
        },
        data: [
            {
                value: 80,
                kind: 1,
            },
            {
                value: 120,
                kind: 2,
            },
            {
                value: 140,
                kind: 3,
            },
            {
                value: 50,
                kind: 4,
            },
            {
                value: 200,
                kind: 5,
            },
            {
                value: 90,
                kind: 6,
            },
        ],
    };
};
export { getUserById, getUserActivity, getUserSessions, getUserPerformance };
