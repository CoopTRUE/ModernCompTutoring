interface Params {
  texts: string[]
  typingSpeed?: number
  pauseDuration?: number
}

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function typing(node: HTMLElement, params: Params) {
  let running = true
  const { texts, typingSpeed = 50, pauseDuration = 1000 } = params
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
