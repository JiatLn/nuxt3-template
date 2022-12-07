let cnt = 0

export default defineEventHandler(async (event) => {
  const { name } = event.context.params
  return `Hello ${name} from server, see you ${cnt++} times.`
})

