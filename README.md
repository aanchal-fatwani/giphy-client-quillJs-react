# Giphy Client

An app representing a custom editor using QuillJS, which provides various features to create a customize editors. The editor has minimalistic design along with a custom option to search and add gifs to the editor. For searching and displaying gifs, Giphy API has been used which provides various endpoints among which is Searching through the collection for a particular search keyword. After searching for desired gifs or stickers, the user can select the desired gif and add to the editor along with other text and formatting options.


## To get started:

1. Install [NodeJS](http://www.nodejs.org)
2. Download this repo
3. Open the command line of your choice and cd to a sample directory within this repo on your machine
4. `npm install` - Installs packages
5. `npm start` - Builds the project and launch a lite web server (webpack-dev-server).
6. Navigate to [http://localhost:8080/](http://localhost:8080/) if your browser doesn't open automatically.


## Scripts

In the project directory, try running:

### `npm start`

Runs the app in development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.


## Technical Details

The project has been developed using ReactJs. The app uses QuillJs and Giphy API for creating editor and then through custom options, providing modal to search for any gif and later to add it to the editor.

### `GIPHY API`

GIPHY API is simple and fast to use, and helps to seamlessly integrate an app with the largest GIF and Sticker library in the world. This API has been used to implement search in the app.<br>

GIPHY Search returns the most relevant GIFs based on a user’s search query or category specification. <br>

For this app, Search endpoint has been used to search for gifs.


### `Quill Rich Text Editor`

Quill is a free, open source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.<br>

For this app, React-Quill has been used which is a Quill component for React. 


## Future Scope Of Improvement

The project can be extended by adding features to submit search query on return.<br>

Also, the functionality to cancel if the user doesn't wish to add any gif after searching could also be added.
