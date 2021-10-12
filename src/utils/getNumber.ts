export const getNumber = (text: string) => {
  const arr = text.split('')
  const out: number[] = []

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  arr.forEach((el: any) => {
    if (!isNaN(el)) out.push(el)
  })

  return Number(out.join(''))
}
