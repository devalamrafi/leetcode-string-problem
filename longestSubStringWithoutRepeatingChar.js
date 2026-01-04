var lengthOfLongestSubstring = function(s) {
    let current = [];   
    let maxLength = 0;  
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (current.includes(char)) {
            while (current.includes(char)) {
                current.shift(); 
            }
        }
        current.push(char);                  
        if (current.length > maxLength) {    
            maxLength = current.length;
        }
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring("pwwkew"))