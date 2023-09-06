import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ScrollToTopOnPageChange() {
  const navigate = useNavigate();

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', scrollHandler);

    return () => {
      window.removeEventListener('popstate', scrollHandler);
    };
  }, []);

  const handleNavigation = (to: string) => {
    navigate(to);
    window.scrollTo(0, 0);
  };

  return {
    handleNavigation,
  };
}

export default ScrollToTopOnPageChange;
