/**
 * Created by Suhair Zain on 14/6/16.
 */

const suggestions = [
    {
        search: 'who is suhair zain',
        includeSearch: false,
        suggestions: ['are you f***ing serious?', 'come on, dude', 'really? you don\'t know?', 'you\'ve got to be kidding me']
    },
    {
        search: 'who created this app',
        includeSearch: false,
        suggestions: ['I\'m Suhair Zain', 'My inspiration for this came from ICU', 'If you don\'t know what it is', 'Please search for it on facebook']
    },
    {
        search: 'how to ',
        includeSearch: true,
        suggestions: ['be single', 'be awesome', 'be single and awesome', 'be simply awesome']
    }
];

const getRandomIndex = function(totalCount){
    return Math.floor(Math.random() * totalCount);
};

export const getRandomSearchAndSuggestions = function(){
    return suggestions[getRandomIndex(suggestions.length)];
};