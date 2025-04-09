import { useRef } from 'react';
import { Flex, Heading, Text, Button } from '@chakra-ui/react';
import { FiHash, FiUsers } from 'react-icons/fi';
import { useCurrentRoomStore } from '@/store/current-rooms';

export const MessageHeader = () => {
  const btnRef = useRef(null);

  const currentRoom = useCurrentRoomStore((state) => state.currentRoom);

  return (
    <>
      <Flex
        borderBottom='1px solid'
        borderColor='gray.600'
        pb='10px'
        align='center'
        justify='space-between'
        gap='10px'
      >
        <Flex
          align='end'
          gap='10px'
          onClick={() => {}}
          cursor='pointer'
          _hover={{
            opacity: '.8',
          }}
        >
          <Heading
            as='h1'
            display='flex'
            alignItems='center'
            fontSize={{ base: 'lg', md: '2xl' }}
            gap='4px'
          >
            <Text as='span' fontSize='sm' w={{ base: '16px', md: '20px' }}>
              <FiHash size={'100%'} />
            </Text>
            {currentRoom?.name}
          </Heading>
          <Text
            color='gray.400'
            display={'-webkit-box'}
            overflow={'hidden'}
            fontSize={'sm'}
          >
            {currentRoom?.description}
          </Text>
        </Flex>

        <Button
          gap='10px'
          onClick={() => {}}
          aria-label='See room members'
          ref={btnRef}
          size={{ base: 'sm', md: 'md' }}
        >
          <FiUsers />
          <Text as='span' display={{ base: 'none', md: 'inline-block' }}>
            Members
          </Text>
        </Button>
      </Flex>
    </>
  );
};
