import server from './server'

process.on('uncaughtException', (error) => {
  console.error(error)
})
process.on('unhandledRejection', (error) => {
  console.error(error)
})

const start = async () => {
  try {
    const port = process.env.API_PORT ? parseInt(process.env.API_PORT) : 4000

    await server.listen({
      port,
      host: '0.0.0.0'
    })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
