import { projects } from './projects'
require('./dom')


const application = (() => {
    let projectsTab = projects( document.getElementById('lists') );
})();