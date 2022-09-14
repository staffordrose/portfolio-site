import * as THREE from 'three';
import gsap from 'gsap';
import {
  shortDuration,
  mdDuration,
  longDuration,
  xlDuration,
} from './constants';

const delay = 2;

interface GetCarouselTweenGroup {
  carousel: THREE.Group;
}

export default function getCarouselTweenGroup({
  carousel,
}: GetCarouselTweenGroup) {
  const carouselTl = gsap.timeline();

  carouselTl
    .to(carousel.position, {
      x: -3,
      duration: longDuration,
      delay: delay - mdDuration,
      ease: 'power1.inOut',
    })
    .to(carousel.position, {
      x: -6,
      duration: longDuration,
      delay,
      ease: 'power1.inOut',
    })
    .to(
      {},
      {
        duration: delay - shortDuration,
      }
    )
    .pause()
    .to(
      {},
      {
        duration: 8,
      }
    )
    .resume()
    .to(carousel.position, {
      x: -9,
      duration: longDuration,
      ease: 'power1.inOut',
    })

    .to(carousel.position, {
      x: 0,
      duration: xlDuration,
      delay,
      ease: 'power1.inOut',
    });

  return { carouselTl };
}
