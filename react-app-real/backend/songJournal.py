import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import spotipy.util as util
import sys
import os

scope = 'user-library-read'

if len(sys.argv) > 1:
    username = sys.argv[1]
else:
    print("Usage: %s username" % (sys.argv[0],))
    sys.exit()

token = util.prompt_for_user_token(username,
                           scope,
                           client_id='705f9d56de324473972b2ac2c7368a93',
                           client_secret='f502cba5baf442dbbc662dc778be76dc',
                           redirect_uri='http://localhost/8080')

if token:
    sp = spotipy.Spotify(auth=token)
    results = sp.current_user_saved_tracks()
    for item in results['items']:
        track = item['track']
        print(track['name'] + ' - ' + track['artists'][0]['name'])
else:
    print("Can't get token for", username)


birdy_uri = 'spotify:artist:2WX2uTcsvV5OnS0inACecP'
results = sp.current_user_recently_played(10)
albums = results['items']
while results['next']:
    results = sp.next(results)
    albums.extend(results['items'])

for album in albums:
    print(album['name'])

