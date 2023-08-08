import React, { useEffect, useState } from 'react'
import "./home.css";
import Navbar from '../../components/navbar';


export interface IResponse {
  slug: string;
  alt_description?: string;
  description?: string;
  downloads: number;
  likes: number;
  width: number;
  height: number;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
  views: number;
  user: {
    username: string;
    profile_image: {
      small: string;
    };
  };
}

export default function Home(): React.JSX.Element {
  const accessKey="CGisqfQ5kfyMSrj1tnqmozSIX4aFQGmk3MUuKf2DqTg";
  //const accessKey="fWm51D21qLCu05dopZ5tdavCngqgEotj9DsfDxpoel8";
  
  const [images,setImages]=useState<IResponse[]>([]);
  const [search,setSearch]=useState<string>("");
  const [currentPage,setCurrentPage]=useState<number>(1);
  
  const getRandomImages=async (page: number, search?: string)=>{
    const url=`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=20`;
    try {
      const data=await fetch(url);
      const res = await data.json()
      console.log(res);
      
      setImages(res);
    } catch (error) {
      console.log(error)
    }
  }

  const getSearchImage = async (page: number, search: string) => {
    if (search && search.length > 0) {
      const url = `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${search}&page=${page}`
      try {
        const data=await fetch(url);
        const res = await data.json()
        setImages(res.results);
      } catch (error) {
        console.log(error)
      }
    } else {
      getRandomImages(currentPage)
    }
  }

  async function onPressSearch(searchText: string) {
    await getSearchImage(1, searchText)
    //console.log(searchText);
  }

  useEffect(() => {
    getRandomImages(currentPage);

    return () => {}
  }, [])

  return (
    <section className='home' >
      <Navbar onSearch={onPressSearch} />
      <div className='content' >
        {images?.length > 0 && images.map(image => (
          <div key={image.slug}  >
            <a href={image.urls.regular} target='_blank' className='image-container' >
              <img src={image.urls.regular} alt={image.alt_description} className='image' loading='lazy' style={{ objectFit: "cover", width: "100%", height: "200px", borderRadius: 16 }} />
              <div className='image-mask-container' >
                <div className='image-mask' >
                  <div className='' style={{ display: "flex", alignItems: "center", marginLeft: 5 }} >
                    <img src={image.user.profile_image.small} alt="" width={20} height={20} style={{ borderRadius: 999, }} />
                    <p className='' style={{ fontSize: 10, color: 'white', fontWeight: "bold", marginLeft: 5, textTransform: "capitalize" }} >{image.user.username}</p>
                  </div>
                  <p style={{ color: "white", textTransform: "capitalize", paddingLeft: 5, paddingRight: 5, zIndex: 5 }} >{image.alt_description || image.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
