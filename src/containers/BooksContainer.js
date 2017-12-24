import { connect } from 'react-redux';
import Books from '../components/Books';

const mapStateToProps = (state) => {
    return {
        books: state.books
    };
};

const BooksContainer = connect(
    mapStateToProps
)(Books);

export default BooksContainer;
