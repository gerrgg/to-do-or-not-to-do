require('./dom')

import { projects } from './projects'

const application = (() => {
    let projectsTab = projects( document.getElementById('lists') );
})();