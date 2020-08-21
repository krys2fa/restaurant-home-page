const inputField = (labelName, fieldType) => {
  const input = document.createElement('input');
  input.setAttribute('name', labelName);
  input.setAttribute('type', fieldType);
  input.setAttribute('placeholder', labelName);
  input.setAttribute('minLength', 3);
  input.required = true;
  return input;
};

const textArea = (labelName) => {
  const areaInput = document.createElement('textarea');
  areaInput.setAttribute('placeholder', labelName);
  areaInput.setAttribute('rows', 6);
  areaInput.setAttribute('cols', 50);
  areaInput.setAttribute('minLength', 3);
  areaInput.required = true;
  return areaInput;
};

const button = () => {
  const btn = document.createElement('input');
  btn.setAttribute('type', 'submit');
  btn.setAttribute('value', 'SEND');
  btn.classList.add('btn');
  return btn;
};

const form = () => {
  const firstNameInput = inputField('First Name', 'text');
  const lastNameInput = inputField('Last Name', 'text');
  const emailInput = inputField('Email', 'email');
  const messageInput = textArea('Message');
  const formDiv = document.createElement('form');

  formDiv.appendChild(firstNameInput);
  formDiv.appendChild(lastNameInput);
  formDiv.appendChild(emailInput);
  formDiv.appendChild(messageInput);
  formDiv.appendChild(button());

  return formDiv;
};

// eslint-disable-next-line import/prefer-default-export
export { form };
