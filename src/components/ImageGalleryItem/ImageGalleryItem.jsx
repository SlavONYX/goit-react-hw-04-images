import PropTypes from 'prop-types'
import styles from './ImageGalleryItem.module.css'

export function ImageGalleryItem({ webformatURL, largeImageURL, onOpen }) {
    return (
        <li className={styles.gallery_item}>
        <img className={styles.gallery_item_image} src={webformatURL} alt="" onClick={()=>onOpen(largeImageURL)} />
        </li>
    )
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onOpen: PropTypes.func.isRequired
    }