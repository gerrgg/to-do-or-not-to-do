const DOM = (() => {

    const switchTab = ( e ) => {
        /**
         * On click, set the clicked items class to .active and show the element in data-target
         */
        let elementToShow = document.getElementById(e.target.attributes["data-target"].nodeValue);

        // remove class .active from tab links and .show from inner workings
        for( let tabLink of tabLinks ){
            let elementToHide = document.getElementById(tabLink.attributes["data-target"].nodeValue);
            tabLink.classList.remove('active');
            elementToHide.classList.remove('show');
        }

        // add .active class to target
        e.target.classList.add('active');

        // show element specified in target's data-target attribute
        elementToShow.classList.add('show');
    }

    const slideMenu = () => {
        /**
         * On click, show and hide the sidebar
         */
        let visibility = ( sidebar.style.visibility === 'visible' ) ? 'collapse' : 'visible'
        sidebar.style.visibility = visibility;
    }
    
    // elements
    let tabLinks = document.getElementsByClassName('tab-link');
    let menuButton = document.getElementById('menu-button');
    let sidebar = document.getElementById('project-sidebar')

    // listenersYes 
    for( let tabLink of tabLinks ){
        tabLink.addEventListener( 'click', switchTab )
    }

    menuButton.addEventListener( 'click', slideMenu )


})();