const controles = document.querySelector('.controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

controles.addEventListener('change', handleChange);

const handleStyles = {
  element: btn,
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  width(value) {
    this.element.style.width = `${value}px`;
  },
  height(value) {
    this.element.style.height = `${value}px`;
  },
  border(value) {
    this.element.style.border = `${value}`;
  },
  borderRadius(value) {
    this.element.style.borderRadius = `${value}px`;
  },
  fontFamily(value) {
    this.element.style.fontFamily = `${value}`;
  },
  fontSize(value) {
    this.element.style.fontSize = `${value}px`;
  }
}


function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyles[name](value);
  saveValues(name, value);
  showCss();

  console.log(name, value)
}

function showCss() {
  cssText.innerHTML = `<span>${btn.style.cssText.split('; ').join(';</span><span>')}`;
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const properties = Object.keys(localStorage)
  properties.forEach((propertie) => {
    handleStyles[propertie](localStorage[propertie])
    controles.elements[propertie].value = localStorage[propertie];
  });
  showCss();
}
setValues();