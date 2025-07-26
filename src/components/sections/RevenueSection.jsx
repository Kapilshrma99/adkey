'use client';

import { useState, useEffect } from 'react';
import styles from './RevenueSection.module.css';

const RevenueSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const revenueSteps = [
    {
      title: "Drive website traffic",
      description: "Attract qualified visitors through strategic marketing channels",
      color: "#3b82f6",
      services: [
        { name: "SEO Services", link: "#seo" },
        { name: "Local SEO Services", link: "#local-seo" },
        { name: "Ecommerce SEO Services", link: "#ecommerce-seo" },
        { name: "Content Marketing Services", link: "#content-marketing" }
      ]
    },
    {
      title: "Create and manage powerful ad campaigns",
      description: "Build high-converting campaigns that maximize your advertising ROI",
      color: "#10b981",
      services: [
        { name: "PPC Management Services", link: "#ppc" },
        { name: "Social Advertising Services", link: "#social-ads" },
        { name: "Programmatic Advertising Services", link: "#programmatic" },
        { name: "Geofencing Advertising Services", link: "#geofencing" }
      ]
    },
    {
      title: "Collect, analyze, and deploy marketing data",
      description: "Turn data insights into actionable strategies for better results",
      color: "#8b5cf6",
      services: [
        { name: "RevenueCloudFX", link: "#revenue-cloud" },
        { name: "Nutshell", link: "#nutshell" },
        { name: "Website Call Tracking", link: "#call-tracking" },
        { name: "Lead Management", link: "#lead-management" }
      ]
    },
    {
      title: "Improve brand messaging and conversion",
      description: "Optimize your brand presence and convert more visitors into customers",
      color: "#f59e0b",
      services: [
        { name: "Website Design Services", link: "#web-design" },
        { name: "Landing Page Design Services", link: "#landing-pages" },
        { name: "CRO Services", link: "#cro" },
        { name: "Social Media Management Services", link: "#social-media" }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('revenue-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % revenueSteps.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible, revenueSteps.length]);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  const handleServiceClick = (link) => {
    console.log(`Navigate to: ${link}`);
    // Add your navigation logic here
  };

  return (
    <section id="revenue-section" className={styles.revenueSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            How We <span className={styles.highlight}>Drive Revenue</span>
          </h2>
          <p className={styles.subtitle}>
            By offering custom omnichannel marketing strategies, led by experts and backed by data, WebFX can help your business 
            hit your revenue goals. Stop juggling multiple agencies and start working with a top-rated agency that will drive results.
          </p>
        </div>

        {/* Main Content */}
        <div className={styles.content}>
          {/* Visual Funnel */}
          <div className={styles.visualSection}>
            <div className={styles.funnel}>
              {revenueSteps.map((step, index) => (
                <div
                  key={index}
                  className={`${styles.funnelStep} ${activeStep === index ? styles.active : ''}`}
                  style={{ '--step-color': step.color }}
                  onClick={() => handleStepClick(index)}
                >
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                  <div className={styles.stepIndicator}></div>
                </div>
              ))}
            </div>
            
            {/* Animated Flow Lines */}
            <div className={styles.flowLines}>
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`${styles.flowLine} ${activeStep > index ? styles.flowing : ''}`}
                  style={{ '--delay': `${index * 0.5}s` }}
                ></div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className={styles.servicesSection}>
            <div className={styles.servicesGrid}>
              {revenueSteps[activeStep].services.map((service, index) => (
                <div
                  key={index}
                  className={styles.serviceCard}
                  onClick={() => handleServiceClick(service.link)}
                  style={{ '--animation-delay': `${index * 0.1}s` }}
                >
                  <span className={styles.serviceName}>{service.name}</span>
                  <div className={styles.serviceArrow}>→</div>
                </div>
              ))}
            </div>

            {/* Step Navigation */}
            <div className={styles.stepNavigation}>
              {revenueSteps.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.navDot} ${activeStep === index ? styles.activeDot : ''}`}
                  onClick={() => handleStepClick(index)}
                  aria-label={`Go to step ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats or CTA */}
        <div className={styles.statsSection}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>$10B+</div>
            <div className={styles.statLabel}>Revenue Generated</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>500+</div>
            <div className={styles.statLabel}>Businesses Served</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>98%</div>
            <div className={styles.statLabel}>Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueSection;