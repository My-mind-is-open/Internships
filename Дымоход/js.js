

const form = document.querySelector('.form');


function retrieveFormValue(event) {

	event.preventDefault();

	const fields = document.querySelectorAll("input");
	const values = {};
	fields.forEach(field => {
		const { name, value } = field;
		values[name] = value;

	});
	console.log(values);
	alert(`Объект в консоли, посмотри:)${values.name}`)
	console.log('Мое резюме(Тут проекты, есть сайт по пиццам, который функционирует с бэкендом, загружу как перепишу на ts(react)):https://github.com/My-mind-is-open/Resume')

}

form.addEventListener('submit', retrieveFormValue);