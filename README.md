<h2>Read me - Multi Step Wizard </h2>
<h3>Contents</h3>
<ul>
    <li><a href = "#setup">Set up</a></li>
    <li><a href = "#files">File Structure</a></li>
</ul>
<h3 id = "setup">Set up</h3>
<ol>
    <li>I have used gulp, angularjs and less, and bootstrap for basic css. less files are already compiled into one css file, so it is not needed to install anything</li>  
    <li>Put this directory in you localhost folder to see results</li>   
</ol>
<h3 id = "files">File Structure</h3>
<ul>
    <li>root
        <ul>
            <li>angular - angularjs files, ui-router for navigation</li>
            <li>css - there are less folder for less files, compiled css files in root of this folder</li>
            <li>js - custom js files
                <ul><li>application.js - main angularjs file with config</li>
                    <li>controller.js - main logic for wizard</li>
                    <li>directives.js </li>
                </ul>
            </li>
            <li>pages - html pages - divided for convenience into separate steps in multi step wizard
            </li>
        </ul>
    </li>
</ul>
