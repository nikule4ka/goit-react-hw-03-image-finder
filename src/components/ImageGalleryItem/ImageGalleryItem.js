import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ id, src, alt, largeImageURL, onClick }) {
  return (
    <li key={id} className={s.ImageGalleryItem}>
      <img
        src={src}
        alt={alt}
        className={s.ImageGalleryItemImage}
        onClick={onClick}
        data-source={largeImageURL}
      />
    </li>
  );
}
export default ImageGalleryItem;
