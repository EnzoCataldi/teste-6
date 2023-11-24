import React, { useContext, useEffect, useState } from "react";
import isEmpty from "../utils/isEmpty";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../utils/userContext";
import axios from "axios";
import { server_url } from "../utils/api";

function Dashboard() {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  const [userdata, setUserdata] = useState({});

  useEffect(() => {
    if (isEmpty(user)) return navigate("/");
    else
      axios
        .get(`${server_url}/users/${user.id}`)
        .then((res) => {
          setUserdata(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  return (
    <div className="dashboard">
      <div className="title">
        <div>
          <img src="/imgs/logo.png" alt="logo" />
          <h2>HAPMIND</h2>
        </div>
        <div>
          <h2>home</h2>
        </div>
      </div>
      <div className="top_content">
        <div className="top_left col-6">
          <img src="/imgs/main01.png" alt="01" />
          <div>
          Descubra o HapMind, um aplicativo da Hapvida dedicado ao 
          seu bem-estar emocional. Registre seus sentimentos diários, receba dicas
           personalizadas de saúde mental e conecte-se com 
           profissionais qualificados. 
           Uma ferramenta essencial para cultivar uma jornada de 
           autocuidado, oferecendo suporte e tranquilidade em sua vida diária. .

    
          </div>
        </div>
        <div className="top_right col-6">
          <div>
            <h3>O QUE É A SOLUÇÃO</h3>
            <p>
            A solução, HapMind, é um aplicativo da Hapvida dedicado ao cuidado da saúde mental. Proporciona aos usuários um espaço seguro para registrar sentimentos, receber orientações personalizadas de bem-estar 
            e estabelecer conexões com profissionais de saúde mental..
            </p>
          </div>
          <div>
            <h3>O QUE ELA FARÁ</h3>
            <p>
            O HapMind permitirá aos usuários registrar seus sentimentos diários, receber dicas personalizadas de bem-estar e facilitar a comunicação com profissionais de saúde mental. Seu objetivo é promover
             a conscientização emocional e oferecer suporte contínuo para o bem-estar mental..
            </p>
          </div>
          <div>
            <h3>COMO FUNCIONARÁ</h3>
            <p>
            O aplicativo funcionará de maneira intuitiva, oferecendo uma interface amigável para os usuários. Eles poderão acessar facilmente as funcionalidades de registro, receber dicas personalizadas com base em seus sentimentos e, quando necessário, conectar-se com profissionais de saúde mental.
             A operação será simples, promovendo uma experiência acolhedora e eficaz para o autocuidado emocional.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom_content">
        <img src="/imgs/main02.png" alt="02" />
        <div>
          <div>O HapMind visa atingir um público diversificado, abrangendo todas as faixas etárias, que buscam melhorar sua saúde mental e bem-estar emocional.
             Desde jovens adultos lidando com estresse acadêmico até profissionais em busca de equilíbrio, nossa solução é projetada para ser inclusiva. Também tem como objetivo apoiar aqueles que enfrentam desafios específicos, oferecendo uma plataforma acessível para todos que desejam cultivar
             uma jornada positiva de autocuidado emocional.</div>
        </div>
        <img src="/imgs/main03.png" alt="03" />
        <div>
          <p>A Hapvida, uma empresa renomada em cuidados com a saúde, avança ainda mais com o HapMind. 
            Esta inovadora solução de saúde mental ampliará nosso impacto, oferecendo uma abordagem holística e 
            elevando a experiência do usuário para patamares superiores, consolidando nossa posição como líder comprometido com o bem-estar integral.</p>
        </div>
        <img src="/imgs/main04.png" alt="04" />
      </div>
    </div>
  );
}

export default Dashboard;
