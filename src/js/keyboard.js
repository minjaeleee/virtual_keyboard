export class Keyboard {
  constructor() {
    this.assignElement()
    this.addEvent()
  }

  assignElement() {
    this.containerEl = document.getElementById('container')
    this.switchEl = this.containerEl.querySelector('#switch')
    this.fontSelectEl = this.containerEl.querySelector('#font')
    this.keyboardEl = this.containerEl.querySelector('#keyboard')
    this.inputGroupEl = this.containerEl.querySelector('#input-group')
    this.inputEl = this.inputGroupEl.querySelector('#input')
  }

  addEvent() {
    this.switchEl = document.addEventListener('change', this.onChangeTheme)
    this.fontSelectEl = document.addEventListener('change', this.onChangeFont)
    document.addEventListener('keydown', this.onKeyDown.bind(this))
    document.addEventListener('keyup', this.onKeyUp.bind(this))
    this.inputEl.addEventListener('input', this.onInput)
  }

  onInput(event) {
    event.target.value = event.target.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/, "")
  }

  onKeyDown(event) {
    // 두 번째 인자가 true이면 첫 번째 인자 class 추가
    this.inputGroupEl.classList.toggle('error',
      /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(event.key)
    )
    this.keyboardEl
      .querySelector(`[data-code=${event.code}]`)
      ?.classList.add('active')
  }

  onKeyUp(event) {
    this.keyboardEl
      .querySelector(`[data-code=${event.code}]`)
      ?.classList.remove('active')
  }

  onChangeTheme(event) {
    document.documentElement.setAttribute(
      'theme',
      event.target.checked ? 'dark-mode' : 'white-mode'
    )
  }

  onChangeFont(event) {
    document.body.style.fontFamily = event.target.value

  }
}
