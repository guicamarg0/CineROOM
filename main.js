function search() {
    let input = document.getElementById('idNavForm').value.trim().toLowerCase();
    let filmeContainers = document.getElementsByClassName('filmeContainer');
    let found = false;  // Variável para verificar se algum filme foi encontrado
    
    for (let i = 0; i < filmeContainers.length; i++) {
        let nomeFilme = filmeContainers[i].getElementsByClassName('nomeFilme')[0].innerText.toLowerCase();

        if (nomeFilme.includes(input)) {
            filmeContainers[i].style.display = "flex";  // Exibe o filme
            found = true;  // Define como verdadeiro se encontrar um filme
        } else {
            filmeContainers[i].style.display = "none";  // Esconde o filme
        }
    }

    // Exibe a mensagem se nenhum filme for encontrado
    if (!found) {
        document.getElementById('noResultsMessage').style.display = "block";
    } else {
        document.getElementById('noResultsMessage').style.display = "none";
    }
}

function filterByCategory(category) {
    let filmeContainers = document.getElementsByClassName('filmeContainer');
    
    for (let i = 0; i < filmeContainers.length; i++) {
        let movieCategories = filmeContainers[i].getAttribute('data-category').split(',');

        // Verifica se a categoria selecionada está presente nas categorias do filme
        if (category === 'todos' || movieCategories.includes(category)) {
            filmeContainers[i].style.display = "flex";  // Exibe o filme
        } else {
            filmeContainers[i].style.display = "none";  // Esconde o filme
            
        }
    }
}


