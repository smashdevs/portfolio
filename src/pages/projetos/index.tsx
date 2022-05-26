import { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../../components/Header';
import ProjetoItem from '../../components/ProjetoItem';
import { ProjetosContainer } from '../../styles/ProjetosStyles';
import { request } from '../../services/prismic';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetoProps {
  projetos: IProjeto[];
}

export default function Projetos({ projetos }: ProjetoProps) {
  return (
    <ProjetosContainer>
      <Head>
        <title>Projetos | Meu portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>

      <Header />
      <main className="container">
        {projetos.map(projeto => (
          <ProjetoItem
            key={projeto.slug}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
            imgUrl={projeto.thumbnail}
          />
        ))}
      </main>
    </ProjetosContainer>
  );
}

const query = ` query MyQuery {
  allProjetos {
    id
    tipo
    title
    photo {
      url
    }
    url
    description
    thumbnail {
      url
    }
  }
}`;

export const getStaticProps: GetStaticProps = async () => {
    const projectResponse = await request({
      query: query,
      variables: { }
    });

  const projetos = projectResponse.allProjetos.map(projeto => ({
    slug: projeto.id,
    title: projeto.title,
    type: projeto.tipo,
    description: projeto.description,
    link: projeto.url,
    thumbnail: projeto.thumbnail.url
  }));

  return {
    props: {
      projetos
    },
    revalidate: 86400
  };
};
