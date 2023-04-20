// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const generateReadme = ({title, repository, motivation, problem, learned, installation, instructions, license, features, github, email}) =>
`# ${title}

## Description

${motivation}
${problem}
${learned}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${instructions}

## License

${license}
---

## Features

${features}

## How to Contribute

Contributions can be made to the project by visiting https://github.com/${github}/${repository}.

## Tests

## Questions

Github: https://github.com/${github}

Email: ${email}`

module.exports = {
    generateReadme,
};
