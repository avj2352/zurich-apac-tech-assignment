// A mock function to mimic making an async request for data
// export const BASE_URL = `http://localhost:8080`;
// 2. heroku
export const BASE_URL = `https://zurich-tech-api.herokuapp.com`;

// AUTHENTICATION =====================================
/**
 * AUTH - Login request for user
 */
/**
 * Google OAuth Link
 * @returns 
 */
export const loginToGoogle = () => window.location.href = `${BASE_URL}/auth/google`;

/**
 * Fetch User Details
 * @param accessToken string
 * @returns 
 */
 export const getUserDetails = async (accessToken) => {
    const response = await fetch(`${BASE_URL}/auth/userinfo`, {
        headers: {
            'AccessToken': accessToken
        }
    });
    return await response.json();
};

// USERS =====================================

/**
 * Fetch User information - pagination
 * @param {string} accessToken required
 * @param {number} page optional
 * @returns 
 */
export const getUserInfo = async(accessToken, page=1) => {
    let endpoint = `${BASE_URL}/users`;
    if (page && page>=0) endpoint += `?page=${page}`;
    const response = await fetch(endpoint, {
        headers: {
            'AccessToken': accessToken
        }
    });
    return await response.json();
}