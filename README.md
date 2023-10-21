## Project Title

Spaceflight Details

## Project Description

- Displaying all spaceflight details which is comes from third party API.
- User can search data by rocket name.
- Also filter by launch status(Failure, Success), upcoming status.
- Implemented pagination which shows per page 9 items. also implemented If the user reloads the page then show the list according to the page number.
- A Date filter is also implemented but its not working now because of unclear information about it.

## How to run this Project

First clone the git repository using this command

```bash
git clone https://github.com/Arif-hossaian/Project-Spaceflight.git
```

Then install npm or yarn to include node modules in this project

```bash
npm install
# or
yarn install
```

After installing node modules, create a .env file named as .env.local file and paste whatever is inside the .env.example file. Without doing this API will not work and that project will not work also.

```bash
.env.local
```

After setup .env.local file, to run this project locally you have to run this command

```bash
npm start
# or
yarn start
```

## Technologies Used

- React JS(Functional component)
- Context API
- Typescript
- Tailwind CSS
- Scss
