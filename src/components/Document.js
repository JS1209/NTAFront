import styled from "styled-components";
import { useDispatch } from "react-redux";
import { DateTime } from "luxon";

export const Document = (prop) => {
  const dispatch = useDispatch();

  return (
    <Cont>
      name: <strong>{prop.item.name}</strong> <br /> signed at:{" "}
      <strong>{prop.item.createdAt}</strong> <br />
      stored at: <strong>{prop.item.path}</strong> <br /> signatureID:{" "}
      <strong>{prop.item.signatureId}</strong>
      <br />
    </Cont>
  );
};

const Cont = styled.div`
  padding: 20px;
  text-align: left;
`;
