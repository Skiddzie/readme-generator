// const generateAbout = aboutText => {
//     if (!aboutText) {
//       return '';
//     }
  
//     return `
//     <section class="my-3" id="about">
//       <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
//       <p>${aboutText}</p>
//     </section>
//   `; 
//   }
//   const generateProjects = projectArr => {
//     return `
//     <section class="my-3" id="portfolio">
//       <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
//       <div class="flex-row justify-space-between">
//         <!-- Leaving this empty as we'll dynamically insert project HTML here -->
//       </div>
//     </section>
//   `;
//   }
const generateLicense = license => {
  if(license == "GPL")
  {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  else if (license == "BSD")
  {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  else if (license == "Apache")
  {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else
  {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  // return `${license}[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
}
  module.exports = templateData => {
    
  
    const {title, description, installation, usage, contributing, tests, license, name, email } = templateData;
  // ${badge(license)}
return `
${generateLicense(license)}

#${title}
${description}

#Installation
${installation}

#Usage
${usage}

#Contributing
${contributing}
    
#Testing
${tests}

License: ${license}
#Contact info
Name: ${name}

Email: ${email}
`;
};
  