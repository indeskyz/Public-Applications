#React Native Resturant Rating Application

- Allows a user to preform CRUD operations based on resturants they've been to.
- Provides a 5 star rating system
- Allows a user to search for a place using Google Maps API

# To Run

- Get your API key from [Google Maps JavaScript](https://developers.google.com/maps/documentation/javascript/get-api-key)

- After getting your API key navigate to _android/app/src/main/AndroidManifest.xml_:

  - Add this code block to your AndroidManifest.xml

```xml
<application>
   <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>

   <!-- You will also only need to add this uses-library tag -->
   <uses-library android:name="org.apache.http.legacy" android:required="false"/>
</application>
```

- See the following so you can configure for your perferred environment [React Native Docs](https://reactnative.dev/docs/running-on-device)
- After configuring your environment, change into the project directory & run:

  > npm install

- Run using your perferred method via the Docs linked above
