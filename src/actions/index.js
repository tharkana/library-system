let nextBookId = 0
export const addBook = (text) => ({
  type: 'ADD_BOOK',
  id: nextBookId++,
  text
})

