Step1:
    Create the electron-main.
    Check electron-main/Readme.txt for procedure

Step2:
  i) Add the react app as a submodule
    git submodule add git@github.com:neeraj76/excel-table-min.git
  ii) Install the dependencies
    cd excel-table-min npm install
  iii) Create script react:start in package.json
    "scripts": {
        "react:start": "cd excel-table-min && npm start",
        ...
      },

  iv) Test the script using 'npm run react:start' command.

Step3:
  i) Add script for starting the electron app
  "scripts": {
    "electron:start": "cd electron-main && npm start",
    ...
  },

Step3:
  i) Open Terminal Window 1 and run react app
  ii) Open Terminal Window 2 and run electron app
  iii) Verify that the electron app is opened and we can see the react app opened in it.

Step4:
  i) Add the support in the wrapper app's package.json to run the two concurrently.
  npm install concurrently cross-env wait-on
  ii) Create the scripts
  "scripts": {
    "react:start": "cd excel-table-min && npm start",
    "electron:start": "cd electron-main && npm start",

    "app:react": "cd excel-table-min && cross-env BROWSER=none npm start",
    "app:server": "wait-on tcp:3000 && npm run electron:start",
    "app": "concurrently -k \"npm run app:react\" \"npm run app:server\"",

    ...
  },

