// mcbc-react\src\utils\fetcher.js
import axios from './axios'

const fetcher = async (url) => {
  const response = await axios.get(url)
  return response.data
}

export default fetcher
