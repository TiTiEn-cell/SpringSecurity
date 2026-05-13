import { BrowserRouter, Routes, Route } from 'react-router-dom'

import BookListPage from './pages/BookListPage'
import AddBookPage from './pages/AddBookPage'
import EditBookPage from './pages/EditBookPage'
import BookDetailPage from './pages/BookDetailPage'

function App() {

  return (
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<BookListPage />} />
          <Route path='/add' element={<AddBookPage />} />
          <Route path='/edit/:id' element={<EditBookPage />} />
          <Route path='/books/:id' element={<BookDetailPage />} />
        </Routes>

      </BrowserRouter>
  )
}

export default App