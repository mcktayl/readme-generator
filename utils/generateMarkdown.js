const licenseArray = ['Apache License 2.0', 'MIT', 'Mozilla Public License 2.0'];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == licenseArray[0]) {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license == licenseArray[1]) {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license == licenseArray[2]) {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == licenseArray[0]) {
    return `[${licenseArray[0]}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license == licenseArray[1]) {
    return `[${licenseArray[1]}](https://opensource.org/licenses/MIT)`
  } else if (license == licenseArray[2]) {
    return `[${licenseArray[2]}](https://opensource.org/licenses/MPL-2.0)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == licenseArray[0]) {
    return `Read more about ${licenseArray[0]} below:`
  } else if (license == licenseArray[1]) {
    return `Read more about ${licenseArray[1]} below:`
  } else if (license == licenseArray[2]) {
    return `Read more about ${licenseArray[2]} below:`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  My project can be viewed [here](${data.link})
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Test](#test)
  - [Questions](#questions)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Test
  ${data.test}

  ## Questions
  Please feel free to contact me with any questions about this application.
  GitHub: [${data.username}](${data.profile})
  email: ${data.email}

  ## Credits
  ${data.contributors}
  ${data.credits}

  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

`;
}

module.exports = generateMarkdown;
