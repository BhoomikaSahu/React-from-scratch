import React from "react";
import User from "./User";
import Child2 from "./Child2";

class About extends React.Component{
    constructor(props) {
        super(props) 
        // console.log("Parent constructor");
        this.state = {
            userInfo: {
                name: 'dummy',
                avatar_url: 'https://dummy',
                location: 'Raisen'
            }
        }
    }
    async componentDidMount() {
        // console.log('Parent Component Did Mount');
        const fetchData = await fetch("https://api.github.com/users/BhoomikaSahu");
        const jsonData = await fetchData.json();
        this.setState({
            userInfo: {
                name: jsonData.name,
                avatar_url: jsonData.avatar_url,
                location: jsonData.location
            }
        })
       
    }
    render() {
        // console.log("Parent render");
        const {name, avatar_url, location} = this.state.userInfo;
        return (
            <>
                <h2>About Us</h2>
                <User name={name} avatar_url={avatar_url} address={location}/>
            </>
        )
    }
}

export default About;

/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update
 * 
 ****/