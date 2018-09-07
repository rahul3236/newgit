import React, { Component } from 'react'

import { Dropdown, Loader, Image,Menu ,Button,Pagination, Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'

export default class MenuExampleVerticalDropdown extends Component {


  render() {
    let data=this.props.data
    if (data)  {
return (
  <div>
<Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>User</Table.HeaderCell>
        <Table.HeaderCell>Feedback Type</Table.HeaderCell>
        <Table.HeaderCell>Feedback Date</Table.HeaderCell>
        <Table.HeaderCell>Order No</Table.HeaderCell>
        <Table.HeaderCell>Calling Time</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>Option</Table.HeaderCell>
        </Table.Row>
    </Table.Header>

    <Table.Body>

      {data.map((item,index) => {
          return (
            <Table.Row>
              <Table.Cell> <Label ribbon>First</Label>{index}</Table.Cell>
              <Table.Cell>{item.user}</Table.Cell>
              <Table.Cell>{item.feedback_type}</Table.Cell>
              <Table.Cell>{item.feedback_date}</Table.Cell>
              <Table.Cell>{item.order_no}</Table.Cell>
              <Table.Cell>{item.callingtime}</Table.Cell>
              <Table.Cell>{item.message}</Table.Cell>
              <Table.Cell>
                <Button basic color="red" onClick={()=> this.props.delete(item.feedback_id)}>Delete</Button>
              </Table.Cell>
              </Table.Row>
          )
      })
      }

    </Table.Body>






  </Table>
    <Pagination floated="right" defaultActivePage={this.props.activePage} totalPages={10} onPageChange={this.props.handlePaginationChange} />
    </div>
   )
  }
  else {
    return (
      <Segment>
    <Loader active />

    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
  </Segment>
    )
  }
}
}
