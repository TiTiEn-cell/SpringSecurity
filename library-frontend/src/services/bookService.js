import axios from 'axios'

const API_URL = 'http://localhost:8080/api/books'

const auth = {
    username: 'bookkeeper',
    password: '123456'
}

export const getAllBooks = () => axios.get(API_URL, { auth })

export const getBookById = (id) =>
    axios.get(`${API_URL}/${id}`, { auth })

export const createBook = (book) =>
    axios.post(API_URL, book, { auth })

export const updateBook = (id, book) =>
    axios.put(`${API_URL}/${id}`, book, { auth })

export const deleteBook = (id) =>
    axios.delete(`${API_URL}/${id}`, { auth })

export const searchBooks = (keyword) =>
    axios.get(`${API_URL}/search?keyword=${keyword}`, { auth })