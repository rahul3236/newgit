import React, { Component } from 'react'
import { Dropdown, Menu , Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'

export default class MenuExampleVerticalDropdown extends Component {
  state = { activeItem: 'account' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Grid>
        <Grid.Column width={16}>
          <Segment>2</Segment>
          </Grid.Column>
          </Grid>
    )
}
}