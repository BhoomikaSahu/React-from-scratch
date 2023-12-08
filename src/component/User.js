import React from "react";

class Child extends React.Component{
    constructor(props) {
        super(props);
        // console.log('Child constructor');
        this.state = {
            count1: 1,
        }
    }
    // componentDidMount() {
    //     console.log(this.props.name + ' Child componentDidMount');
    // }
    render() {
        // console.log('Child render');
        return (
            <>
                <div><img src={this.props.avatar_url} /></div>
                <div>Name: {this.props.name}</div>
                <div>Address: {this.props.address}</div>
            </>
        )
    }
}

export default Child;