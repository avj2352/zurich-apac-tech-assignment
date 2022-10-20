import axios from 'axios';


// localhost
// export const BASE_URL = `http://localhost:3001`;
// 2. heroku
export const BASE_URL = `https://zurich-tech-api.herokuapp.com`;
// 3. aws apigateway URL (cloudformation)
// export const BASE_URL = `'https://01GFS1DYQ8JPB1HFXF1Y7A80TP.execute-api.us-east-01.amazonaws.com/staging/'`;



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
 export const getUserDetails = async (accessToken: string) => {
    return axios.get(`${BASE_URL}/auth/userinfo`, {
        headers: {
            'AccessToken': accessToken
        }
    });
};

// USERS =====================================

/**
 * Fetch User information - pagination
 * @param {string} accessToken required
 * @param {number} page optional
 * @returns 
 */
export const getUserInfo = async(accessToken: string, page?: number) => {
    let endpoint = `${BASE_URL}/users`;
    if (page && page>=0) endpoint += `?page=${page}`;
    return axios.get(endpoint, {
        headers: {
            'AccessToken': accessToken
        }
    });
}
