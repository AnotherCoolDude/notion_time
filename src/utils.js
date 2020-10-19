import { fromUnixTime, format } from 'date-fns'

function formatUnix(time, formatStyle = 'short') {
    var date = fromUnixTime(time)
    switch (formatStyle) {
        case 'long':
            return format(date, "dd MMM yyyy")
        case 'gantt':
            return format(date, "yyyy-MM-dd")
        default:
            return format(date, "dd.MM.yy")
    }
}

export {
    formatUnix
}