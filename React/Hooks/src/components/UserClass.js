import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);

        console.log("Child Constructor");

        this.state = {
            count : 0,
            count2: 2,
            userData: {
                name: "Dummy",
                location: "Default"
            }
        }
    }

    async componentDidMount() {
        console.log("Child Component Did Mount");

        //API Calls
        const data = await fetch("https://api.github.com/users/aayushij25");
        const json = await data.json();
        console.log(json);
        this.setState({
            userData: json,
        });

        this.timer = setInterval(()=>{
            console.log("Timer");
        },1000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component Did Update");
        if(this.state.count !== prevState.count){}
        if(this.state.count2 !== prevState.count2){}
    }

    componentWillUnmount() {
        console.log("Component Will Unmount");
        clearInterval(this.timer);
    }

    render() {
        console.log("Child Render");
        // const {name, location, contact} = this.props;
        const {name, location, avatar_url, company, email, public_repos} = this.state.userData;
        return (
            <div className="user-card">
                {/* <h1>Count: {count}</h1>
                <h1>Count2: {count2}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1
                    })
                }} >Count Increment</button> */}
                <img className="userclass-img" src={avatar_url} />
                <div>
                    <h2>Name: {name}</h2>
                    <h3>Location: {location}</h3>
                    <h3>Company: {company}</h3>
                    <h3>Email: {email}</h3>
                    <h3>Public Repositories: {public_repos}</h3>
                </div>
            </div>
        );
    }
}

export default UserClass;