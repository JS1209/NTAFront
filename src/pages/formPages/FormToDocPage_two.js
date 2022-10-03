import { useState } from "react";
import ImageUploading from "react-images-uploading";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { storeImages } from "../../store/database/thunks";
import { useNavigate } from "react-router-dom";

export const FormToDocPage_two = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(storeImages(images));
    navigate("/form/docChoice");
  };

  return (
    <Main>
      <Fields>
        <Title>Upload your passport</Title>
        <div className="App">
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <button
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Click or Drop here
                </button>
                &nbsp;
                <button onClick={onImageRemoveAll}>Remove all images</button>
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image["data_url"]} alt="" width="100" />
                    <div className="image-item__btn-wrapper">
                      <button onClick={() => onImageUpdate(index)}>
                        Update
                      </button>
                      <button onClick={() => onImageRemove(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </div>
        <Format onSubmit={submit}>
          <Button type="submit"> NEXT </Button>
        </Format>
      </Fields>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
  background-color: black;
  padding: 10px;
  height: 100%;
`;

const Title = styled.div`
  text-align: center;
  background-color: red;
  display: flex;
  align-self: center;
  maring: auto;
  font-family: "Times New Roman";
  font-size: 30px;
`;

const Fields = styled.div`
  display: flex;
  flex-direction: column;
  align-items: middle;
  justify-content: center;
  width: 750px;
  height: 100%;
  background-color: green;
`;

const Input = styled.input`
  align-self: center;
  order: 2;
  display: flex;
  width: 55%;
  padding: 5px;
  background-color: blue;
`;

const TextDiv = styled.div`
  order: 1;
  display: flex;
  padding: 10px;
  text-align: left;
`;

const InputDiv = styled.div`
  align-self: center;
  justify-content: space-between;
  display: flex;
  flex-direction: col;
  margin: 10px;
  width: 600px;
  background-color: yellow;
`;

const Format = styled.form`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  align-self: center;
  display: flex;
  widht: 20%;
  padding: 10px;
  margin: 10px;
`;
