import axios from "axios"

//Types
export type LoginType = {
    email: string,
    password: string,
    rememberMe?: boolean
}
export type ResponseType = {
    _id: string
    email: string
    name: string
    avatar: string | null
    publicCardPacksCount: number
    created: string;
    updated: string;
    isAdmin: boolean;
    verified: boolean;
    rememberMe: boolean;
    error: string;
    token: string
}
export type RegistrationDataType = {
    email: string
    password: string
}
export type PasswordRecoveryDataType = {
    email: string,
    from: string,
    message: string
}
export type ErrorDataType = {
    response: {
        data: ErrorRegistration
    }
}
type ErrorRegistration = {
    emailRegExp: {},
    error: string
    in: string
    isEmailValid: boolean
    isPassValid: boolean
    passwordRegExp: string
}
export type newPasswordTCType = {
    newPassword: string
    token: string
}
export type CardType = {
    card: {
        cardsPack_id: string
        question?: string
        answer?: string
        grade?: number
        shots?: number
        rating?: number
        answerImg?: string
        questionImg?: string
        questionVideo?: string
        answerVideo?: string
        type?: string
    }
}
export type UpdateCardType = {
    card: {
        answer?: string,
        question?: string,
        cardsPack_id?: string,
        grade?: string,
        shots?: number,
        user_id?: string,
        created?: string,
        updated?: string,
        _id: string
    }
}
export type CardsPackCreateType = {
    cardsPack: {
        name?: string
        path?: string
        grade?: number
        shots?: number
        rating?: number
        deckCover?: string
        private?: false
        type?: string
    }
}
export type CardsPackUpdateType = {
    cardsPack: {
        _id: string
        user_id?: string
        name?: string
        path?: string
        cardsCount?: number
        grade?: number
        shots?: number
        rating?: number
        type?: string
        created?: string
        updated?: string
        __v?: number
    }
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
    },
    registration(data: RegistrationDataType) {
        return instance.post('auth/register', data)
    },
    passwordRecovery(recoveryData: PasswordRecoveryDataType) {
        return instance.post('auth/forgot', recoveryData)
    },
    logout() {
        return instance.delete('auth/me',{})
    },
    isAuth() {
        return instance.post('auth/me')
    },
    setNewPassword(data: any) {
        return instance.post('auth/set-new-password', data)
    }
}
export const cardsPackAPI = {
    getCardsPack(page: number = 1, pageCount: number = 10) {
        return instance.get(`cards/pack?page=${page}&pageCount=${pageCount}&sortPacks=0updated`)
    },
    createCardsPack(cardsPack: any) {
        return instance.post('cards/pack', cardsPack);
    },
    deleteCardsPack(packsId: string) {
        return instance.delete(`cards/pack?id=${packsId}`)
    },
    updatePack(cardsPack: CardsPackUpdateType) {
        return instance.put(`cards/pack`, cardsPack)
    },
    getCards(cardsPack_id: string) {
        return instance.get(`cards/card?cardsPack_id=${cardsPack_id}&pageCount=20`)
    },
    createCard(card: CardType) {
        return instance.post(`cards/card`, card)
    },
    deleteCard(cardsPack_id: string) {
        return instance.delete(`cards/card?id=${cardsPack_id}`)
    },
    updateCard(card: UpdateCardType) {
        return instance.put(`cards/card`, card)
    }
}

