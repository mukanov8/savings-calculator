import React from 'react'
import {
  Button,
  ButtonGroup,
  Center,
  Flex,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Heading,
  Grid,
} from '@chakra-ui/react'
import {
  addMonths,
  addYears,
  format,
  getYear,
  startOfMonth,
  subMonths,
  subYears,
  isFuture,
} from 'date-fns'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

interface MonthPickerProps {
  selectedDate: Date
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>
}

const MonthPicker: React.FC<MonthPickerProps> = ({
  selectedDate,
  setSelectedDate,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const selectedYear = getYear(selectedDate)

  return (
    <>
      <ButtonGroup isAttached variant="ghost" w="100%">
        <IconButton
          border="1px solid lightgray"
          borderRight="none"
          aria-label="Previous month"
          bg="background"
          icon={<ChevronLeftIcon color="darkgray" />}
          disabled={!isFuture(subMonths(selectedDate, 1))}
          onClick={() => {
            setSelectedDate(subMonths(selectedDate, 1))
          }}
        />
        <Button
          borderY="1px solid lightgray"
          w="100%"
          fontWeight="400"
          onClick={onOpen}
        >
          {format(selectedDate, 'LLLL yyyy')}
        </Button>
        <IconButton
          border="1px solid lightgray"
          borderLeft="none"
          aria-label="Next month"
          bg="background"
          icon={<ChevronRightIcon color="darkgray" />}
          onClick={() => setSelectedDate(addMonths(selectedDate, 1))}
        />
      </ButtonGroup>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody p="18px 12px 28px 12px" bg="background" borderRadius="8px">
            <Flex
              display="flex"
              justifyContent="space-between"
              p="16px 8px"
              alignItems="center"
            >
              <IconButton
                variant="ghost"
                aria-label="Previous year"
                icon={
                  <ChevronLeftIcon minH="100%" minW="100%" color="darkgray" />
                }
                size="sm"
                disabled={!isFuture(subYears(selectedDate, 1))}
                onClick={() => setSelectedDate(subYears(selectedDate, 1))}
                _hover={{ bg: 'gray.200' }}
              />
              <Heading as="h2" textAlign="center" size="lg">
                {selectedYear}
              </Heading>
              <IconButton
                variant="ghost"
                aria-label="Next year"
                icon={
                  <ChevronRightIcon minH="100%" minW="100%" color="darkgray" />
                }
                size="sm"
                onClick={() => setSelectedDate(addYears(selectedDate, 1))}
                _hover={{ bg: 'gray.200' }}
              />
            </Flex>
            <Grid
              templateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)']}
              gap={2}
            >
              {MONTHS.map((month, monthIndex) => (
                <Center
                  as={Button}
                  variant="ghost"
                  w="100%"
                  p="8px 16px"
                  borderRadius="8px"
                  fontSize="md"
                  fontWeight="normal"
                  bg={
                    selectedDate.getMonth() === monthIndex
                      ? 'primary'
                      : 'undefined'
                  }
                  color={
                    selectedDate.getMonth() === monthIndex ? 'white' : 'black'
                  }
                  _hover={{ bg: 'gray.200', color: 'black' }}
                  key={monthIndex.toString()}
                  disabled={
                    !isFuture(startOfMonth(new Date(selectedYear, monthIndex)))
                  }
                  onClick={() => {
                    setSelectedDate(
                      startOfMonth(new Date(selectedYear, monthIndex))
                    )
                    onClose()
                  }}
                >
                  {month}
                </Center>
              ))}
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default MonthPicker
