# quick-speech
![demo](https://raw.githubusercontent.com/le-michael/mec-2018/master/screenshots/hellodon.png?token=AMcEjC7uuPuQQMqOiF3rNGQNS5bIeo1dks5b1OocwA%3D%3D)


## About this application

This application was created for Don Loree for the MEC 2018 programming competition. It was built by @le-michael and @nnmkhang using React and various other node libraies. 

The purpose of this application is to provide an intuitive way for Don to communicate with his limited mobility. The code is designed to allow new phrases to be added and removed when requested.






## How to install the application
1. Click ```Clone or download``` and click ```Download Zip```
2. Once the download is complete extract the package.

### How to install Node.js
1. Go to this link: https://nodejs.org/en/ and install the ```LTS``` version. 
2. Follow the instructions provided by the installer wizard.

## How to run the application
1. Using the terminal navigate to the ```quick-speech``` folder.
2. Run the command ```npm install``` to download all required dependencies.
3. Run the command ```npm start``` to launch the application.

## How to run the logging server
1. Make sure that nodejs is installed and navigate to the ```Other Client``` folder.
2. Run the command ```npm install``` to download all required dependencies.
3. Run the command ```node server.js``` to launch the server.

### How to connect with other devices
1. Find the IPv4 adress of the computer that is running the server.
2. Navigate to the ```public``` folder in the ```Other Client``` folder. edit the ```client.js``` file.
3. Change the first line: ```var socket = io.connect('http://localhost:5000'); ``` Replace ```localhost``` with your IPv4 adress found. The result should look like: ```var socket = io.connect('http://000.000.0.0:5000'); ``` Where the ```000.000.0.0``` is your IPv4
4. From the other device, connect to the IP adress at port ```5000```. You can do this by going to any webrowser and typing in: ```000.000.0.0:5000``` where the   ```0```'s are your IPv4 adress.

## Additional Information

### Adding/Removing custom phrases
Custom phrases can be added to any keyboard by going to the ```keyboard.jsx``` file and adding a phrase into the appropriate array. Removing is done by removing a string from the appropriate array.

### Adding a new Keyboard
Adding a new keyboard to the menu is done by going to the menu.jsx file and adding a new keyboard name to the options array. To build a keyboard go to the keyboard.jsx file and create a new keyboard component. Follow the other keyboards for templating.

### Clearing the chatlog 
If there is ever a need to clear the chatlog navigate to the ```Other Client``` folder and open the ```chatlog.txt``` file. Delete all contents of the file and save the ```chatlog.txt``` file. 

