export const featureAnimation = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3, ease: 'easeInOut' }
  })
};

export const animateText = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3, ease: 'easeInOut' }
  })
};

export const textAnimationProps = {
  custom: 1,
  variants: animateText
};

export const featureAnimationProps = {
  variants: featureAnimation,
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { amount: 0.2, once: true }
};
