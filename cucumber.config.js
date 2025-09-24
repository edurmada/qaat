export default {
  paths: ['features/**/*.feature'],
  import: ['features/step_definitions/**/*.js', 'features/support/**/*.js'],
  format: ['progress', 'html:reports/index.html'],
  timeout: 60000, // 60 seconds global timeout
  failFast: false, // Continue running scenarios even if steps fail
  forceExit: true, // Force exit to ensure reports are generated
  worldParameters: {
    // Pass timeout to world
  },
};