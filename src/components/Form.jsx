/* eslint-disable no-unused-vars */
import {useState} from 'react';

const Form = () => {

    const [name,setName] = useState("");
    const [address,setAddress] = useState("");

    const trackName = (event) => {
        setName(event.target.value)
    }
    const trackAddress = (event) => {
        setAddress(event.target.value)
    }

    const showData = (event) => {
        event.preventDefault();
        
        const data = {
            name,
            address
        }
        console.log(data);
    }

  return (
    <form onSubmit={showData} >
        <input type="text" onChange={trackName} placeholder="Name" />
        <input type="text" onChange={trackAddress} placeholder="Address" />
        <button className="submit">Submit</button>
    </form>
)
}

export default Form