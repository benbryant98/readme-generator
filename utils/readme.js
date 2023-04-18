const generateReadme = ({title, motivation, problem, learned, installation, instructions, license, features, github, email}) =>
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

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

## Questions

${github}

${email}`

module.exports = {
    generateReadme,
};
