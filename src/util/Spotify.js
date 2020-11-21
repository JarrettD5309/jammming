

const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUri = 'http://localhost:3000';

let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        } else {
            // window.location.href
            const tempToken = window.location.href.match(/access_token=([^&]*)/);
            const tempExpires = window.location.href.match(/expires_in=([^&]*)/);
            if (tempToken && tempExpires) {
                accessToken = tempToken[1];
                const expiresIn = Number(tempExpires[1]);
                window.setTimeout(() => accessToken = '', expiresIn * 1000);
                window.history.pushState('Access Token', null, '/');
                return accessToken;
            } else {
                const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
                window.location = accessUrl;
            }
        }
    },

    search(term) {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
            .then(res=> res.json())
            .then(jsonRes=>{
                console.log(jsonRes.tracks);
                if (!jsonRes.tracks) {
                    return [];
                } else {
                    return jsonRes.tracks.items.map(track=>({
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        uri: track.uri
                    }))
                }
            })
    },
    savePlaylist(name,trackUris) {
        if (!name || !trackUris.length) {
            return;
        }

        const accessToken = Spotify.getAccessToken();
        const headers = { Authorization: `Bearer${accessToken}`};
        let userId;

        return fetch(`https://api.spotify.com/v1/me`, {
            headers: headers
        })
            .then(res=>res.json())
            .then(jsonRes=>{
                userId=jsonRes.id;
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`,{
                    headers:headers,
                    method: 'POST',
                    body: JSON.stringify({name:name})
                })
            })
                .then(res=>res.json())
                .then(jsonRes=>{
                    const playlistId = jsonRes.id;
                    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,{
                        headers:headers,
                        method: "POST",
                        body: JSON.stringify({
                            uris: trackUris
                        })
                    })
                })
    }
 };

export default Spotify;