import { useEffect, useState } from 'react'
import {
    getAllBooks,
    deleteBook,
    searchBooks
} from '../services/bookService'
import { Link } from 'react-router-dom'

function BookListPage() {

    const [books, setBooks] = useState([])
    const [keyword, setKeyword] = useState('')

    useEffect(() => {

        const loadBooks = async () => {

            try {

                const response = await getAllBooks()

                setBooks(response.data)

            } catch (error) {

                console.log(error)

            }
        }

        loadBooks()

    }, [])

    const fetchBooks = async () => {
        const response = await getAllBooks()
        setBooks(response.data)
    }


    const handleDelete = async (id) => {

        const confirmDelete = window.confirm('Delete this book?')

        if (!confirmDelete) return

        try {
            await deleteBook(id)
            alert('Delete success')
            fetchBooks()
        } catch (error) {
            alert('Delete failed: ' + error)
        }
    }

    const handleSearch = async () => {

        if (keyword.trim() === '') {
            fetchBooks()
            return
        }

        const response = await searchBooks(keyword)
        setBooks(response.data)
    }
    return (

        <div className='container mt-4'>

            <div className='d-flex justify-content-between mb-3'>
                <h2>Library Management</h2>

                <Link to='/add' className='btn btn-primary'>
                    Add Book
                </Link>
            </div>

            <div className='d-flex mb-3'>

                <input
                    type='text'
                    className='form-control me-2'
                    placeholder='Search book...'
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />

                <button
                    className='btn btn-success'
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>

            <table className='table table-bordered'>

                <thead>
                <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>

                {
                    books.map(book => (

                        <tr key={book.id}>

                            <td>{book.id}</td>

                            <td>
                                <img
                                    src={book.imageUrl}
                                    width='80'
                                />
                            </td>

                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.category}</td>
                            <td>{book.quantity}</td>

                            <td>

                                <Link
                                    to={`/books/${book.id}`}
                                    className='btn btn-info me-2'
                                >
                                    Detail
                                </Link>

                                <Link
                                    to={`/edit/${book.id}`}
                                    className='btn btn-warning me-2'
                                >
                                    Edit
                                </Link>

                                <button
                                    className='btn btn-danger'
                                    onClick={() => handleDelete(book.id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>
                    ))
                }

                </tbody>

            </table>

        </div>
    )
}

export default BookListPage