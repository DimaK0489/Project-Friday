import axios from "axios"

//Types


// Settings
const instance = axios.create({
    baseURL: "https://",
    withCredentials: true,
    headers: {
        'API-KEY': ''
    }
})

// API
export const projectAPI = {
    getTest() {
        return instance.get("")
    }
}
export const authAPI = {
    login() {
        return instance.post("auth/login")
    }
}
