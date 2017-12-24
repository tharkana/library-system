import React from 'react';
import PropTypes from 'prop-types'
import Book from './Book';


class Books extends React.Component {
    render() {
        const { books} = this.props;

        return (
            <div className="todos">
                {
                    books.map((t, i) =>
                        <Book
                            key={t.updatedAt}
                            index={i}
                            {...t}/>
                    )
                }
            </div>
        );
    }
}

Books.propTypes = {
    books: PropTypes.array
};

export default Books;
