import React from 'react';
import {Spinner} from 'react-bootstrap';

import Filter from '../CommonComponents/FilterComponent/FilterComponent';
import TableComponent from '../CommonComponents/TableComponent/TableComponent';

class  Dashboard extends React.Component {
    bufferData = [];
    constructor(props) {
        super(props);
        this.state = {
            filterData: {},
            flightData: [], 
            loading: false
        }
    }
    getFilterData = (data) => {
        this.setState({
            filterData: data,
            loading: true
        })
        setTimeout(() => {
            this.setState({
                loading: false
            })
            fetch('schemaData.json')
            .then(response => response.json())
            .then(data =>  {
                this.setState({
                    flightData : data.flightData
                });
                this.bufferData = data.flightData;
            })
        }, 3000);
    }
    filterData = (value) => {
        const bufferData = [...this.bufferData];
        const filterData = bufferData.filter(row => {
            return row.AirName.toLowerCase().includes(value);
        })
        this.setState({'flightData': filterData});
    }
    render() {
        function GetLoader ()  {
            return <Spinner animation="grow" />
           
        }
        return (
                <div className="flex-container">
                   <Filter getFilterData={this.getFilterData} getSearchData={this.filterData}> </Filter>
                   {this.state.loading ? <GetLoader /> : null}
                   <TableComponent flightData={this.state.flightData}> </TableComponent>
                </div>
            );
    }
}

export default Dashboard;