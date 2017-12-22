import React from 'react'
import { connect } from 'react-redux'
import { addBook } from '../actions'

let _AddBookForm = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addBook(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
};
const AddBookForm = connect()(_AddBookForm);

export default AddBookForm;
