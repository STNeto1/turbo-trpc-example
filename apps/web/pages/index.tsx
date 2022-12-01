import { trpc } from '../utils/trpc'

export default function Web() {
  const { data, isLoading, error } = trpc.uptime.useQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  return (
    <div>
      <span>Server uptime: {data.uptime}</span>
    </div>
  )
}
