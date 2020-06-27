const path = require('path')
const extractTextPlugin = require('extract-text-webpack-plugin')
const rules = [{
	test: /\.(css|scss|sass)$/,
	// 区别开发环境和生成环境
	use: process.env.NODE_ENV === 'development' ? ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'] : extractTextPlugin.extract({
		fallback: 'style-loader',
		use: ['css-loader', 'sass-loader', 'postcss-loader'],
		// css中的基础路径
		publicPath: '../'
	})
	},
	{
		test: /\.js$/,
		exclude: /node_modules/,
		use: [{
			loader: 'babel-loader',
			options: {
				presets: ['es2015-nostrict'],
				plugins: ['transform-runtime']
			}
		}]
		// 不检查node_modules下的js文件
		// exclude: '/node_modules/'
	},
	{
		test: /\.(png|jpg|gif)$/,
		use: [{
			// 需要下载url-loader
			loader: 'url-loader',
			options: {
				// 小于这个时将会已base64位图片打包处理
				limit: 5 * 1024,
				// 图片文件输出的文件夹
				publicPath: './images',
				outputPath: 'images'
			}
		}]
	},
	{
		test: /\.html$/,
		// html中的img标签
		use: {
			loader: 'html-loader',
			options: {
				attrs: ['img:src', 'img:data-src', 'audio:src'],
				minimize: true
			}
		}
	},
	{
		enforce: 'pre',
		test: /\.js$/,
		include: [path.resolve(__dirname, 'src/pages'), path.resolve(__dirname, 'assets/js')], // 指定eslint检查的目录
		loader: 'eslint-loader'
	}
]
module.exports = rules
