const projects = ( element ) => {
   //
    let list = {
        default: project( 
            'Build TODO Application', 
            'Build the best damn todo list this side of the mississippi.', 
            [ 
                'Make todo\'s collapseable', 
                'Give projects a priority attribute and color option', 
                'Allow todos to be created, edited, deleted and marked complete',
                'add a progress bar as items are checked off',
            ] 
        )
    }

    const render = () => {
        /**
         * Generate the HTML and append parent element
         */
        for( let key in list ){
            // get object
            let project = list[key]
            
            // create project wrapper
            let wrapper = document.createElement('div')
            wrapper.className = 'project'
            
            // Create the header HTML
            let header = createHeading( project )
            
            // Create the list HTML
            let unorderedList = createUnorderedList( project.todos )

            // Put them together
            wrapper.append( header, unorderedList )

            // Add to element
            element.appendChild( wrapper )
        }

    }

    const createUnorderedList = ( todos ) => {
        /**
         * Creates the HTML list of project todos
         * @param array todos
         */

        // Create UL and give class name todos
        let unorderedList = document.createElement('ul')
        unorderedList.className = 'todos'
        
        // For each todo, create a list item
        todos.forEach( todo  => {
            let listItem = document.createElement('li')
            let checkbox = document.createElement('input')
            checkbox.type = 'checkbox'

            // add the text
            listItem.innerText = todo

            // add the checkbox
            listItem.prepend( checkbox )
            
            //add to UL
            unorderedList.append(listItem)
        });

        return unorderedList;
    }

    const createHeading = ( project ) => {
        /**
         * Creates the HTML header of each project
         * @param project
         */

        // Create wrapper and set class to .title
        let header = document.createElement('div')
        header.className = 'title'

        // create h3 and set innerText to project name
        let heading = document.createElement('h3')
        heading.innerText = project.name
        
        // create p and set innerText to project description
        let description = document.createElement('p')
        description.innerText = ' - ' + project.description

        // add the h3 and p to wrapper
        header.append( heading, description )

        // add event to header which collapses todo list
        header.addEventListener( 'click', collapse )

        return header;
    }

    const collapse = ( e ) => {
        /**
         * Make the todo list collapse and grow back
         * @param event
         */

         // Make sure we get the parent
        let header = ( e.target.classList.contains('title') ) ? e.target : e.target.parentNode

        // Get the todo list (is dependant on assigning header properly)
        let todos = header.nextElementSibling;

        // if its showing - hide it and vice versa
        if( todos.classList.contains( 'show' ) ) {
            header.classList.remove( 'show' )
            todos.classList.remove( 'show' )
        } else {
            header.classList.add( 'show' )
            todos.classList.add( 'show' )
        }

    }

    render()

};

const project = ( name, description, todos = [] ) => {
    /**
     * A project has a name, description and an array of todos
     * @param string name
     * @param string description
     * @param array todos
     */
    return { name, description, todos }
};

export { projects }