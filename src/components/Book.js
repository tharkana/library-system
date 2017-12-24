import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';



class Books extends React.Component {
    render() {
        const {
            _id,
            index,
            title,
            author,
            publisher,
            isbn,
            edition,
            updatedAt
        } = this.props;

        const time = new Date(updatedAt);

        return (
            <div >
                <Link to={`/${index}`}>
                    <h2> {title} </h2>
                    <p> Author:  {author} </p>
                    <p> publisher: {publisher}  isbn : {isbn}
                        edition: {edition}  time : {time.toLocaleString()}
                    </p>

                </Link>
            </div>
        );
    }
}

Books.propTypes = {
    _id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    publisher: PropTypes.string,
    isbn: PropTypes.string,
    edition: PropTypes.string,
    updatedAt: PropTypes.string,
};

export default Books;
