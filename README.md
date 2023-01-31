# CS4261_Assignment1
##Brief Description:
This is a simple reminders app built using React to build the front-end UI components and Firebase to build the back-end portion and store/update user data in real time. 
Once the app is started, the user should get an alert asking for permission to get location (you may click allow once). The welcome page will says that it is waiting to fetch location until it loads where it will state the address where you are. You can then click the “where are you” pressable words where you will  enter the home page showing boxes with different reminders the user created before as well as a short description pertaining to each item. 
At the bottom of the page is a ‘Add Reminders’ button which leads the user to another page where the user can create a new reminder by adding a title and a short note then pressing the add button. The user also has the option to return to the home page by clicking the ‘Home’ button on the top left corner of the screen. 
Additionally, on the home page, the user can click on the boxes with the reminders and update the specific reminder. You can also click the “welcome” icon on the top left corner to return to the welcome page. 
##References:
-	React setup: https://reactnavigation.org/docs/getting-started/ 
-	Npx expo setup: https://docs.expo.dev/workflow/expo-cli/ 
-	Tutorial video: https://www.youtube.com/watch?v=WYFoxxFaCy0&ab_channel=BugNinza 
-	Firebase explanation doc: https://firebase.google.com/docs/firestore/quickstart 
-	Fetching user location: https://blog.jscrambler.com/how-to-use-react-native-geolocation-to-get-postal-address 
##How to Run the Code:
URL to the Repository: https://github.com/lukrita/CS4261_Assignment1 
To run the code, there are a few necessary steps:
1.	Clone the GitHub Repository:
git clone https://github.com/lukrita/CS4261_Assignment1
2.	Install npx expo in the local repository to allow your phone to run the app:
npx expo install
3.	Install npx expo location in the local repository to enable the address feature:
npx expo install expo-location
4.	Install the Expo Go app on your phone to allow the app to run on your phone
5.	Run the following command to get a QR code then scan the QR code with your phone’s camera which will open the Expo Go app and load my app (note that the first time loading the app may take a while):
npx expo start
6.	The app should successfully run on your phone
