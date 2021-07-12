import { Container, Form, Logo } from "./styles";
import LogoImage from "../../../../assets/images-mobile/logo.svg";
import Input from "../../../Input";
import Button from "../../../Button";
import { useUser } from "../../../../Providers/user";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

interface FormValues {
  name: string;
  birthDate: string;
  cpf: string;
  phone: string;
  image?: string;
}

const RegisterStep2Desktop = () => {
  const { tempUser, setTempUser } = useUser();

  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    birthDate: yup
      .string()
      .required("Campo obrigatório")
      .min(10, "Formato inválido, exemplo: xx/xx/xxxx"),
    cpf: yup
      .string()
      .required("Campo obrigatório")
      .min(12, "CPF inválido, exemplo: xxxxxxxxx-xx"),
    phone: yup.string().required("Campo obrigatório"),
    image: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    setTempUser({
      ...tempUser,
      name: data.name,
      birthDate: data.birthDate,
      cpf: data.cpf,
      phone: data.phone,
      image: data.image,
    });
    reset();
    history.push("/register-third");
  };

  return (
    <Container>
      <Logo>
        <div className="description">
          <h1>Bem vindo ao iRoça</h1>
          <p>
            Precisamos dos seus dados pra fazer realizar compras ou publicar
            anúncios
          </p>
        </div>
        <div className="image">
          <img src={LogoImage} alt="logo" />
        </div>
      </Logo>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="input">
          <h1>Dados Pessoais</h1>
          <Input
            placeholder={"Nome completo"}
            type={"text"}
            width={260}
            name={"name"}
            register={register}
          />
          <p>{errors.fullName?.message}</p>
          <Input
            placeholder={"Data de nascimento"}
            type={"text"}
            width={260}
            name={"birthDate"}
            register={register}
          />
          <p>{errors.birthDate?.message}</p>
          <Input
            placeholder={"CPF"}
            type={"text"}
            width={260}
            name={"cpf"}
            register={register}
          />
          <p>{errors.cpf?.message}</p>
          <Input
            placeholder={"Telefone de contato"}
            type={"text"}
            width={260}
            name={"phone"}
            register={register}
          />
          <p>{errors.telephone?.message}</p>
        </div>
        <div className="photo">
          <h1>Foto de Perfil</h1>
          <div className="photo-input">
            <Input
              placeholder={"link"}
              type={"text"}
              width={180}
              name={"image"}
              register={register}
            />
            <span>ou</span>
            <Button width={100} color={"green"} type={"button"}>
              Upload
            </Button>
            <p>{errors.photo?.message}</p>
          </div>
        </div>
        <div className="button">
          {" "}
          <Button width={180} color={"green"} type={"submit"}>
            Próximo
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default RegisterStep2Desktop;
