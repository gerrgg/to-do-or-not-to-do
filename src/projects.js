import { todo } from './todo'

const projects = ( element ) => {
    

    const getProjects = () => {
        /**
         * If the user has a saved set of projects get that else return the default project
         */
        let myProjects;

        if( localStorage.getItem('myProjects') === null ) {
            myProjects = getDefaultProject() 
        } else {
            let data = JSON.parse( localStorage.getItem('myProjects') )
            console.log( data )
            
            // figure out how to save here
        } 

        return myProjects;
    }

    const getDefaultProject = () => {
        /**
         * Get a pre-built project if user has not created any
         */
        return {
            default: project( 
                'Build TODO Application', 
                'Build the best damn todo list this side of the mississippi.', 
                [ 
                    todo('Make todo\'s collapseable'),
                    todo('Give projects a priority attribute and color option'), 
                    todo('Allow todos to be created, edited, deleted and marked complete'),
                    todo('add a progress bar as items are checked off'),
                ] 
            )
        }
    }

    const render = ( list ) => {
        /**
         * Generate the HTML and append parent element
         */
        element.innerText = ""
        
        for( let key in list ){
            // get object
            let project = list[key]
            
            // create project wrapper
            let wrapper = document.createElement('div')
            wrapper.id = key + '-project'
            wrapper.className = 'project'
            
            // Create the header HTML
            let header = createHeading( project )
            
            // Create the list HTML
            let unorderedList = createUnorderedList( project.todos )

            // Put them together
            wrapper.append( header, unorderedList )

            wrapper.addEventListener( 'update', update )

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
            unorderedList.append( todo.listItem ) 
        } );

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
        description.innerText = project.description

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

    const update = ( e ) => {
        /**
         * Update the project object with the new edit
         */
        let i = 0;

        // use the projects id to find which project object to edit
        let key = e.target.id.replace( '-project', '' )
        let projectObject = list[key];

        // use the dom to recreate the object
        let header = e.target.children[0].children[0].innerText
        let description = e.target.children[0].children[1].innerText
        let todos = e.target.children[1]

        projectObject.name = header
        projectObject.description = description

        for( let todoElement of todos.children ){
            projectObject.todos[i] = todo( todoElement.innerText )
            i++;
        }

        list[key] = projectObject

        saveProject()
        render(list)
    }

    const saveProject = () => { localStorage.setItem( 'myProjects', JSON.stringify(list) ) }

    
    let list = getProjects()
    render( list )

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