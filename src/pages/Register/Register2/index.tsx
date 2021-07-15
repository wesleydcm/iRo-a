import RegisterStep2Mobile from "../../../components/Register/Register_Step_2/mobile";
import RegisterStep2Desktop from "../../../components/Register/Register_Step_2/desktop";

const Registe2 = () => {
  const viewPort = window.innerWidth;

  return (
    <>{viewPort <= 900 ? <RegisterStep2Mobile /> : <RegisterStep2Desktop />}</>
  );
};

export default Registe2;
