let a = 0;
let b = 0;

function loadScript(src,ms){ 
	return new Promise((resolve,reject) => {
		let script = document.createElement('script');
		script.src = src;
		script.onload = () => resolve(script);
		script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

		setTimeout(() => {document.head.append(script)},ms)
	});
}
let prom1 = loadScript('./Scripts/ascript.js', 3000)
	.then(() => {document.querySelector('#div1').textContent = `Значение a = ${a}`});

let prom2 = loadScript('./Scripts/bscript.js', 6000)
	.then(() => {document.querySelector('#div2').textContent = `Значение b = ${b}`});




		Promise.race([prom1,prom2])
		.then(() => {document.querySelector('#div3').textContent = 'Первый скрипт загружен.'})

		Promise.all([prom1,prom2])
		.then(() => {document.querySelector('#div3').textContent += ` Сумма a и b = ${a+b}`}) 

