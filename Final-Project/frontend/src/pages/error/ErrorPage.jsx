import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ErrorPage.css';
import { useEffect, useState } from 'react';


const ErrorPage = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStars(
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random(),
      }))
    );
  }, []);


  return (
    <>
      <div className="stars">
        {stars.map((star) => (
          <span
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>
      <div className="error-page">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="content">
          <motion.h1
            animate={{ y: [0, -15, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}className="error-code">404
          </motion.h1>

          <div className="robot">🤖</div>

          <h2 className="title">Lost in Space</h2>

          <p className="description">
            The page you're looking for has drifted into another galaxy.
          </p>

          <div className="buttons">
            <Link to="/" className="home-btn">
              🚀 Back Home
            </Link>

            <button onClick={() => window.history.back()} className="back-btn">
              ← Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ErrorPage;
