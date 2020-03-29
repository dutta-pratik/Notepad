# Notepad

It is an API for Notepad App which helps to perform various functionality like creation, deletion and updation of notes.<br>

# Index
<ul>
<li><a href="#1">How to Setup the Code into your System</a>
<li><a href="#2">Cloning the repository using VS Code</a>
<li><a href="#3">Tech Used in it</a>
<li><a href="#4">Detailed API's Functionality</a>
<li><a href="#5">Support</a>
</ul>

# <p id="1">How to Setup the Code into your System
<ul>
<li> Fork this repository into your github account (create one if you don't have it yet)
<li> Clone it to your system (<code>git clone</code>)
<li> In the terminal run git remote add upstream <code>https://github.com/pratik-dutta/Notepad.git</code> (this is for taking a fresh update of the code anytime in the future)
</ul>

# <p id="2">Cloning the repository using VS Code
<ul >
<li> Open VS Code.
<li> Go to <i>View > Terminal</i>.
<li> To clone the repo to your desktop, change the directory to desktop by running the command <code>cd desktop</code>.
<li> In the terminal, run <code>git clone https://github.com/CodingNinjasCodes/InterQues.git</code>.
<li> A folder/directory should be created on your desktop.
<li> Open that folder in VS Code, go to <i>File > Open</i>.
<li> Run <code>npm install</code> to download dependencies of the project or you can download it by seeing dependencies in <code>package.json</code>.
<li> Now you're good to go!
</ul>

# <p id="3">Tech Used in it
<strong>Stack</strong>: NodeJs, ExpressJs, MongoDB
<br>
<strong>Authentication Packages</strong>: Passport, Passport JWT, jsonwebtoken
<br>
<strong>Uploading Files</strong>: Multer

# <p id="4">Detailed API's Functionality
<br>
This API helps to performs the following function
<ul>
<li><a href="#register">Register</a>
<li><a href="#login">Login</a>
<li><a href="#create">Create New Note (and Upload File)</a>
<li><a href="#get">Fetch Created Notes</a>
<li><a href="#delete">Delete Note</a>
<li><a href="#edit">Update Note</a>
</ul>
<br>
Following is the detailed description of all the function mentioned above.<br>
<ul>
<li id="register"><h2> Register </h2>
<strong>Route</strong> for register is <code>/register</code>
<br>
<strong>Link</strong>: <code>http://localhost:8000/register</code>
<br>
<br>
<code>Register</code> is used to create a new User into the Database of the app.<br>
If the email is unique, User with the given data(email, name, password) will be added to the database which you can see in the given picture below<br>
<br>
<img src="readmeimg/register-created.png">
<hr>
<img src="readmeimg/db-img-1.png">
<br>
If the User registers from the email which is already present in the database. It'll not create the new User and dispaly the same message as well.
<br>
<img src="readmeimg/register-alreadyexists.png">
<br>
<hr>
<li id="login"><h2> Login </h2>
<strong>Route</strong> for login is <code>/login</code>
<br>
<strong>Link</strong>: <code>http://localhost:8000/login</code>
<br>
<br>
<code>Login</code> is used to login the user to the app.
<br>
If the password and email entered is matching to the data saved in the database, User will logged in successfully.
<br>
<img src="readmeimg/login-successful.png">
<hr>
<br>
and also create a token, which we'll use to edit, delete and update the note created by the user
<br>
<img src="readmeimg/login-token.png">
<hr>
<br>
And if the entered credentials are incorrect, it will give the output as
<br>
<img src="readmeimg/login-invalid.png">
<hr>
<br><br>
<hr>
<i> To use the <code>edit</code>, <code>delete</code>, <code>udate</code> functionality we have to copy and paste the token to header as shown below</I>
<br>
<img src="readmeimg/login-token.png">
<hr>
<br>
<img src="readmeimg/token-bearer.png">
<hr>
<br>
<i>it'll authorize the user to perform the mentioned task within the expiry time specified in code which is 100s.</i><br>
<i>if you are going to access the <code>edit</code>, <code>delete</code>, <code>udate</code> functions after the expiry period it will show <code>Unauthorized</code></i>.
<br>
<img src="readmeimg/getnote-unauth-token.png">
<hr>
<br>
<hr>
<li id="create"><h2> Create New Note (and Upload File) </h2>
<strong>Route</strong> for Create New Note (and Upload File) is <code>/newNote</code>
<br>
<strong>Link</strong>: <code>http://localhost:8000/newNote</code>
<br>
<br>
<code>newNote</code> helps the user to create the note and also upload file if they want to.<br>
<code>Multer</code> is being used for uploading file.<br> 
Entering <code>note</code> is necessary while <code>upload file</code> is optional.
<br>
<img src="readmeimg/newNote-created.png">
<hr>
<br>
<li id="get"><h2> Fetch Created Notes </h2>
<strong>Route</strong> for Fetch Created Notes is <code>/getNote</code>
<br>
<strong>Link</strong>: <code>http://localhost:8000/getNote</code>
<br>
<br>
<code>getNote</code> is used to fetch the notes created by user.<br>
In this API, we're fetching notes of the user who is logged in and it's identity is created is using token.<br>
Here is the successfull fetching of the notes by the user.<br>
<img src="readmeimg/getNote-success.png">
<hr>
<br>
<i> if there is no note created by user then, it shows something like </i><br>
<img src="readmeimg/getNote-ifnotavailable.png">
<hr>
<br>
<i> if the user tries to fetch notes after expiry of token then, it shows something like </i><br>
<img src="readmeimg/getnote-unauth-token.png">
<hr>
<br>
<li id="delete"><h2> Delete Note </h2>
<strong>Route</strong> for Delete Note is <code>/deleteNote</code><br>
<i>to be specific <strong><code>/deleteNote/"noteID"</code></strong></i>
<br>
<strong>Link</strong>: <code>http://localhost:8000/deleteNote<i><strong>/"noteID"</strong></i></code>
<br>
<br>
<code>deleteNote</code> is used to delete the note created by the user. <br>
It will fetch the id from params and if the particular note is associated with the logged in user, it'll delete the note.<br>
<img src="readmeimg/deletenote-delete.png">
<hr>
<br>
If the id is not associated with the logged in user, it'll show message like<br>
<img src="readmeimg/deleteNote-other-note.png">
<hr>
<br>
<li id="edit"><h2> Update Note </h2>
<strong>Route</strong> for Delete Note is <code>/editNote</code><br>
<i>to be specific <strong><code>/editNote/"noteID"</code></strong></i>
<br>
<strong>Link</strong>: <code>http://localhost:8000/editNote<i><strong>/"noteID"</strong></i></code>
<br>
<br>
<code>editNote</code> is used to update the note created by the user. <br>
It will fetch the id from params and if the particular note is associated with the logged in user, it'll update the note.<br>
<img src="readmeimg/editNote-update.png">
<hr>
<br>
If the id is not associated with the logged in user, it'll show message like<br>
<img src="readmeimg/editnote-other-note.png">
<hr>
<br>
</ul>

# <p id="5">Support
Feel free to contact at <i>pratikdutta.786(at)gmail(dot)com</i> for any query.

 



