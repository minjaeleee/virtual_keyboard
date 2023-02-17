export class Keyboard {
  constructor() {
    this.assignElement()
    this.addEvent()
  }
  assignElement() {
    this.switchEl = document.getElementById('switch');
    this.fontSelectEl = document.getElementById('font');
  }
  addEvent() {
    this.switchEl = document.addEventListener('change', event => {
      document.documentElement.setAttribute(
        'theme',
        event.target.checked ? 'dark-mode' : 'white-mode'
      )
    })
    this.fontSelectEl = document.addEventListener('change', event => {
      document.body.style.fontFamily = event.target.value
    })
  }
}
