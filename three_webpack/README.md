This folder is intended for providing a boiler plate for getting started with three.js and webpack.

I used webpack specifically to be able to use OrbitControls from three which is only available through installing it with npm.

Getting Started

1.  With node installed in your system, run commands:
    - npm intall three --save
    - npm install webpack webpack-cli --save-dev
    
2.  Create webpack.config.json to target input and output file

3.  Configure package.json and add:
    - "build": "webpack --config webpack.config.js"

4.  Run command:
    - npm run build

5.  In your index.html, source output file