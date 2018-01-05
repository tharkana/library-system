import React from 'react';
import PropTypes from 'prop-types'
// import * as rules from '../rules';

const handleFormSubmit = (data, onCreate) => {

    const title = data.titleInput.value;
    const author = data.authorInput.value;
    const publisher = data.publisherInput.value;
    const isbn = data.isbnInput.value;
    const edition = data.editionInput.value;

    if (!title || !author) return;

    onCreate({ title, author, publisher, isbn, edition });

    //reset values
    data.titleInput.value = '';
    data.authorInput.value = '';
    data.publisherInput.value = '';
    data.isbnInput.value = '';
    data.editionInput.value = '';
};

const CreateBook = ({ onCreate }) => {
    let titleInput;
    let authorInput;
    let publisherInput, isbnInput, editionInput;

    return (
        <form className="">
            <div className="form-group">
                <label >Title</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    required
                    ref={r => {
                        titleInput = r;
                    }} />
            </div>

            <div className="form-group">
                <label >Author</label>
                <input
                    className="form-control"
                    placeholder="Author"
                    required
                    ref={r => {
                        authorInput = r;
                    }}>
                </input>
            </div>

            <div className="form-group">
                <label >Publisher</label>
                <input
                    className="form-control"
                    placeholder="Publisher"
                    required
                    ref={r => {
                        publisherInput = r;
                    }}>
                </input>
            </div>

            <div className="form-group">
                <label >ISBN</label>
                <input
                    className="form-control"
                    placeholder="ISBN"
                    required
                    ref={r => {
                        isbnInput = r;
                    }}>
                </input>
            </div>

            <div className="form-group">
                <label >Edition</label>
                <input
                    className="form-control"
                    placeholder="Edition"
                    required
                    ref={r => {
                        editionInput = r;
                    }}>
                </input>
            </div>

                <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        let data = {
                            titleInput: titleInput,
                            authorInput: authorInput,
                            publisherInput: publisherInput,
                            isbnInput: isbnInput,
                            editionInput: editionInput
                        };
                        handleFormSubmit(data, onCreate);
                    }}>
                    SUBMIT
            </button>
        </form>
            );
};

CreateBook.propTypes = {
                onCreate: PropTypes.func
};

export default CreateBook;
