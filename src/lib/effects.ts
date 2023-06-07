async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

interface TypingParams {
  texts: string[]
  typingSpeed: number
  pauseDuration: number
}
interface SentenceTypingParams {
  start: boolean
  typingSpeed: number
  commaPauseDuration: number
  periodPauseDuration: number
}

export function typing(node: HTMLElement, params: TypingParams) {
  let running = true
  const { texts, typingSpeed, pauseDuration } = params
  let textIndex = 0
  async function type() {
    const newText = texts[textIndex % texts.length]
    const newTextLength = newText.length
    const typingDuration = newTextLength * typingSpeed
    for (let index = 0; index < newTextLength; index++) {
      setTimeout(() => {
        node.textContent = newText.slice(0, index + 1)
      }, typingSpeed * index)
    }
    await wait(typingDuration)
    await wait(pauseDuration)
    for (let index = newTextLength; index > 0; index--) {
      setTimeout(() => {
        node.textContent = newText.slice(0, index - 1)
      }, typingDuration - typingSpeed * index)
    }
    await wait(typingDuration)
    textIndex++
    if (running) type()
  }
  type()
  return {
    destroy: () => (running = false)
  }
}

export function sentenceTyping(node: HTMLElement, params: SentenceTypingParams) {
  const { typingSpeed, commaPauseDuration, periodPauseDuration } = params
  const text = node.textContent?.replace(/\s+/g, ' ') ?? ''
  node.style.opacity = '0'
  async function type() {
    node.style.opacity = '1'
    for (let index = 0; index < text.length; index++) {
      const char = text[index]
      node.textContent = text.slice(0, index + 1)
      if (char === ',') await wait(commaPauseDuration)
      else if (char === '.') await wait(periodPauseDuration)
      else await wait(typingSpeed)
    }
  }
  return {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    update(_: SentenceTypingParams) {
      type()
    }
  }
}
