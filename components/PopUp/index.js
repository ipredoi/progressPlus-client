import React from 'react';
import styles from './pop.module.css';

class PopUp extends React.Component {
  render() {
    return (
      <div className={styles.popUp}>
        <div className={styles.popUp_inner}>
          <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopUp}>close me</button>
        </div>
      </div>
    );
  }
}

export default PopUp;
