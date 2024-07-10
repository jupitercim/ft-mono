import { useParams } from "react-router-dom"
import { useEvents } from "./useEvents"
import format from "date-fns/format"

export const useEvent = () => {
  const params = useParams()
  const id = parseInt(params.id!)
  const events = useEvents()
  const event = events.find(event => event.id === id)!
  return {
    ...event,
    start: format(event.start, "yyyy-MM-dd HH:mm:ss"),
    end: format(event.end, "yyyy-MM-dd HH:mm:ss"),
  }
}