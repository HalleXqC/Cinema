export const baseURL = 'https://cinema-project-4fe82-default-rtdb.europe-west1.firebasedatabase.app';

export const API = {
    get: (url) => {
        return fetch(`${baseURL}/${url}`)
    },
    getMovie: (url , id) => {
        return fetch(`${baseURL}/${url}/${id}`)
    },
    patch: (data , url , id) => {
        return fetch(`${baseURL}/${url}/${id}/booking.json`, {
            method: 'POST',
            body: data
        })
    }
}