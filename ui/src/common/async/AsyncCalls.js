// A mock function to mimic making an async request for data
export const BASE_URL = `http://localhost:8080`;

// AUTHENTICATION =====================================
/**
 * AUTH - Login request for user
 */
/**
 * Fetch User Details
 * @returns {Promise<any>}
 */
 export const getUserDetails = async () => {
    const response = await fetch(`${BASE_URL}/profile`);
    return response.json();
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
    const response = await fetch(`${BASE_URL}/users`);        
    return response.json();
}