import { Container, Card } from "../../../styles/producer_cart_styles";

const ProducerCartDesktop = () => {
  return (
    <Container>
      <Card>
        <div className="information">
          <div className="name">
            <h3>Nome</h3>
            <p>Bino</p>
          </div>
          <div className="localization">
            <h3>Localização</h3>
            <p>Minas Gerais (MG)</p>
          </div>
          <div className="localization">
            <h3>Contato</h3>
            <div className="contact">
              <p>telefone: 4002-8922</p>
              <p>email: binoBetoneira@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="image">
          <div>X</div>
          <div>X</div>
          <div>X</div>
          <div>X</div>
          <div>X</div>
        </div>
      </Card>
    </Container>
  );
};

export default ProducerCartDesktop;
