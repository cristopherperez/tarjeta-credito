function cargarTemplate(referenciaTemplate, instanciaComponente) {
    const template = document.querySelector(referenciaTemplate);
    const templateContent = template.content;
    instanciaComponente.attachShadow({ mode: "open" })
      .appendChild(templateContent.cloneNode(true));
  }