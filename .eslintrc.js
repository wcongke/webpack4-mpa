module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'standard',
  plugins: [
    'html'
  ],
  globals: {
    // 这里填入你的项目需要的全局变量
    // 这里值为 false 表示这个全局变量不允许被重新赋值
    jQuery: false,
    lulu: false,
    $: false
  },
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    '/src/assets/libs': 'off',
    'no-new': 'off', // 允许直接new一个对象而不赋值
    'no-undef': 'off',// 允许使用未定义的变量，因为项目中有许多全局变量，如Utils，Helper
  }
}
