import React, { Component } from 'react';

export class Create extends Component {
    static displayName = Create.name;


    render() {
        return (
            <div>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                </form>
            </div>
        );
    }
}