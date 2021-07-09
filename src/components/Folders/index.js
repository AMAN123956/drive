import React from 'react'

const Folders = ({match}) => {

    const id=match.params.id


    return (
        <div>
            {id}
        </div>
    )
}

export default Folders
