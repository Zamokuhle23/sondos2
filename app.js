
loadJSON("https://github.com/Zamokuhle23/sondos23/commit/06cc87223c39befb02805c89fde1e15b4d54fc0d",gotData,'jsonp');
function gotData(data) {
var name = document.querySelector('.name');
var contact = document.querySelector('.contact');
var adress = document.querySelector('.adress');
var experienceDS = document.querySelector('.experienceDS');
var experiencePS = document.querySelector('.experiencePS');
var experienceCP = document.querySelector('.experienceCP');
var experienceAD = document.querySelector('.experienceAD');
var educationDS = document.querySelector('.educationDS');
var educationCT = document.querySelector('.educationCT');
var educationSC = document.querySelector('.educationSC');
var educationAD = document.querySelector('.educationAD')
var skills = document.querySelector('.skills');
name.textContext = data.name;
contact.textContext = data.contact;
adress.textContext = data.adress;
experienceDS.textContext = data.expirience.date_started;
experienceCP.textContext = data.expirience.Company;
experienceAD.textContext = data.expirience.adress;
educationDS.textContext = data.education.date_started;
educationCT.textContext = data.education.Certificate;
educationSC.textContext = data.education.School;
educationAD.textContext = data.education.Adress;
skills.textContext = data.skills;



}