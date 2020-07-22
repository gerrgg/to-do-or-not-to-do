const todoOrNotTodo = (() => {
    let tabLinks = document.getElementsByClassName('tab-link');

    for( let tabLink of tabLinks ){
        tabLink.addEventListener( 'click', getTabContent() )
    }


})();