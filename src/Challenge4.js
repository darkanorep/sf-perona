import React, {useState}from 'react'

function Challenge4() {
    let id = Math.random();
    let [username, setUserName] = useState('');
    let [fullname, setFullName] = useState('');
    let [age, setAge] = useState('');
    let [print, setPrint] = useState(false);
    let [list, setList] = useState([]);

    let submitForm = (e) => {

        e.preventDefault();

        let newInfo = {
            id: id,
            username: username,
            fullname: fullname,
            age: age
        }

        setList([newInfo]);
        setPrint(true);
    }

    
  return (
    <div>
        <h1>4. Submit a form</h1>
        <form onSubmit={submitForm}>
            <div>
                <label htmlFor="userName">
                Username:
                    <input type="text" value={username} onChange={(e) => setUserName(e.target.value)}/>
                </label>
            </div>
            <br />
            <div>
                <label htmlFor="fullName">
                FullName:
                    <input type="text" value={fullname} onChange={(e) => setFullName(e.target.value)}/>
                </label>
            </div>
            <br />
            <div>
                <label htmlFor="age">
                Age:
                    <input type="text" value ={age} onChange={(e) => setAge(e.target.value)}/>
                </label>
            </div>
            <br />
            <button>Submit</button>
        </form>
        {
            print?
            <h4>Request Sent to DB with below request data</h4>
            :null
        }
        {list.map((list) => (
        <ul key={list.id}>
            <li>UserName: {list.username}</li>
            <li>FullName: {list.fullname}</li>
            <li>Age: {list.age}</li>
        </ul>
        ))}

    </div>
  )
}

export default Challenge4