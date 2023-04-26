import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
    <form>
        <VStack alignItems={"stretch"} spacing={"8"} w={['full',"96"]} m={"auto"} my={"16"}>
                  <Heading alignSelf={'center'} >VIDEO HUB</Heading>
                  <Avatar alignSelf={'center'} boxSize={'32'}></Avatar>
                  <Input focusBorderColor={'purple:500'} placeholder="Name" type="text" required />

            <Input focusBorderColor={'purple:500'} placeholder="Email" type="email" required />
            <Input focusBorderColor={'purple:500'} placeholder="Password" type="password" required />
            <Button colorScheme="purple" type="submit">Sign Up</Button>
            <Text textAlign="right">Already Signed Up <Button variant={'link'} colorScheme="purple"><Link to="/login">Login</Link></Button>
            </Text>
        </VStack>
    </form>
</Container>
  )
}

export default SignUp