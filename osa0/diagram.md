diagram
    browser -> server: POST https://studies.cs.helsinki.fi/exampleapp/new_note

    browser refreshes the site

    browser -> server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    server -> browser: notes.html file
    browser -> server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server -> browser: main.css file
    browser -> server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    server -> browser: main.js file
    browser -> server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server -> data.json file
    browser displays data in data.json in the html with the css stylings and the logic from the js.