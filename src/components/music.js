curl -X POST "https://accounts.spotify.com/api/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id=89020d325d194c1db9ca6244e7ae86c6&client_secret=83dc69a3c63848d0997ad2ae06049cdb"


     https://open.spotify.com/artist/4aaBjq7VqqQvpSF69GglvO?si=lgwyA7ZgTo-DmZWIQs_7Ww

     4aaBjq7VqqQvpSF69GglvO

     curl "https://api.spotify.com/v1/artists/4aaBjq7VqqQvpSF69GglvO" \
     -H "Authorization: Bearer  BQD-VoB1VR2Pe3n1f6KgYPA5KZk_n5kZI2255PmuCV66H8wO4AwTe468cshC2l7pJfmRlPBl-x-wvPHpGfRY_DmCBqlMfNZm-Hq41xZwsua6_DeJdWg"


    BQD-VoB1VR2Pe3n1f6KgYPA5KZk_n5kZI2255PmuCV66H8wO4AwTe468cshC2l7pJfmRlPBl-x-wvPHpGfRY_DmCBqlMfNZm-Hq41xZwsua6_DeJdWg

     curl --request GET \
        --url https://api.spotify.com/v1/me/player/currently-playing \
        --header 'Authorization: Bearer BQD-VoB1VR2Pe3n1f6KgYPA5KZk_n5kZI2255PmuCV66H8wO4AwTe468cshC2l7pJfmRlPBl-x-wvPHpGfRY_DmCBqlMfNZm-Hq41xZwsua6_DeJdWg'

