import { useEffect, useState } from 'react';

const Form = (props) => {
  const [buttond, setButtond] = useState([true])

  useEffect(()=>{
    if(props.age !== '' && props.name !== '' && props.email !== ''){
      setButtond(false);
    }
  },[props.age, props.name, props.email])

  return (
    <div>
      <h1>Information Form</h1>
      <h4>Please enter your info below...</h4>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Your
           Name"
          value={props.name}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          value={props.email}
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Your Age"
          value={props.age}
          onChange={props.handleChange}
        />
      </form>
      <div>
        <button onClick={props.reset}>Back</button>
        {/* If you want your button to go back, you better hook up a method to it's onClick property here! */}
        <button disabled={buttond} onClick={props.incrementPage}>Next</button>
        {/* This button has already been hooked up for you, just gotta pass the prop to this component! */}
      </div>
    </div>
  )
}

export default Form
