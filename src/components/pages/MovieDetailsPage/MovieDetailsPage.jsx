import React, { Component } from 'react';
import { getFilmInfo } from '../../services/movieApi';
import { Route, Link } from 'react-router-dom';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import Loader from '../../loader/Loader';
import { routesPath } from '../../utils/routes';
import styles from '../../../App.css';

class MovieDetailsPage extends Component {
  state = {
    movies: null,
    loading: false,
    error: null,
  };

  componentDidMount() {
    const id = this.props.match.params.movieId;

    this.setState({ loading: true });
    getFilmInfo(id)
      .then(data => this.setState({ movies: data }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }
  handleGoBack = () => {
    const {
      location: { state },
      history,
    } = this.props;

    if (state && state.from) {
      history.push(state.from);
      return;
    }
    history.push(routesPath.homePage);
  };

  render() {
    const { movies, loading } = this.state;
    const { match } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={this.handleGoBack}
          className={styles.btn}
        >
          Go back
        </button>
        <br />
        {loading && <Loader />}
        {movies && (
          <>
            <img
              src={`https://image.tmdb.org/t/p/w440_and_h660_face${movies.poster_path}`}
              alt={movies.title}
            />
            <h1>{movies.title}</h1>
            <p>User Score: {movies.vote_average * 10}% </p>
            <h2>Overview</h2>
            <p>{movies.overview}</p>
            <h2>Genres</h2>
            <ul>
              {movies.genres.map((genre, id) => {
                return <li key={id}>{genre.name}</li>;
              })}
            </ul>
            <h2>Additional information</h2>
            <ul>
              <li>
                <Link to={`${match.url}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`${match.url}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </>
        )}
        <Route path={routesPath.cast} component={Cast} />
        <Route path={routesPath.reviews} component={Reviews} />
      </div>
    );
  }
}

export default MovieDetailsPage;
