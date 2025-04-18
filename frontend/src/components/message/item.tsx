import { useState, useEffect } from 'react';
import { format, isToday, isYesterday } from 'date-fns';
import { Flex, Text, Avatar, HStack, Box } from '@chakra-ui/react';
import defaultIcon from '../../assets/profile-icon/default.svg';
import { LuAlignVerticalJustifyStart } from 'react-icons/lu';

type MessageItemProps = {
  username: string;
  imageIcon: string | null;
  time: string;
  message: string;
};

export const MessageItem = ({
  username,
  imageIcon,
  time,
  message,
}: MessageItemProps) => {
  const [iconSrc, setIconSrc] = useState(defaultIcon);

  useEffect(() => {
    const fetchIcon = async () => {
      if (!imageIcon) return;

      import(`../../assets/profile-icon/${imageIcon}.jpg`).then((module) => {
        setIconSrc(module.default);
      }); 
    };
    
    fetchIcon();
  });

  const messageDate = new Date(time);
  let formattedTime;

  if (isToday(messageDate)) {
    formattedTime = `Today ${format(messageDate, 'HH:mm')}`;
  } else if (isYesterday(messageDate)) {
    formattedTime = `Yesterday ${format(messageDate, 'HH:mm')}`;
  } else {
    formattedTime = format(new Date(time), 'MM/dd/yyy HH:mm');
  }

  return (
    <Flex gap='10px'>
      <LuAlignVerticalJustifyStart
        name={'John Doe'}
      />
      <HStack gap="4">
        {/* <Avatar.Root shape="rounded" size="lg">
          <Avatar.Fallback name="Segun Adebayo" />
          <Avatar.Image src="https://bit.ly/sage-adebayo" />
        </Avatar.Root> */}
        <Avatar.Root shape="full" size="lg">
          <Avatar.Fallback name="Random User" />
          <Avatar.Image src={iconSrc} />
        </Avatar.Root>
      </HStack>
      <Box>
        <Flex gap='10px' align='center'>
          <Box fontWeight='bold' color={'purple.400'}>
            {username}
          </Box>
          <Text as='span' color={'gray.300'} fontSize='sm'>
            {formattedTime}
          </Text>
        </Flex>
        <Text>{message}</Text>
      </Box>
    </Flex>
  );
};
