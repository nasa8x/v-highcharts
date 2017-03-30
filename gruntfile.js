var webpack = require("webpack");
var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = function (grunt) {

    var env = grunt.option('env') || 'dev';
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            build: ['./dist']
        },


        watch: {
            webpack: {
                files: ['./src/**/*.vue', './src/**/*.js'],
                tasks: ['webpack'],
                options: {
                    spawn: false,
                },
            }

        },

        // webpack

        webpack: {

            client: {
                entry: {
                    'main': ['./src/main.js']
                },
                output: {
                    path: path.resolve(__dirname, 'dist/'),
                    //path: "./dist/",
                    filename: '[name].js'

                },
                module: {
                    rules: [{
                            test: /\.vue$/,
                            loader: 'vue-loader',
                            options: {
                                loaders: {
                                    // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                                    // the "scss" and "sass" values for the lang attribute to the right configs here.
                                    // other preprocessors should work out of the box, no loader config like this nessessary.
                                    'scss': 'vue-style-loader!css-loader!sass-loader',
                                    'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                                }
                                // other vue-loader options go here
                            }
                        },
                        {
                            test: /\.js$/,
                            loader: 'babel-loader',
                            exclude: /node_modules/
                        },
                        // Allow loading of JSON files
                        // {
                        //     test: /\.json$/,
                        //     loader: "json",
                        // },
                        //{test: /\.json$/, loader: "json"}
                        { test: /\.json$/, loader: 'json-loader' },
                        {
                            test: /\.css$/,
                            use: ['style-loader', 'css-loader']
                        },

                        {
                            test: /\.(png|jpg|gif|svg)$/,
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]?[hash]'
                            }
                        }
                    ]
                },
                externals: [nodeExternals()],
                performance: {
                    hints: 'warning'
                },
                //devtool: 'source-map',
                devtool: '#source-map',
                plugins: [
                    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
                    // new webpack.ProvidePlugin({
                    //     $: "jquery",
                    //     jQuery: "jquery",
                    //     'window.Tether': "tether",
                    //     'Tether': "tether"
                    //
                    // }),
                    // new webpack.DefinePlugin({
                    //     'process.env': { NODE_ENV: JSON.stringify("production") }
                    // }),
                    // new webpack.optimize.CommonsChunkPlugin({
                    //   filename: '[chunkhash:8].js',
                    //     children: true,
                    //     async: true,
                    //     minChunks: 2
                    // }),
                    new webpack.DefinePlugin({
                        'process.env': { NODE_ENV: JSON.stringify(env) }
                    }),
                    new webpack.LoaderOptionsPlugin({
                        minimize: true
                    })
                ]
            }, //end client


        }, // end webpack


    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-webpack');

    // Default task(s).
    //grunt.registerTask('default', ['clean', 'uglify', 'requirejs:client', 'htmlmin', 'cssmin', 'imagemin']);
    grunt.registerTask('default', ['clean', 'webpack']);

};
