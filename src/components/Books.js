import React from 'react';
import PropTypes from 'prop-types'
import Book from './Book';
import CreateBook from './CreateBook';


class Books extends React.Component {
    render() {
        const { books, onAddBook} = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <CreateBook onCreate={onAddBook} />
                    </div>
                    <div className="col-6">
                        {
                            books.map((t, i) =>
                                <Book
                                    key={t.updatedAt}
                                    index={i}
                                    {...t}/>
                            )
                        }
                    </div>
                </div>
                
            </div>
        );
    }
}

Books.propTypes = {
    books: PropTypes.array
};

export default Books;
