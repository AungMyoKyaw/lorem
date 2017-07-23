const path = require('path');
const webpack = require('webpack');

const config = {
	entry: {
		lorem:path.resolve(__dirname,'src/lorem.js')
	},
	output: {
		path:path.resolve(__dirname,'docs/dist'),
		filename:"[name].js"
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:'babel-loader',
				options:{
					presets:['env']
				}
			}
		]
	},
	plugins:[
		new webpack.optimize.UglifyJsPlugin()
	],
	target:'web'
}

module.exports = config;
