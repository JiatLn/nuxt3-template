import { sayHi } from '~~/src/server/fn'

let cnt = 0

export default defineEventHandler(async (event) => {
  const { name } = event.context.params
  return await sayHi(name, cnt++)
})
