import fetch from 'isomorphic-fetch';

const TODOS_URL = 'http://localhost:3004/books';
const jsonHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

export async function getTodos() {
    try {
        const options = { mode: 'cors', method: 'GET' };
        const response = await fetch(TODOS_URL, options);

        return await response.json();
    } catch(e) {
        throw e;
    }
}