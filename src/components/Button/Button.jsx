import PropTypes from 'prop-types'
import styles from './Button.module.css'

export function Button({ onLoadMore }) {
    return (
        <button onClick={onLoadMore} className={styles.loader_button}>Load more</button>
    )
}

Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
}