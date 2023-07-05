import { movieContainer } from "./variables";
import { createElement } from "./DomUtilities";

const displayMovies = (movies) => {
    
  movieContainer.innerHTML = null;
  movies.forEach((movie, index) => {
    let movieCard = createElement("div");
    let movieCardContent = `
            <img
              src="https://static.tvmaze.com/uploads/images/medium_portrait/136/342487.jpg"
              alt=""
            />
            <div class="title">
              <p>Movie title</p>
              <div>
                <span><i class="like-btn fa-solid fa-thumbs-up"></i></span>
                <span>10</span>
              </div>
            </div>
            <button class="comment-btn">
              <span>
                <p>Comments</p>
                <i class="fa-solid fa-angle-down"></i>
              </span>
              <span>320</span>
            </button>
   `;
  
   movieCard.innerHTML = movieCardContent
   movieContainer.appendChild(movieCard)
  });
 
};


export default displayMovies