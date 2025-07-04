const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals")
      .then(({ getCLS, getINP, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getINP(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      })
      .catch((error) => {
        // Silently handle web-vitals loading errors in production
        // Development errors will still be visible in browser dev tools
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.warn("Failed to load web-vitals:", error);
        }
      });
  }
};

export default reportWebVitals;
