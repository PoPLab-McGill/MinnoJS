<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> SMIAA SC-IAT Study</title>
    <script src="https://cdn.jsdelivr.net/npm/requirejs/require.js"></script>
    <script>
        require.config({
            baseUrl: './',
            paths: {
                'managerAPI': 'https://raw.githubusercontent.com/PoPLab-McGill/MinnoJS/main/smiaamgr.js', // Reference to your custom manager script
                'sciatScript': 'https://raw.githubusercontent.com/PoPLab-McGill/MinnoJS/main/smiaa.js' // Reference to SC-IAT script
            }
        });

        require(['managerAPI', 'sciatScript'], function(Manager, sciatScript) {
            // Initialize and run the SC-IAT script
            var API = new Manager();
            API.addScript(sciatScript);
            API.start();
        });
    </script>
</head>
<body>
    <h1>Loading SC-IAT Study...</h1>
</body>
</html>
