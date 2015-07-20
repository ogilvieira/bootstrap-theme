(function($){
    
    // plugins init
    $(".lazy").lazyload();
    
    // bootstrap classes for closed pages
    var page = $('html').attr('class');
    $('.relacionado').addClass('col-md-3 col-xs-12');
    $('.botao-commerce').addClass('btn btn-primary');
    $('.infobox ').addClass('alert alert-danger');
    $('#span_erro_carrinho').addClass('alert alert-info');
    
    switch (page) {
        
        case 'page-product':
            $('#esquerda').addClass('col-md-6 col-xs-12');
            $('#direita').addClass('col-md-6 col-xs-12');
            $('#button-buy').addClass('btn btn-success btn-lg')
            $('.fotosCompreJunto').addClass('col-md-8 col-xs-12');
            $('.fotosCompreJunto > *').addClass('col-md-3 col-xs-12');
            $('.precoCompreJunto').addClass('col-md-4 col-xs-12');
            $('.abasProduto ul').addClass('nav nav-tabs');
            break;
        
        case 'page-login':
            $('.caixa-login').addClass('col-md-6 col-xs-12');
            $('.caixa-cadastro').addClass('col-md-6 col-xs-12');
            
            break;
            
        case 'page-register':
            $('#CadastroAbas ul').addClass('nav nav-tabs');
            $('.botao-prosseguir-cadastro').addClass('btn btn-primary');
            break;
            
        case 'page-checkout_cart':
            $('#tabela_carrinho').addClass('table table-hover table-bordered');
            $('.caixa-forma-frete').addClass('table table-hover table-bordered');
            $('.qntd').addClass('text');
            break;
            
        case 'page-checkout_payment':
            $('.caixa-detalhes-compra').addClass('table table-hover table-bordered');
            break;
        
            
        case 'page-implantacao':
            $('#implantation-news-nome').addClass('text');
            $('#implantation-news-email').addClass('text');
            $('.implantation button').addClass('btn btn-primary');
            break;
        
        default:
            // code
    }
    
})(jQuery);
