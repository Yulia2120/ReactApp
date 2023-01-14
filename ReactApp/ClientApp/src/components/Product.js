import React, {Component} from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Row, Col } from 'reactstrap';
import './Product.css';

export class Product extends Component {
    static displayName = Product.name;

    constructor(props) {
        super(props);
        this.state = { products: [], loading: true};
    }

    componentDidMount() {
        this.ProductData();
    }

        //getProduct = async () => {

        //    const [prod, setProd] = useState([])
        //    const response = await fetch("/api/product/GetAsync");
        //    if (response.ok) {
        //        const data = await response.json();
        //        console.log(data)
        //        setProd(data)
        //    }
        //    useEffect(() => {
        //        getProduct();
        //    }, [])

    static renderProductCard(products)
            {
                return (
                    <Row className="mt-5">
                        <Col className="col-4">
                  
                        {
                            products.map((item => (
                                        <Card key={item.prodId}
                                    style={{
                                        width: '18rem'
                                    }}>

                                    <img
                                        alt="Sample"
                                        src={item.imgUrl} />
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            {item.title}
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6">
                                            {item.descrLi}
                                        </CardSubtitle>
                                        <CardText>
                                            {item.description}
                                        </CardText>
                                        <CardText>
                                            {item.price} грн
                                        </CardText>
                                        <Button color="success">
                                            В корзину
                                        </Button>
                                    </CardBody>
                                        </Card>
                                  
                            ))
                        )}
                                        </Col>

                                    </Row>
                 

                )
    }
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Product.renderProductCard(this.state.products);
        return (
            <div>
                <h1>Все товары</h1>
                {contents}
            </div>
        );
    }

    async ProductData() {
        const response = await fetch('/api/product/GetProductsAsync');
        const data = await response.json();
        this.setState({ products: data, loading: false  });
    }
        }
    