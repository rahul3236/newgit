import React , {Component} from 'react'
import { Button, Input, Form } from 'semantic-ui-react'
import {Modal} from 'react-bootstrap'

export default class ModalS extends Component {
    constructor(props) {
        super(props);
        this.state= {
            show:true,
            categoryName:"",
            categoryDescription:"",
            categoryBanner:""
        }
    }

handleFile = (file) => {
  this.setState({categoryBanner:file})
}

    render() {
       return (
           <Modal show={this.state.show} onHide={() =>this.props.hidemodal()}>
               <Modal.Header closeButton>
                 <Modal.Title>Add Category</Modal.Title>
               </Modal.Header>
               <Modal.Body>
               <Form>
               <Form.Input label="Sub Category "  placeholder='Sub Category'
                    onChange={(event)=>this.setState({categoryName:event.target.value})}
                />

               <Form.Select label="Category"
               onChange={(event)=>this.setState({categoryDescription:event.target.value})}
                />
                <Form.Input  type="file" label="Banner" placeholder='Category Banner'
                    onChange={this.handleFile}
                    />
                </Form>
               </Modal.Body>
               <Modal.Footer>
                 <Button onClick={() => this.props.hidemodal()}>Close</Button>
                 <Button onClick={()=>
                   this.props.addcategoryserver(this.state.categoryName,this.state.categoryDescription, this.state.categoryBanner)
                 }>Save</Button>
               </Modal.Footer>
             </Modal>

)
}
}
