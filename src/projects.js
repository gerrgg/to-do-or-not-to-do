const projects = ( element ) => {
   //
    let list = {
        default: project( 
            'Build TODO Application', 
            'Build the best damn todo list application driven by modern javascript and bundled with webpack.js', 
            [ 
                'Make todo\'s collapseable', 
                'Give projects a priority attribute and color option', 
                'Allow todos to be created, edited, deleted and marked complete',
                'add a progress bar as items are checked off',
            ] 
        )
    }

    const render = () => {

        for( let key in list ){
            // get object
            let project = list[key]
            
            // create project wrapper
            let wrapper = document.createElement('div')
            wrapper.className = 'project'
            
            let header = document.createElement('div')
            header.className = 'title'
            
            // create heading and set to project name
            let heading = document.createElement('h3')
            heading.innerText = project.name
            
            let description = document.createElement('p')
            description.innerText = ' - ' + project.description
            
            let unorderedList = document.createElement('ul')
            unorderedList.className = 'todos'
            
            project.todos.forEach( todo  => {
                let listItem = document.createElement('li')
                listItem.innerText = todo
                
                unorderedList.appendChild(listItem)
            });

            header.append( heading, description )
            
            wrapper.append( header, unorderedList )

            element.appendChild( wrapper )
        }


    }

    render()

    console.log( list.default )
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