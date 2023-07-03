import styled from 'styled-components';

export const Feedback = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Btn = styled.button`
  cursor: pointer;
  padding: 10px;

  font-size: 25px;
  text-transform: uppercase;

  background-color: #fff;

  border-radius: 15px;
  &:hover {
    background-color: #7cb9e8;
    box-shadow: 1px 1px 14px 4px rgba(0, 0, 0, 0.12);
  }
`;
