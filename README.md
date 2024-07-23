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
![loading](https://tempmail.altmails.com/image/loading.gif)
