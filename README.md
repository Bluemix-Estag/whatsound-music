# WhatSound Music MicroService



Endpoint to get a JSON object from Spotify as response

REST API to GET tracks:

```
    GET https://music-api.mybluemix.net/v1/spotify/track
```

Sending a String #query with name of desired song and receive a #uri as response

# Response for 

```
?query=Shape%20of%20you
```


```
 {
    "nome": "Shape of You",
    "artista": "Ed Sheeran",
    "album": "Shape of You",
    "uri": "spotify:track:0FE9t6xYkqWXU2ahLh6D8X",
    "url": "https://open.spotify.com/track/0FE9t6xYkqWXU2ahLh6D8X"
 }

```



