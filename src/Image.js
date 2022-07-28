import { React, useState } from 'react';
import { useDispatch } from "react-redux";
import ImageUploading from "react-images-uploading";
import Button from "@mui/material/Button";

const Image = ({actions}) => {
  const dispatch = useDispatch();
  const [imgList, setImgList] = useState([]);

  const handleChange = (imageList, addUpdateIndex) => {
    setImgList(imageList)
    dispatch(actions.image(imageList[addUpdateIndex].data_url));
  };

  return (
    <ImageUploading
      multiple
      value={imgList}
      onChange={handleChange}
      maxNumber={1}
      dataURLKey="data_url"
      acceptType={["jpg"]}
    >
      {({imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps}) => (
        <div className="upload__image-wrapper">
          { imageList.length === 0 &&
            <Button onClick={onImageUpload} > Subir imagen </Button>
          }
          { imageList.length !== 0 && imageList.map((image, index) => (
            <div key={index} className="row">
              <div className="left-panel">
                <img src={image.data_url} alt="" width="100" />
              </div>
              <div className="right-panel">
                <Button onClick={() => onImageRemove(index)}>Remove</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
  );
}

export default Image;
