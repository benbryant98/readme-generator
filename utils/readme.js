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
