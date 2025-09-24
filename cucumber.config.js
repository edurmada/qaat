export default {
  paths: ['features/**/*.feature'],
  import: ['features/step_definitions/**/*.js', 'features/support/**/*.js'],
  format: ['progress', 'html:reports/cucumber-report.html'],
  timeout: 60000, // 60 seconds global timeout
  worldParameters: {
    // Pass timeout to world
  },
};