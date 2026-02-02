// Concepts:
    // Function names in PascalCasing: first letter of each word in a compound identifier is capitalized (React developers expected)
    // JSX: JavaScript XML - syntax extension for JavaScript that allows developers to write HTML-like code directly within JavaScript files
    // -> Readability: Combines UI structure and logic in one place, improving code clarity
    // -> Easily Create Dynamic Content: with embedded JavaScript expressions, enabling real-time updates based on variables
    // Babel: is a JavaScript compiler that transforms modern JavaScript (including JSX) into backward-compatible code
    // -> Babel converts JSX into standard JavaScript using React.createElement() calls (babeljs.io/repl)
    // Virtual DOM: is a lightweight, in-memory (temporary  memory - RAM) representation of the actual DOM.
    // -> React uses this virtual copy to track changes in the application state and efficiently determine the minimal set of updates needed to reflect those changes in the real DOM
    // -> React updates only the Virtual DOM and React-dom updates the Real DOM
    
// Key Features of JSX:
    // Attributes in JSX: HTML attributes are written in camelCase
    // Embedded JavaScript: You can embed any valid JavaScript expression inside JSX using curly braces {}.

function Message() {
    const name = 'Sofia';
     
    if(name){
        return <h1>Hello {name}!</h1>;
    }
}

export default Message; // Exports a component from a file so it can be imported and used in other files
                        // A file can have only one export default, but can also include named exports