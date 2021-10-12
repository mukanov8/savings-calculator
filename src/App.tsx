import React, { useMemo, useState } from 'react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  Switch,
  Text,
} from '@chakra-ui/react'
import { format, startOfMonth } from 'date-fns'
import MonthPicker from './components/MonthPicker'
import { getNumber } from './utils/getNumber'
import { getSavings } from './utils/getSavings'

const App = () => {
  const [isMontlyMode, setIsMontlyMode] = useState(false)

  const [inputAmount, setInputAmount] = useState('25,000')
  const [date, setDate] = useState<Date>(startOfMonth(new Date(2022, 3)))

  const { amount, numsOfDeposits } = useMemo(
    () => getSavings(isMontlyMode, inputAmount, date),
    [isMontlyMode, inputAmount, date]
  )

  const formattedDate = format(date, 'LLLL yyyy')
  const formattedInputAmount = '$' + inputAmount
  const formattedTotalAmount = '$' + amount

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = getNumber(e.target.value)
    if (num == 0) {
      e.target.value = '0'
    } else {
      e.target.value = num.toLocaleString('en-US')
    }
    setInputAmount(e.target.value)
  }

  const descriptionText = useMemo(() => {
    return isMontlyMode ? (
      <Text fontSize="xs" textAlign="left">
        You are saving <b>{formattedInputAmount}</b> monthly to save{' '}
        <b>{formattedTotalAmount}</b> by <b>{formattedDate}</b>.
      </Text>
    ) : (
      <Text fontSize="xs" textAlign="left">
        You are planning <b>{numsOfDeposits}</b> monthly deposits to reach your{' '}
        <b>{formattedInputAmount}</b> goal by <b>{formattedDate}</b>.
      </Text>
    )
  }, [isMontlyMode, date, inputAmount])

  return (
    <Center
      bg="background"
      w="100vw"
      h="100vh"
      flexDirection="column"
      // data-testid="app"
    >
      <Flex w={['100%', '400px']} alignItems="center" p="36px">
        <IconButton
          variant="ghost"
          aria-label="Go back"
          size="sm"
          icon={<ChevronLeftIcon minH="100%" minW="100%" color="darkgray" />}
        />
        <Text fontSize="md" color="primary" mx="auto">
          Let’s plan your saving goal
        </Text>
      </Flex>
      <Box
        w={['100%', '400px']}
        h={['100%', 'auto']}
        alignSelf="center"
        bg="white"
        borderRadius={['10px 10px 0 0', '10px']}
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1), 0px 0px 20px rgba(0, 0, 0, 0.1)"
        p="36px 45px"
      >
        <Text fontSize="3xl" w="50%" mb="24px">
          Savings calculator
        </Text>
        <Flex>
          <Switch
            isChecked={!isMontlyMode}
            onChange={() => setIsMontlyMode(!isMontlyMode)}
            mr="8px"
          />
          <Text>
            {isMontlyMode
              ? 'Calculate by monthly saving'
              : 'Calculate by total amount'}
          </Text>
        </Flex>
        <Text mt="20px" mb="3px">
          {isMontlyMode ? 'Montly amount' : 'Total amount'}
        </Text>
        <InputGroup>
          <InputLeftAddon
            children="$"
            border="1px solid lightgray !important"
            borderRight="none !important"
            bg="background"
            color="darkgray"
          />
          <Input
            type="text"
            // pattern="([0-9]+.{0,1}[0-9]*,{0,1})*[0-9]"
            maxLength={15}
            isRequired
            border="1px solid lightgray !important"
            borderLeft="none !important"
            textAlign="center"
            pl="0px"
            pr="40px"
            value={inputAmount}
            onChange={onInputChange}
          />
        </InputGroup>
        <Text mt="22px" mb="3px">
          {isMontlyMode ? 'Save until' : 'Reach goal by'}
        </Text>
        <MonthPicker selectedDate={date} onSelectedDateChange={setDate} />
        <Flex
          justifyContent="flex-end"
          flexDirection="column"
          w="308px"
          mt="34px"
          border=" 1px solid lightgray"
          borderRadius="4px"
        >
          <Flex p="32px 25px" alignItems="center">
            <Text>{isMontlyMode ? 'Total amount' : 'Montly amount'}</Text>
            <Text
              color="primary"
              ml="auto"
              maxW="50%"
              fontSize="xl"
              fontWeight="700"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
            >
              {formattedTotalAmount}
            </Text>
          </Flex>
          <Flex
            h="47px"
            px="25px"
            borderBottomRadius="4px"
            bg="#F4F8FA"
            alignItems="center"
          >
            {descriptionText}
          </Flex>
        </Flex>
        <Button
          w="100%"
          mt="24px"
          borderRadius="10px"
          bg="primary"
          color="white"
          _hover={{ bg: 'blue.600' }}
          _active={{ bg: 'blue.800' }}
        >
          Finish
        </Button>
      </Box>
    </Center>
  )
}

export default App
