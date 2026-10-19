class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const firstCandidate = s
        const secondCandidate = t
        const characterHash = {};

        for(let index = 0; index < firstCandidate.length; index++){
            const character = firstCandidate[index]; 
            characterHash[character] = (characterHash[character] || 0) + 1;
        }

        for(let index = 0; index < secondCandidate.length; index++){
            const character = secondCandidate[index];
            if(!characterHash[character]) return false;
            characterHash[character]--;
        }
        return true;
    }
}
