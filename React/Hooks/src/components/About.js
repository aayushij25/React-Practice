import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';
import UserContext from '../utils/UserContext';

class About extends Component {
    constructor(props) {
        super(props);
        // console.log("Parent Constructor");
    }

    componentDidMount() {
        // console.log("Parent Component Did Mount");
    }

    render () {
        // console.log("Parent Render");
        return (
            <div>
                <h1 className='about'>About Us</h1>
                {/* <User name={"Aayushi Jaiswal"} location={"India"} contact={"aj25300jaiswal@gmail.com"} /> */}
                <UserClass name={"First"} location={"US"} contact={"jane13doe@gmail.com"} />
                <UserContext.Consumer>
                    {({loggedInUser}) => <h1 style={{padding:'20px'}}>{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
        );
    }
}

export default About;