import { parseISO, format } from 'date-fns'
import { fr } from 'date-fns/locale'




export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'dd/LL/yyyy')}</time>
}