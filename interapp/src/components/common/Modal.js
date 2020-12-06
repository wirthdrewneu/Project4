import React from 'react';
import {Modal} from 'react-bootstrap';

export default function ModalPop({closePop, showModal, component, heading}) {
   
    return (
        <>
            <Modal 
                show={showModal}
                onHide={closePop}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >  
                <Modal.Header className="header-std" closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" >{heading}</Modal.Title>
                </Modal.Header> 
                <Modal.Body>{component}</Modal.Body>
                {/* <Modal.Footer> */}
                {/* <Button variant="secondary" onClick={closePop}>
                    Close
                </Button>
                <Button variant="primary" onClick={closePop}>
                    Save Changes
                </Button> */}
                {/* </Modal.Footer> */}
            </Modal>
        </>
    );
}