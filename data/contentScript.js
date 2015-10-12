var replacements = {
	'name of account you want replaced' : 'new name'
}

$.each($('td[data-title = "Account name"] a'), function(index, element){
	if(replacements[element.text] !== undefined){
		element.text = replacements[element.text];
	}
})
