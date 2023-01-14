import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class Admin extends Component {
    static displayName = Admin.name;

    constructor(props) {
        super(props);
        this.state = { products: [], loading: true };
    }

    componentDidMount() {
        this.ProductData();
    }

    static renderProductTable(products) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>DescrLi</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>ImgUrl</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product =>
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>{product.descrLi}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.imgUrl}</td>
                            <td>
                                <Button color="success" className="mt-3">Add</Button>
                                <Button color="primary" className="mt-3">Edit</Button>
                                <Button color="danger" className="mt-3">Delit</Button>

                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Admin.renderProductTable(this.state.products);

        return (
            <div>
                <h1 id="tabelLabel" >Таблица товаров</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async ProductData() {
        const response = await fetch('/api/product/GetProductsAsync');
        const data = await response.json();
        this.setState({ products: data, loading: false });
    }
}