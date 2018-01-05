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
            <div className="book-entry" >
                <div className="row">
                    <div className="col">
                        <h2> {title} </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        Author:  {author} 
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                     Publisher: {publisher} 
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        isbn : {isbn}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    edition: {edition}
                    </div>
                </div>
                   
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
