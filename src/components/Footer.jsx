import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react';
import {AiOutlineSend } from 'react-icons/ai';
import React from 'react'

const Footer = () => {
    return (
        <Box bgColor={"blackAlpha.900"} minHeight={"40"} p="16" color={'white'}>
            <Stack direction={['column', 'row']}>
                <VStack alignItems= {"stretch"} w ={'full'} py="2">
                    <Heading size={"md"} textTransform="uppercase" textAlign={['center' ,'left']}>SubScribe to Channel</Heading>
                    <HStack borderBottom={'2px solid'} py="2">
                        <Input placeholder="Enter Email Here .." border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor={'none'} />
                        <Button p="0" colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                            <AiOutlineSend ></AiOutlineSend>
                        </Button>
                    </HStack>
                </VStack>
                <VStack w={'full'} borderLeft={["none", "1px solid white"]}
                    borderRight={["none", "1px solid white"]}>
                    <Heading size={'md'} textTransform={'uppercase'} textAlign={"center"}>
                        VIDEO HUB
                    </Heading>
                    <Text>All Rights Reserved</Text>
                    </VStack>
                <VStack w={'full'}  >
                    <Heading size={'md'} textTransform={'uppercase'} text>Social Media</Heading>
                    <Button variant={"link"} colorScheme={'whiteAlpha'}>
                        <a href ="#">YouTube</a>
                    </Button>
                    <Button variant={"link"} colorScheme={'whiteAlpha'}>
                        <a  href ="#">Instagram</a>
                    </Button>
                    <Button variant={"link"} colorScheme={'whiteAlpha'}>
                        <a  href ="#">Twitter</a>
                    </Button>
                </VStack>
            </Stack>
          
   </Box>
  )
}

export default Footer