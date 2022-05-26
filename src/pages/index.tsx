import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import Aos from 'aos';
import Head from 'next/head';
import { HomeContainer } from '../styles/HomeStyles';

import Header from '../components/Header';
import HomeHero from '../components/HomeHero';
import Experiencias from '../components/Experiencias';
import Projetos from '../components/Projetos';
import Conhecimentos from '../components/Conhecimentos';
import FormContato from '../components/FormContato';
import Footer from '../components/Footer';
import { request } from '../services/prismic';
import 'aos/dist/aos.css';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  projetos: IProjeto[];
}

export default function Home({ projetos }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Home | Meu portfólio</title>
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
        <HomeHero />
        <Experiencias />
        <Projetos projetos={projetos} />
        <Conhecimentos />
        <FormContato />
      </main>

      <Footer />
    </HomeContainer>
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
    variables: { },
    preview: false
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
