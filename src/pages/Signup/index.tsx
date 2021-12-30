import { Flex, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ModalError } from "../../components/Modal/ModalError";
import { ModalSuccess } from "../../components/Modal/ModalSuccess";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { SignupInfo } from "./SignupInfo";
import { SignupForm } from "./SignupForm";
import { GoBackButton } from "./GoBackButton";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";

const signUpSchema = yup.object().shape({
  name: yup.string().required("Nome obreigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
  confirm_password: yup
    .string()
    .required("Confirmação de Senha obrigatória")
    .oneOf([yup.ref("password")], "Senhas diferentes"),
});

interface SignUpData {
  name: string;
  email: string;
  password: string;
}

export const Signup = () => {
  const [loading, setLoading] = useState(false);

  const {
    isOpen: isModalSuccessOpen,
    onOpen: onModalSucessOpen,
    onClose: onModalSuccessClose,
  } = useDisclosure();

  const {
    isOpen: isModalErrorOpen,
    onOpen: onModalErrorOpen,
    onClose: onModalErrorClose,
  } = useDisclosure();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(signUpSchema) });

  const handleSignUp = ({ name, email, password }: SignUpData) => {
    setLoading(true);
    api
      .post("/register", { name, email, password })
      .then((response) => {
        setLoading(false);
        onModalSucessOpen();
      })
      .catch((err) => {
        setLoading(false);
        onModalErrorOpen();
      });
  };

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  const history = useHistory();

  return (
    <>
      <ModalSuccess
        buttonMessage="Ir para o login agora"
        message="Seu cadastro deu super certo, <b> vamos lá </b>"
        onClick={() => history.push("/")}
        secondaryText="Você já pode começar <b> suas listas </b> de tarefas agora mesmo..."
        isOpen={isModalSuccessOpen}
        onClose={onModalSuccessClose}
      />
      <ModalError
        error="Seu email já está em uso"
        isOpen={isModalErrorOpen}
        onClose={onModalErrorClose}
        secondaryText="Você já pode tentar novamente, <b> clicando <b/> no botão acima ou aguardando alguns minutos..."
      />
      <Flex
        padding={["10px 15px", "10px 15px", "0px", "0px"]}
        alignItems="center"
        justifyContent="center"
        h={["auto", "auto", "100vh", "100vh"]}
        bgGradient={[
          "linear(to-b, purple.800 65%, White 35%)",
          "linear(to-b, purple.800 65%, White 35%)",
          "linear(to-l, purple.800 65%, White 35%)",
          "linear(to-l, purple.800 65%, White 35%)",
        ]}
        color="White"
      >
        <Flex
          w={["100%", "100%", "90%", "65%"]}
          justifyContext="center"
          flexDirection={["column", "column", "row", "row"]}
          alignItems="center"
        >
          {isWideVersion ? (
            <>
              <GoBackButton top="5vh" left="10vw" />
              <SignupForm
                errors={errors}
                handleSignUp={handleSubmit(handleSignUp)}
                loading={loading}
                register={register}
              />
              <SignupInfo />
            </>
          ) : (
            <>
              <GoBackButton top="10" left="75vw" />
              <SignupInfo />
              <SignupForm
                errors={errors}
                handleSignUp={handleSubmit(handleSignUp)}
                loading={loading}
                register={register}
              />
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
};
