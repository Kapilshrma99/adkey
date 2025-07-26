'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './ServicesSection.module.css';
import { useRouter } from 'next/navigation';

const ServiceSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
 const router = useRouter();
  const services = [
    {
      id: 1,
      title: "SEO/SMO",
      description: "With our SEO/SMO, you can rapidly increase your visibility online and ultimately grow your business.",
      icon: "📈",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      features: ["Keyword Research", "On-Page SEO", "Link Building", "Social Media Optimization"]
    },
    {
      id: 2,
      title: "Google Ads/Social Media Ads",
      description: "Get highest ROI with Google Ads/Facebook & Instagram Ads at most profitable package.",
      icon: "🎯",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      features: ["PPC Campaigns", "Social Advertising", "Remarketing", "Campaign Optimization"]
    },
    {
      id: 3,
      title: "Web Design & Development",
      description: "We provide the best website designing & development services at affordable charges.",
      icon: "⚙️",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      features: ["Responsive Design", "Custom Development", "E-commerce", "CMS Integration"]
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "We provide the best mobile application development services in the market.",
      icon: "📱",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      features: ["iOS Development", "Android Development", "Cross-Platform", "App Store Optimization"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...new Set([...prev, cardIndex])]);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleGetQuote = () => {
    router.push('/QuoteForm');
  };

  const handleReadMore = (serviceTitle) => {
    alert(`Learn more about ${serviceTitle} - redirecting to service page...`);
  };

  return (
    <section ref={sectionRef} className={styles.servicesSection}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape} style={{ '--delay': '0s' }}></div>
        <div className={styles.floatingShape} style={{ '--delay': '2s' }}></div>
        <div className={styles.floatingShape} style={{ '--delay': '4s' }}></div>
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titleHighlight}>OUR SERVICES</span>
            </h2>
            <h3 className={styles.subtitle}>RESULT DRIVEN DIGITAL MARKETING COMPANY</h3>
          </div>
          <button className={styles.quoteButton} onClick={handleGetQuote}>
            <span className={styles.buttonText}>Get Best Quote</span>
            <div className={styles.buttonRipple}></div>
          </button>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={service.id}
              data-index={index}
              className={`${styles.serviceCard} ${
                visibleCards.includes(index) ? styles.visible : ''
              } ${hoveredCard === service.id ? styles.hovered : ''}`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ '--animation-delay': `${index * 0.2}s` }}
            >
              {/* Card Background */}
              <div 
                className={styles.cardBackground}
                style={{ background: service.gradient }}
              ></div>

              {/* Card Content */}
              <div className={styles.cardContent}>
                {/* Icon */}
                <div className={styles.iconContainer}>
                  <div className={styles.iconWrapper}>
                    <span className={styles.serviceIcon}>{service.icon}</span>
                  </div>
                  <div className={styles.iconGlow}></div>
                </div>

                {/* Text Content */}
                <div className={styles.textContent}>
                  <h4 className={styles.serviceTitle}>{service.title}</h4>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>

                {/* Features List (appears on hover) */}
                <div className={styles.featuresOverlay}>
                  <ul className={styles.featuresList}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        <span className={styles.featureCheck}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <button 
                  className={styles.readMoreButton}
                  onClick={() => handleReadMore(service.title)}
                >
                  <span>Read More</span>
                  <div className={styles.buttonArrow}>→</div>
                </button>
              </div>

              {/* Hover Effects */}
              <div className={styles.cardShine}></div>
              <div className={styles.cardBorder}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCTA}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to Transform Your Business?</h3>
            <p className={styles.ctaText}>
              Let's discuss how our services can drive results for your company
            </p>
            <button className={styles.ctaButton} onClick={handleGetQuote}>
              <span>Start Your Project</span>
              <div className={styles.ctaButtonIcon}></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;