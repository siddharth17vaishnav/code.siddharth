import React from 'react'
import '../App.css';
import Projects from '../Assets/json/projects';

const Portfolio = () => {
  console.log(Projects.data);
    return (
        <div>
              <section id="work" class="portfolio-mf sect-pt4 route">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="title-box text-center">
              <h3 class="title-a">
                Portfolio
              </h3>
              <p class="subtitle-a">
               {Projects.data.map((res)=>{
                 return(
                   <>
                  
                   </>
                 )
               })}
              </p>
              <div class="line-mf"></div>
            </div>
          </div>
        </div>
        <div class="row">
         
          {Projects.data.map((res)=>{
            return(
<div class="col-md-4" key={res.key}>
            <div class="work-box">
              <a href={res.image} data-gallery="portfolioGallery" class="portfolio-lightbox">
                <div class="work-img">
                  <img src={res.image} alt="img" class="img-fluid" style={{maxHeight:100}}/>
                </div>
              </a>
              <div class="work-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">{res.name}</h2>
                    <div class="w-more">
                      <span class="w-ctegory">{res.type}</span> 
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <a href={res.url}> <span class="bi bi-plus-circle"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            )
          })}


        </div>
      </div>
    </section>
        </div>
    )
}

export default Portfolio
