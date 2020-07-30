import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./images/photos";

import CardWrapper from './cardWrapper'

import TemplateBottomRow from './templateBottomRow'
// import styled from 'styled-components'
// import colors from './colors/colors'



const TemplateCard = (props)=>{

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  
  return(
    <CardWrapper >
      <div style={{'max-height':'700px', 'max-width':'900px'}}>
         <Gallery photos={photos} onClick={openLightbox} direction="row"/>
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
            <TemplateBottomRow {...props}/>
      </div>
  </CardWrapper>
  
  )

}

export default TemplateCard