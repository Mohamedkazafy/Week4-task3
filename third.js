function sortWordsByLength(sentence) {
    const words = sentence.split(' ');

    words.sort((a, b) => a.length - b.length);

    return words.join(' ');
}

const sentence = "marry has a big black dog";
const sortedSentence = sortWordsByLength(sentence);
console.log(sortedSentence); 
