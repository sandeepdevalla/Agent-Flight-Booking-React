import React from 'react';
import {Table} from 'react-bootstrap';

class  TableComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            flightData: []
        }
    }
    componentWillReceiveProps = (props) => {
        if(props.flightData) {
            this.setState({
                flightData: props.flightData
            })
        }
    }
    
    render() {
        const {flightData} = this.state;
        if (flightData.length) {
            return (
                <>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Flilght No</th>
                                <th>Airline Name</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Duration</th>
                                <th>No of Stops</th>
                            </tr>
                        </thead>
                        <tbody>
                            { flightData.map((flightInfo, index) => {
                                return <tr key ={index}>
                                    {Object.keys(flightInfo).map((key, tdIndex) => {
                                        return <td key={tdIndex}>{flightInfo[key]}</td>
                                    })}
                                </tr>
                            })}
                        </tbody>
                    </Table>
                    {/* { <Pagination>{flightData}</Pagination>} */}
                </>
                );
        } else {
            return <div>Please fill the above required details for available flights or flights not found for the searched name </div>
        }
    }
}

export default TableComponent;