import {
    Box,
    VStack,
    Button,
    Flex,
    Skeleton,
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiHash } from 'react-icons/fi';
import { MdManageSearch } from 'react-icons/md';
import { useJoinedRoomsStore } from '../store/joined-rooms';

export default function RoomList() {
    const navigate = useNavigate();
    const { roomId } = useParams();
    const roomIdParam = Number(roomId);

    const isLoading = useJoinedRoomsStore((state) => state.isLoading);
    const joinedRooms = useJoinedRoomsStore((state) => state.joinedRooms);

    const roomClickHandler = (clickedRoomId: number) => {
        navigate(`/chat/${clickedRoomId}`);
    };

    return (
        <div>
        <Box mt={{ base: '0px', md: '16px' }} px='10px'>
            <Button
            gap='8px'
            size='sm'
            w='140px'
            justifyContent='flex-start'
            onClick={() => {
                navigate('/all-rooms');
            }}
            >
            <MdManageSearch />
            Browse Rooms
            </Button>
        </Box>

        <VStack
            align='start'
            gap={0}
            mt='10px'
            maxH={{ base: 'auto', md: 'calc(100vh - 240px)' }}
            overflow={'auto'}
        >
            {isLoading ? (
            <>
                {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton
                    key={index}
                    w='full'
                    h='44px'
                    borderRadius='md'
                    mb='14px'
                />
                ))}
            </>
            ) : (
            <>
                {joinedRooms.map((room) => (
                <Flex
                    key={room.id}
                    role='button'
                    tabIndex={0}
                    onClick={() => roomClickHandler(room.id)}
                    py='10px'
                    px='10px'
                    display='flex'
                    alignItems='center'
                    fontWeight='bold'
                    fontSize='lg'
                    gap='8px'
                    color={room.id === roomIdParam ? 'gray.300' : 'gray.400'}
                    bg={room.id === roomIdParam ? 'purple.800' : 'transparent'}
                    w='full'
                    _hover={{
                    textDecoration: 'none',
                    bg: room.id === roomIdParam ? 'purple.800' : 'gray.800',
                    }}
                >
                    <FiHash size={20} />
                    {room.name}
                </Flex>
                ))}
            </>
            )}
        </VStack>
        </div>
    );
};
  