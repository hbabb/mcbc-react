// mcbc-react\src\utils\axios.js
import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://your-strapi-app-url.com', // Replace with your Strapi app's URL
  headers: {
    'Content-Type': 'application/json',
  },
})

export default instance
