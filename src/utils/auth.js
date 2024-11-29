import { jwtDecode } from "jwt-decode";

// Método para obtener el token
export function getToken() {
  return localStorage.getItem('gasApure');  // O usar cookies si prefieres
}

// Método para verificar si el token ha expirado
export function isTokenExpired(token) {
  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Tiempo actual en segundos
    return decoded.exp < currentTime; // Compara con el tiempo de expiración del token
  } catch (e) {
    return true;  // Si hay un error al decodificar (token mal formado), considerarlo como expirado
  }
}
