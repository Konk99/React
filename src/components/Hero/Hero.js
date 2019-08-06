import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHrmlParser from 'react-html-parser';

const Hero = props => (
    <header className={styles.component}>
        <h2 className={styles.title}>{ReactHrmlParser(props.titleText)}</h2>
        <img className={styles.image} src={props.image} />
    </header>
);

Hero.propTypes = {
    titleText: PropTypes.node.isRequired,
}

export default Hero;