import React, { Component } from 'react'
import { Dropdown, Menu ,Button,Pagination, Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'

export default class MenuExampleVerticalDropdown extends Component {


  render() {
    let data=this.props.data
    if (data)  {
return (
  <div>
  <Button floated="right" style={{margin:0}} onClick ={()=> this.props.addlocation()}>Add Location</Button>
  <Table celled style={{marginTop:0}}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>No</Table.HeaderCell>
        <Table.HeaderCell>Location</Table.HeaderCell>
        <Table.HeaderCell>OPtions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {data.map((item,index) => {
          return (
            <Table.Row>
              <Table.Cell>{index}</Table.Cell>
              <Table.Cell>{item.location_name}</Table.Cell>
              <Table.Cell>
                <Button basic color="orange" onClick={()=>

                  this.props.edit(item.location_id)}>Edit</Button>
                <Button basic color="red" onClick={()=> this.props.delete(item.location_id)}>Delete</Button>
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


  </Table>
  <Grid>
  <Grid.Column width={14}>

      <Pagination floated="right" defaultActivePage={this.props.activePage} totalPages={10} onPageChange={this.props.handlePaginationChange} />

  </Grid.Column>
  </Grid>
</div>
   )
  }
  else {
    return null
  }
}
}
