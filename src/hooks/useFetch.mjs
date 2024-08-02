import useSWR from 'swr'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://mcbc-strapi-8b9bb.ondigitalocean.app/',
})

const fetcher = (url) => axiosInstance.get(url).then((res) => res.data)

const useFetch = (url) => {
  const { data, error } = useSWR(url, fetcher)
  console.log('Fetching URL:', url)
  if (error) console.error('Fetching Error:', error)
  if (data) console.log('Fetched Data:', data)
  return { data, isLoading: !error && !data, isError: error }
}

export default useFetch
