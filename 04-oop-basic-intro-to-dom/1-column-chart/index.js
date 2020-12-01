export default class ColumnChart {
  chartHeight = 50;

  constructor({
    data = [],
    link = '',
    value = 0,
    label = ''
    } = {}) {

    this.data = data;
    this.link = link;
    this.value = value;
    this.label = label;
    this.render();
  }

  getValue() {
    return this.value.toLocaleString();
  }

  get template() {
    return `
      <div class="column-chart__title">
        Total ${this.label}
        ${this.getLink()}
      </div>
        <div class="column-chart__container">
          <div data-element="header" class="column-chart__header">${this.getValue()}</div>
        </div>  
        <div data-element="body" class="column-chart__chart">
          ${this.getColumnBody(this.data)}
        </div>
      </div>
  `;
  }

  getLink() {
    if (this.link.length) {
      return `<a href="${this.link}" class="column-chart__link">View all</a>`;
    };
    return ''
  }

  render() {
    
    const element = document.createElement('div');
    element.className = 'column-chart column-chart_loading'
    element.innerHTML = this.template;
    this.element = element;
    if (this.data.length) {
      this.element.classList.remove("column-chart_loading");
    }
    
  
  }

  update(data) {
    this.data = data;
    this.render();
  }

  destroy() {
    this.remove();
    this.element = null;
  }

  remove() {
    this.element.remove();
  }

  getColumnBody(data) {
    const maxValue = Math.max(...data);
    const scale = 50 / maxValue;
  
    return data.map( (item) => {
        const percent = (item / maxValue * 100).toFixed(0) + '%';
        const value = String(Math.floor(item * scale));

        return `<div style="--value: ${value}" data-tooltip="${percent}"></div>`
      }).join("");
  }
}