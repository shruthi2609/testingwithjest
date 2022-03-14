import axios from "axios"
const fetchUsers=async ()=>{
    const res=await axios.get("https://jsonplaceholder.typicode.com/users")
    return res
}
export default fetchUsers
