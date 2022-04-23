import React, {Component} from 'react';
import {nanoid} from "nanoid";

class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(), name, age}
        console.log(personObj)
    }
    render() {
        return (
            <div>
                <input ref={c=> this.nameNode = c} type="text" placeholder="input name"/>
                <input ref={c=> this.ageNode = c} type="text" placeholder="input age"/>
                <button onClick={this.addPerson}>click to add</button>
                <ul>
                    <li>name1</li>
                    <li>name1</li>
                    <li>name1</li>
                </ul>
            </div>
        );
    }
}

export default Person;