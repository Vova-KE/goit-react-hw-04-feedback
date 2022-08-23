import React from "react";
import PropTypes from 'prop-types';
import styles from './style.module.css';

const Section = ({title, children}) => {
    return (
        <section>
            <p className={styles.title}>{title}</p>
            {children}
        </section>
    )
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

export default Section;