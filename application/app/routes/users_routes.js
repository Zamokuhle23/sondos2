module.exports = function(app){
    app.get('/users',(req,res) =>{
        var  data = [{
            "profile":"name :ZAMOKUHLE MASONDO. Contacts: E-mail:zamokuhlemasondo6@gamil.com,+79000000, Adress: Kazan,universiad,420091,Russia. Experience:worked as CEO in Amazon Company for 4 years in South Africa,Johannesburg and I think Im more than qualified for the job. School: I attended KFU in Kazan,Russia for a Barchelor's degree,I an also doing Masters Degree as part time afeter work. Skills  I do websites,develop applications hence i'm a Software engineer,I am able to work under pressure, which means Im always open over time"
        }];
            res.send(JSON.stringify(data));
    });
};