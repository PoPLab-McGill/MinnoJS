define(['managerAPI', 
    'https://cdn.jsdelivr.net/gh/minnojs/minno-datapipe@1.*/datapipe.min.js'], 
function(Manager){

    var API = new Manager();
    init_data_pipe(API, 'your-study-id', {file_type: 'csv'}); // Replace 'your-study-id' with your actual study ID.

    API.setName('sciat');
    API.addSettings('skip', true);

    // Define the target category and attributes
    const targetCategory = 'Autistics'; // Replace with your target category, e.g., 'Flowers', 'Sports'
    const posWords = ['Love', 'Joy', 'Pleasure', 'Peace'];
    const negWords = ['Terrible', 'Angry', 'Hate', 'Evil'];

    API.addGlobal({
        baseURL: './images/', // Not used in this case, but kept for potential image use
        targetCategory: targetCategory,
        posWords: API.shuffle(posWords),
        negWords: API.shuffle(negWords)
    });

    // SC-IAT instructions
    API.addTasksSet({
        instructions: [{
            type: 'message',
            buttonText: 'Continue'
        }],

        intro: [{
            inherit: 'instructions',
            name: 'intro',
            templateUrl: 'intro.jst',
            title: 'Welcome',
            header: 'Welcome to the SC-IAT'
        }],

        sci
