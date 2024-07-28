// mcbc-react\src\hooks\useFetch.js
import useSWR from 'swr'
import axios from 'axios'

// Create axios instance with the base URL from the environment variable
const axiosInstance = axios.create({
  baseURL: 'https://mcbc-strapi-8b9bb.ondigitalocean.app/',
})

const fetcher = (url) => axiosInstance.get(url).then((res) => res.data)

const useFetch = (url) => {
  const { data, error } = useSWR(url, fetcher)
  return { data, isLoading: !error && !data, isError: error }
}

export default useFetch
