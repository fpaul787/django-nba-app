export function parseDate(customDate, separator = '', reverse = false) {
    if (customDate == null) {
        customDate = new Date()
    }

    let day = customDate.getDate()
    let month = customDate.getMonth() + 1
    let year = customDate.getFullYear()

    if (reverse) {
        return `${month < 10 ? `0${month}` : `${month}`}${separator}${
            day < 10 ? `0${day}` : `${day}`
        }${separator}${year}`
    }

    return `${year}${separator}${
        month < 10 ? `0${month}` : `${month}`
    }${separator}${day < 10 ? `0${day}` : `${day}`}`
}