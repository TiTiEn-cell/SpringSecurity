import { useEffect, useState } from 'react'
import {
    getBookById,
    updateBook
} from '../services/bookService'

import {
    useNavigate,
    useParams
} from 'react-router-dom'

function EditBookPage() {

    const { id } = useParams()

    const navigate = useNavigate()

    const [book, setBook] = useState({})

    useEffect(() => {

        fetchBook()

    }, [])

    const fetchBook = async () => {

        const response = await getBookById(id)
        setBook(response.data)
    }

    const handleChange = (e) => {

        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            await updateBook(id, book)

            alert('Update success')

            navigate('/')

        } catch (error) {

            alert('Update failed: ' + error)
        }
    }
    return (

        <div className='container mt-4'>

            <h2>Edit Book</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type='text'
                    name='title'
                    className='form-control mb-2'
                    value={book.title || ''}
                    onChange={handleChange}
                />

                <input
                    type='text'
                    name='author'
                    className='form-control mb-2'
                    value={book.author || ''}
                    onChange={handleChange}
                />

                <input
                    type='text'
                    name='category'
                    className='form-control mb-2'
                    value={book.category || ''}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='publisher'
                    className='form-control mb-2'
                    value={book.publisher || ''}
                    onChange={handleChange}
                />

                <input
                    type='number'
                    name='publishedYear'
                    className='form-control mb-2'
                    value={book.publishedYear || ''}
                    onChange={handleChange}
                />

                <input
                    type='number'
                    name='quantity'
                    className='form-control mb-2'
                    value={book.quantity || ''}
                    onChange={handleChange}
                />

                <textarea
                    name='description'
                    className='form-control mb-2'
                    value={book.description || ''}
                    onChange={handleChange}
                />

                <input
                    type='text'
                    name='imageUrl'
                    className='form-control mb-2'
                    value={book.imageUrl || ''}
                    onChange={handleChange}
                />

                <button className='btn btn-primary'>
                    Update
                </button>

            </form>

        </div>
    )
}

export default EditBookPage