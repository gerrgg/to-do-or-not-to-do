const lists = (() => {
    const getProjects = () => {
        let savedProjects = window.localStorage.getItem('saved-projects');
        return ( savedProjects === null ) ? { default: [] } : savedProjects
    }

    let _content = document.getElementById('lists');
    let _projects = document.getElementById( 'projects-inner' );

    let projects = getProjects();
    
})();

export { lists }