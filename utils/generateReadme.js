// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "Mozilla":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case "Apache":
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case "GNU GPLv3":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case "No license":
      return ``;
  }
}

const generateReadme = ({
  title,
  repository,
  motivation,
  problem,
  learned,
  installation,
  instructions,
  license,
  features,
  github,
  testing,
  email,
}) =>
  `# ${title}

  ${renderLicenseBadge(license)}

## Description

${motivation}
${problem}
${learned}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${instructions}

## License

Project is licensed under ${license}.

---

## Features

${features}

## How to Contribute

Contributions can be made to the project by visiting https://github.com/${github}/${repository}

## Tests

Instructions for testing:
${testing}

## Questions

Github: https://github.com/${github}

Email: ${email}`;

module.exports = {
  generateReadme,
};
