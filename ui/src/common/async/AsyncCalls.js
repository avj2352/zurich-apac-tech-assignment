// A mock function to mimic making an async request for data
export const BASE_URL = `http:localhost:8080`;

// AUTHENTICATION =====================================
/**
 * AUTH - Login request for user
 */
/**
 * Fetch User Details
 * @returns {Promise<any>}
 */
 export const getUserDetails = async () => {
    return fetch(`${BASE_URL}/profile`)
        .then((response) => response.json());
};

export async function fetchUsers() {
    return 
}

// USERS =====================================

/**
 * Fetch User information
 * @returns {Promise<any>}
 */
 export const getUserInfo = async () => {
    return fetch(`${BASE_URL}/users`)
        .then((response) => response.json());
}