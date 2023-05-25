module.exports = {
  apps: [
    {
      name: 'castanales-front',
      script: 'serve',
      env: {
        PM2_SERVE_PATH: 'dist',
        PM2_SERVE_PORT: 4040,
        VITE_REACT_APP_API_URL: "127.0.0.1:5001",
        VITE_PORT: 4041,
      },
    },
  ],
};