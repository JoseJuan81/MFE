module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    // transformar codigo actual en codigo viejo para que todos los navegadores lo entiendan
                    loader: 'babel-loader',
                    options: {
                        // preset-react: para transformar el codigo jsx y las etiquetas
                        // preset-env: convierte el codigo moderno en codigo viejo
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        // permite async await en el navegador
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}