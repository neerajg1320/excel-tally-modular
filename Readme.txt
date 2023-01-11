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
        "react:app": "cd excel-table-min && npm start",
        ...
      },

  iv) Test the script using 'npm run react:start' command.

Step3:
  i) Add script for starting the electron app
  "scripts": {
    "electron:app": "cd electron-main && npm start",
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
    "react:app": "cd excel-table-min && npm start",
    "electron:app": "cd electron-main && npm start",

    "app:client": "cd excel-table-min && cross-env BROWSER=none npm start",
    "app:server": "wait-on tcp:3000 && npm run electron:start",
    "app": "concurrently -k \"npm run app:client\" \"npm run app:server\"",

    "test": "echo \"Error: no test specified\" && exit 1"
  },


Step5:
  i) Set the contextIsolation flag to false so that ipcRenderer is available in browser process

Step6:
  i) Add the excel-tally-electron once we verify
  git submodule add git@github.com:neeraj76/excel-tally-electron.git

Step7:
  Build Image:
  Limitation:
    We have to put the electron build related dependencies in a a react project

  i) Create a link in for excel-tally-elecrtron in excel-table-min/public as electron
     cd excel-table-min/public
     ln -s ../../excel-tally-electron electron
  ii) Make sure that yarn build puts the electron folder in the build folder
     yarn build

  Success

Step8:
  Notarization:
  Limitation:
    We have to put the notarization related targets in react project.
    Added the "build" property in the package.json
    Ensure:
    "afterSign" property is there in the "build" for macOS notarization
    "publish" for uploading to git
    "mac" for making a universal image

Step9:
  Build image on Windows
  i) Create symbolic link in excel-table-min/public
  mklink /D electron ..\..\excel-tally-electron