import {increment, decrement, incrementAsync} from "../../redux/actions/count";
import {connect} from "react-redux";
import React, {Component} from 'react';

class Count extends Component {
    increment = () => {
        const {value} = this.selectNumber
        this.props.increment(value * 1)
    }
    decrement = () => {
        const {value} = this.selectNumber
        this.props.decrement(value * 1)
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.increment(value * 1)
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNumber
        this.props.incrementAsync(value * 1, 1000)
    }

    render() {
        return (
            <div>
                <h1>This is Count Component, below person sum is {this.props.personCount}</h1>
                <h3>Current sum: {this.props.count}</h3>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>
                &nbsp;
                <button onClick={this.decrement}>-</button>
                &nbsp;
                <button onClick={this.incrementIfOdd}>increment if odd</button>
                &nbsp;
                <button onClick={this.incrementAsync}>async increment</button>
            </div>
        );
    }
}

// const mapStateToProps = state => ({count:state})
// const mapDispatchToProps = dispatch => ({
//         increment: number => dispatch(createIncrement(number)),
//         decrement: number => dispatch(createDecrement(number)),
//         incrementAsync: (number, time) => dispatch(createIncrementAsync(number, time)),
//     })

export default connect(
    state => ({
        count: state.count,
        personCount: state.person.length
    }),
    {
        increment,
        decrement,
        incrementAsync,
    }
    // dispatch => ({
    //     increment: number => dispatch(createIncrement(number)),
    //     decrement: number => dispatch(createDecrement(number)),
    //     incrementAsync: (number, time) => dispatch(createIncrementAsync(number, time)),
    // }),
)(Count)
