import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';
import { request } from '../../../services/prismic';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';
import LoadingScreen from '../../../components/LoadingScreen';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetoProps {
  projeto: IProjeto;
}

export default function Projeto({ projeto }: ProjetoProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingScreen />;
  }

  return (
    <ProjetoContainer>
      <Head>
        <title>{projeto.title} | Meu portfólio</title>
        <meta name="description" content={projeto.description} />
        <meta property="og:image" content={projeto.thumbnail} />
        <meta property="og:image:secure_url" content={projeto.thumbnail} />
        <meta name="twitter:image" content={projeto.thumbnail} />
        <meta name="twitter:image:src" content={projeto.thumbnail} />
        <meta property="og:description" content={projeto.description} />
      </Head>

      <Header />
      <BannerProjeto
        title={projeto.title}
        type={projeto.type}
        imgUrl={projeto.thumbnail}
      />

      <main>
        <p>{projeto.description}</p>
        <button type="button">
          <a href={projeto.link}>Ver projeto online</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
const query = ` query MyQuery {
    allProjetos {
      id
    }
  }`;

  const projetos = await request({
    query: query,
    variables: { },
    preview: false
  });

  const paths = projetos.allProjetos.map(projeto => ({
    params: {
      slug: projeto.id
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params;

  const query = ` query MyQuery {
    allProjetos(filter: {id: {eq: "${String(slug)}"}}) {
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
  
  let response = await request({
    query: query,
    variables: { },
    preview: false
  });

  response = response.allProjetos[0];

  console.info(response)

  const projeto = {
    slug: response.id,
    title: response.title,
    type: response.tipo,
    description: response.description,
    link: response.url,
    thumbnail: response.thumbnail.url
  };

  return {
    props: {
      projeto
    },
    revalidate: 86400
  };
};
