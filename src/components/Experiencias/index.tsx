import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="06 Anos" description="de experiência" />

      <section>
        <ExperienciaItem
          year="2018"
          title="Dev Full-stack (PHP)"
          description="Desenvolvimento de software PHP e manutenção de sistema legado"
        />
        <ExperienciaItem
          year="2018"
          title="Dev Front-end"
          description="Desenvolvimento de widget de agendamento para Startup"
        />
        <ExperienciaItem
          year="2020"
          title="Dev Full-stack (PHP), Dev Back-end (Java)"
          description="Desenvolvimento de sistema de gerenciamento de academias"
        />
        <ExperienciaItem
          year="2021"
          title="Dev Back-end (Java)"
          description="Desenvolvimento de plataforma para câmbio internacional"
        />
      </section>
    </Container>
  );
}

export default Experiencias;
