var webpack = require('webpack');


module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals:{
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Home: 'app/components/Home.jsx',
      appStyle: 'app/styles/app.css',
      Navigation: 'app/components/Navigation.jsx',
      Help: 'app/components/Help.jsx',
      UrgentContact: 'app/components/UrgentContact.jsx',
      Setting: 'app/components/Setting.jsx',
      ContactCard: 'app/components/ContactCard.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader?name=/public/Assets/Images/[name].[ext]"
      }

    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
