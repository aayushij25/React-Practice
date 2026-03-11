import { useEffect, useState } from "react";

const User = ({name, location, contact}) => {
    const [count] = useState(0);
    const [count1] = useState(1);

    useEffect(()=> {
        console.log("USEEFFECT");
        const timer = setInterval(()=> {
            console.log("TIMER")
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("USEEFFECT RETURN");
        }
    }, []);
    useEffect(()=> {}, [count1]);

    console.log("RENDER");
    return (
        <div className="user-card">
            <div>
                <h1>Count: {count}</h1>
                <h1>Count1: {count1}</h1>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact: {contact}</h3>
            </div>   
        </div>
    );
}

export default User;