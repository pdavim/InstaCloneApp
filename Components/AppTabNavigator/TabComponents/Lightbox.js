import React from 'react';
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const Lightbox = (props) => (
  <Modal
    transparent={false}
    animationType="fade"
    visible={(props.selected !== null) ? true : false} 
    onRequestClose={props.onCloseLightbox}>
    <ImageViewer
      imageUrls={props.images} 
      index={props.selected}
      onSwipeDown={props.onCloseLightbox}
      renderIndicator={() => null}
    />
  </Modal>
);

export default Lightbox;
