<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"></script>
    
    <script>
    require(['https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(stiatExtension) {
        // Your ST-IAT configuration goes here
        var task = stiatExtension({
            category: {
                name: 'Autistics', // Category name for the data
                title: {
                    media: { word: 'Autistics' }, // Name shown in the task
                    css: { color: '#31b404', 'font-size': '2em' }, // Styling for category title
                    height: 7 // Used to position the "Or" in the combined block
                },
                media: [ // Stimuli words for this category
                    { word: 'Repeats body movements' },
                    { word: 'Avoids eye contact' },
                    { word: 'Dislikes unexpected changes' },
                    { word: 'Struggles making friends' },
                    { word: 'Repeats certain words' }
                ],
                css: { color: '#31b404', 'font-size': '3em' } // Styling for stimuli
            },

            // Attribute 1: Negative
            attribute1: {
                name: 'Negative', // Attribute label for the data
                title: {
                    media: { word: 'Negative' }, // Label shown for this attribute
                    css: { color: '#31b404', 'font-size': '2em' }, // Styling for attribute title
                    height: 7 // Used to position the "Or" in the combined block
                },
                media: [ // Stimuli words for this attribute
                    { word: 'Terrible' },
                    { word: 'Angry' },
                    { word: 'Hate' },
                    { word: 'Evil' }
                ],
                css: { color: '#31b404', 'font-size': '3em' } // Styling for stimuli
            },

            // Attribute 2: Positive
            attribute2: {
                name: 'Positive', // Attribute label for the data
                title: {
                    media: { word: 'Positive' }, // Label shown for this attribute
                    css: { color: '#31b404', 'font-size': '2em' }, // Styling for attribute title
                    height: 7 // Used to position the "Or" in the combined block
                },
                media: [ // Stimuli words for this attribute
                    { word: 'Love' },
                    { word: 'Joy' }, 
                    { word: 'Pleasure' },
                    { word: 'Peace' }
                ],
                css: { color: '#31b404', 'font-size': '3em' } // Styling for stimuli
            },
        });
    });
</script>
