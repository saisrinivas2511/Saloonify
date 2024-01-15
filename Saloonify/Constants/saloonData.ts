// saloonData.js
const saloonData = [
  {
    id: 1,
    name: "Elegant Cuts",
    rating: 4.5,
    city: "New York",
    image: require('../assets/saloon1.jpg'),
    appointments: [
      { date: "2024-01-15", time: "10:00 AM", booked: false },
      { date: "2024-01-15", time: "2:00 PM", booked: true },
      { date: "2024-01-16", time: "11:30 AM", booked: false },
      // Add more appointment entries as needed
    ],
  },
  {
    id: 2,
    name: "Chic Styles",
    rating: 4.2,
    city: "Los Angeles",
    image: require('../assets/saloon2.jpg'),
    appointments: [
      { date: "2024-01-15", time: "11:00 AM", booked: false },
      { date: "2024-01-15", time: "3:00 PM", booked: false },
      { date: "2024-01-16", time: "2:30 PM", booked: true },
      // Add more appointment entries as needed
    ],
  },
  {
    id: 3,
    name: "Urban Trends",
    rating: 4.8,
    city: "Chicago",
    image: require('../assets/saloon3.jpg'),
    appointments: [
      { date: "2024-01-15", time: "9:00 AM", booked: true },
      { date: "2024-01-15", time: "1:00 PM", booked: false },
      { date: "2024-01-16", time: "10:00 AM", booked: false },
      // Add more appointment entries as needed
    ],
  },
  {
    id: 4,
    name: "Glamour Haven",
    rating: 4.0,
    city: "Miami",
    image: require('../assets/saloon4.jpg'),
    appointments: [
      { date: "2024-01-15", time: "12:00 PM", booked: true },
      { date: "2024-01-15", time: "4:00 PM", booked: false },
      { date: "2024-01-16", time: "3:30 PM", booked: false },
      // Add more appointment entries as needed
    ],
  },
  // Add more saloon entries as needed
];

export default saloonData;
