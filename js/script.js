$(function(){
    
    // Placeholder da Barra de Pesquisa - Header

    $(':input').on('focus', function() {
        $('.search_header .search_icon').css('display','none');
        this.dataset.placeholder = this.placeholder;
        this.placeholder = '';
    }).on('blur', function(){
        this.placeholder = this.dataset.placeholder;
        searchBlock();
    });

    $('.nav_single').click(function(){
        $('.nav_single').removeClass('select');
        $(this).addClass('select');
    });

    // Script da Seção de Navegação

    $('#publicacoes').click(function(){
        $('.nav_element').css('display','none');
        $('.publicacoes_section').css('display','block');
    });

    $('#salvos').click(function(){
        $('.nav_element').css('display','none');
        $('.salvos_section').css('display','block');
    });

    $('#marcados').click(function(){
        $('.nav_element').css('display','none');
        $('.marcados_section').css('display','block');
    });

});


function searchBlock(){
    if($(':input').val() == ""){
        $('.search_header .search_icon').css('display','block');
    }
}