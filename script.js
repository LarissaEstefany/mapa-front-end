$(document).ready(function() {
    // Mostra formulário de cadastro ao clicar em "Sou novo por aqui"
    $('#novoAqui').click(function(e) {
        e.preventDefault();
        $('#formLogin').hide();
        $('#formCadastro').show();
    });

    // Mostra formulário de login ao clicar em "Já tenho cadastro"
    $('#jaCadastro').click(function(e) {
        e.preventDefault();
        $('#formCadastro').hide();
        $('#formLogin').show();
    });

    // Verifica se todos os campos estão preenchidos antes de enviar
    $('#formNovo').submit(function(e) {
        e.preventDefault();
        if (formNovoValido()) {
            alert('Formulário de cadastro enviado!');
        } else {
            alert('Preencha todos os campos!');
        }
    });

    $('#formExistente').submit(function(e) {
        e.preventDefault();
        if (formExistenteValido()) {
            alert('Formulário de login enviado!');
        } else {
            alert('Preencha todos os campos!');
        }
    });

    function formNovoValido() {
        // Verifica se todos os campos do formulário de cadastro estão preenchidos
        return $('#nomeCompleto').val() != '' &&
               $('#cep').val() != '' &&
               $('#emailNovo').val() != '' &&
               $('#senhaNovo').val() != '';
    }

    function formExistenteValido() {
        // Verifica se todos os campos do formulário de login estão preenchidos
        return $('#emailExistente').val() != '' &&
               $('#senhaExistente').val() != '';
    }
});
