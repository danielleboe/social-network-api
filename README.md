# social-network-api
Social Network API using NOSQL
Github Repo: https://github.com/danielleboe/social-network-api

# Description
APIs for a social network that allows you to:
- get, post, put, and delete users.
- post, delete friends
- get, post, put, and delete thoughts.
- post, delete reactions thoughts

## User Story
- AS A social media startup
- I WANT an API for my social network that uses a NoSQL database
- SO THAT my website can handle large amounts of unstructured data
## Acceptance Criteria
- GIVEN a social network API
- WHEN I enter the command to invoke the application
- THEN my server is started and the Mongoose models are synced to the MongoDB database
- WHEN I open API GET routes in Insomnia for users and thoughts
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia
- THEN I am able to successfully create, update, and delete users and thoughts in my database
- WHEN I test API POST and DELETE routes in Insomnia
- THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list


### Technology Used
- Mongo DB
- Mongoose
- Express
- Express Mongoose
- Nodemon
- Moment

## Install Instructions
Github repo: https://github.com/danielleboe/social-network-api
clone repo - get clone SSHkey

#### Install Command
npm install

#### Start Command
npm start

#### Seed Command
node utils/seed.js or npm run seed

### Routes: Endpoints:
Here are the API endpoints based on the route configuration:

#### User Routes:
-GET all users: http://localhost:3001/api/users
-GET a single user by ID: http://localhost:3001/api/users/:id
-POST a new user: http://localhost:3001/api/users
Ex:
POST http://localhost:3001/api/users
Content-Type: application/json
Body: {
  "username": "john_doe",
  "email": "john@example.com"
}
-PUT to update a user by ID: http://localhost:3001/api/users/:id
-DELETE a user by ID: http://localhost:3001/api/users/:id

### Friends
-POST to add a friend to a user's friend list: http://localhost:3001/api/users/:userId/friends/:friendId
-DELETE to remove a friend from a user's friend list: http://localhost:3001/api/users/:userId/friends/:friendId

#### Thought Routes:
-GET all thoughts: http://localhost:3001/api/thoughts
-GET a single thought by ID: http://localhost:3001/api/thoughts/:id
-POST to create a new thought: http://localhost:3001/api/thoughts
-PUT to update a thought by ID: http://localhost:3001/api/thoughts/:id
-DELETE a thought by ID: http://localhost:3001/api/thoughts/:id

#### Reaction Routes:
-POST to create a reaction: http://localhost:3001/api/thoughts/:thoughtId/reactions
-DELETE to remove a reaction by reactionId: http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId

## Demo Video
### Users, Thoughts, Reactions
[![Watch the video](/API%20Screenshot.png)](/social-network-api-video.mp4)

### Friends
[![Watch the video](/friend%20screenshot.png)](/friend-api-video.mp4)

## Author 
Danielle Boenisch
Github: https://github.com/danielleboe
Email: danielleboenisch@gmail.com

## License
MIT
