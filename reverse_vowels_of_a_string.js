var reverseVowels = function (s) {
        let new_arr = [];
        let arr = s.split('');
        for (let i = 0; i < arr.length; i++) {
            if (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(arr[i])) {
                new_arr.push(arr[i]);
            }
        }
        let reversed_str = new_arr.reverse();
        let vowelIndex = 0;
        for (let i = 0; i < arr.length; i++) {
            if (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(arr[i])) {
                arr[i] = reversed_str[vowelIndex];
                vowelIndex++;
            }
        }
        return arr.join('');
};

let s = "IceCreAm";
console.log(reverseVowels(s))
