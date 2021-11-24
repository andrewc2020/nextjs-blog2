import { parseISO, format } from 'date-fns'
import { fr } from 'date-fns/locale'




export default function Date({ dateString }) : JSX.Element {
  const date: Date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'dddd dd/MMMM/yyyy',{ locale: fr })}</time>
}