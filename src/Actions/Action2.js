import axios from "axios"
export default function Action2() {
    let url="https://fakestoreapi.com/users"
    return({
        type:"Action2",
        payload: await axios.get(url).then((res)=>res.data)
    })
}