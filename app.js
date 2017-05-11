var express = require("express");
var app = express();
var cfenv = require("cfenv");
var bodyParser = require('body-parser');
var request = require('request');
var mydb;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/jsonasdasd
app.use(bodyParser.json())

// nome, artista , album , uri
app.get('/whatsound/api/v1/spotify/track/values', function (req, res) {
    var query = (req.query.query != null && req.query.query != '' && req.query.query != "undefined") ? req.query.query : null;
    // tipo = tracks, artists, albums
    if (query == null) {
        var result = {
            status: false,
            message: "Bad request, {Empty query}"
        }
        res.status(400).json(result);
    } else {
        var options = {
            url: "https://api.spotify.com/v1/search?q=" + query + "&type=track",
            headers: {
                Accept: 'text/json'
            }
        };

        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                var info = JSON.parse(body);
                if (info != ' ') {
                    if (info['tracks']['items'].length == 0) {
                        var result = {
                            "code": 20,
                            "message": "Músic not found",
                            "status": false
                        }
                        res.send(result);
                    } else {
                        var result = {
                            "name": JSON.stringify(info['tracks']['items'][0]['name']).replace(new RegExp('\\"', "g"), ""),
                            "artist": JSON.stringify(info['tracks']['items'][0]['artists'][0]['name']).replace(new RegExp('\\"', "g"), ""),
                            "album": JSON.stringify(info['tracks']['items'][0]['album']['name']).replace(new RegExp('\\"', "g"), ""),
                            "uri": JSON.stringify(info['tracks']['items'][0]['uri']).replace(new RegExp('\\"', "g"), ""),
                            "url": JSON.stringify(info['tracks']['items'][0]['external_urls']['spotify']).replace(new RegExp('\\"', "g"), "")
                        }
                        res.send(result);
                    }
                }
            } else {
                res.send(error);
            }
        }
        request(options, callback);
    }
});

//nome

app.get('/whatsound/api/v1/spotify/artist/values', function (req, res) {
    var query = (req.query.query != null && req.query.query != '' && req.query.query != "undefined") ? req.query.query : null;
    // tipo = tracks, artists, albums
    if (query == null) {
        var result = {
            status: false,
            message: "Bad request, {Empty query}"
        }
        res.status(400).json(result);
    } else {
        var options = {
            url: "https://api.spotify.com/v1/search?q=" + query + "&type=artist",
            headers: {
                Accept: 'text/json'
            }
        };
        var related = [];
        var topTracks = [];
        var albums = [];

        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                var info = JSON.parse(body);
                if (info != ' ') {
                    if (info['artists']['items'].length == 0) {
                        var result = {
                            "code": 30,
                            "message": "Artista não encontrado",
                            "status": false
                        }
                        res.send(result);
                    } else {
                        var result = {
                            "id": JSON.stringify(info['artists']['items']['0']['id']).replace(new RegExp('\\"', "g"), ""),
                            "artist": JSON.stringify(info['artists']['items']['0']['name']).replace(new RegExp('\\"', "g"), ""),
                            "url": JSON.stringify(info['artists']['items'][0]['external_urls']['spotify']).replace(new RegExp('\\"', "g"), ""),
                            "image": JSON.stringify(info['artists']['items'][0]['images'][0]['url']).replace(new RegExp('\\"', "g"), ""),
                            "topTracks": [],
                            "related": [],
                            "albums": [],
                            "status": false,
                            "message": false
                        }
                        var opt = {
                            url: "https://api.spotify.com/v1/artists/" + result['id'] + "/related-artists",
                            headers: {
                                Accept: 'text/json'
                            }
                        };

                        function callback1(error, response, body) {
                            if (!error && response.statusCode == 200) {
                                var info1 = JSON.parse(body);
                                if (info1 != ' ') {
                                    var tamanho = parseInt(JSON.stringify(info1['total']));
                                    for (var artist in Object.keys(info1['artists'])) {
                                        related.push({
                                            "artist": JSON.stringify(info1['artists'][artist]['name']).replace(new RegExp('\\"', "g"), ""),
                                            "image": JSON.stringify(info1['artists'][artist]['images'][0]['url']).replace(new RegExp('\\"', "g"), ""),
                                            "url": JSON.stringify(info1['artists'][artist]['external_urls']['spotify']).replace(new RegExp('\\"', "g"), "")
                                        });
                                    }
                                }
                                result.related = related;
                            }
                        }

                        var opt1 = {
                            url: "https://api.spotify.com/v1/artists/" + result['id'] + "/top-tracks?country=BR",
                            headers: {
                                Accept: 'text/json'
                            }
                        };

                        function callback2(error, response, body) {
                            if (!error && response.statusCode == 200) {
                                var info2 = JSON.parse(body);
                                if (info2 != ' ') {
                                    for (var track in Object.keys(info2['tracks'])) {
                                        topTracks.push({
                                            "name": JSON.stringify(info2['tracks'][track]['name']).replace(new RegExp('\\"', "g"), ""),
                                            "uri": JSON.stringify(info2['tracks'][track]['uri']).replace(new RegExp('\\"', "g"), ""),
                                            "url": JSON.stringify(info2['tracks'][track]['external_urls']['spotify']).replace(new RegExp('\\"', "g"), "")
                                        });
                                    }
                                }
                                result.topTracks = topTracks;
                            }
                        }
                        var opt2 = {
                            url: "https://api.spotify.com/v1/artists/" + result['id'] + "/albums",
                            headers: {
                                Accept: 'text/json'
                            }
                        };

                        function callback3(error, response, body) {
                            if (!error && response.statusCode == 200) {
                                var info3 = JSON.parse(body);
                                if (info3 != ' ') {
                                    for (var item in Object.keys(info3['items'])) {
                                        albums.push({
                                            "name": JSON.stringify(info3['items'][item]['name']).replace(new RegExp('\\"', "g"), ""),
                                            "image": JSON.stringify(info3['items'][item]['images'][0]['url']).replace(new RegExp('\\"', "g"), ""),
                                            "url": JSON.stringify(info3['items'][item]['external_urls']['spotify']).replace(new RegExp('\\"', "g"), "")
                                        });
                                    }
                                }
                                result.albums = albums;
                                res.send(result);
                            }
                        }
                        request(opt, callback1);
                        request(opt1, callback2);
                        request(opt2, callback3);
                    }
                }
            } else {
                res.send(error);
            }
        }
    }
    request(options, callback);
});
app.get('/whatsound/api/v1/spotify/album/values', function (req, res) {
    var query = (req.query.query != null && req.query.query != '' && req.query.query != "undefined") ? req.query.query : null;
    // tipo = tracks, artists, albums
    if (query == null) {
        var result = {
            status: false,
            message: "Bad request, {Empty query}"
        }
        res.status(400).json(result);
    } else {
        var options = {
            url: "https://api.spotify.com/v1/search?q=" + query + "&type=album",
            headers: {
                Accept: 'text/json'
            }
        };
        var tracks = [];

        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                var info = JSON.parse(body);
                if (info != ' ') {
                    if (info['albums']['items'].length == 0) {
                        var result = {
                            "code": 40,
                            "message": "Álbum não encontrado",
                            "status": false
                        }
                        res.send(result);
                    } else {
                        var result = {
                            "id": JSON.stringify(info['albums']['items']['0']['id']).replace(new RegExp('\\"', "g"), ""),
                            "album": JSON.stringify(info['albums']['items']['0']['name']).replace(new RegExp('\\"', "g"), ""),
                            "artista": JSON.stringify(info['albums']['items'][0]['artists'][0]['name']).replace(new RegExp('\\"', "g"), ""),
                            "musicas": []
                        }
                        var opt = {
                            url: "https://api.spotify.com/v1/albums/"+result.id+"/tracks",
                            headers: {
                                Accept: 'text/json'
                            }
                        };

                        function callback1(error, response, body) {
                            if (!error && response.statusCode == 200) {
                                var info1 = JSON.parse(body);
                                if (info1 != ' ') {
                                    var tamanho = parseInt(JSON.stringify(info1['total']));
                                    for (var track in Object.keys(info1['items'])) {
                                        tracks.push({name:info1['items'][track]['name'],uri:info1['items'][track]['uri'],url:info1['items'][track]['external_urls']['spotify']});

                                    }
                                }
                                result.musicas = tracks;
                                res.send(result);
                            }
                        }
                        request(opt, callback1);
                    }
                }
            } else {
                res.send(error);
            }
        }
    }
    request(options, callback);
});


//serve static file (index.html, images, css)
app.use(express.static(__dirname + '/views'));



var port = process.env.PORT || 3000
app.listen(port, function () {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
