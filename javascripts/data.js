//Handlebars Search Results
$(function  () {
  	var customerData = [{name:"Serinda Jones", invitesRemaining:4, industry:"Hospitality", city:"Las Vegas", status:"Active", activeFlag:true}, {name:"Oscar Wilde", invitesRemaining:15, industry:"Entertainment", phone:"555-555-5555", city:"Las Vegas", status:"In Queue", queueFlag:true}, {name:"Patrick Henry", invitesRemaining:15, industry:"Legal", phone:"555-555-5555", status:"Invitation Pending", invitationFlag:true}];
    var theTemplateScript = $("#search-results").html(); 
    var theTemplate = Handlebars.compile (theTemplateScript); 



    $(".search-container").append (theTemplate(customerData)); 

});