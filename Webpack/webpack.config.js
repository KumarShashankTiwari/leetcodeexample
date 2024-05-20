const { prototype } = require('events');
const path=require('path');

module.exports={
    mode:'production',
    entry:'./src/App.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'output.js'
    },
    devServer:{
        static: {
            directory: path.join(__dirname, "dist")
          },
       
        compress:true,
        port:5000
    },
    //loader
    module:{
        rules:[{
            test:/\.css$/,
            use:['style-loader','css-loader']
        }]
    }


}