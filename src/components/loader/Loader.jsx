import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Spinner from 'react-loader-spinner';
import styles from '../loader/Loader.module.css';

class Loader extends React.Component {
  render() {
    return (
      <div className={styles.spinner}>
        <Spinner
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </div>
    );
  }
}

export default Loader;
