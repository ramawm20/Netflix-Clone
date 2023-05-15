import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

function ModalMovie(props){
    
 return (
        <>
       
            <Modal show={props.showflag} onHide={props.hclose} >
                <Modal.Header closeButton>
                    <Modal.Title>{props.data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Hello
                   {/*  <Image src={props.clickedMeme.image_path} width='100%'></Image>
                    {props.clickedMeme.bottomtext} */}
                
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.hclose} >
                        Close
                    </Button>
                    <Button variant="primary" >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
   
export default ModalMovie;

   

