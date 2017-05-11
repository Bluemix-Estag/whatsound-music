# WhatSound Music MicroService



Endpoint to get a JSON object from Spotify as response

# Tracks
REST API to GET tracks:

```
    GET https://music-api.mybluemix.net/whatsound/api/v1/spotify/track/values?query=NAME_OF_DESIRED_TRACK
```

Sending a String query with name of desired song and receive a JSON as response

# Response for 

```
GET https://music-api.mybluemix.net/whatsound/api/v1/spotify/track/values?query=Shape%20of%20You
```


```
 {
    "name": "Shape of You",
    "artist": "Ed Sheeran",
    "album": "Shape of You",
    "uri": "spotify:track:0FE9t6xYkqWXU2ahLh6D8X",
    "url": "https://open.spotify.com/track/0FE9t6xYkqWXU2ahLh6D8X"
 }

```

# Artists
REST API to GET artists:

```
    GET https://music-api.mybluemix.net/whatsound/api/v1/spotify/artist/values?query=NAME_OF_DESIRED_ARTIST
```

Sending a String query with name of desired artist and receive a JSON as response

# Response for 

```
GET https://music-api.mybluemix.net/whatsound/api/v1/spotify/artist/values?query=Ed%20Sheeran
```


```
 {
    {
  "id": "6eUKZXaKkcviH0Ku9w2n3V",
  "artist": "Ed Sheeran",
  "url": "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V",
  "image": "https://i.scdn.co/image/f0370da3f52161b07a461b4be9a64d0adbfb498d",
  "topTracks": [
    {
      "name": "Shape of You",
      "uri": "spotify:track:7qiZfU4dY1lWllzX7mPBI3",
      "url": "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3"
    },
    {
      "name": "Galway Girl",
      "uri": "spotify:track:0afhq8XCExXpqazXczTSve",
      "url": "https://open.spotify.com/track/0afhq8XCExXpqazXczTSve"
    },
    .
    .
    .
  ],
  "related": [
    {
      "artist": "James Bay",
      "image": "https://i.scdn.co/image/d8bc6593d0449a578ceb545fd1ae9172ac67bf83",
      "url": "https://open.spotify.com/artist/4EzkuveR9pLvDVFNx6foYD"
    },
    {
      "artist": "Birdy",
      "image": "https://i.scdn.co/image/b6feba3d55a45401b5ef463ba4c8b20d764e48af",
      "url": "https://open.spotify.com/artist/2WX2uTcsvV5OnS0inACecP"
    }
    .
    .
    .
  ],
  "albums": [
    {
      "name": "÷ (Deluxe)",
      "image": "https://i.scdn.co/image/e6a84983ed9b0a04ce633b021329f7df034e7c7c",
      "url": "https://open.spotify.com/album/3T4tUhGYeRNVUGevb0wThu"
    },
    {
      "name": "5",
      "image": "https://i.scdn.co/image/bd21e1d0ed0fc83a9906b2d9dcf2f1072ec7bb75",
      "url": "https://open.spotify.com/album/2hyDesSAYNefikDJXlqhPE"
    },
    .
    .
    .
  ],
  "status": false,
  "message": false
  }
}

```

# Albums
REST API to GET artists:

```
    GET https://music-api.mybluemix.net/whatsound/api/v1/spotify/album/values?query=NAME_OF_DESIRED_ARTIST
```

Sending a String query with name of desired artist name and receive a JSON as response

# Response for 

```
 GET https://music-api.mybluemix.net/whatsound/api/v1/spotify/album/values?query=Ed%20Sheeran
```


```
{
	"id": "3T4tUhGYeRNVUGevb0wThu",
	"album": "÷ (Deluxe)",
	"artista": "Ed Sheeran",
	"musicas": [
    {
		"name": "Eraser",
		"uri": "spotify:track:7oolFzHipTMg2nL7shhdz2",
		"url": "https://open.spotify.com/track/7oolFzHipTMg2nL7shhdz2"
	}, 
    {
		"name": "Castle on the Hill",
		"uri": "spotify:track:6PCUP3dWmTjcTtXY02oFdT",
		"url": "https://open.spotify.com/track/6PCUP3dWmTjcTtXY02oFdT"
	}, 
    {
		"name": "Dive",
		"uri": "spotify:track:51ChrwmUPDJvedPQnIU8Ls",
		"url": "https://open.spotify.com/track/51ChrwmUPDJvedPQnIU8Ls"
	}, 
    {
		"name": "Shape of You",
		"uri": "spotify:track:7qiZfU4dY1lWllzX7mPBI3",
		"url": "https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3"
	}, 
    {
		"name": "Perfect",
		"uri": "spotify:track:0tgVpDi06FyKpA1z0VMD4v",
		"url": "https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v"
	}, 
    {
		"name": "Galway Girl",
		"uri": "spotify:track:0afhq8XCExXpqazXczTSve",
		"url": "https://open.spotify.com/track/0afhq8XCExXpqazXczTSve"
	}, 
    {
		"name": "Happier",
		"uri": "spotify:track:2RttW7RAu5nOAfq6YFvApB",
		"url": "https://open.spotify.com/track/2RttW7RAu5nOAfq6YFvApB"
	}, {
		"name": "New Man",
		"uri": "spotify:track:5HDPtsnyb3maFmPL8LLUTG",
		"url": "https://open.spotify.com/track/5HDPtsnyb3maFmPL8LLUTG"
	}, 
    {
		"name": "Hearts Don't Break Around Here",
		"uri": "spotify:track:2dfHh7ECGxfNqZTQno09Vk",
		"url": "https://open.spotify.com/track/2dfHh7ECGxfNqZTQno09Vk"
	}, 
    {
		"name": "What Do I Know?",
		"uri": "spotify:track:2pJZ1v8HezrAoZ0Fhzby92",
		"url": "https://open.spotify.com/track/2pJZ1v8HezrAoZ0Fhzby92"
	}, 
    {
		"name": "How Would You Feel (Paean)",
		"uri": "spotify:track:6PJ8FF6UR8FZXfEvpHkIVN",
		"url": "https://open.spotify.com/track/6PJ8FF6UR8FZXfEvpHkIVN"
	}, 
    {
		"name": "Supermarket Flowers",
		"uri": "spotify:track:4VuS959DSpr82t3qBqCrWG",
		"url": "https://open.spotify.com/track/4VuS959DSpr82t3qBqCrWG"
	}, 
    {
		"name": "Barcelona",
		"uri": "spotify:track:3Lfiu5sZ4M4B6JaKMBc0FU",
		"url": "https://open.spotify.com/track/3Lfiu5sZ4M4B6JaKMBc0FU"
	}, 
    {
		"name": "Bibia Be Ye Ye",
		"uri": "spotify:track:6SznMYPQJHzr3IwsAHLId2",
		"url": "https://open.spotify.com/track/6SznMYPQJHzr3IwsAHLId2"
	}, 
    {
		"name": "Nancy Mulligan",
		"uri": "spotify:track:35QZaWQRkmnAVqBF1TLCxQ",
		"url": "https://open.spotify.com/track/35QZaWQRkmnAVqBF1TLCxQ"
	}, 
    {
		"name": "Save Myself",
		"uri": "spotify:track:6TIU9Ehmi6dMzZK73Ym4yj",
		"url": "https://open.spotify.com/track/6TIU9Ehmi6dMzZK73Ym4yj"
	}]
}
```
