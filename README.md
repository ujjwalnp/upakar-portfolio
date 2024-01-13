# Portfolio Website Project

Welcome to the Portfolio Website project! This project is designed to be a hassle-free solution for creating and managing personal portfolio website without the need to touch any code. The backend server and database are managed through an admin panel, while the frontend showcases portfolio.

## Technologies Used

1. **Client Side:**
   - React.js
   - React Redux

2. **Server Side:**
   - Express.js

3. **Database:**
   - MongoDB

4. **Runtime Environment:**
   - Node.js

## Features
- **Portfolio Page:**
  - A user-friendly and visually appealing portfolio page.
  - Dynamically fetches data from the MongoDB database to showcase projects and skills.
  - Responsive design to ensure an optimal viewing experience on various devices.

- **Admin Panel:**
  - Easily update and manage portfolio content without touching any code.
  - Add, edit, or remove projects, skills, and other portfolio details.
  - Secure authentication ensures only authorized users can access the admin panel.


## Getting Started

To get started with your portfolio website, follow these steps:

1. **Clone the Repository:**
   ```sh
   git clone [repository-url]
    ```
    
2. **Install Dependencies:**
   ```sh
        cd <repo-name>/client
        yarn install
        cd ../server
        yarn install
    ```
3. **Create .env File:**
    - Create a .env file in the root directory based on the provided .env-example file.

4. **Configure MongoDB:**
    - Set up a MongoDB database and update the connection details in the server's configuration.

5. **Start the Application:**
    ```sh
        yarn start
        cd ../client
        yarn start
    ```
6. **Access Admin Panel:**
    - Navigate to the admin panel and log in using your credentials.
    - Update your portfolio details effortlessly.

7. **View Your Portfolio:**
    - Visit your portfolio page to see the changes reflected in real-time.

## Contributing
If you have suggestions or want to contribute to the development of this project, please feel free to open an issue or submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

```sh
This addition emphasizes the importance of creating a `.env` file and provides a reference to the `.env-example` file for users to follow.
```