import React from "react";

// For your name, title, and bio

function Introduction() {
    return (
        <div className = 'flex items-center justify-center flex-col text-center pt-12 pb-6'>
            <h1 className = 'text-5xl md:text-7x1 dark:text-neutral-100 mb-5 md:mb-5 font-bold'>Mayah McCutchen</h1>
            <p className = 'text-base md:text-xl mb-5 font-medium'>Data Scientist</p>
            <img // insert your image here, resize if needed using the w-x/12 starting with a mobile view, then work your way up
               src = '../images/me.jpeg'
               alt = "Mayah McCutchen" 
               class = "rounded-full w-7/12 md:w-5/12 lg:w-3/12 mb-6"
            />
            <p className = 'text-md max-w-xl mb-6 font-bold'>I am a Computer Science graduate and Data Professional and I am is most interested in analyzing and solving data problems and presenting solutions in a clear and concise manner. </p>
        </div>
    );
};

export default Introduction;
