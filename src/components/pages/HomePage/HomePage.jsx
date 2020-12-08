import React, { Component } from 'react';
import { getPopularFilms } from '../../services/movieApi';
import { Link } from 'react-router-dom';
import Loader from '../../loader/Loader';
import styles from '../HomePage/HomePage.module.css';

class HomePage extends Component {
  state = {
    movies: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });

    getPopularFilms()
      .then(data => this.setState({ movies: data.results }))
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }
  render() {
    const { movies, loading } = this.state;
    return (
      <>
        {loading && <Loader />}
        <h2>Trending today</h2>
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id} className={styles.moviesItem}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default HomePage;
