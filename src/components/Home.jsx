import { Box, Container, Heading, Image, Stack, Text, } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const Home = () => {
    return (
        <Box>
            <MyCarousel />
            <Container maxW={'container.xl'} minH={'100vh'} p='16'>
                <Heading textTransform={"uppercase"} py="2" w="fit-content" borderBottom={'2px solid'} margin={'auto'}>
                    Service
                </Heading>
                <Stack h ={'full'} p= "4" alignItems={'center'} direction={["column" ,"row"]}>
                    <Image src={img5} h={["40", "400"]} filter={'hue-rotate(-130deg)'} />
                    <Text letterSpacing={'widest'} lineHeight={'190%'} textAlign="center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dolor lacus,
                        eleifend vitae semper et, porttitor eu nibh. Nam suscipit libero a ligula feugiat, quis
                        semper augue commodo. Aliquam sit amet massa et risus rhoncus semper quis molestie enim.
                        In et leo sagittis, auctor ligula sit amet, dignissim tellus. Pellentesque sodales dolor ut iaculis lacinia.
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus bibendum consequat risus.
                        Phasellus quis nunc magna. Aliquam et tristique diam. Cras rhoncus dapibus sagittis. Phasellus sed dictum est.
                        Donec quis magna scelerisque, luctus lacus at, fringilla orci. Vivamus diam mi, condimentum quis felis eu,
                        tincidunt lacinia ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        In vitae dui porttitor urna accumsan faucibus. Praesent blandit, lectus ornare fringilla facilisis, purus tortor vestibulum est, at tempus est elit vitae eros.

                    </Text>
                </Stack>
            </Container>
        </Box>
  )
}
const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
  };
  
const MyCarousel = () => (
    <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumbs={false}
        showArrows={false}
    >
        <Box w="full" h={'100vh'}>
            <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} >
                Watch The Future
            </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
            <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.900'} color={'black'}  {...headingOptions} >
                Future is Gaming
            </Heading>
        </Box>
  
        <Box w="full" h={'100vh'}>
            <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'}   {...headingOptions}>
                Gaming on Console
            </Heading>
        </Box>
  
        <Box w="full" h={'100vh'}>
            <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'}  {...headingOptions} >
                Night life is cool
            </Heading>
        </Box>
    </Carousel>
);

export default Home