import React from 'React';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
    static propTypes = {
      cards: PropTypes.node,
      title: PropTypes.node,
    }

    render() {
      const { title } = this.props;
      return (
        <section className={styles.component}>
          <h4>{title}</h4>
        </section>
      );
    }
}

export default Card;