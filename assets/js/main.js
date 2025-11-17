// JS para manejar el formulario sin recargar la página
document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector('form[aria-labelledby="contacto"]')

	if (!form) return

	form.addEventListener("submit", (event) => {
		event.preventDefault()

		const nombre = document.getElementById("nombre")?.value || "estudiante"
		const nivel = document.getElementById("nivel")?.value || "sin especificar"

		alert(
			`Gracias, ${nombre}. Este es un formulario de ejemplo.\n\nNivel seleccionado: ${nivel}\n\nEn una app real aquí se enviaría tu información a un servidor.`
		)

		// Limpieza del formulario
		form.reset()

		// Opcional: devolver el foco al primer campo (accesibilidad real)
		document.getElementById("nombre").focus()
	})
})
