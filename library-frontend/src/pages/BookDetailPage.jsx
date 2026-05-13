import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getBookById } from '../services/bookService'
function BookDetailPage() {

    const { id } = useParams()

    const [book, setBook] = useState({})

    useEffect(() => {

        fetchBook()

    }, [])

    const fetchBook = async () => {

        const response = await getBookById(id)

        setBook(response.data)
    }

    return (

        <div className='container mt-4'>

            <div className='card p-4'>

                <img
                    src={book.imageUrl}
                    width='250'
                />

                <h2>{book.title}</h2>

                <p><b>Author:</b> {book.author}</p>
                <p><b>Category:</b> {book.category}</p>
                <p><b>Publisher:</b> {book.publisher}</p>
                <p><b>Published Year:</b> {book.publishedYear}</p>
                <p><b>Quantity:</b> {book.quantity}</p>
                <p><b>Description:</b> {book.description}</p>

            </div>

        </div>
    )
}

export default BookDetailPage