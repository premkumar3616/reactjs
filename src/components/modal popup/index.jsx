import React, {useState} from 'react'
import './styles.css';
import Modal from './modal';

function ModalTest() {
const [showModal, setShowModal] = useState(false);

function handletogglemodal() {
  setShowModal(!showModal);
}

  return (
    <div>
      <button onClick={handletogglemodal}>Open Modal popup</button>
      {
        showModal && <Modal
          body={<div>this is an example of props</div>}
          onClose={handletogglemodal}
        />
      }

    </div>
  )
}

export default ModalTest