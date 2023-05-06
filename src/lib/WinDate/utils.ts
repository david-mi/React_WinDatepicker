/**
 * Format any date to a YYYY-MM-DD string format
 */

export function formatDate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
}

/** 
 * Delays a function call
 * 
 * Prevent calling the callback multiple time during delay
 */

interface HandleTimeout {
  timeoutCallback: () => void,
  preTimeoutCallback?: () => void,
  delay?: number
}

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