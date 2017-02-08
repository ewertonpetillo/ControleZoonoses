function confirmar(link){
	if(confirm("Deseja salvar?")){
		alert ("Registro salvo com sucesso!")
		window.location.href = link;
		} 
		else{
		return false;
	}
}

function confirmarvolta(link){
	if(confirm("Deseja realmente voltar para a página inicial?")){
			window.location.href = link;
		} 
		else{
		return false;
	}
}


