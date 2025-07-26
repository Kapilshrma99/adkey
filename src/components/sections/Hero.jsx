'use client';

import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  const [website, setWebsite] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [inputError, setInputError] = useState(false);

  const handleSubmitProposal = async () => {
    if (!website.trim()) {
      setInputError(true);
      setTimeout(() => setInputError(false), 3000);
      return;
    }

    setIsSubmitting(true);
     alert(`Thanks! We'll connect with you through your email within 24 hours.`);
        setIsSuccess(false);
        setIsSubmitting(false);
        setWebsite('');
  };

  const handlePlayDemo = () => {
    alert('🎬 Demo video would play here! See our proven strategies in action.');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmitProposal();
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const circles = document.querySelectorAll(`.${styles.floatingCircle}`);
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      circles.forEach((circle, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed * 10;
        const y = (mouseY - 0.5) * speed * 10;
        circle.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.gridOverlay}></div>
        <div className={`${styles.floatingCircle} ${styles.circle1}`}></div>
        <div className={`${styles.floatingCircle} ${styles.circle2}`}></div>
        <div className={`${styles.floatingCircle} ${styles.circle3}`}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Left Content */}
          <div className={styles.heroContent}>
            <div className={styles.tagline}>
              DIGITAL MARKETING THAT DRIVES REVENUE®
            </div>
            
            <h1 className={styles.heroTitle}>
              Unlock Revenue Growth through Digital Marketing
            </h1>
            
            <p className={styles.heroDescription}>
              Not every digital marketing agency can seamlessly connect marketing 
              activities to your bottom line. Our award-winning expertise, data-backed 
              decision making, and innovative technology have generated over{' '}
              <span className={styles.highlight}>$10 billion</span> in revenue for 
              clients like you. Request your personalized strategy proposal today to 
              start driving ROI from digital marketing!
            </p>

            {/* CTA Form */}
<form
  action="https://formsubmit.co/kapilsharma09311@gmail.com"
  method="POST"
  target="_blank"
  className="space-y-4"
>            <div className={styles.ctaForm}>
              <div className={styles.inputGroup}>
                <input
                  type="text"
                    name="email"
                  className={`${styles.websiteInput} ${inputError ? styles.inputError : ''}`}
                  placeholder={inputError ? "Please enter your E-mail" : "Enter your E-mail"}
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <button 
              type='submit'
                className={`${styles.ctaButton} ${isSuccess ? styles.success : ''}`}
                onClick={handleSubmitProposal}
                disabled={isSubmitting}
              >
                {isSuccess ? '✓ Proposal Requested!' : isSubmitting ? 'Sending...' : 'Send me a proposal'}
              </button>
            </div>
            </form>

            <div className={styles.trustIndicator}>
              ✨ Trusted by 500+ businesses worldwide
            </div>
          </div>

          {/* Right Content - Visualization */}
          <div className={styles.heroVisual}>
            <div className={styles.visualContainer}>
              {/* Connecting Lines */}
              <div className={`${styles.connectingLine} ${styles.line1}`}></div>
              <div className={`${styles.connectingLine} ${styles.line2}`}></div>
              <div className={`${styles.connectingLine} ${styles.line3}`}></div>
              
              {/* Feature Bubbles */}
              <div className={`${styles.featureBubble} ${styles.bubble1}`}>
                <span>Your Digital Presence</span>
              </div>
              <div className={`${styles.featureBubble} ${styles.bubble2}`}>
                <span>Advanced Marketing Technology</span>
              </div>
              <div className={`${styles.featureBubble} ${styles.bubble3}`}>
                <span>Proven Revenue-Focused Strategies</span>
              </div>
              
              {/* Main Interactive Circle */}
              <div className={styles.mainCircle} onClick={handlePlayDemo}>
                <div className={styles.playButton}>
                  <div className={styles.playIcon}></div>
                </div>
              </div>
              
              {/* Revenue Call-out */}
              <div className={styles.revenueCallout}>
                See how we've driven $10B in client revenue
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;