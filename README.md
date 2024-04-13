

# Node.js Hall Booking Details

This Node.js project provides a backend API for managing hall booking details. It allows users to view available rooms, create new rooms, book rooms, and retrieve booking information.

## Features

- **View All Room Details**: Users can access information about all available rooms, including their names, statuses, amenities, seating capacity, and price per hour.
- **Create New Rooms**: Admin users can create new rooms by providing details such as room name, status, amenities, seating capacity, and price per hour.
- **Book Rooms**: Users can book available rooms by providing their name, booking date, arrival time, departure time, and the ID of the room they want to book.
- **Retrieve Booked Room Data**: Users can retrieve information about all booked rooms, including booking IDs, customer names, booking dates, arrival times, departure times, and booking statuses.
- **Retrieve Customer Booking Data**: Users can retrieve data about all customers who have booked rooms, including customer names, booked room IDs, booking dates, arrival times, and departure times.
- **Retrieve Booking Counts**: Users can retrieve booking counts for each customer along with their booking details.

## Technologies Used

- **Node.js**: Backend JavaScript runtime environment for building scalable and efficient server-side applications.
- **Express.js**: Web application framework for Node.js used to build RESTful APIs.
- **MongoDB**: NoSQL database used to store room and booking information.
- **Postman**: API development environment used for testing and debugging API endpoints.
- **Cors**: Middleware for Express.js used to enable Cross-Origin Resource Sharing (CORS) for HTTP requests.
- **ES6+**: Modern JavaScript features used for writing clean and concise code.
- **Nodemon**: Utility that monitors for changes in your Node.js application and automatically restarts the server.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/node-hall-booking-details.git
   ```

2. Navigate to the project directory:

   ```bash
   cd node-hall-booking-details
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

5. The server should now be running on `http://localhost:4000`.

## API Endpoints

- **GET /hallapi/allroomdetails**: Retrieve all room details.
- **POST /hallapi/createroom**: Create a new room.
- **POST /hallapi/bookingroom**: Book a room.
- **GET /hallapi/bookedroomdata**: Retrieve booked room data.
- **GET /hallapi/allcustomersbookeddata**: Retrieve data of booked customers and rooms.
- **GET /hallapi/customerbookingcount**: Retrieve booking counts and room data for booked customers.

## Contributors

- John Doe [@johndoe](https://github.com/johndoe)
- Jane Smith [@janesmith](https://github.com/janesmith)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

