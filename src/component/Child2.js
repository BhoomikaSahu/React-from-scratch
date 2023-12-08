import React from "react";

class Child2 extends React.Component{
    constructor(props) {
        super(props);
        console.log('Child2 constructor');
        this.state = {
            count1: 1,
        }
    }
    componentDidMount() {
        console.log(this.props.name + ' Child2 componentDidMount');
        this.timer = setInterval(() => {
            console.log('Component Did Mount');
        }, 1000);
    }
    componentDidUpdate() {
        console.log('Component Did Update');
    }
    componentWillUnmount() {
        clearInterval(this.timer);
        console.log('Component Will Unmount');
    }
    render() {
        console.log('Child2 render');
        return (
            <>
                <div>Count2: {this.state.count1}</div>
                <button onClick={() => this.setState({
                    count1: this.state.count1+1,
                })}>count1</button>
                <div>Name: {this.props.name}</div>
                <div>Contact: {this.props.contact}</div>
                <div>Address: {this.props.address}</div>
            </>
        )
    }
}

export default Child2;