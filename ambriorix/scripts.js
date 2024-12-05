// scripts.js/* styles.css */

/* Base styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #333;
    color: #fff;
    padding: 1rem 0;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 1rem;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
}

section {
    padding: 2rem;
    margin: 1rem 0;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.project {
    margin-bottom: 1rem;
}

h2 {
    border-bottom: 2px solid #333;
    padding-bottom: 0.5rem;
}

/* Responsive styles */
@media (max-width: 768px) {
    nav ul li {
        display: block;
        margin: 0.5rem 0;
    }

    section {
        padding: 1rem;
    }
}