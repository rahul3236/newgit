import React, { Component } from 'react'
import { Dropdown, Menu ,Button,Pagination, Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'

export default class MenuExampleVerticalDropdown extends Component {


  render() {
    let data=this.props.data
    if (data)  {
return (
<Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Sale Code</Table.HeaderCell>
        <Table.HeaderCell>Phone</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>Delivery Status</Table.HeaderCell>
        <Table.HeaderCell>Payment Status</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {data.map((item,index) => {
          return (
            <Table.Row>
              <Table.Cell>{index}</Table.Cell>
              <Table.Cell>{item.sale_code}</Table.Cell>
              <Table.Cell>{JSON.parse(item.shipping_address).phone}</Table.Cell>
              <Table.Cell>{item.sale_datetime}</Table.Cell>
              <Table.Cell>{JSON.parse(item.payment_status)[0].status}</Table.Cell>
              <Table.Cell>{JSON.parse(item.delivery_status)[0].status}</Table.Cell>
              <Table.Cell>{item.payment_type}</Table.Cell>


              <Table.Cell>
                <Button basic color="orange" onClick={()=>

                  this.props.deliverystatus(item.location_id)}>Delivery Status</Button>
                <Button basic color="red" onClick={()=> this.props.delete(item.sale_id)}>Delete</Button>
              </Table.Cell>
              </Table.Row>
          )
      })
      }
      <Table.Row>

        <Table.Cell>
          <Label ribbon>First</Label>
        </Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>

    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
        <Pagination floated="right" defaultActivePage={this.props.activePage} totalPages={10} onPageChange={this.props.handlePaginationChange} />
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
   )
  }
  else {
    return null
  }
}
}
