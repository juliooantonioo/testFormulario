export const arrayFormulario = [
  {
    "label": "Nombres",
    "name": "nombres",
    "isRequired": true,
    "disabled": true,
    "type": "TextInput",
    "value": null
    
  },
  {
    "label": "Apellidos",
    "name": "apellidos",
    "isRequired": true,
    "disabled": true,
    "type": "TextInput",
    "value": null
    
  },
  {
    "label": "Email",
    "name": "email",
    "isRequired": true,
    "disabled": true,
    "type": "TextInput",
    "validation" : "email",
    "value": null
    
  },
  {
    "label": "Género",
    "name": "sexo",
    "isRequired": true,
    "disabled": false,
    "type": "Select",
    "items": [{"id":1,"value" : "Masculino"},{"id":2,"value" : "Femenino"},{"id":3,"value" : "Otro"}],
    "value": null
  },
  {
    "label": "Hobby",
    "name": "Hobby",
    "isRequired": true,
    "disabled": false,
    "type": "Radio",
    "items": [{"id":1,"value" : "Gym"},{"id":2,"value" : "Lol"},{"id":3,"value" : "Fornite"}],
    "value": null
  }
]