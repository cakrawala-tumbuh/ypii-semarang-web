type MatomoEventPayload = {
  category: string
  action: string
  name?: string
  value?: number
}

declare global {
  interface Window {
    _paq?: Array<unknown>
  }
}

export function trackMatomoEvent({
  category,
  action,
  name,
  value,
}: MatomoEventPayload) {
  if (typeof window === "undefined") {
    return
  }

  const paq = window._paq
  if (!paq) {
    return
  }

  paq.push(["trackEvent", category, action, name, value])
}