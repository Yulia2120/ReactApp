import React, { Component } from 'react';
import { Form, FormGroup, FormText, Label, Input, Button } from 'reactstrap';

export class Edit extends Component {
    static displayName = Edit.name;

    constructor(props) {
        super(props);

    }

    render() {
        return (

            <Form>
                <FormGroup>
                    <Label>
                    </Label>
                    <Input />
                    <FormText>
                    </FormText>
                </FormGroup>

                <FormGroup>
                    <Label>
                    </Label>
                    <Input />
                    <FormText>
                    </FormText>
                </FormGroup>

                <FormGroup>
                    <Label>
                    </Label>
                    <Input />
                    <FormText>
                    </FormText>
                </FormGroup>

                <FormGroup>
                    <Label>
                    </Label>
                    <Input />
                    <FormText>
                    </FormText>
                </FormGroup>

                <FormGroup>
                    <Label>
                    </Label>
                    <Input />
                    <FormText>
                    </FormText>
                </FormGroup>
                <Button color="success" className="mt-3 text-white">Update</Button>
            </Form>
        );
    }

}