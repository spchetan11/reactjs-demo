var path = require('path');

module.exports = {
  entry:__dirname+'/src/app.js',
  output: {
         path: path.join(__dirname,"/static/build"),
         filename:"bundle.js"
         },
  module: {
  	 loaders: [{
  	 	test:/\.(js|jsx)$/,
  	 	exclude: /node_modules/,
  	 	loader: "babel-loader",
  	 	query:{
  	 		presets: ["es2015", "stage-0", "react"]
  	 	}
  	 }]
   }
 }
