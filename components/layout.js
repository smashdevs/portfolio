import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbar from '../components/navbar'
import { Image, Flex, Center, Text, VStack, Spacer } from '@chakra-ui/react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
export const siteTitle = 'Smash Devs'
export const name = 'Smash Devs'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Porfólio da dupla de desenvolvedores Jaderson e Gabriel."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar></Navbar>
      <header className={styles.header} w="full">
        {home ? (
          <>
            <Flex>
              <Center>
                <Image src='/images/header.jpg'/>
              </Center>
            </Flex>
          </>
        ) : (
          <>
            <Flex w="full">
              <Center backgroundImage="url('/images/header.jpg')" 
                      w="full" 
                      backgroundAttachment="fixed"
                      backgroundRepeat="no-repeat"
                      backgroundPosition="center center"
                      backgroundSize="cover"
                      >
              <span style={{height: '100%',left: 0,position: 'relative',top: 0,width: '100%',background: 'rgba(0,0,0,0.60)'}}>
                  <VStack w="full" h="100%" spacing="0" p="4rem 2rem">
                    <Center w="full">
                      <Text fontSize="3xl" color="white">{siteTitle}</Text>
                    </Center>
                    <Center w="full">
                      <Breadcrumb separator=' | ' color="white" fontWeight='medium' fontSize='sm'>
                        <BreadcrumbItem>
                          <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                          <BreadcrumbLink href='#'>PortFolio</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                          <BreadcrumbLink href='#'>{siteTitle}</BreadcrumbLink>
                        </BreadcrumbItem>
                      </Breadcrumb>
                    </Center>
                  </VStack>
                </span>
              </Center>
            </Flex>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
