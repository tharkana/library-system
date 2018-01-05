import { connect } from 'react-redux';
import Books from '../components/Books';
import { addBook } from '../actions/index';

const mapStateToProps = (state) => {
    return {
        books: state.books
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddBook: (todo) => dispatch(addBook(todo))
    };
};

const BooksContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Books);

export default BooksContainer;
