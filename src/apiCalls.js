// Your fetch requests will live here!

const urls = [
    'https://fitlit-api.herokuapp.com/api/v1/users',
    'https://fitlit-api.herokuapp.com/api/v1/sleep',
    'https://fitlit-api.herokuapp.com/api/v1/activity',
    'https://fitlit-api.herokuapp.com/api/v1/hydration'
];

const getUsers = () => {
    return fetch('https://fitlit-api.herokuapp.com/api/v1/users')
    .then(response => response.json());        
};

const getSleep = () => {
    return fetch('https://fitlit-api.herokuapp.com/api/v1/sleep')
    .then(response => response.json());
}

const getHydration = () => {
    return fetch('https://fitlit-api.herokuapp.com/api/v1/hydration')
    .then(response => response.json());
}

export { getUsers, getSleep, getHydration };


