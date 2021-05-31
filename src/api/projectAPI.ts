import axios from "axios"

//Types
export type LoginType = {
    email: string,
    password: string,
    rememberMe?: boolean
}
export type ResponseType = {
    id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
}

// Settings
const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0",
    /*baseURL: "http://localhost:7542/2.0/",*/
    withCredentials: true,
})

// API
export const projectAPI = {
    login(data: LoginType) {
        return instance.post<ResponseType>("/auth/login", data)
    }
}

