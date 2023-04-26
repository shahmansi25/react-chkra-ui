import React from 'react';
import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, Button, useDisclosure, DrawerCloseButton, VStack, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()
    return <>
        <Button ref={btnRef} pos="fixed" top={'4'} left={'4'} colorScheme='purple'
             zIndex={'overlay'}
            p={0}
            w={10}
            h={10}
            borderRadius={'full'}>
            <BiMenuAltLeft size={'20'}
            onClick={onOpen}/>
        </Button>
        <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}>
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Video Hub</DrawerHeader>
                <DrawerBody>
                    <VStack alignItems={'flex-start'}>
                        <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                            <Link to="/">Home</Link>
                        </Button>    
                        <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                            <Link to="/videos">Videos</Link>
                        </Button>   
                        <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                            <Link to="/videos?category=free">Free Videos</Link>
                        </Button>   
                        <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                            <Link to="/upload">Upload Video</Link>
                        </Button>   
                    </VStack>
                    <HStack pos='absolute' bottom={'10'} left={'0'} w = {'full'} justifyContent={'space-evenly'}>
                        <Button onClick={onClose} colorScheme='purple'>
                            <Link to="/login">Login</Link>
                        </Button>
                        <Button onClick={onClose} colorScheme='purple' variant={'outline'}>
                            <Link to="/signup">Sign up</Link>
                        </Button>
                    </HStack>
                </DrawerBody>
            </DrawerContent>
      </Drawer>
    </>
}

export default Header