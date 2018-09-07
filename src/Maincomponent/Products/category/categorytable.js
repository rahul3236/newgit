import React, { Component } from 'react'
import { Dropdown,Image, Menu ,Button,Pagination, Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'

export default class MenuExampleVerticalDropdown extends Component {


  render() {
    let data=this.props.data
    if (data)  {
return (
  <div>
  <Header><Button onClick={()=>this.props.addcategor()}>Create Category</Button></Header>
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>No</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Banner</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
        </Table.Row>
    </Table.Header>

    <Table.Body>
      {data.map((item,index) => {
          return (
            <Table.Row>
              <Table.Cell>{index}</Table.Cell>
              <Table.Cell>{item.category_name}</Table.Cell>
              <Table.Cell><Image size="tiny"  src="https://fooderia.in/uploads/category_image/category_37.jpg?random=1536191236579" /></Table.Cell>


              <Table.Cell>
                <Button basic color="orange" onClick={()=>

                  this.props.edit(item.category_id)}>Edit</Button>
                <Button basic color="red" onClick={()=> this.props.delete(item.category_id)}>Delete</Button>
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
  </div>
   )
  }
  else {
    return null
  }
}
}
