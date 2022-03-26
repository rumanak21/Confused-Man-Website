import React from 'react';

const QuestionAnswer = () => {
    return (
        <div>
            <h2>How React Works?</h2>
            <p>Ans: React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It composes complex UIs from small and isolated pieces of code called “components”.

                And also, React goes through its virtual DOM, creates a list of those changes that need to be made to the actual DOM, and then does it all in one single process.</p>

            <h2>How useState Works?</h2>
            <p>Ans: The useState() is a Hook that allows you to have state variables in functional components. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components.

                useState allows us to have state variables in functional components. We pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

                Moreover,
                useState enables us to add state to function components. Calling React.useState inside a function component generates a single piece of state associated with that component.

                And also, the state in a class is always an object, with Hooks, the state can be any type. Each piece of state holds a single value, which can be an object, an array, a boolean, or any other type you can imagine.</p>
        </div>
    );
};

export default QuestionAnswer;