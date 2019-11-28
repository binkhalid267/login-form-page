function checkMe(){
    let showHtml,showHtmlBody,myForm1,myForm2; 

showHtml=document.querySelector('h6');
showHtmlBody=document.querySelector('#info');

myForm1=document.forms['formLogin']['userid'];
myForm2=document.forms['formLogin']['passid'];

if(myForm1.value==='' || myForm2.value===''){
    showHtml.style.display='block';
    showHtmlBody.style.display='block';
    showHtml.innerHTML="<h1>Empty form input</h1>"
    showHtml.style.backgroundColor='yellow';
    showHtml.style.color='#000';
    showHtml.style.textAlign='center';
    showHtml.style.marginTop='20px';
    showHtml.style.fontSize='19px';
    showHtml.style.textTransform='uppercase';
    showHtml.style.textShadow='2px 2px 2px blue';
    return false;
} else {
    showHtml.style.display='block';
    showHtmlBody.style.display='block';
    showHtml.innerHTML="<h1>Invalid Email or password</h1>"
    showHtml.style.backgroundColor='red';
    showHtml.style.color='#000';
    showHtml.style.textAlign='center';
    showHtml.style.marginTop='20px';
    showHtml.style.fontSize='19px';
    showHtml.style.textTransform='uppercase';
    showHtml.style.textShadow='2px 2px 2px blue';
    return false;
}
}