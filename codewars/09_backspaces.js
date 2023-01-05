/* 6 kyu
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  "" */

function cleanString(s) {
    let value = s.split('').reduce(
      function(prev, item){
        
        item !== '#' ? prev.push(item) : prev.pop();
        return prev;
  
      }, [])
      
     return value.join('');
  }
  
  console.log(
    cleanString('#')
  );