<!-- Begin README -->

<div align="center">
    <a href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines" target="_blank">
        <img src="./docs/images/banner_large-silver.png" /> <!-- Add a specific width/height for your icon here, ex. width="150" height="150"-->
    </a>
</div>
<br>
<p align="center">
    <a href="https://daringfireball.net/projects/markdown/"><img src="https://img.shields.io/badge/Markdown-1.0.1-000000?style=for-the-badge&logo=markdown" alt="Markdown Badge" /></a>
    <br>
    <a href="https://github.com/scottgriv"><img src="https://img.shields.io/badge/github-follow_me-181717?style=for-the-badge&logo=github&color=181717" alt="GitHub Badge" /></a>
    <a href="mailto:scott.grivner@gmail.com"><img src="https://img.shields.io/badge/gmail-contact_me-EA4335?style=for-the-badge&logo=gmail" alt="Email Badge" /></a>
    <a href="https://www.buymeacoffee.com/scottgriv"><img src="https://img.shields.io/badge/buy_me_a_coffee-support_me-FFDD00?style=for-the-badge&logo=buymeacoffee&color=FFDD00" alt="BuyMeACoffee Badge" /></a>
    <br>
    <a href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines/releases" target="_blank"><img src="https://img.shields.io/badge/PRG-1.1.1-6236FF?style=for-the-badge&logo=data:image/svg%2bxml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMjYuMDAwMDAwcHQiIGhlaWdodD0iMzQuMDAwMDAwcHQiIHZpZXdCb3g9IjAgMCAyNi4wMDAwMDAgMzQuMDAwMDAwIgogcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwzNC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiCmZpbGw9IiNGRkZGRkYiIHN0cm9rZT0ibm9uZSI+CjxwYXRoIGQ9Ik0xMiAzMjggYy04IC04IC0xMiAtNTEgLTEyIC0xMzUgMCAtMTA5IDIgLTEyNSAxOSAtMTQwIDQyIC0zOCA0OAotNDIgNTkgLTMxIDcgNyAxNyA2IDMxIC0xIDEzIC03IDIxIC04IDIxIC0yIDAgNiAyOCAxMSA2MyAxMyBsNjIgMyAwIDE1MCAwCjE1MCAtMTE1IDMgYy04MSAyIC0xMTkgLTEgLTEyOCAtMTB6IG0xMDIgLTc0IGMtNiAtMzMgLTUgLTM2IDE3IC0zMiAxOCAyIDIzCjggMjEgMjUgLTMgMjQgMTUgNDAgMzAgMjUgMTQgLTE0IC0xNyAtNTkgLTQ4IC02NiAtMjAgLTUgLTIzIC0xMSAtMTggLTMyIDYKLTIxIDMgLTI1IC0xMSAtMjIgLTE2IDIgLTE4IDEzIC0xOCA2NiAxIDc3IDAgNzIgMTggNzIgMTMgMCAxNSAtNyA5IC0zNnoKbTExNiAtMTY5IGMwIC0yMyAtMyAtMjUgLTQ5IC0yNSAtNDAgMCAtNTAgMyAtNTQgMjAgLTMgMTQgLTE0IDIwIC0zMiAyMCAtMTgKMCAtMjkgLTYgLTMyIC0yMCAtNyAtMjUgLTIzIC0yNiAtMjMgLTIgMCAyOSA4IDMyIDEwMiAzMiA4NyAwIDg4IDAgODggLTI1eiIvPgo8L2c+Cjwvc3ZnPgo=" alt="PRG Version Badge" /></a>
    <a href="https://prgoptimized.netlify.app" target="_blank">
    <img src="https://img.shields.io/badge/PRG-Official_Website-680F7F?style=for-the-badge&logo=data:image/svg%2bxml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMjYuMDAwMDAwcHQiIGhlaWdodD0iMzQuMDAwMDAwcHQiIHZpZXdCb3g9IjAgMCAyNi4wMDAwMDAgMzQuMDAwMDAwIgogcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwzNC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiCmZpbGw9IiNGRkZGRkYiIHN0cm9rZT0ibm9uZSI+CjxwYXRoIGQ9Ik0xMiAzMjggYy04IC04IC0xMiAtNTEgLTEyIC0xMzUgMCAtMTA5IDIgLTEyNSAxOSAtMTQwIDQyIC0zOCA0OAotNDIgNTkgLTMxIDcgNyAxNyA2IDMxIC0xIDEzIC03IDIxIC04IDIxIC0yIDAgNiAyOCAxMSA2MyAxMyBsNjIgMyAwIDE1MCAwCjE1MCAtMTE1IDMgYy04MSAyIC0xMTkgLTEgLTEyOCAtMTB6IG0xMDIgLTc0IGMtNiAtMzMgLTUgLTM2IDE3IC0zMiAxOCAyIDIzCjggMjEgMjUgLTMgMjQgMTUgNDAgMzAgMjUgMTQgLTE0IC0xNyAtNTkgLTQ4IC02NiAtMjAgLTUgLTIzIC0xMSAtMTggLTMyIDYKLTIxIDMgLTI1IC0xMSAtMjIgLTE2IDIgLTE4IDEzIC0xOCA2NiAxIDc3IDAgNzIgMTggNzIgMTMgMCAxNSAtNyA5IC0zNnoKbTExNiAtMTY5IGMwIC0yMyAtMyAtMjUgLTQ5IC0yNSAtNDAgMCAtNTAgMyAtNTQgMjAgLTMgMTQgLTE0IDIwIC0zMiAyMCAtMTgKMCAtMjkgLTYgLTMyIC0yMCAtNyAtMjUgLTIzIC0yNiAtMjMgLTIgMCAyOSA4IDMyIDEwMiAzMiA4NyAwIDg4IDAgODggLTI1eiIvPgo8L2c+Cjwvc3ZnPgo=" alt="PRG Website" /></a>
    <a href="https://prgportfolio.com" target="_blank"><img src="https://img.shields.io/badge/PRG-Silver Project-C0C0C0?style=for-the-badge&logo=data:image/svg%2bxml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMjYuMDAwMDAwcHQiIGhlaWdodD0iMzQuMDAwMDAwcHQiIHZpZXdCb3g9IjAgMCAyNi4wMDAwMDAgMzQuMDAwMDAwIgogcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQgbWVldCI+Cgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwzNC4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiCmZpbGw9IiNDMEMwQzAiIHN0cm9rZT0ibm9uZSI+CjxwYXRoIGQ9Ik0xMiAzMjggYy04IC04IC0xMiAtNTEgLTEyIC0xMzUgMCAtMTA5IDIgLTEyNSAxOSAtMTQwIDQyIC0zOCA0OAotNDIgNTkgLTMxIDcgNyAxNyA2IDMxIC0xIDEzIC03IDIxIC04IDIxIC0yIDAgNiAyOCAxMSA2MyAxMyBsNjIgMyAwIDE1MCAwCjE1MCAtMTE1IDMgYy04MSAyIC0xMTkgLTEgLTEyOCAtMTB6IG0xMDIgLTc0IGMtNiAtMzMgLTUgLTM2IDE3IC0zMiAxOCAyIDIzCjggMjEgMjUgLTMgMjQgMTUgNDAgMzAgMjUgMTQgLTE0IC0xNyAtNTkgLTQ4IC02NiAtMjAgLTUgLTIzIC0xMSAtMTggLTMyIDYKLTIxIDMgLTI1IC0xMSAtMjIgLTE2IDIgLTE4IDEzIC0xOCA2NiAxIDc3IDAgNzIgMTggNzIgMTMgMCAxNSAtNyA5IC0zNnoKbTExNiAtMTY5IGMwIC0yMyAtMyAtMjUgLTQ5IC0yNSAtNDAgMCAtNTAgMyAtNTQgMjAgLTMgMTQgLTE0IDIwIC0zMiAyMCAtMTgKMCAtMjkgLTYgLTMyIC0yMCAtNyAtMjUgLTIzIC0yNiAtMjMgLTIgMCAyOSA4IDMyIDEwMiAzMiA4NyAwIDg4IDAgODggLTI1eiIvPgo8L2c+Cjwvc3ZnPgo=" alt="Silver" /></a>
</p>

---------------

<h1 align="center"><img src="https://placehold.co/22x22/C0C0C0/C0C0C0"> PRG Silver Tier Template</img></h1>

<!-- Remove this block before you commit your README - this is for template reference purposes only -->
<div align="center">
<table>
    <tr>
        <td>
            <div align="center">
                <h3 align="center">What is this Template for?</h3>
                <table>
                    <tr>
                        <td align="center">
                            <a href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines"><img src="./docs/images/icon-rounded.png" width="100"></a>
                            <br>
                            <p>This Template is part of the <br><b><a href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines">Personal Repository Guidelines (PRG)</a></b><br> repository categorization and guideline framework.</p>
                            <b>Visit the PRG Repository<br>to get started with PRG today.</b>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                            <a href="https://prgoptimized.netlify.app"><img src="./docs/images/icon-website-rounded.png" width="100"></a>
                            <br>
                            <p>Visit <b><a href="https://prgoptimized.netlify.app">The Official PRG Website</a></b><br> for more information.</p>
                            <b>Submit a pull request to add your<br>PRG Portfolio to the PRG Showcase.</b>
                        </td>
                    </tr>
                </table>
            </div>
        </td>
        <td>
            <div align="center">
                <h3 align="center">Looking for other Tier Templates?</h3>
                <table>
                    <tr>
                        <td align="center">
                            <a href="https://github.com/scottgriv/PRG-Platinum-Tier-Template"><img src="./docs/images/icon-platinum-rounded.png" width="100"></a>
                            <br>
                            <p><b><a href="https://github.com/scottgriv/PRG-Platinum-Tier-Template">Platinum Tier Template</a></b></p>
                        </td>
                        <td align="center">
                            <a href="https://github.com/scottgriv/PRG-Gold-Tier-Template"><img src="./docs/images/icon-gold-rounded.png" width="100"></a>
                            <br>
                            <p><b><a href="https://github.com/scottgriv/PRG-Gold-Tier-Template">Gold Tier Template</a></b></p>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">
                        <p align="center"><i>You are here</i></p>
                            <a href="https://github.com/scottgriv/PRG-Silver-Tier-Template"><img src="./docs/images/icon-silver-rounded.png" width="100"></a>
                            <br>
                            <p><b><a href="https://github.com/scottgriv/PRG-Silver-Tier-Template">Silver Tier Template</a></b></p>
                        </td>
                        <td align="center">
                            <a href="https://github.com/scottgriv/PRG-Bronze-Tier-Template"><img src="./docs/images/icon-bronze-rounded.png" width="100"></a>
                            <br>
                            <p><b><a href="https://github.com/scottgriv/PRG-Bronze-Tier-Template">Bronze Tier Template</a></b></p>
                        </td>
                    </tr>
                </table>
            </div>
        </td>
    </tr>
</table>
</div>
<!-- End Remove Block -->

> [!NOTE]
> I will be using examples from my project [River Charts](https://github.com/scottgriv/River-Charts) for this `README`.

- The description should be a short paragraph describing what your project is and what it does.
- This should be the first section after the badges.
    - e.g. "A Python, Django, Plotly, and Pandas web application that visualizes river data pulled using an API from the United States Geological Survey (USGS)."
- Add **screenshots** of your project below the description and throughout the rest of the README as needed.
    - This is optional, but highly recommended especially for **Gold** projects.
    - Animations in the form of GIFs are also a great way to showcase your project.

> [!WARNING]
> Be sure to change the [PRG Connection File](PRG.md) **Repository Tier** parameter from **Optimized** to **Bronze** in order to correctly categorize this repository.
> All templates are currently set to the uncategorized "**Optimized**" option, so be sure to change this.

> [!WARNING]
> Be sure to change or remove the [.gitattributes](.gitattributes) file from this repository.
> It's used to classify this template repository as a Markdown file on GitHub only, and is not needed.

---------------

## Table of Contents

- [Getting Started](#getting-started)
    - [Dependencies](#dependencies)
    - [Configuration](#configuration)
    - [Installation](#installation)
    - [Deployment](#deployment)
- [Specific Project Sections](#specific-project-sections)
- [Resources](#resources)
- [License](#license)
    -[MIT](#mit)
    -[GNU](#gnu)
    -[The Unlicense](#the-unlicense)
- [Credits](#credits)

## Getting Started

This section should contain a list of steps to get your project up and running.
- You can break this section down into further subsections if you want (such as below: Dependencies, Configuration, Running Locally, Deployment, etc.).
- Otherwise, you can just include a list of steps to get your project up and running under Getting Started.

### Dependencies

- This section should contain a list of dependencies for your project.

### Configuration

- This section should contain a list of steps to configure your project.

### Installation

- This section should contain a list of steps to install your project.
- Utilize code blocks to show the commands needed to run your project.
- e.g.
    1. Clone this repository.
    2. Create a virtual environment: `python -m venv venv`.
    3. Install the dependencies.
    4. Run the application: 
        ```bash
        python manage.py runserver
        ```

### Deployment

- This section should contain a list of steps to deploy your project.

## Specific Project Sections

There should be a number of sections here that correspond to important aspects of your project.
- Do not name this section "Specific Project Sections".
- e.g. "API", "Database", "Deployment", "Testing", etc.

## Resources

This section should contain a list of resources that you used to create your project.

Below are some external resources I found helpful when creating **My Project**:

- [Python](https://www.python.org/) - An interpreted, high-level and general-purpose programming language.
- [Plotly](https://plotly.com/python/) - A Python graphing library that makes interactive, publication-quality graphs online.
- [Django](https://www.djangoproject.com/) - A high-level Python Web framework that encourages rapid development and clean, pragmatic design.
- [Pandas](https://pandas.pydata.org/) - A fast, powerful, flexible and easy to use open source data analysis and manipulation tool, built on top of the Python programming language.

## License

This section should contain the license for your project. It should include a link to your actual license file inside your repository, and a link to [Choose an open source license](https://choosealicense.com) for reference.

> [!IMPORTANT]
> Use the [docs/LICENSE/](docs/LICENSE/) directory to pick amongst a few popular license files for your project.
> You can also visit [Choose an open source license](https://choosealicense.com) to pick your own that's not included with this template.
> If you don't include a `LICENSE` file, see what happens [here](https://choosealicense.com/no-permission/).
> For a zero restriction license, choose [The Unlicense](https://choosealicense.com/licenses/unlicense/).

> [!WARNING]
> Be sure to remove the [docs/LICENSE/](docs/LICENSE/) directory from this repository when you're done picking your license.
> Be sure to include your [LICENSE](LICENSE) file in the `root` of your repository and change the link below to point towards it.

*Examples:*

### MIT

This project is released under the terms of the **MIT License**, which permits use, modification, and distribution of the code, subject to the conditions outlined in the license.
- The [MIT License](https://choosealicense.com/licenses/mit/) provides certain freedoms while preserving rights of attribution to the original creators.
- For more details and to understand all requirements and conditions, see the [LICENSE](docs/LICENSE/MIT/LICENSE) file in this repository.

### GNU

This project is released under the terms of the **GNU General Public License, version 3 (GNU GPLv3)**, which ensures that derivatives of the software remain open source.
- The [GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/) is a "copyleft" license, ensuring that derivatives of the software remain open source and under the GPL.
- For more details and to understand all requirements and conditions, see the [LICENSE](docs/LICENSE/GNU/LICENSE) file in this repository.

### The Unlicense

This project is released under the terms of **The Unlicense**, which allows you to use, modify, and distribute the code as you see fit. 
- [The Unlicense](https://choosealicense.com/licenses/unlicense/) removes traditional copyright restrictions, giving you the freedom to use the code in any way you choose.
- For more details and to understand all requirements and conditions, see the [LICENSE](docs/LICENSE/Unlicense/LICENSE) file in this repository.

## Credits

**Author:** [Scott Grivner](https://github.com/scottgriv) <br>
**Email:** [scott.grivner@gmail.com](mailto:scott.grivner@gmail.com) <br>
**Website:** [scottgrivner.dev](https://www.scottgrivner.dev) <br>
**Reference:** [Main Branch](https://github.com/scottgriv/PRG-Silver-Tier-Template) <br>

---------------

<div align="center">
    <a href="https://github.com/scottgriv/PRG-Silver-Tier-Template" target="_blank">
        <img src="./docs/images/icon-silver-rounded.png" width="100" height="100"/>
    </a>
</div>

<!-- End README -->
