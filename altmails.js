const crypto = require('node:crypto');
class altmails{
    constructor(){
        this.api = "https://tempmail.altmails.com"
        this.headers={"Host":"tempmail.altmails.com","Origin":"https://tempmail.altmails.com","Referer":"https://tempmail.altmails.com/","user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","x-requested-with": "XMLHttpRequest","Connection": "Keep-Alive"}
    }
    async get_messages(){
        let req=await fetch(`${this.api}/fetch-emails/`,{method:"POST",headers: this.headers,body:`_token=${crypto.randomBytes(20)}`});
        return req.json();
    }
    async new_emails(){
        let req=await fetch(`${this.api}/random-email-address`,{method:"GET",headers: this.headers});
        this.headers["cookie"]=req.headers.get("set-cookie")
        return req.text();
    }
    async stat_emails(){
        let req=await fetch(`${this.api}/get-tempmail-stat`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {altmails};
