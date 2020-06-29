import React from 'react';

// components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {



    return (
        <div>
            <Stage />
            <aside>
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Level" />
            </aside>


        </div>
    )
}

export default Tetris;