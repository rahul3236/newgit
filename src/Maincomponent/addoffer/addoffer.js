import React, { Component } from 'react'
import { Dropdown, Menu ,Form,Input,Button, Grid,Segment  ,Header, Icon, Label,  Table} from 'semantic-ui-react'
import axios from 'axios'



export default class Location extends Component {
  constructor(props) {
      super(props);
      this.state={
        message:"",
        title:"",
        file:""
      }
  }

uploadToServer = (file) => {
  let data= new FormData()
  data.append('message', this.state.message)
  data.append('title',this.state.title)
  data.append("img", this.state.file)
  axios.post("http://localhost:5000/category/addcategory/",
  data,
  {headers:{ 'Content-Type': 'multipart/form-data'}}

)
}
  render() {

    return (
      <div>
               <Grid.Row>
               <Grid.Column>
               <Segment>
               <Form>
                   <Form.Input fluid label='Message' placeholder='Message' error required
                   value={this.state.message}
                   onChange={(event)=> this.setState({message:event.target.value})}
                  />
                   <Form.Input fluid label='Title' placeholder='Title' error
                    value={this.state.title} onChange={(event)=> this.setState({title:event.target.value})}

                    />
                   <Form.Input fluid label='Banner Image' type="file"
                   onChange={(file)=> this.setState({file:file})}
                  />

                   <Button light onClick={()=> this.uploadToServer()}>SUbmit</Button>
                   </Form>


               </Segment>

               </Grid.Column>
               </Grid.Row>
      </div>
    )
}
}
