module.exports = {
    apps: [
      {
        name: 'MedX-BE', // Name of the application
        script: 'node', // Command to run the application
        args: './dist/src/index.js',
        exec_mode: 'fork', // Execution mode ('cluster' or 'fork')
        instances: 1, // Number of instances (number of CPU cores to be used) - 'max' to use as much as possible
        autorestart: true, // Automatically restart the application if it crashes
        watch: false, // Watch for file changes and restart as needed
        max_memory_restart: '1G', // Maximum memory limit before restarting the application
        env: {
          // Running environment (development, production, ...)
          NODE_ENV: 'development',
        },
        env_staging: {
          NODE_ENV: 'staging',
        },
        env_production: {
          NODE_ENV: 'production',
        },
      },
    ],
  }
  