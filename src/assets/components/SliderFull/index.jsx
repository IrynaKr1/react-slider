import React, { useEffect, useState } from 'react';
import styles from './Slider.module.scss';
import SliderFront from '../SliderFront';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Slider() {
  const [images, setImages] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchingImg = async () => {
    try {
      setIsFetching(true);
      const response = await fetch(
        'https://picsum.photos/v2/list?page=1&limit=50'
      );
      const data = await response.json();
      const formattedImg = data.map((img) => ({
        imageUrl: `https://picsum.photos/id/${img.id}/600/400`,
        author: img.author,
      }));

      setImages(formattedImg);
      setError(null);
    } catch (err) {
      setError('Failed to load images');
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchingImg();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.sliderWrapper}>
      <button
        onClick={handlePrev}
        disabled={isFetching || images.length === 0}
        className={styles.btnLeft}
      >
        <FaArrowLeft />
      </button>

      <SliderFront image={images[currentIndex]} isLoading={isFetching} />

      <button
        onClick={handleNext}
        disabled={isFetching || images.length === 0}
        className={styles.btnRight}
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

export default Slider;
