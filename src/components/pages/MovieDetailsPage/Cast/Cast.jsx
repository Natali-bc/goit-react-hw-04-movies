import React, { Component } from 'react';
import { getActorInfo } from '../../../services/movieApi';
import Loader from '../../../loader/Loader';

class Cast extends Component {
  state = {
    actors: null,
    error: null,
    loading: false,
  };

  componentDidMount() {
    const id = this.props.match.params.movieId;

    this.setState({ loading: true });
    getActorInfo(id)
      .then(data => this.setState({ actors: data }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { actors, loading } = this.state;
    return (
      <div>
        {loading && <Loader />}
        {actors && (
          <>
            <ul>
              {actors.cast.map(({ name, character, profile_path, id }) => {
                return (
                  <li key={id}>
                    <img
                      src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                      alt={name}
                    />
                    <h2>{name}</h2>
                    <p>Character: {character}</p>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    );
  }
}
export default Cast;
