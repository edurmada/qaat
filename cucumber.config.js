export default {
  paths: ['features/**/*.feature'],
  import: ['features/step_definitions/**/*.js', 'features/support/**/*.js'],
  format: ['progress', 'html:cucumber-report'],
  formatOptions: {
    html: {
      output: 'cucumber-report/index.html',
    },
  },
  timeout: 10000, // 10 seconds global timeout
};