const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/dist/',
    filename: 'app.js'
  },
  module: {
	  rules: [
	   //react语法（jsx文件）的处理
	    {
	      test: /\.jsx$/,
	      exclude: /(node_modules)/,
	      use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['env','react']
	        }
	      }
	    },
	    //css文件的处理
	    {
	    	test:/\.css$/,
	    	use: ExtractTextPlugin.extract({
	          fallback: "style-loader",
	          use: "css-loader"
	        })
	    },
	    //sass文件的处理
	    {
	    	test:/\.scss$/,
	    	use: ExtractTextPlugin.extract({
	          fallback: "style-loader",
	          use: ["css-loader","sass-loader"]
	        })
	    },
	    //图片文件的处理
	    {
	        test: /\.(png|jpg|gif)$/i,
	        use: [
	          {
	            loader: 'url-loader',
	            options: {
	              limit: 8192,
	              name : 'resource/[name].[ext]'
	            }
	          }
	        ]
	    }
	  ]
   },
  plugins: [
  	   //处理html文件
  	  new HtmlWebpackPlugin({
	  	title:'测试',
	  	template:'./src/index.html'
	  }),
	  //独立css文件
	  new ExtractTextPlugin('css/[name].css'),
	  //公共模块
	  new webpack.optimize.CommonsChunkPlugin({
	  	name : 'common',
	  	filename : 'js/app.js'
	  })
  	],
  	devServer:{
  		port:8086
  	}
};