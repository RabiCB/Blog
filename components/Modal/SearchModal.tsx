"use client"

import { Appcontext, contextData } from '@/provider/ContextProvider';
import { Cross } from 'lucide-react';
import { useContext, useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { RxCross1 } from "react-icons/rx";
import { Input } from '../ui/input';
import { Button } from '../ui/button';
export function MyVerticallyCenteredModal(props:any) {

    const  {SearchModal,handleOpenSearchModal,handleCloseSearchModal}:any=useContext(Appcontext)

    const [query,setQuery]=useState("")

    
  return (
    <Modal
        show={SearchModal}
        onHide={handleCloseSearchModal}
        onBackdropClick={handleCloseSearchModal}
        centered
        
        onEscapeKeyDown={handleCloseSearchModal}
        dialogClassName="modal-90w"
      
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          
            <div className='w-full flex  justify-between'>
            <span>Search Below</span>
        <RxCross1 onClick={handleCloseSearchModal} size={24}  />
        </div>
        </Modal.Header>
        <Modal.Body className='flex  flex-col gap-2.5'>
            <Input placeholder='search for blogs...' onChange={(e)=>setQuery(e.target.value)} />
            <Button>Search</Button>
          
        </Modal.Body>
      </Modal>
  );
}



