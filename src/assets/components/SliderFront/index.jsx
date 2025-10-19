import styles from './SliderFront.module.scss';
import defaultImg from '../../imgDefault/default.jpg';

function SliderFront({ image, isLoading }) {
  if (isLoading || !image) {
    return (
      <figure className={styles.sliderContainer}>
        <img
          src={defaultImg}
          alt='Loading image...'
          className={styles.sliderImg}
        />
        <figcaption className={styles.sliderDescription}>Loading...</figcaption>
      </figure>
    );
  }

  return (
    <figure className={styles.sliderContainer}>
      <img src={image.imageUrl} alt='Image' className={styles.sliderImg} />
      <figcaption className={styles.sliderDescription}>Author: 
        {image.author}
      </figcaption>
    </figure>
  );
}

export default SliderFront;
