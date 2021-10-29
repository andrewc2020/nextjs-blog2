import { parseISO, format } from 'date-fns'
import { fr, enGB} from 'date-fns/locale'

const locales = {enGB, fr}

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'dd/LL/yyyy', locales.fr)}</time>
}