const pkg = require('../../package.json')

module.exports = {
  apps: [
    {
      name: pkg.name,
      script: 'yarn start',
      watch: false,
      autorestart: true,
      max_memory_restart: '512M',
      instances: 1,
      no_daemon: true
    }
  ]
}
