import axios from 'axios'

const url = 'http://localhost:9090'

export const register = async (name: string, email: string, password: string): Promise<object | undefined> => {
    const data = {"role": "user", "name": name, "email": email, "password": password}
    try {
        const response = await axios.post(url + '/user', data, {withCredentials: true})
        return response.data 
    }catch(erro) {
        console.log("nao foi possivel fazer a requisiçao devido ao error: " + erro)
    }
}

export const login = async (email: string, password: string): Promise<object | undefined> => {
    const data = {"email": email, "password": password}
    try {
        const response = await axios.post(url + '/user/login', data, {withCredentials: true})
        return response.data.user
    }catch(erro) {
        console.log("nao foi possivel fazer a requisiçao devido ao error: " + erro)
    }
}

export const get = async (): Promise<object | void> => {
    try {
        const response = await axios.get(url + '/user', {withCredentials: true})
        return  response.data
    }catch(erro) {
        console.log("nao foi possivel fazer a requisiçao devido ao error: " + erro)
    }
}