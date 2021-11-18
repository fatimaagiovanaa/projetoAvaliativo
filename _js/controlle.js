/*##############
Inicio: Função de verificação dos campos do formulário
*/

function verificar(){
	var nome = document.getElementById('nome').value;
	var email = document.getElementById('email').value;
	var dtnasc = document.getElementById('datadenascimento').value;
	var fone = document.getElementById('fone').value;
	var cpf = document.getElementById('cpf').value;
	var senha = document.getElementById('senha').value;
	var PJ = document.getElementById('pessoajuridica').value;
	var PF = document.getElementById('pessoafisica').value;
	var genero = document.getElementById('genero').value;

	if(!nome || !email || !dtnasc || !fone || !cpf || !senha || !PF || !PJ || !genero){
		alert("Campos não preenchidos, favor preenche-los");
	} else{
		alert("Campos preenchidos com sucesso");
	}
}
/*##############
Final: Função de verificação dos campos do formulário
*/


 /*#############
 Inicio: Mascara de Telefone
 */


function  maskFone(){
	var numeroAtual = documnt.getElementById('fone').value;
	const isCelular = numeroAtual.length === 11;
	const isFone = numeroAtual.length === 10;
	let numeroAjustado;
	if(isCelular){
		const part1 = numeroAtual.slice(0,2);
		const part2 = numeroAtual.slice(2,7);
		const part3 = numeroAtual.slice(7,11);
		numeroAjustado = `(${part1}) ${part2}-${part3}`
	} else if(isFone){
		const part1 = numeroAtual.slice(0,2);
		const part2 = numeroAtual.slice(2,6);
		const part3 = numeroAtual.slice(6,10);
		numeroAjustado = `(${part1}) ${part2}-${part3}`
	} else{
		numeroAtual.value = ' ';
		alert("Número informato é incorreto, favor verificar!");
	}
	fone.value = numeroAjustado;
}