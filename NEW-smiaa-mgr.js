define(['managerAPI', 'https://cdn.jsdelivr.net/gh/minnojs/minno-datapipe@1.*/datapipe.min.js'], function(Manager, DataPipe) {

    // Initialize Manager and data pipe
    var API = new Manager();
    init_data_pipe(API, 'o3fzbHp75HLot5hIbZMCYS3siiAyLxE8yJkNQsqT6wYD4jPq90qvPtmooF98mRCTltjirG', {file_type: 'csv'}); // Replace with your study ID

    API.setName('my_study');
    API.addSettings('skip', true);

    // Define stimuli
    const targetCategory = 'Autistics';
    const posWords = ['Love', 'Joy', 'Pleasure', 'Peace'];
    const negWords = ['Terrible', 'Angry', 'Hate', 'Evil'];
    const autisticsWords = ['Repeats body movements', 'Avoids eye contact', 'Dislikes unexpected changes', 'Struggles making friends', 'Repeats certain words'];

    // Add global variables
    API.addGlobal({
        baseURL: './images/', // Retained for potential future use
        targetCategory: targetCategory,
        posWords: API.shuffle(posWords),
        negWords: API.shuffle(negWords),
        autisticsWords: API.shuffle(autisticsWords)
    });

    // Define SC-IAT tasks
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
        sciat_instructions: [{
            inherit: 'instructions',
            name: 'raceiat_instructions',
            templateUrl: 'raceiat_instructions.jst',
            title: 'SC-IAT Instructions',
            header: 'Single Category IAT'
        }],
        sciat: [{
            type: 'time',
            name: 'sciat',
            script: function() {
                return {
                    blocks: [
                        // Practice Block
                        {
                            name: 'Block 1 - Practice',
                            type: 'iat',
                            layout: {
                                left1: 'Positive',
                                right1: 'Negative',
                                right2: targetCategory
                            },
                            stimuli: [
                                {type: 'target', data: {category: 'Positive', words: posWords}},
                                {type: 'target', data: {category: 'Negative', words: negWords}},
                                {type: 'target', data: {category: targetCategory, words: autisticsWords}}
                            ],
                            trialsPerCategory: 20
                        },
                        // Test Block
                        {
                            name: 'Block 2 - Test',
                            type: 'iat',
                            layout: {
                                left1: targetCategory,
                                right1: 'Positive',
                                right2: 'Negative'
                            },
                            stimuli: [
                                {type: 'target', data: {category: targetCategory, words: autisticsWords}},
                                {type: 'target', data: {category: 'Positive', words: posWords}},
                                {type: 'target', data: {category: 'Negative', words: negWords}}
                            ],
                            trialsPerCategory: 40
                        }
                    ]
                };
            }()
        }],
        lastpage: [{
            type: 'message',
            name: 'lastpage',
            templateUrl: 'lastpage.jst',
            title: 'End',
            header: 'Thank you for participating'
        }],
        redirect: [{ 
            type: 'redirect', 
            name: 'redirecting', 
            url: 'https://www.yourcompletionpage.com' // Replace with your actual redirect URL
        }]
    });
