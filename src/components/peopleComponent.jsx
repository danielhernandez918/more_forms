import React, {useState} from "react";
const PersonInfo = props => {    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         age: this.props.age
    //     };
    // }
    const [age, setAge] = useState(props.age)
    const {firstName, lastName, hairColor} = props;
    return (            
        <>                
            <h1>{lastName},{firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={()=>setAge(age+1)}>Birthday button for {firstName} {lastName}</button>
        </>        
    );    
}
export default PersonInfo;