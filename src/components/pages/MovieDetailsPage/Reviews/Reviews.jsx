import React, { Component } from 'react';
import { getReviewInfo } from '../../../services/movieApi';
import Loader from '../../../loader/Loader';

class Reviews extends Component {
  state = {
    reviews: [],
    error: null,
    loading: false,
  };

  componentDidMount() {
    const id = this.props.match.params.movieId;

    this.setState({ loading: true });
    getReviewInfo(id)
      .then(data => {
        this.setState({ reviews: data.results });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { reviews, loading } = this.state;
    return (
      <>
        {loading && <Loader />}
        <ul>
          {reviews.length > 0 ? (
            reviews.map(({ author, content, id }) => {
              return (
                <li key={id}>
                  <p>Author: {author}</p>
                  <p>{content}</p>
                </li>
              );
            })
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </ul>
      </>
    );
  }
}
export default Reviews;
