import { useState } from 'react'
import { createBook } from '../services/bookService'
import { useNavigate } from 'react-router-dom'

function AddBookPage() {

    const navigate = useNavigate()

    const [book, setBook] = useState({
        title: '',
        author: '',
        category: '',
        publisher: '',
        publishedYear: '',
        quantity: '',
        description: '',
        imageUrl: ''
    })

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {
            await createBook(book)
            alert('Add success')
            navigate('/')
        } catch (error) {
            alert('Add failed: ' + error)
        }
    }
    return (

        <div className='container mt-4'>

            <h2>Add Book</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type='text'
                    name='title'
                    placeholder='Title'
                    className='form-control mb-2'
                    onChange={handleChange}
                />

                <input
                    type='text'
                    name='author'
                    placeholder='Author'
                    className='form-control mb-2'
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='category'
                    placeholder='Category'
                    className='form-control mb-2'
                    onChange={handleChange}
                />

                <input
                    type='text'
                    name='publisher'
                    placeholder='Publisher'
                    className='form-control mb-2'
                    onChange={handleChange}
                />

                <input
                    type='number'
                    name='publishedYear'
                    placeholder='Published Year'
                    className='form-control mb-2'
                    onChange={handleChange}
                />

                <input
                    type='number'
                    name='quantity'
                    placeholder='Quantity'
                    className='form-control mb-2'
                    onChange={handleChange}
                />
                <textarea
                    name='description'
                    placeholder='Description'
                    className='form-control mb-2'
                    onChange={handleChange}
                />

                <input
                    type='text'
                    name='imageUrl'
                    placeholder='Image URL'
                    className='form-control mb-2'
                    onChange={handleChange}
                />

                <button className='btn btn-primary'>
                    Save
                </button>

            </form>

        </div>
    )
}

export default AddBookPage