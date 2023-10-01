import jwt_decode from 'jwt-decode';

export function decodeToken(token) {
    try {
        const token = localStorage.getItem('token'); // Get your JWT token
        const decodedToken = jwt_decode(token);
        console.log('Decoded Token:', decodedToken);
        return decodedToken;
    } catch (error){
        console.error("Error decoding JWT ToKEN:", error)
    }
}




