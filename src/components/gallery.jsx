import React from "react";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";

import GalleryPhoto1 from "../assets/Gallery_Photo_1.webp";
import GalleryPhoto2 from "../assets/Gallery_Photo_2.webp";
import GalleryPhoto3 from "../assets/Gallery_Photo_3.webp";
import GalleryPhoto4 from "../assets/Gallery_Photo_4.webp";
import GalleryPhoto5 from "../assets/Gallery_Photo_5.webp";
import GalleryPhoto6 from "../assets/Gallery_Photo_6.webp";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 100%;
  padding-left: 5px;
  padding-right: 5px;
`;

const images = [
  {
    original: GalleryPhoto1,
    thumbnail: GalleryPhoto1,
  },
  {
    original: GalleryPhoto2,
    thumbnail: GalleryPhoto2,
  },
  {
    original: GalleryPhoto3,
    thumbnail: GalleryPhoto3,
  },
  {
    original: GalleryPhoto4,
    thumbnail: GalleryPhoto4,
  },
  {
    original: GalleryPhoto5,
    thumbnail: GalleryPhoto5,
  },
  {
    original: GalleryPhoto6,
    thumbnail: GalleryPhoto6,
  },
];

const Gallery = () => {
  return (
    <Wrapper>
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        items={images}
        autoPlay={true}
        showNav={false}
      />
    </Wrapper>
  );
};

export default Gallery;
