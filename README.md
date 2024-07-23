# altmails
JavaScript library for tempmail.altmails.com
# main
```js
async function main(){
    const {altmails} = require('./altmails');
    const alt= new altmails();
    let req=await alt.new_emails()
    console.log(req)
}
main()
```
# gif from the site 
![loading](https://github.com/user-attachments/assets/21aebbcf-0cd3-4183-9d23-80c9eaf19bf5)
