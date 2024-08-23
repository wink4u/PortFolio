import Image from "next/image";
import styles from './imageSlider.module.scss';
import { StaticImageData } from "next/image";

interface ImageSliderProps {
    images: StaticImageData[];
    currentIndex: number;
}

export default function ImageSlider({ images, currentIndex }: ImageSliderProps) {
    return (
        <div className={styles.imageSlider}>
            <Image src={images[currentIndex]} alt={`slide image ${currentIndex}`} />
        </div>
    );
}
