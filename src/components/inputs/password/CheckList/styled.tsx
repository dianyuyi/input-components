import styled from "@emotion/styled";

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 12px;
  margin-top: 16px;
  position: relative;
  background: #242424;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  & ul {
    margin: 0;
    padding: 0;
  }
`;

export const List = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #FFFFFF;
  gap: 10px;  
  padding: 8px 0;

  & > span {
    text-align: left;
    line-height: 150%;

    opacity: ${(props) => (props.className === "valid" ? 1 : 0.5)};
  }
`;