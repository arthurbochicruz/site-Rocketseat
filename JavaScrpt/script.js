function clicar(){

     const html = document.documentElement
     html.classList.toggle('light')

     const img = document.querySelector('img')  
     
     if (html.classList.contains('light')) {
        img.setAttribute('src', 'minhafoto-egr.jpeg')   
        
     } else {
            
            img.setAttribute('src', 'minha-foto.enc')
        } 
        
   
   
}