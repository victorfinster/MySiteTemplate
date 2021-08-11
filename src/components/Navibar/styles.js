import styled from "styled-components";

export const NavBar = styled.nav`
  background-color: #161616;
  height: 10vh;
`;

export const ContainerNavBar = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 10px;
`;

export const Title = styled.a`
  text-decoration: none;
  color: #fff;
  flex: 1;
`;

export const OptionsList = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
`;

export const Options = styled.li`
  /* color: #ffffff;
  padding: 15px;
  border-radius: 2px;
  &:hover {
    background-color: #4e4e4e;
    color: #cccccc;
  } */
`;

export const TextOption = styled.a`
  text-decoration: none;
  color: #ffffff;
  padding: 15px;
  border-radius: 2px;
  &:hover {
    background-color: #4e4e4e;
    color: #cccccc;
  }
`;
