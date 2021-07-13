import {
  Title,
  ContainerButtons,
  LeaveButton,
  LeaveContainer,
  BigContainer,
  NotAuthContainer,
  NotAuthText,
  Link,
} from "./styles";

import Button from "../../../Components/Button";
import { NavLink } from "react-router-dom";
import { useUser } from "../../../Providers/user";
interface MyProfileProps {
  isAuth?: boolean;
}
const MyAccountPageMobile = ({ isAuth = true }: MyProfileProps) => {
  const { user } = useUser();
  return (
    <>
      {isAuth ? (
        <BigContainer>
          <Title>Minha Conta</Title>
          <ContainerButtons>
            <Link to={`/myAccount/profile/${user.personalData.id}`}>
              <Button color={"green"}>Ver Perfil</Button>
            </Link>
            <Link to="/myAccount/history">
              <Button color={"green"}>Histórico de compra</Button>
            </Link>
            <Link to="/myAccount/edit">
              <Button color={"green"}>Editar dados pessoais</Button>
            </Link>
            <Link to="/myAccount/products">
              <Button color={"green"}>Cadastrar produto</Button>
            </Link>
          </ContainerButtons>

          <LeaveContainer>
            <LeaveButton>Sair da conta</LeaveButton>
          </LeaveContainer>
        </BigContainer>
      ) : (
        <NotAuthContainer>
          <Title>Minha Conta</Title>
          <NotAuthText>
            Você não está logado para ver detalhes da sua conta.
            <NavLink to="/login">
              <h3>
                Se deseja acessar essa funcionalidade, você pode entrar clicando
                aqui
              </h3>
            </NavLink>
          </NotAuthText>
        </NotAuthContainer>
      )}
    </>
  );
};

export default MyAccountPageMobile;
