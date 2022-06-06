export default {
    mode: 'development',
	entry:'./src/index.js',
	output:{
	  filename: 'bundle.js',
  },
  devServer:{

	static: {
	 directory: 'dist',
	},
	compress: true,
	port: 9000,
  },
  module: {
	rules: [{ 
		test: /\.js$|jsx/,
		use: ['babel-loader']
	},
	{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
    },
	{
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
	],
  },
}
