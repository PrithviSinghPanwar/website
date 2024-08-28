


let displayResults=document.querySelector("#respons")
let getMovie=async(title='')=>{
    console.log(title)
    let apiUrl;
    if(title===''){
         apiUrl=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1`
    }
    else{
         apiUrl=`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${title}`
    }
    let apiData=await fetch(apiUrl)
    let finalData=await apiData.json()
   let movieList=finalData.results;

   let imagePath=`https://image.tmdb.org/t/p/w1280/`
   
   let movieItems=''
   movieList.forEach((items,index)=>{
        // let {title,poster_path,release_date}=items;

        movieItems+=` <div class="col-lg-3">
                <div class="shadow-lg">
                    <img src="${imagePath+items.poster_path}" class="img-fluid" alt="">
                    <h6 class="p-3">${items.title} | ${items.release_date}
                    </h6>
                </div>
            </div>`
   })

   displayResults.innerHTML=movieItems;


}

getMovie()
