# social-network-api
Social Network API using NOSQL




### Routes: Endpoints:
Here are the API endpoints based on the route configuration:

#### User Routes:
-GET all users: http://localhost:3001/api/users
-GET a single user by ID: http://localhost:3001/api/users/:id
-POST a new user: http://localhost:3001/api/users
-PUT to update a user by ID: http://localhost:3001/api/users/:id
-DELETE a user by ID: http://localhost:3001/api/users/:id
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