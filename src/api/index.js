import fetch from 'isomorphic-fetch';

const Books_URL = 'http://localhost:3004/books';
const jsonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization' : 'Basic YWRtaW46c3VwZXJzZWNyZXQ='      //Since there is no login system
};

export async function getBooks() {
    try {
        const options = { 
            method: 'GET',
            headers: jsonHeaders,
        };
        const response = await fetch(Books_URL, options);

        return await response.json();
    } catch(e) {
        throw e;
    }
}

export async function postBook(book) {
    try {

        // title: String,
        // author: String,
        // publisher: String,
        // isbn: String,
        // edition: String,
        const options = {
            method: 'POST',
            headers: jsonHeaders,
            body: JSON.stringify(book)
        };

        const response = await fetch(Books_URL, options);

        return await response.json();
    } catch(e) {
        throw e;
    }
}