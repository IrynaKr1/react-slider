import styles from './SliderFront.module.scss';
import defaultImg from '../../imgDefault/default.jpg';

function SliderFront() {
  return (
    <>
      <figure className={styles.sliderContainer}>
        <img src={defaultImg} alt='Default img' className={styles.sliderImg} />
        <figcaption className={styles.sliderDescription}>
          Default img
        </figcaption>
      </figure>
    </>
  );
}

export default SliderFront;
