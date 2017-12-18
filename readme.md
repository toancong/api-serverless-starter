
## Install dependencies
```
docker-compose run --rm app npm install
```

## Run locally

```
docker-compose up app
```

Access url: http://localhost:20030/

## Deployment

Config your aws credential

```
# in credentials file
[devProfile]
aws_access_key_id=[id key]
aws_secret_access_key=[secrect key]
```

```
docker-compose run --rm app npm run deploy
```