# Sprint Challenge: Express and Node.js - Projects & Actions

## Note: Added Testing .json file to the repo "/testing/Insomnia_testing_node_api_challenge.json"

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. The core features of Node.js and Express and why they are useful. - Node is an environment that allows devs to create server side tool and apps in JS. Express is a node web framework and can write handlers for requests with different HTTP parths, sets port to use for connecting, adds additional request middleware.
2. Understand and explain the use of Middleware? Middleware is a software that add different capabilities to apps outside of what is offered by the environment. Examples are data management, authentication and API management.
3. The basic principles of the REST architectural style. The rest architecture uses rest request handlers to pass info via json response to the client. The client sends a request via get, put, post, delete for example back to the request handler. That is then passed to the service handler and then the database and then to the server. 
4. Understand and explain the use of Express Routers. Express can route specific functions, files to specific endpoints for a client HTTP requests.
5. Describe tooling used to manually test the correctness of an API. Insomnia is a tool that is used to send requests to the API since we have no front end to test with during the construction of the API. you can send requests a get, post, put, del, etc to send json info to the sever.

## Description

In this challenge, you design and create a web API to manage the following resources: `Projects` and `Actions`.

## Instructions

**Read these instructions carefully**. Understand exactly what is expected **_before_** starting to code.

This is an individual assessment, please work on it alone. It is an opportunity to demonstrate proficiency of the concepts and objectives introduced and practiced in preceding days.

If the instructions are not clear, please seek support from your TL and Instructor on Slack.

The Minimum Viable Product must be completed in three hours.

Follow these steps to set up and work on your project:

-   [done] Create a forked copy of this project.
-   [done] Add your _Team Lead_ as collaborator on Github.
-   [done] Clone your forked version of the Repository.
-   [done] Create a new Branch on the clone: git checkout -b `firstName-lastName`.
-   [done] Implement the project on this Branch, committing changes regularly.
-   [done] Push commits: git push origin `firstName-lastName`.

Follow these steps for completing your project.

-   [done] Submit a Pull-Request to merge `firstName-lastName` Branch into `main` on **your fork, don't make Pull Requests against Lambda's repository**.
-   [okay] Please don't merge your own pull request.
-   [done] Add your _Team Lead_ as a Reviewer on the Pull-request
-   [done] Your _Team Lead_ will count the challenge as done by merging the branch into `main`.

## Commits

Commit your code regularly and use descriptive messages. This helps both you (in case you ever need to return to old code) and your Team Lead.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your Team Lead.

-   [ ] Mention two parts of Express that you learned about this week. Middleware, routing

-   [ ] Describe Middleware? A set of functions that run in the order they are found/used in the server files. they can execute code, change req and res objects, end the req-res cycle, start the next middleware function (including the routing).

-   [ ] Describe a Resource? any piece of data the API uses or accesses

-   [ ] What can the API return to help clients know if a request was successful? a status code in the 200 range. A message can also be returned with the code

-   [ ] How can we partition our application into sub-applications? seperating each major endpoint (users, products, posts, etc) into their own file that is called by the server or index.js file depending on your structure.

## Minimum Viable Product

-   [done] Configure an _npm script_ named _"server"_ that will execute your code using _nodemon_. Make _nodemon_ be a development time dependency only, it shouldn't be deployed to production.
-   [done] Configure an _npm script_ named _"start"_ that will execute your code using _node_.

-   [done] EXTRA added an _npm script_ name "watch" that restarts the server every time a change is made

Design and build the necessary endpoints to:

-   [ ] Perform CRUD operations on _projects_ and _actions_. When adding an action, make sure the `project_id` provided belongs to an existing `project`. If you try to add an action with an `id` of 3 and there is no project with that `id` the database will return an error.
-   [ ] Retrieve the list of actions for a project.

Please read the following sections before implementing the Minimum Viable Product, they describe how the database is structured and the files and methods available for interacting with the data.

### Database Schemas

The description of the structure and extra information about each _resource_ stored in the included database (`./data/lambda.db3`) is listed below.

#### Projects

| Field       | Data Type | Metadata                                                                    |
| ----------- | --------- | --------------------------------------------------------------------------- |
| id          | number    | no need to provide it when creating projects, the database will generate it |
| name        | string    | required.                                                                   |
| description | string    | required.                                                                   |
| completed   | boolean   | used to indicate if the project has been completed, not required            |

#### Actions

| Field       | Data Type | Metadata                                                                                         |
| ----------- | --------- | ------------------------------------------------------------------------------------------------ |
| id          | number    | no need to provide it when creating posts, the database will automatically generate it.          |
| project_id  | number    | required, must be the id of an existing project.                                                 |
| description | string    | up to 128 characters long, required.                                                             |
| notes       | string    | no size limit, required. Used to record additional notes or requirements to complete the action. |
| completed   | boolean   | used to indicate if the action has been completed, not required                                  |

### Database Persistence Helpers

The `/data/helpers` folder includes files you can use to manage the persistence of _project_ and _action_ data. These files are `projectModel.js` and `actionModel.js`. Both files publish the following api, which you can use to store, modify and retrieve each resource:

**All these helper methods return a promise. Remember to use .then().catch() or async/await.**

-   `get()`: resolves to an array of all the resources contained in the database. If you pass an `id` to this method it will return the resource with that id if one is found.
-   `insert()`: calling insert passing it a resource object will add it to the database and return the newly created resource.
-   `update()`: accepts two arguments, the first is the `id` of the resource to update, and the second is an object with the `changes` to apply. It returns the updated resource. If a resource with the provided `id` is not found, the method returns `null`.
-   `remove()`: the remove method accepts an `id` as it's first parameter and, upon successfully deleting the resource from the database, returns the number of records deleted.

The `projectModel.js` helper includes an extra method called `getProjectActions()` that takes a _project id_ as it's only argument and returns a list of all the _actions_ for the _project_.

We have provided test data for all the resources.

**Please ignore any terminal warnings about returning() not supported by SQLite.**

## Stretch Goal

-   Use `create-react-app` to create an application in a separate folder (outside the API project folder). Name it anything you want.
-   From the React application show a list of all _projects_ using the API you built.
-   Add functionality to show the details of a project, including its actions, when clicking a project name in the list. Use React Router to navigate to a separate route to show the project details.
-   Add styling!
