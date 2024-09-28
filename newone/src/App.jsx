import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const MyPage = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={styles.container}>
      {showConfetti && <Confetti />}
      <div style={styles.content}>
        <h1 style={styles.title}>Welcome to My Awesome Page</h1>
        <p style={styles.text}>
          Enjoy the celebration! 🎉 <br />
          Things We Need to Communicate to Pallak: <br /><br />
          1. We are all trying to get work started for both of us.<br />
          2. We are looking at you as a long-term client.<br />
          3. We want to start more services for you, including expanding the Pallak brand on multiple platforms.<br />
          4. The current quote reflects adjusted marketplace and commercial costs.<br />
          5. We aim to grow with our clients, not just work on a freelance basis.<br />
          6. If you need a smaller scale package, we can offer that too.<br />
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
  },
  content: {
    maxWidth: '800px',
    width: '100%', // Make content responsive
    padding: '20px', // Adjusted for mobile
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    transition: 'transform 0.3s ease-in-out',
  },
  title: {
    color: '#333',
    fontSize: '28px', // Responsive font size
    fontWeight: 'bold',
    fontFamily: "'Poppins', sans-serif",
    marginBottom: '15px',
  },
  text: {
    color: '#555',
    fontSize: '16px', // Responsive font size
    fontFamily: "'Open Sans', sans-serif",
    lineHeight: '1.6',
    maxWidth: '700px',
    margin: '0 auto',
    padding: '0 10px',
    textAlign: 'left',
  },
};

// Media queries for mobile responsiveness
const mediaQueries = `
  @media (max-width: 600px) {
    .title {
      font-size: 24px; // Smaller title font size for mobile
    }
    .text {
      font-size: 14px; // Smaller text font size for mobile
    }
    .content {
      padding: 15px; // Less padding on mobile
    }
  }
`;

const styleElement = document.createElement('style');
styleElement.textContent = mediaQueries;
document.head.appendChild(styleElement);

export default MyPage;
