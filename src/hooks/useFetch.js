// mcbc-react\src\hooks\useFetch.js
import useSWR from 'swr'
import axios from 'axios'

// Create axios instance with the base URL from the environment variable
const axiosInstance = axios.create({
  baseURL: process.env.VITE_API_URL || 'http://localhost:1337',
})

const fetcher = (url) => axiosInstance.get(url).then((res) => res.data)

const useFetch = (url) => {
  const { data, error } = useSWR(url, fetcher)
  return { data, isLoading: !error && !data, isError: error }
}

export default useFetch
