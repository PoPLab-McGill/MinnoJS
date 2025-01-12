define(['managerAPI', 'https://cdn.jsdelivr.net/gh/minnojs/minno-datapipe@1.*/datapipe.min.js'], function(Manager) {
    let API = new Manager();

    API.setName('mgr');
    API.addSettings('skip', true);

    // IMPORTANT: Replace the 2nd argument with your DataPipe Experiment ID
    init_data_pipe(API, 'o3fzbHp75HLot5hIbZMCYS3siiAyLxE8yJkNQsqT6wYD4jPq90qvPtmooF98mRCTltjirG', { file_type: 'csv' });

    // Define target category labels (e.g., Cats) and attributes (Good, Bad)
    let targetLabels = ['Cats'];  // Target category - only one category
    let posLabels = ['Good', 'Positive', 'Pleasant']; // Positive attribute
    let negLabels = ['Bad', 'Negative', 'Unpleasant']; // Negative attribute

    // Shuffle the words for the target categories
    API.addGlobal({
        targetLabels: targetLabels,
        posLabels: posLabels,
        negLabels: negLabels,
        baseURL: './images/',

        // Positive words (e.g., good, pleasant)
        posWords: API.shuffle([
            'Love', 'Cheer', 'Friend', 'Pleasure',
            'Adore', 'Cheerful', 'Friendship', 'Joyful',
            'Smiling', 'Cherish', 'Excellent', 'Glad',
            'Joyous', 'Spectacular', 'Appealing', 'Delight',
            'Excitement', 'Laughing', 'Attractive', 'Delightful',
            'Fabulous', 'Glorious', 'Pleasing', 'Beautiful',
            'Fantastic', 'Happy', 'Lovely', 'Terrific',
            'Celebrate', 'Enjoy', 'Magnificent', 'Triumph'
        ]),

        // Negative words (e.g., bad, unpleasant)
        negWords: API.shuffle([
            'Abuse', 'Grief', 'Poison', 'Sadness',
            'Pain', 'Despise', 'Failure', 'Nasty',
            'Angry', 'Detest', 'Horrible', 'Negative',
            'Ugly', 'Dirty', 'Gross', 'Evil',
            'Rotten', 'Annoy', 'Disaster', 'Horrific',
            'Scorn', 'Awful', 'Disgust', 'Hate',
            'Humiliate', 'Selfish', 'Tragic', 'Bothersome',
            'Hatred', 'Hurtful', 'Sickening', 'Yucky'
        ])
    });

    API.addTasksSet({
        instructions: [{
            type: 'message',
            buttonText: 'Continue'
        }],

        prolificid: [{
            type: 'quest',
            name: 'prolificid',
            scriptUrl: 'prolificid.js'
        }],

        intro: [{
            inherit: 'instructions',
            name: 'intro',
            templateUrl: 'intro.jst',
            title: 'Intro',
            header: 'Welcome'
        }],

        sciat_instructions: [{
            inherit: 'instructions',
            name: 'sciat_instructions',
            templateUrl: 'sciat_instructions.jst',
            title: 'Single Category IAT Instructions',
            header: 'Implicit Association Test'
        }],

        explicits: [{
            type: 'quest',
            name: 'explicits',
            scriptUrl: 'explicits.js'
        }],

        sciat: [{
            type: 'time',
            name: 'sciat',
            scriptUrl: 'sciat.js'
        }],

        lastpage: [{
            type: 'message',
            name: 'lastpage',
            templateUrl: 'lastpage.jst',
            title: 'End',
            header: 'You have completed the study'
        }],

        uploading: uploading_task({ header: 'Just a moment', body: 'Please wait, sending data...' }),

        redirect: [{
            type: 'redirect',
            name: 'redirecting',
            url: 'https://app.prolific.co/submissions/complete?cc=YOURPROLIFICCODE'
        }]
    });

    API.addSequence([
        { type: 'post', path: ['targetLabels', 'posLabels', 'negLabels'] },

        { inherit: 'prolificid' },

        { inherit: 'intro' },
        {
            mixer: 'random',
            data: [
                { inherit: 'explicits' },

                {
                    mixer: 'wrapper',
                    data: [
                        { inherit: 'sciat_instructions' },
                        { inherit: 'sciat' }
                    ]
                }
            ]
        },

        { inherit: 'uploading' },
        { inherit: 'lastpage' },
        { inherit: 'redirect' }
    ]);

    return API.script;
});
