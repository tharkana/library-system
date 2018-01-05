import React from 'react'
// import { render } from 'react-dom'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BooksContainer from '../containers/BooksContainer';



export default class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    // history
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" component={BooksContainer}>
          </Route>
        </Router>
      </Provider>
      );
  }
}
