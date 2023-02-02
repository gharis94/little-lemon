import React,{useState} from 'react'


const initialState={
    date:'',
    time:'',
    guest:'',
    occasion:''

}

const Form = () => {
    const [state,setState]=useState(initialState);

    const handleChange=(e)=>{
        const {name,value}=e.target;
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <div>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={(e)=>handleChange(e)} name='date' value={state.date}/>
            <label htmlFor="res-time">Choose time</label>
            <select select id = "res-time "
            onChange ={(e) => handleChange(e)} name = 'time' value = {state.time}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={(e)=>handleChange(e)} name='guest' value={state.guest}/>
            <label htmlFor="occasion">Occasion</label>
            <select  id = "occasion" onChange = {(e) => handleChange(e)} name = 'occasion' value = {state.occasion}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <button type="submit">
                "Make Your reservation"
            </button>
        </form>
    
    </div>
  )
}

export default Form