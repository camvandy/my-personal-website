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
        console.warn("Failed to load web-vitals:", error);
      });
  }
};

export default reportWebVitals;
