import React from 'react'
import './books.css'
import { books } from './bookData'
import PageWrapper from '../../layout/PageWrapper/PageWrapper'
const Books = () => {
    return (
        <PageWrapper>
            <div className="programs-section pt-200">
                <div className="container">
                    <div className="my-5">
                        <h3 className='mb-5 text-center'>Books</h3>
                        <div className="row">
                            {books.map((book) => (
                                <div className="col-md-12 col-12 mb-3" key={book.id}>
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6 mb-3 d-flex align-items-center">
                                            <div className="">
                                                <img src={book.image} alt={book.name} className='img-fluid' />
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6 d-flex align-items-center mb-3">
                                            <div>
                                                <h3>{book.name}</h3>
                                                <p>{book.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </PageWrapper>
    )
}

export default Books