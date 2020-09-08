import IWorkshop from '../models/IArticles';
import IArticles from '../models/IArticles';

export function fetchAndShowArticles() {
    
    fetch( `http://localhost:4201/articles` )
        .then(function( response : Response ) {
            return response.json();
        })
        .then(function( articles : IArticles[] ) {
            console.log( articles );
            
            const tbody = <HTMLElement> document.querySelector( 'tbody' );
            
        
            articles.forEach(function( articles ) {
                tbody.innerHTML += `<tr>
                    <td>
                        <img src="${articles.imageUrl.url}" style="width: 500px;" />
                    </td>
                    <td>${articles.author}</td>
                    <td>${articles.title}</td>
                    <td>${articles.abstract}</td>
                    <td>${articles.body}</td>

                </tr>`;
            });
        })
        .catch(function( error ) {
            console.log( error.message );
        });
}