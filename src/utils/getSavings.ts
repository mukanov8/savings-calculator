import { startOfMonth, differenceInCalendarMonths } from 'date-fns'
import { getNumber } from './getNumber'

export const getSavings = (
  isMontly: boolean,
  inputAmount: string,
  targetDate: Date
) => {
  const num = getNumber(inputAmount)
  const currentDate = startOfMonth(new Date())
  const numsOfDeposits = differenceInCalendarMonths(targetDate, currentDate)

  if (num < 1 || numsOfDeposits < 1)
    return {
      amount: (0).toLocaleString('en-US', {
        minimumFractionDigits: 2,
      }),
      numsOfDeposits: 0,
    }

  if (isMontly) {
    return {
      amount: (num * numsOfDeposits).toLocaleString('en-US', {
        minimumFractionDigits: 2,
      }),
      numsOfDeposits: numsOfDeposits,
    }
  }

  return {
    amount: (num / numsOfDeposits).toLocaleString('en-US', {
      minimumFractionDigits: 2,
    }),
    numsOfDeposits: numsOfDeposits,
  }
}
