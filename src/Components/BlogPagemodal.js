import React, { useState } from 'react';
import Card from './Card'; 
import '../css/BlogPagemodal.css'

function Modal({ imageUrl, title, description }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <Card imageUrl={imageUrl} title={title} description={description} />
      </div>
    </div>
  );
}

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {modalVisible && (
        <Modal
          imageUrl="https://i.pinimg.com/originals/7c/61/ba/7c61ba87a74d4f3c0d2ad0a2eb3dc6ca.jpg" 
          title="Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in libero semper, varius ante nec, aliquam libero. Integer nec tellus nec lectus aliquam congue. Sed consectetur libero id justo commodo, quis tempor ligula varius. Nulla facilisi. Sed consectetur ante at lorem consectetur, quis consequat tortor lobortis. Vivamus ac lorem non metus mattis lacinia. Proin ut tortor ut ex fringilla commodo. Nam a nunc in lacus congue aliquet. Vivamus ut lacus quis purus suscipit dictum. Donec nec tortor vitae magna commodo vehicula. In at augue a mi fermentum fringilla ac id odio. Duis sed libero ac metus dignissim scelerisque. Donec tincidunt neque in nunc finibus, sit amet egestas elit varius. Morbi et enim justo. Nam aliquet velit nec mauris bibendum, a hendrerit ante pulvinar."
        />
      )}
    </div>
  );
}

export default BlogPagemodal;
