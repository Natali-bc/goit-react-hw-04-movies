import React, { Component } from 'react';
import { getSearchMovies } from '../../services/movieApi';
import { Link } from 'react-router-dom';
import getQueryParams from '../../utils/getQueryParams';
import Loader from '../../loader/Loader';

class MoviesPage extends Component {
  state = {
    inputValue: '',
    loading: false,
    error: null,
    movies: [],
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.setState({ loading: true });
      getSearchMovies(query)
        .then(({ results }) => this.setState({ movies: results }))
        .catch(error => {
          this.setState({ error });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      getSearchMovies(nextQuery).then(({ results }) =>
        this.setState({ movies: results }),
      );
    }
  }

  handleChange = ({ target }) => {
    const { value } = target;
    this.setState({
      inputValue: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.inputValue}`,
    });
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue, movies, loading } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.inputValue}
            onChange={this.handleChange}
            type="text"
            placeholder="Search"
          />
          <button type="submit">Search</button>
        </form>
        {loading && <Loader />}
        {movies.length > 0 && (
          <ul>
            {movies.map(item => {
              return (
                <li key={item.id}>
                  <Link
                    to={{
                      pathname: `/movies/${item.id}`,
                      state: { from: this.props.location },
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}

export default MoviesPage;
