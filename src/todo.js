const todo = ( task ) => {
    /**
     * A todo element with the ability to edit, delete and be marked complete
     */

    const createControls = () => {
        /**
         * Creates the DOM which handles edit and delete functions
         */
        let controls = document.createElement('div')
        controls.className = 'controls'

        // edit
        let editButton = document.createElement('i')
        editButton.className = 'far fa-edit edit'
        editButton.addEventListener('click', editTodo )

        
        // delete
        let deleteButton = document.createElement('i')
        deleteButton.className = 'far fa-trash-alt delete'
        deleteButton.addEventListener('click', deleteTodo )

        // add to controls and return
        controls.append( editButton, deleteButton )

        return controls
    }

    const createCheckbox = () => {
        /**
         * Handles the HTML and listeners of the todo checkbox
         */
        let checkbox = document.createElement('input')
        checkbox.addEventListener( 'click', markComplete )
        checkbox.type = 'checkbox'

        return checkbox;
    }

    const createTaskWrapper = () => {
        /**
         * Handles the HTML of the listeners of the taskWrapper
         */
        let wrapper = document.createElement('span')
        wrapper.className = 'task'
        wrapper.innerText = task

        return wrapper
    }

    const editTodo = ( e ) => {
        /**
         * Edit the todo by replacing the span with an input and enter button
         */

        let wrapper = document.createElement('div')
        wrapper.style = "z-index: 10;position: absolute;display: flex;"

        // create the input for typing the new 
        let input = document.createElement('input')
        input.type = 'text'

        // set the inputs value to the current task
        input.value = taskWrapper.innerText

        // create the accept button for commiting an edit
        let accept = document.createElement('i')
        accept.className = 'far fa-check-circle'
        
        // temporary element which will be deleted on update
        wrapper.append( input, accept )
        
        // put the input and accept button above the task - z-index higher
        taskWrapper.append( wrapper )

        accept.addEventListener( 'click', maybeChangeTask )
    }

    const maybeChangeTask = ( e ) => {
        /**
         * Update the todo if input value has changed and not blank
         */
        let input = e.target.previousSibling

        // if attempted edit not blank or unchanged
        if( input.value != '' ){
            taskWrapper.innerText = input.value
        } else {
            input.parentNode.remove()
        }

        // SAVE THE CHANGE
    }

    const deleteTodo = () =>{
        /**
         * Delete the todo
         */
        console.log( taskWrapper, 'delete' )
    }
    
    const markComplete = ( e ) => {
        /**
         * toggles the objects complete property and class
         */
        complete = e.target.checked;

        if( complete ){
            listItem.classList.add('complete')
        } else {
            listItem.classList.remove('complete')
        }
    }



    // setup
    let complete = false;

    // create wrapper
    let listItem = document.createElement('li')

    // create checkbox
    let checkbox = createCheckbox();

    // create controls
    let controls = createControls();
    
    // set task to checkbox, tast and todo controls
    let taskWrapper = createTaskWrapper();

    listItem.append( checkbox, taskWrapper, controls )

    return { listItem }
}

export { todo }