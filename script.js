// Quiz Data - In a real app, you might fetch this from an API
// Quiz Data - Now with 25 questions per category
const quizData = {
    html: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "Hyper Transfer Markup Language",
                "Home Tool Markup Language",
                "Hyperlinks and Text Markup Language"
            ],
            answer: "Hyper Text Markup Language"
        },
        {
            question: "Which HTML element is used for the largest heading?",
            options: ["<heading>", "<h6>", "<h1>", "<head>"],
            answer: "<h1>"
        },
        {
            question: "Which attribute is used to provide a unique name to an HTML element?",
            options: ["class", "id", "type", "name"],
            answer: "id"
        },
        {
            question: "Which HTML element is used to define an unordered list?",
            options: ["<ul>", "<ol>", "<li>", "<list>"],
            answer: "<ul>"
        },
        {
            question: "Which HTML5 element is used for footer content?",
            options: ["<bottom>", "<footer>", "<section>", "<div>"],
            answer: "<footer>"
        },
        {
            question: "Which HTML tag is used for a line break?",
            options: ["<br>", "<lb>", "<break>", "<line>"],
            answer: "<br>"
        },
        {
            question: "What is the correct HTML for adding a background color?",
            options: [
                "<body bg='yellow'>",
                "<body style='background-color:yellow;'>",
                "<background>yellow</background>",
                "<body color='yellow'>"
            ],
            answer: "<body style='background-color:yellow;'>"
        },
        {
            question: "Which HTML attribute specifies an alternate text for an image?",
            options: ["src", "title", "alt", "href"],
            answer: "alt"
        },
        {
            question: "Which HTML element is used to specify a header for a document or section?",
            options: ["<header>", "<head>", "<hgroup>", "<top>"],
            answer: "<header>"
        },
        {
            question: "Which HTML element is used to display a scalar measurement within a range?",
            options: ["<range>", "<meter>", "<measure>", "<gauge>"],
            answer: "<meter>"
        },
        {
            question: "Which HTML element defines the title of a document?",
            options: ["<meta>", "<title>", "<head>", "<header>"],
            answer: "<title>"
        },
        {
            question: "Which HTML element is used to specify a list of pre-defined options for an input element?",
            options: ["<options>", "<list>", "<datalist>", "<autocomplete>"],
            answer: "<datalist>"
        },
        {
            question: "Which HTML element defines navigation links?",
            options: ["<nav>", "<navigate>", "<links>", "<navigation>"],
            answer: "<nav>"
        },
        {
            question: "Which HTML5 element is used for playing video files?",
            options: ["<media>", "<video>", "<movie>", "<play>"],
            answer: "<video>"
        },
        {
            question: "Which HTML element is used to define important text?",
            options: ["<important>", "<b>", "<strong>", "<i>"],
            answer: "<strong>"
        },
        {
            question: "Which HTML element defines a paragraph?",
            options: ["<para>", "<p>", "<paragraph>", "<pg>"],
            answer: "<p>"
        },
        {
            question: "Which HTML element is used to define emphasized text?",
            options: ["<emphasize>", "<em>", "<italic>", "<strong>"],
            answer: "<em>"
        },
        {
            question: "Which HTML attribute is used to define inline styles?",
            options: ["style", "class", "font", "styles"],
            answer: "style"
        },
        {
            question: "Which HTML element is used to define a hyperlink?",
            options: ["<hyperlink>", "<a>", "<link>", "<href>"],
            answer: "<a>"
        },
        {
            question: "Which HTML element is used to define a table row?",
            options: ["<td>", "<tr>", "<th>", "<row>"],
            answer: "<tr>"
        },
        {
            question: "Which HTML element is used to define a table header cell?",
            options: ["<thead>", "<th>", "<td>", "<header>"],
            answer: "<th>"
        },
        {
            question: "Which HTML element is used to define a table data/cell?",
            options: ["<td>", "<data>", "<cell>", "<tr>"],
            answer: "<td>"
        },
        {
            question: "Which HTML element is used to define a table?",
            options: ["<table>", "<tb>", "<tr>", "<tab>"],
            answer: "<table>"
        },
        {
            question: "Which HTML element is used to define a caption for a table?",
            options: ["<caption>", "<cap>", "<title>", "<description>"],
            answer: "<caption>"
        },
        {
            question: "Which HTML element is used to group related elements in a form?",
            options: ["<group>", "<fieldset>", "<div>", "<section>"],
            answer: "<fieldset>"
        }
    ],
    css: [
        {
            question: "What does CSS stand for?",
            options: [
                "Computer Style Sheets",
                "Creative Style Sheets",
                "Cascading Style Sheets",
                "Colorful Style Sheets"
            ],
            answer: "Cascading Style Sheets"
        },
        {
            question: "Which CSS property is used to change the text color of an element?",
            options: ["text-color", "font-color", "color", "text-style"],
            answer: "color"
        },
        {
            question: "Which CSS property controls the text size?",
            options: ["font-style", "text-size", "font-size", "text-style"],
            answer: "font-size"
        },
        {
            question: "How do you select an element with id 'demo' in CSS?",
            options: ["#demo", ".demo", "demo", "*demo"],
            answer: "#demo"
        },
        {
            question: "Which property is used to change the background color?",
            options: ["bgcolor", "background-color", "color", "bg-color"],
            answer: "background-color"
        },
        {
            question: "Which CSS property is used to change the font of an element?",
            options: ["font-family", "font-style", "text-font", "font"],
            answer: "font-family"
        },
        {
            question: "Which CSS property is used to add space between the content and the border of an element?",
            options: ["margin", "spacing", "padding", "border-space"],
            answer: "padding"
        },
        {
            question: "Which CSS property is used to add space outside the border of an element?",
            options: ["margin", "spacing", "padding", "border-space"],
            answer: "margin"
        },
        {
            question: "How do you make each word in a text start with a capital letter?",
            options: [
                "text-transform: capitalize",
                "text-transform: uppercase",
                "text-style: capital",
                "font-variant: small-caps"
            ],
            answer: "text-transform: capitalize"
        },
        {
            question: "Which CSS property controls the space between lines of text?",
            options: ["line-height", "spacing", "line-spacing", "text-space"],
            answer: "line-height"
        },
        {
            question: "How do you select all <p> elements inside a <div> element?",
            options: ["div.p", "div + p", "div p", "div > p"],
            answer: "div p"
        },
        {
            question: "Which CSS property specifies how to align the last line of a text?",
            options: [
                "text-align-last",
                "text-align",
                "text-justify",
                "text-last-align"
            ],
            answer: "text-align-last"
        },
        {
            question: "Which CSS property specifies the type of cursor to be displayed?",
            options: ["mouse-pointer", "cursor", "pointer", "cursor-type"],
            answer: "cursor"
        },
        {
            question: "Which CSS property is used to create rounded corners?",
            options: ["border-round", "corner-radius", "border-radius", "round-corner"],
            answer: "border-radius"
        },
        {
            question: "Which CSS property adds shadow to text?",
            options: ["text-shadow", "font-shadow", "shadow", "text-effect"],
            answer: "text-shadow"
        },
        {
            question: "Which CSS property specifies the transparency of an element?",
            options: ["opacity", "transparency", "visibility", "alpha"],
            answer: "opacity"
        },
        {
            question: "Which CSS property specifies whether the borders are collapsed into a single border or not?",
            options: [
                "border-style",
                "border-collapse",
                "table-layout",
                "border-spacing"
            ],
            answer: "border-collapse"
        },
        {
            question: "Which CSS property specifies the stack order of an element?",
            options: ["z-index", "stack-order", "element-index", "layer"],
            answer: "z-index"
        },
        {
            question: "Which CSS property specifies the type of positioning method used for an element?",
            options: ["position", "positioning", "layout", "display"],
            answer: "position"
        },
        {
            question: "Which CSS property specifies if/how an element is displayed?",
            options: ["display", "visibility", "show", "render"],
            answer: "display"
        },
        {
            question: "Which CSS property specifies the left position of a positioned element?",
            options: ["left", "position-left", "offset-left", "x-position"],
            answer: "left"
        },
        {
            question: "Which CSS property specifies the width of the left border?",
            options: ["border-left", "left-border", "border-left-width", "border-width-left"],
            answer: "border-left-width"
        },
        {
            question: "Which CSS property specifies the space between cells in a table?",
            options: ["cell-spacing", "table-spacing", "border-spacing", "margin"],
            answer: "border-spacing"
        },
        {
            question: "Which CSS property specifies the horizontal alignment of text in an element?",
            options: ["text-align", "align", "text-horizontal", "horizontal-align"],
            answer: "text-align"
        },
        {
            question: "Which CSS property specifies how the background image is repeated?",
            options: [
                "background-repeat",
                "repeat-background",
                "background-style",
                "background-tiling"
            ],
            answer: "background-repeat"
        }
    ],
    javascript: [
        {
            question: "Which of the following is not a JavaScript data type?",
            options: ["String", "Number", "Boolean", "Float"],
            answer: "Float"
        },
        {
            question: "What is the correct syntax for referring to an external script called 'script.js'?",
            options: [
                "<script href='script.js'>",
                "<script name='script.js'>",
                "<script src='script.js'>",
                "<script file='script.js'>"
            ],
            answer: "<script src='script.js'>"
        },
        {
            question: "How do you write 'Hello World' in an alert box?",
            options: [
                "alertBox('Hello World');",
                "msg('Hello World');",
                "alert('Hello World');",
                "msgBox('Hello World');"
            ],
            answer: "alert('Hello World');"
        },
        {
            question: "How do you create a function in JavaScript?",
            options: [
                "function = myFunction()",
                "function:myFunction()",
                "function myFunction()",
                "create myFunction()"
            ],
            answer: "function myFunction()"
        },
        {
            question: "Which operator is used to assign a value to a variable?",
            options: ["*", "-", "=", "x"],
            answer: "="
        },
        {
            question: "How do you call a function named 'myFunction'?",
            options: [
                "call myFunction()",
                "myFunction()",
                "call function myFunction()",
                "execute myFunction()"
            ],
            answer: "myFunction()"
        },
        {
            question: "How to write an IF statement in JavaScript?",
            options: [
                "if i = 5 then",
                "if (i == 5)",
                "if i == 5 then",
                "if i = 5"
            ],
            answer: "if (i == 5)"
        },
        {
            question: "How does a WHILE loop start?",
            options: [
                "while i = 1 to 10",
                "while (i <= 10; i++)",
                "while (i <= 10)",
                "while i <= 10"
            ],
            answer: "while (i <= 10)"
        },
        {
            question: "How do you round the number 7.25 to the nearest integer?",
            options: ["Math.rnd(7.25)", "round(7.25)", "Math.round(7.25)", "rnd(7.25)"],
            answer: "Math.round(7.25)"
        },
        {
            question: "How do you find the number with the highest value of x and y?",
            options: [
                "Math.max(x, y)",
                "Math.ceil(x, y)",
                "top(x, y)",
                "Math.highest(x, y)"
            ],
            answer: "Math.max(x, y)"
        },
        {
            question: "What is the correct way to write a JavaScript array?",
            options: [
                "var colors = (1:'red', 2:'green', 3:'blue')",
                "var colors = ['red', 'green', 'blue']",
                "var colors = 'red', 'green', 'blue'",
                "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
            ],
            answer: "var colors = ['red', 'green', 'blue']"
        },
        {
            question: "Which operator is used to concatenate two strings?",
            options: ["+", "&", ".", "*"],
            answer: "+"
        },
        {
            question: "How do you add a comment in JavaScript?",
            options: [
                "'This is a comment",
                "<!--This is a comment-->",
                "//This is a comment",
                "*This is a comment*"
            ],
            answer: "//This is a comment"
        },
        {
            question: "What is the correct way to write a JavaScript object?",
            options: [
                "var person = {firstName:'John', lastName:'Doe'};",
                "var person = {firstName = 'John', lastName = 'Doe'};",
                "var person = (firstName:'John', lastName:'Doe');",
                "var person = firstName:'John', lastName:'Doe';"
            ],
            answer: "var person = {firstName:'John', lastName:'Doe'};"
        },
        {
            question: "How do you declare a JavaScript variable?",
            options: [
                "variable carName;",
                "v carName;",
                "var carName;",
                "let carName;"
            ],
            answer: "var carName;"
        },
        {
            question: "Which event occurs when the user clicks on an HTML element?",
            options: ["onchange", "onclick", "onmouseclick", "onmouseover"],
            answer: "onclick"
        },
        {
            question: "How do you create a new date object in JavaScript?",
            options: [
                "var d = new Date();",
                "var d = Date();",
                "var d = new Date(current);",
                "var d = Date.now();"
            ],
            answer: "var d = new Date();"
        },
        {
            question: "Which method returns the length of a string?",
            options: ["length()", "size()", "index()", "None of these"],
            answer: "None of these"
        },
        {
            question: "Which method removes the last element from an array?",
            options: ["pop()", "remove()", "last()", "cut()"],
            answer: "pop()"
        },
        {
            question: "Which method adds new items to the end of an array?",
            options: ["append()", "push()", "add()", "insert()"],
            answer: "push()"
        },
        {
            question: "What will the following code return: Boolean(10 > 9)?",
            options: ["true", "false", "NaN", "undefined"],
            answer: "true"
        },
        {
            question: "What is the correct way to write a JavaScript promise?",
            options: [
                "new Promise(function(resolve, reject) {});",
                "promise(function(resolve, reject) {});",
                "Promise.new(function(resolve, reject) {});",
                "new Promise = function(resolve, reject) {};"
            ],
            answer: "new Promise(function(resolve, reject) {});"
        },
        {
            question: "Which method converts JSON text to a JavaScript object?",
            options: [
                "JSON.decode()",
                "JSON.parse()",
                "JSON.toObject()",
                "JSON.convert()"
            ],
            answer: "JSON.parse()"
        },
        {
            question: "Which method converts a JavaScript object to JSON text?",
            options: [
                "JSON.encode()",
                "JSON.stringify()",
                "JSON.toText()",
                "JSON.convert()"
            ],
            answer: "JSON.stringify()"
        },
        {
            question: "What is the purpose of the 'this' keyword in JavaScript?",
            options: [
                "It refers to the previous object",
                "It refers to the current object",
                "It refers to the next object",
                "It creates a new object"
            ],
            answer: "It refers to the current object"
        }
    ],
    react: [
        {
            question: "What is React?",
            options: [
                "A server-side framework",
                "A JavaScript library for building user interfaces",
                "A programming language",
                "A database management system"
            ],
            answer: "A JavaScript library for building user interfaces"
        },
        {
            question: "Which command is used to create a new React app?",
            options: [
                "npm create-react-app",
                "npm install react",
                "npx create-react-app",
                "install react-app"
            ],
            answer: "npx create-react-app"
        },
        {
            question: "What is used to pass data to a component from outside in React?",
            options: ["setState", "render with arguments", "Props", "PropTypes"],
            answer: "Props"
        },
        {
            question: "In which directory React components are created?",
            options: ["src/components", "src/root", "public/components", "vendor/components"],
            answer: "src/components"
        },
        {
            question: "What is the default port for webpack dev server in React?",
            options: ["3000", "8080", "3306", "4200"],
            answer: "3000"
        },
        {
            question: "What is JSX?",
            options: [
                "A syntax extension for JavaScript",
                "A template language",
                "A CSS preprocessor",
                "A database query language"
            ],
            answer: "A syntax extension for JavaScript"
        },
        {
            question: "Which hook is used to manage state in functional components?",
            options: ["useState", "useEffect", "useContext", "useReducer"],
            answer: "useState"
        },
        {
            question: "Which method is called when a component is being removed from the DOM?",
            options: [
                "componentWillUnmount",
                "componentDidUnmount",
                "componentRemoved",
                "componentDestroy"
            ],
            answer: "componentWillUnmount"
        },
        {
            question: "What is the purpose of useEffect hook?",
            options: [
                "To perform side effects in function components",
                "To create effects in CSS",
                "To handle events",
                "To create new components"
            ],
            answer: "To perform side effects in function components"
        },
        {
            question: "How do you update the state in a class component?",
            options: [
                "this.state = newState",
                "this.setState(newState)",
                "this.updateState(newState)",
                "this.changeState(newState)"
            ],
            answer: "this.setState(newState)"
        },
        {
            question: "What is a higher-order component in React?",
            options: [
                "A component that renders another component",
                "A component that is used to make HTTP requests",
                "A function that takes a component and returns a new component",
                "A component with advanced styling"
            ],
            answer: "A function that takes a component and returns a new component"
        },
        {
            question: "Which method is called after a component is rendered for the first time?",
            options: [
                "componentDidMount",
                "componentWillMount",
                "componentRendered",
                "componentUpdated"
            ],
            answer: "componentDidMount"
        },
        {
            question: "What is the purpose of keys in React?",
            options: [
                "To uniquely identify elements in lists",
                "To encrypt component data",
                "To lock components from updates",
                "To provide authentication"
            ],
            answer: "To uniquely identify elements in lists"
        },
        {
            question: "What is the virtual DOM in React?",
            options: [
                "A lightweight copy of the real DOM",
                "A 3D rendering of components",
                "A DOM that exists only in development",
                "A DOM that doesn't update"
            ],
            answer: "A lightweight copy of the real DOM"
        },
        {
            question: "Which hook is used to perform side effects in function components?",
            options: ["useState", "useEffect", "useContext", "useReducer"],
            answer: "useEffect"
        },
        {
            question: "What is the purpose of useContext hook?",
            options: [
                "To manage global state",
                "To create context menus",
                "To handle click events",
                "To style components"
            ],
            answer: "To manage global state"
        },
        {
            question: "How do you pass data from child to parent component?",
            options: [
                "Using props",
                "Using state",
                "Using callback functions",
                "Using refs"
            ],
            answer: "Using callback functions"
        },
        {
            question: "What is React Router used for?",
            options: [
                "For database routing",
                "For navigation between components",
                "For API routing",
                "For CSS routing"
            ],
            answer: "For navigation between components"
        },
        {
            question: "Which method is used to render React elements to the DOM?",
            options: [
                "ReactDOM.render()",
                "React.render()",
                "ReactDOM.mount()",
                "React.mount()"
            ],
            answer: "ReactDOM.render()"
        },
        {
            question: "What is the purpose of useReducer hook?",
            options: [
                "To manage complex state logic",
                "To reduce component size",
                "To combine multiple states",
                "To optimize performance"
            ],
            answer: "To manage complex state logic"
        },
        {
            question: "What is the children prop?",
            options: [
                "A special prop that contains child components",
                "A prop for rendering child elements",
                "A prop that contains component methods",
                "A prop for child routes"
            ],
            answer: "A special prop that contains child components"
        },
        {
            question: "How do you conditionally render components in React?",
            options: [
                "Using if statements or ternary operators",
                "Using switch statements",
                "Using for loops",
                "Using while loops"
            ],
            answer: "Using if statements or ternary operators"
        },
        {
            question: "What is prop drilling in React?",
            options: [
                "The process of passing props through multiple levels",
                "The process of creating props",
                "The process of validating props",
                "The process of deleting props"
            ],
            answer: "The process of passing props through multiple levels"
        },
        {
            question: "What is the purpose of React.Fragment?",
            options: [
                "To group multiple elements without adding extra nodes",
                "To create document fragments",
                "To improve performance",
                "To handle errors"
            ],
            answer: "To group multiple elements without adding extra nodes"
        },
        {
            question: "What is the purpose of useCallback hook?",
            options: [
                "To memoize functions",
                "To handle callbacks",
                "To create new functions",
                "To optimize rendering"
            ],
            answer: "To memoize functions"
        }
    ],
    express: [
        {
            question: "What is Express.js?",
            options: [
                "A front-end JavaScript framework",
                "A back-end web application framework for Node.js",
                "A database management system",
                "A templating engine for Node.js"
            ],
            answer: "A back-end web application framework for Node.js"
        },
        {
            question: "Which command is used to install Express.js?",
            options: [
                "npm install express",
                "node install express",
                "install express",
                "npm get express"
            ],
            answer: "npm install express"
        },
        {
            question: "Which method is used to handle GET requests in Express?",
            options: ["app.post()", "app.get()", "app.set()", "app.use()"],
            answer: "app.get()"
        },
        {
            question: "What is the purpose of the 'req' object in Express?",
            options: [
                "To represent the response that will be sent",
                "To represent the HTTP request",
                "To store application settings",
                "To handle database connections"
            ],
            answer: "To represent the HTTP request"
        },
        {
            question: "Which middleware is used to parse JSON bodies in Express?",
            options: [
                "express.json()",
                "bodyParser.text()",
                "express.urlencoded()",
                "express.text()"
            ],
            answer: "express.json()"
        },
        {
            question: "What is the purpose of the 'res' object in Express?",
            options: [
                "To represent the HTTP request",
                "To represent the response that will be sent",
                "To store resources",
                "To handle routing"
            ],
            answer: "To represent the response that will be sent"
        },
        {
            question: "Which method is used to send a JSON response in Express?",
            options: ["res.send()", "res.json()", "res.end()", "res.output()"],
            answer: "res.json()"
        },
        {
            question: "What is middleware in Express?",
            options: [
                "Functions that have access to the request and response objects",
                "Database connection handlers",
                "Template rendering engines",
                "Error handling functions"
            ],
            answer: "Functions that have access to the request and response objects"
        },
        {
            question: "Which method is used to set the HTTP status code in Express?",
            options: [
                "res.code()",
                "res.status()",
                "res.setStatus()",
                "res.httpCode()"
            ],
            answer: "res.status()"
        },
        {
            question: "How do you serve static files in Express?",
            options: [
                "app.static()",
                "express.static()",
                "app.use(express.static())",
                "express.file()"
            ],
            answer: "app.use(express.static())"
        },
        {
            question: "Which method is used to redirect responses in Express?",
            options: [
                "res.redirect()",
                "res.to()",
                "res.location()",
                "res.sendRedirect()"
            ],
            answer: "res.redirect()"
        },
        {
            question: "What is routing in Express?",
            options: [
                "Determining how an application responds to client requests",
                "Creating network routes",
                "Connecting to databases",
                "Managing file paths"
            ],
            answer: "Determining how an application responds to client requests"
        },
        {
            question: "Which method is used to handle POST requests in Express?",
            options: ["app.post()", "app.get()", "app.set()", "app.use()"],
            answer: "app.post()"
        },
        {
            question: "What is the purpose of app.listen() in Express?",
            options: [
                "To start a server and listen for connections",
                "To listen for events",
                "To listen for file changes",
                "To listen for database updates"
            ],
            answer: "To start a server and listen for connections"
        },
        {
            question: "Which template engine is commonly used with Express?",
            options: ["Pug", "React", "Angular", "Vue"],
            answer: "Pug"
        },
        {
            question: "What is the purpose of next() in Express middleware?",
            options: [
                "To pass control to the next middleware function",
                "To skip the current middleware",
                "To go to the next route",
                "To end the request-response cycle"
            ],
            answer: "To pass control to the next middleware function"
        },
        {
            question: "How do you handle 404 errors in Express?",
            options: [
                "By adding middleware at the end of all routes",
                "By using try-catch blocks",
                "By setting app.error(404)",
                "It's handled automatically"
            ],
            answer: "By adding middleware at the end of all routes"
        },
        {
            question: "What is the purpose of app.set() in Express?",
            options: [
                "To store application settings",
                "To set HTTP headers",
                "To set route parameters",
                "To set database connections"
            ],
            answer: "To store application settings"
        },
        {
            question: "Which method is used to handle all HTTP methods in Express?",
            options: ["app.all()", "app.any()", "app.use()", "app.handle()"],
            answer: "app.all()"
        },
        {
            question: "What is the purpose of app.param() in Express?",
            options: [
                "To add callback triggers to route parameters",
                "To set parameters for the app",
                "To validate parameters",
                "To create parameter objects"
            ],
            answer: "To add callback triggers to route parameters"
        },
        {
            question: "How do you access route parameters in Express?",
            options: [
                "req.params",
                "req.query",
                "req.body",
                "req.param"
            ],
            answer: "req.params"
        },
        {
            question: "How do you access query string parameters in Express?",
            options: [
                "req.params",
                "req.query",
                "req.body",
                "req.search"
            ],
            answer: "req.query"
        },
        {
            question: "What is the purpose of app.route() in Express?",
            options: [
                "To create chainable route handlers",
                "To define application routes",
                "To handle routing errors",
                "To optimize routing performance"
            ],
            answer: "To create chainable route handlers"
        },
        {
            question: "Which method is used to mount middleware at a specific path in Express?",
            options: ["app.use()", "app.mount()", "app.attach()", "app.add()"],
            answer: "app.use()"
        },
        {
            question: "What is the purpose of res.sendFile() in Express?",
            options: [
                "To send a file as an attachment",
                "To transfer a file to the client",
                "To send a file as an octet stream",
                "To serve a file"
            ],
            answer: "To transfer a file to the client"
        }
    ],
    mongodb: [
        {
            question: "What is MongoDB?",
            options: [
                "A relational database management system",
                "A NoSQL database program",
                "A programming language",
                "A cloud computing platform"
            ],
            answer: "A NoSQL database program"
        },
        {
            question: "Which of the following is a MongoDB command to insert a document?",
            options: ["db.insert()", "db.save()", "db.add()", "db.insertOne()"],
            answer: "db.insertOne()"
        },
        {
            question: "What is the format used to store data in MongoDB?",
            options: ["XML", "JSON", "BSON", "CSV"],
            answer: "BSON"
        },
        {
            question: "Which operator is used to update a field in MongoDB?",
            options: ["$update", "$set", "$change", "$modify"],
            answer: "$set"
        },
        {
            question: "Which command is used to show all databases in MongoDB?",
            options: ["show dbs", "show databases", "list databases", "Both A and B"],
            answer: "Both A and B"
        },
        {
            question: "Which command is used to create a new database in MongoDB?",
            options: [
                "create database",
                "use database_name",
                "new database",
                "db.create()"
            ],
            answer: "use database_name"
        },
        {
            question: "Which command is used to drop a database in MongoDB?",
            options: [
                "db.dropDatabase()",
                "db.remove()",
                "db.delete()",
                "db.destroy()"
            ],
            answer: "db.dropDatabase()"
        },
        {
            question: "Which operator is used for equality condition in MongoDB queries?",
            options: ["$eq", "$equals", "$match", "$same"],
            answer: "$eq"
        },
        {
            question: "Which operator is used for 'greater than' condition in MongoDB?",
            options: ["$gt", "$greater", "$more", "$above"],
            answer: "$gt"
        },
        {
            question: "Which operator is used for 'less than' condition in MongoDB?",
            options: ["$lt", "$less", "$lower", "$below"],
            answer: "$lt"
        },
        {
            question: "Which operator is used to combine multiple query conditions in MongoDB?",
            options: ["$and", "$all", "$combine", "$with"],
            answer: "$and"
        },
        {
            question: "Which command is used to create a collection in MongoDB?",
            options: [
                "db.createCollection()",
                "db.newCollection()",
                "db.addCollection()",
                "db.makeCollection()"
            ],
            answer: "db.createCollection()"
        },
        {
            question: "Which command is used to drop a collection in MongoDB?",
            options: [
                "db.collection.drop()",
                "db.collection.remove()",
                "db.collection.delete()",
                "db.collection.destroy()"
            ],
            answer: "db.collection.drop()"
        },
        {
            question: "Which method is used to find documents in a collection?",
            options: ["db.find()", "db.collection.find()", "db.get()", "db.query()"],
            answer: "db.collection.find()"
        },
        {
            question: "Which method is used to update a document in MongoDB?",
            options: [
                "db.collection.update()",
                "db.collection.modify()",
                "db.collection.change()",
                "db.collection.save()"
            ],
            answer: "db.collection.update()"
        },
        {
            question: "Which method is used to delete a document in MongoDB?",
            options: [
                "db.collection.remove()",
                "db.collection.delete()",
                "db.collection.drop()",
                "db.collection.destroy()"
            ],
            answer: "db.collection.remove()"
        },
        {
            question: "Which operator is used to limit the number of documents returned?",
            options: ["$limit", "$top", "$max", "$first"],
            answer: "$limit"
        },
        {
            question: "Which operator is used to skip documents in a query result?",
            options: ["$skip", "$jump", "$pass", "$ignore"],
            answer: "$skip"
        },
        {
            question: "Which operator is used to sort query results?",
            options: ["$sort", "$order", "$arrange", "$rank"],
            answer: "$sort"
        },
        {
            question: "What is an index in MongoDB?",
            options: [
                "A data structure to improve query performance",
                "A list of collections",
                "A type of query",
                "A database configuration"
            ],
            answer: "A data structure to improve query performance"
        },
        {
            question: "Which command is used to create an index in MongoDB?",
            options: [
                "db.collection.createIndex()",
                "db.collection.addIndex()",
                "db.collection.makeIndex()",
                "db.collection.index()"
            ],
            answer: "db.collection.createIndex()"
        },
        {
            question: "What is aggregation in MongoDB?",
            options: [
                "A way to process data records",
                "A type of database connection",
                "A method for combining databases",
                "A security feature"
            ],
            answer: "A way to process data records"
        },
        {
            question: "Which pipeline stage is used to group documents in MongoDB aggregation?",
            options: ["$group", "$combine", "$collect", "$cluster"],
            answer: "$group"
        },
        {
            question: "Which pipeline stage is used to match documents in MongoDB aggregation?",
            options: ["$match", "$filter", "$find", "$query"],
            answer: "$match"
        },
        {
            question: "What is a replica set in MongoDB?",
            options: [
                "A group of MongoDB servers that maintain the same data set",
                "A collection of indexes",
                "A set of related databases",
                "A backup system"
            ],
            answer: "A group of MongoDB servers that maintain the same data set"
        }
    ]
};

// DOM Elements
const screens = {
    welcome: document.querySelector('.welcome-screen'),
    category: document.querySelector('.category-screen'),
    count: document.querySelector('.count-screen'),
    quiz: document.querySelector('.quiz-screen'),
    results: document.querySelector('.results-screen')
};

const startBtn = document.querySelector('.start-btn');
const backBtns = document.querySelectorAll('.back-btn');
const categories = document.querySelectorAll('.category');
const countOptions = document.querySelectorAll('.count-option');
const nextBtn = document.querySelector('.next-btn');
const restartBtn = document.querySelector('.restart-btn');
const homeBtn = document.querySelector('.home-btn');

const quizHeader = document.querySelector('.quiz-header');
const questionText = document.querySelector('.question-text');
const optionsContainer = document.querySelector('.options-container');
const timerElement = document.querySelector('.time');
const categoryName = document.querySelector('.category-name');
const questionCount = document.querySelector('.question-count');

const resultsContent = document.querySelector('.results-content');
const correctAnswersEl = document.querySelector('.correct-answers');
const totalQuestionsEl = document.querySelector('.total-questions');
const correctCountEl = document.querySelector('.correct-count');
const wrongCountEl = document.querySelector('.wrong-count');
const accuracyPercentEl = document.querySelector('.accuracy-percent');
const feedbackMessage = document.querySelector('.feedback-message');
const scoreCircle = document.querySelector('.score-circle');

// Quiz Variables
let selectedCategory = '';
let selectedCount = 10;
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;
let quizQuestions = [];

// Event Listeners
startBtn.addEventListener('click', () => {
    switchScreen('welcome', 'category');
});

backBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const currentScreen = btn.closest('.screen');
        let targetScreen = 'welcome';
        
        if (currentScreen.classList.contains('count-screen')) {
            targetScreen = 'category';
        }
        
        switchScreen(currentScreen.classList[1].split('-')[0], targetScreen);
    });
});

categories.forEach(category => {
    category.addEventListener('click', () => {
        selectedCategory = category.dataset.category;
        document.querySelector('.category-name').textContent = `Category: ${selectedCategory.toUpperCase()}`;
        switchScreen('category', 'count');
    });
});

countOptions.forEach(option => {
    option.addEventListener('click', () => {
        selectedCount = parseInt(option.dataset.count);
        startQuiz();
    });
});

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

restartBtn.addEventListener('click', () => {
    startQuiz();
});

homeBtn.addEventListener('click', () => {
    resetQuiz();
    switchScreen('results', 'welcome');
});

// Functions
function switchScreen(from, to) {
    screens[from].classList.remove('active');
    screens[to].classList.add('active');
}

function startQuiz() {
    // Reset quiz variables
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 30;
    
    // Get questions for selected category
    const allQuestions = [...quizData[selectedCategory]];
    
    // Shuffle questions and select the required count
    quizQuestions = shuffleArray(allQuestions).slice(0, selectedCount);
    
    // Update UI
    questionCount.textContent = `Question 1 of ${quizQuestions.length}`;
    totalQuestionsEl.textContent = quizQuestions.length;
    
    // Switch to quiz screen and load first question
    switchScreen('count', 'quiz');
    loadQuestion();
}

function loadQuestion() {
    // Reset timer and options
    clearInterval(timer);
    resetOptions();
    
    // Get current question
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    // Update UI
    questionText.textContent = currentQuestion.question;
    questionCount.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
    
    // Create options
    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(option, currentQuestion.answer));
        optionsContainer.appendChild(optionElement);
    });
    
    // Start timer
    timeLeft = 30;
    updateTimerDisplay();
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 5) {
            timerElement.classList.add('time-warning');
        }
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            timeUp();
        }
    }, 1000);
    
    // Disable next button initially
    nextBtn.disabled = true;
}

function updateTimerDisplay() {
    timerElement.textContent = `${timeLeft}s`;
}

function resetOptions() {
    optionsContainer.innerHTML = '';
    nextBtn.disabled = true;
    timerElement.classList.remove('time-warning');
}

function selectOption(selectedOption, correctAnswer) {
    clearInterval(timer);
    
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.add('disabled');
        
        if (option.textContent === correctAnswer) {
            option.classList.add('correct');
        } else if (option.textContent === selectedOption && selectedOption !== correctAnswer) {
            option.classList.add('wrong');
        }
    });
    
    // Update score if correct
    if (selectedOption === correctAnswer) {
        score++;
    }
    
    // Enable next button
    nextBtn.disabled = false;
}

function timeUp() {
    const options = document.querySelectorAll('.option');
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    options.forEach(option => {
        option.classList.add('disabled');
        if (option.textContent === currentQuestion.answer) {
            option.classList.add('correct');
        }
    });
    
    // Show time up message
    const timeUpMessage = document.createElement('div');
    timeUpMessage.classList.add('option', 'disabled');
    timeUpMessage.textContent = 'Time Up!';
    optionsContainer.appendChild(timeUpMessage);
    
    // Enable next button
    nextBtn.disabled = false;
}

function showResults() {
    // Calculate results
    const wrongAnswers = quizQuestions.length - score;
    const accuracy = Math.round((score / quizQuestions.length) * 100);
    
    // Update UI
    correctAnswersEl.textContent = score;
    correctCountEl.textContent = score;
    wrongCountEl.textContent = wrongAnswers;
    accuracyPercentEl.textContent = `${accuracy}%`;
    
    // Update score circle animation
    const percentage = (score / quizQuestions.length) * 100;
    scoreCircle.style.background = `conic-gradient(var(--success-color) ${percentage}%, var(--light-gray) ${percentage}%)`;
    
    // Set feedback message
    let message = '';
    let stars = '';
    
    if (score === quizQuestions.length) {
        message = "Perfect! You're a quiz master! 🌟";
        stars = "⭐⭐⭐⭐⭐";
    } else if (percentage >= 80) {
        message = "Excellent! You know your stuff! 👏";
        stars = "⭐⭐⭐⭐";
    } else if (percentage >= 60) {
        message = "Good job! Keep learning! 👍";
        stars = "⭐⭐⭐";
    } else if (percentage >= 40) {
        message = "Not bad! Try again to improve! 💪";
        stars = "⭐⭐";
    } else {
        message = "Keep practicing! You'll get better! 📚";
        stars = "⭐";
    }
    
    feedbackMessage.innerHTML = `<p>${message}</p><div class="stars">${stars}</div>`;
    
    // Switch to results screen
    switchScreen('quiz', 'results');
}

function resetQuiz() {
    selectedCategory = '';
    selectedCount = 10;
    currentQuestionIndex = 0;
    score = 0;
    clearInterval(timer);
    quizQuestions = [];
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Initialize
resetQuiz();