# MenuHightlight
Javascript/jQuery para destacar a página atual em um menu de navegação, usando como referência a URL da página carregada no navegador.

##Referência
[Script original](http://www.paulund.co.uk/use-jquery-to-highlight-active-menu-item)

##Dependências:
[jQuery] (https://github.com/jquery/jquery)

##Estrutura HTML
A seguinte estrutura HTML é usada como referência para a construção dos menus:

```
ul > li.active > a
```

##Classes CSS
- ```.home``` é colocado no(s) item(s) da lista que representa o link para a homepage (usado em projetos que não possuem um redirecionamento de url amigável)
- ```.ancestor``` colocado nos itens da lista que possuem submenu
- ```.produto``` colocado no no item da lista com o link para a listagem de produtos.
- ```.active``` classe adicionada no elemento ```<li>``` referente ao item do menu atual.
