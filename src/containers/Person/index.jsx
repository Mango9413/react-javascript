import React, {Component} from 'react';
import {nanoid} from "nanoid";
import {connect} from "react-redux";
import {addPerson} from "../../redux/actions/person";

class Person extends Component {
    addOn = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id: nanoid(), name, age}
        this.props.addPerson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {
        return (
            <div>
                <input ref={c => this.nameNode = c} type="text" placeholder="input name"/>
                <input ref={c => this.ageNode = c} type="text" placeholder="input age"/>
                <button onClick={this.addOn}>click to add</button>
                <h1>This is Person Component, above count sum is {this.props.count}</h1>
                <ul>
                    {
                        this.props.personArr.map((p) => {
                            return <li key={p.id}>{p.name}, {p.age}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default connect(
    state => ({
        personArr: state.person,
        count: state.count
    }),
    {addPerson},
)(Person)