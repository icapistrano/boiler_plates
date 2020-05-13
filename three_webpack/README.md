This folder is intended for providing a boiler plate for getting started with three.js and webpack.

I used webpack specifically to be able to use OrbitControls from three which is only available through installing it with npm.

Getting Started

1.  With node installed in your system, run commands:
    - npm install three --save
    - npm install webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev
    
2.  Create webpack.config.json for webpack-related configurations

3.  Configure package.json and add:
    - "build": "webpack"
    - "start": "webpack-dev-server --open" 

4.  Run command:
    - npm run start

**webpack-dev-server creates a server for development only -> for hot-reloading in my case..**
**html-webpack-plugin generates its own html, look into webpack documentation for loading own html files**
**index.html is not used**