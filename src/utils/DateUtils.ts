
export function fDate(date: Date | string | number) {
    return date ? new Date(date).toLocaleString('en-US', {month:'short', year:'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'}) : '';
}
  