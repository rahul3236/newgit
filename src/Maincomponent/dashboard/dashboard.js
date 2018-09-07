import React, { Component } from 'react'
import { Dropdown, Menu , Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'

export default class Dashboard extends Component {
  state = { activeItem: 'account' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <h1>inside</h1>

    )
}
}