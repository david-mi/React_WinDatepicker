/**
 * Format any date to a YYYY-MM-DD string format
 */

export function formatDate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
}

interface HandleTimeout {
  /** timeout callback */
  timeoutCallback: () => void,
  /** function to execute before timeout */
  preTimeoutCallback?: () => void,
  /** timeout delay, defaults to 0 */
  delay?: number
}

/** 
 * Handle callbacks around setTimout environnement
 * 
 * Prevent firing callbacks multiple times when a timeout is in process
 */

export function handleTimeout({ timeoutCallback, preTimeoutCallback, delay = 0 }: HandleTimeout) {
  let timeoutId: NodeJS.Timeout | null = null;

  return () => {
    if (timeoutId !== null) return;

    if (preTimeoutCallback) {
      preTimeoutCallback()
    }

    timeoutId = setTimeout(() => {
      timeoutCallback()
      timeoutId = null;
    }, delay);
  };
}