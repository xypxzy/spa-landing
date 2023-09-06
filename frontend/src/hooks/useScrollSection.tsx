import { useEffect } from 'react';

const useScrollToSection = (ref: React.RefObject<HTMLElement>, offset: number = 0) => {
  const scrollToSection = () => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - offset,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Добавьте обработчик события прокрутки, если необходимо
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollToSection;
};

export default useScrollToSection;
