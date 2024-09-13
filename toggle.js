function toggleTheme() { 
                
    var theme = document.getElementsByTagName('link')[0]; 

    
    if (theme.getAttribute('href') == 'style1.css') { 
        theme.setAttribute('href', 'style2.css'); 
    } else { 
        theme.setAttribute('href', 'style1.css'); 
    } 
    sessionStorage.setItem('href',theme.getAttribute('href'));
} 

window.onload =function(){
    if(sessionStorage.getItem('href')== null){
        sessionStorage.setItem('href','style1.css')
    }
    var theme = document.getElementsByTagName('link')[0]; 
    theme.setAttribute('href', sessionStorage.getItem('href'));
}