import React from 'react';
import BookList from '../book-list';

const HomePage = () => {
    const books = [
        {
            id: 1,
            title: 'Production',
            author: 'Susan'
        },
        {
            id: 2, 
            title: 'Release It!',
            author: 'Michael'
        }
    ]
    return (
        <BookList books = {books}/>
    );
}

export default HomePage;