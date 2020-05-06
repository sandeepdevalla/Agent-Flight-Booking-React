import React from 'react';
import {Container,Row, Col} from 'react-bootstrap';
import {Form, Button}  from 'react-bootstrap';


import './FilterComponent.css';

class  Filter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            places: [],
            validated: false,
            filterData: {
                sourceCity: '',
                destinationCity: '',
                TravelDate: new Date().toString(),
                ReturnDate: new Date()
            }
        };
    }
    componentDidMount() {
        fetch('schemaData.json')
        .then(response => response.json())
        .then(data =>  {
            this.setState({
                places : data.places
            });
        })
    }
    getPlaces = (id) => {
        const places = [...this.state.places];
        const options = places.map((place, index) => {
            return <option key={index} value={place.name} />
        })
        return <datalist id={id}> {options} </datalist>   
    }
    changeFilterValue = (event) => {
        const filterData = {...this.state.filterData};
        filterData[event.target.id] = event.target.value
        this.setState({
            filterData : filterData
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            this.setState({
                validated: false
            });
          event.stopPropagation();
          return;
        }
        this.setState({
            validated: true
        });
        this.props.getFilterData(this.state.filterData);
    };
    render() {
        return (
            <Container fluid className = "filter_container">
                <Row className='scroll_head'>
                    <Col>
                        <b>* Currently flights are running in the following cites only {this.state.places.map(place => place.name).join(', ')}</b>
                    </Col>
                </Row>

                <Form noValidate validated={this.validated} onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Col>
                        <Form.Group as={Col} controlId="sourceCity">
                            <Form.Label className="custome-field-label">Source City</Form.Label>
                            <Form.Control type = "text" list ="source" key = "sourceCity" placeholder="Source City" required value={this.state.filterData.sourceCity} onChange={this.changeFilterValue}/>
                            {this.getPlaces("source")}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="destinationCity" >
                            <Form.Label className="custome-field-label">Destination City</Form.Label>
                            <Form.Control type = "text" list ="destination" key="destinationCity" placeholder="Destination City" required value={this.state.filterData.destinationCity} onChange={this.changeFilterValue}/>
                            {this.getPlaces("destination")}
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="TravelDate" >
                            <Form.Label className="custome-field-label">Travel Date</Form.Label>
                            <Form.Control type="date" placeholder="Travel Date" required value={this.state.filterData.TravelDate} onChange={this.changeFilterValue}/>
                        </Form.Group>
                    </Col>
                    
                    <Col>
                        <Form.Group as={Col} controlId="ReturnDate" >
                                <Form.Label className="custome-field-label">Return Date</Form.Label>
                                <Form.Control type="date" placeholder="Return Date" defaultValue = {this.state.filterData.ReturnDate} required value={this.state.ReturnDate} onChange={this.changeFilterValue}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">
                            Search
                        </Button>
                    </Col>
                </Form.Row>
                </Form>
            </Container>
            );
    }
}

export default Filter;