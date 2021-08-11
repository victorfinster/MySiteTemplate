import {
  ContainerNavBar,
  NavBar,
  Options,
  OptionsList,
  TextOption,
  Title,
} from "./styles";

const NavBarCustom = () => {
  return (
    <NavBar>
      <ContainerNavBar>
        <Title href="#">Minha Marca</Title>
        <OptionsList>
          <Options>
            <TextOption href="#">Quem somos</TextOption>{" "}
          </Options>
          <Options>
            <TextOption href="#">Produtos</TextOption>
          </Options>
          <Options>
            <TextOption href="#">Contate nos</TextOption>
          </Options>
        </OptionsList>
      </ContainerNavBar>
    </NavBar>
  );
};

export default NavBarCustom;
