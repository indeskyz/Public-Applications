## Features & Things to Note

### In Order for the the application to actually run, a .env file **must** be created with the following fields & values

**_there is one value using http and one using https_**

```
 clientOrigin = http:localhost:4200
 AUTH0_AUDIENCE = https://hotelBooking
 AUTH0_DOMAIN = hotel-booking.us.auth0.com
```

- The Application Logs The Following:
  - Server Startup
  - Database Connection
  - All API Calls
  - All Error Messages

**A Log Folder and Log File is created for you at startup**

- The Application will output to the console the directory name where you can find the directory and its content
  - will look something like _pathToApplication/helpers/logFiles/serverLog.txt_
  - once a log file reaches 5MB in size, a new one will be created
    - naming convention for log files is as follows: _serverLog.txt_ , _serverLog1.txt_ , _serverLog2.txt_ , _etc_

### Features

- Login & Authentication using Auth0
- **You may only access the home page unless you are an authenticated & signed in user**.

  - Allows for SSO, OAuth with Google, or Create your own account.
  - **a default account has been provided for you and can be found in the console output upon startup**
    - _its also provided in the applications home page, just in case_

- Profile Page which displays basic profile information

  - The profile that has been provided can be updated through Google.
  - Once updated, the application will show the updated information

- All CRUD and Filter/Search Operations Are Supported
- Provides a refresh method to let you get up-to-date data

- A secondary, albeit small, API has also been provided that uses JWT for authenticating requests

#### Note, error messages should never contain sensitive information, they've only been included because the credentials have now expired and are no longer a vulnerability

#### Demo Link

[Youtube](https://youtu.be/A1X-DrUTJQc)
