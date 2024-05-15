import './App.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Viewlist from './Components/Viewlist';
import Dropdown from 'react-bootstrap/Dropdown';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addDetailsAPI } from './Services/AllAPI';


function App() {
  
  const [show, setShow] = useState(false);
  const [name,setName] = useState({
    username:"", email:"",empstatus:""
  })
  console.log(name);

  const handleUpload = async ()=>{
    const {username ,email , empstatus} = name
    if(username && email && empstatus ){
        console.log("api call")
        try{
            const result = await addDetailsAPI(name)
            console.log(result);
            if(result.status>=200 && result.status<300){
                console.log(result.data);
                setName({username:"",email:"",empstatus:""})
                handleClose()
            }else{
                alert(result.response.data)
            }
        }catch(err){
            console.log(err);
        }
    }else{
        alert("Please fill the form completely");
    }
}

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="conatainer">
        <div className='Emp-management justify-content-center align-items-center mt-5'>
          <h1 style={{}} className='text-center'>EMPLOYEE MANAGEMENT PORTAL</h1>
         <div className='text-center mt-5'>
            <button onClick={handleShow} className='btn btn-primary ms-3 rounded-4'>Add Employee</button>
         </div>
        </div>
        
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className='d-flex flex-column w-100'>

            <FloatingLabel controlId="floatingPassword" label="Username" className='mt-3'>
              <Form.Control onChange={e=>setName({...name,username:e.target.value})} type="text" placeholder="Username" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3 mt-3">
              <Form.Control onChange={e=>setName({...name,email:e.target.value})} type="email" placeholder="name@example.com" />
            </FloatingLabel>
            
            <Dropdown>
              <Dropdown.Toggle  id="dropdown-basic">
                Employee Status
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1"  onClick={e=>setName({...name,empstatus:"Active"})}>Active</Dropdown.Item>
                <Dropdown.Item href="#/action-2"  onClick={e=>setName({...name,empstatus:"InActive"})}>Inactive </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Clear
          </Button>
          <Button onClick={handleUpload} variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>

      <Viewlist/>
    </>
  )
}

export default App
