export default class NotificationMessage{
  static prevNotification = null;

  constructor(message = '', {
    type = '',
    duration = 2000,
    } = {}) {
    this.message = message;
    this.type = type;
    this.duration = duration;
    this.getElement();
  }

  get template() {
    return `
    <div class="notification ${this.type}" style="--value: ${this.duration/1000}s">
      <div class="timer"></div>
        <div class="inner-wrapper">
          <div class="notification-header">${this.type}</div>
          <div class="notification-body">${this.message}</div>
      </div>
    </div>`;
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }

  show(targetElement) {
    if (NotificationMessage.prevNotification) {
      NotificationMessage.prevNotification.remove();
    }
    if (targetElement) {
      targetElement.append(this.getElement())
    } else {
      document.body.append(this.getElement())
    }
    NotificationMessage.prevNotification = this.element;
    setTimeout(() => this.remove(), this.duration)
  }

  getElement() {
    const element = document.createElement('div')
    element.className = this.type;
    element.innerHTML = this.template;
    this.element = element;
    return element;
  }
}

