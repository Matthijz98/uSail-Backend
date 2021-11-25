#uSail backend
## run
```
docker-compose up -d
npm install
npm run dev  
```

## api endpoints
### user
#### ```POST: /api/users```
body:
```json
{
    "user_profile_image": "test_user_profile_image",
    "user_name": "test_user_name",
    "user_password": "test_user_password",
    "user_email": "test@test.com",
    "user_full_name" : "Firstname Lastname"
}
```
response:
```json
{
  "id": "3ccbd83a-8aa5-4b36-bd25-3617fd406b1e",
  "user_name": "test_user_name",
  "user_full_name": "Firstname Lastname",
  "user_email": "test@test.com",
  "user_password": "test_user_password",
  "user_created_at": "2021-11-25T13:35:23.290Z",
  "user_updated_at": "2021-11-25T13:35:23.291Z",
  "user_profile_image": null,
  "updatedAt": "2021-11-25T13:35:23.293Z",
  "createdAt": "2021-11-25T13:35:23.293Z"
}
```