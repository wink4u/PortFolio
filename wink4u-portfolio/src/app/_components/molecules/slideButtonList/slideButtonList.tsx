'use client'

import { useState } from "react";
import ImageSlider from "../../atoms/imageSlider/imageSlider";
import SlideButtonItem from "../../atoms/slideButtonItem/slideButtonItem";
import styles from './slideButtonList.module.scss';
import { StaticImageData } from "next/image";

interface SlideButtonListProps {
  images: StaticImageData[];
}

export default function SlideButtonList({ images } : SlideButtonListProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleSelectImage = (index: number) => {
        setCurrentIndex(index);
        console.log(index);
    };

    return (
        <div className={styles.slideButtonListContainer}>
          <ImageSlider images={images} currentIndex={currentIndex}/>
          <div className={styles.slideButtonList}>
            <SlideButtonItem buttonClick={handlePrevious} isActive={false} value="<" />
            {images.map((_, index) => (
                <SlideButtonItem key={index} buttonClick={() => handleSelectImage(index)} isActive={index === currentIndex} value={`${index + 1}`} />
            ))}
            <SlideButtonItem buttonClick={handleNext} isActive={false} value=">" />
          </div>
        </div>
    );
}