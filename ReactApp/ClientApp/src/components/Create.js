import React, { Component } from 'react';
import {Form, FormGroup, FormText,Label, Input,Button  } from 'reactstrap';

export class Create extends Component {
    static displayName = Create.name;

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            descrLi: '',
            description: '',
            price: 0,
            quantity: '',
            imgUrl: ''

        }

      this.onInputChange = this.onInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.sendProductData();
    }
    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>
                        Title
                    </Label>
                    <Input type="text" placeholder="Title" value={this.state.title} name="title" onChange={this.onInputChange}/>
                    <FormText>
                    </FormText>
                </FormGroup>
           
                <FormGroup>
                    <Label>
                    </Label>
                    <Input type="text" placeholder="DescrLi" value={this.state.descrLi} name="descrLi" onChange={this.onInputChange}/>
                    <FormText>
                    </FormText>
                </FormGroup>

                <FormGroup>
                    <Label>
                    </Label>
                    <Input type="text" placeholder="Description" value={this.state.description} name="description" onChange={this.onInputChange}/>
                    <FormText>
                    </FormText>
                </FormGroup>

                <FormGroup>
                    <Label>
                    </Label>
                    <Input type="number" placeholder="Price" value={this.state.price} name="price" onChange={this.onInputChange}/>
                    <FormText>
                    </FormText>
                </FormGroup>

                <FormGroup>
                    <Label>
                    </Label>
                    <Input type="text" placeholder="Quantity" value={this.state.quantity} name="quantity" onChange={this.onInputChange}/>
                    <FormText>
                    </FormText>
                </FormGroup>
                <FormGroup>
                    <Label>
                    </Label>
                    <Input type="text" placeholder="ImgUrl" value={this.state.imgUrl} name="imgUrl" onChange={this.onInputChange} />
                    <FormText>
                    </FormText>
                </FormGroup>
                <Button color="success" className="mt-3 text-white">Add</Button>
            </Form>
        );
    }
    async sendProductData() {
        debugger;
        const formData = new FormData();
        formData.append("title", this.state.title);
        formData.append("descrLi", this.state.descrLi);
        formData.append("description", this.state.description);
        formData.append("price", this.state.price);
        formData.append("quantity", this.state.quantity);
        formData.append("imgUrl", this.state.imgUrl);
      
        const response = await fetch('/api/product/CreateAsync',
            {
                method: 'POST',
                body: formData
            });

        const data = await response.json();
       
    }
}
