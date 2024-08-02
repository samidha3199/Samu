import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"

// *Body Component 

const Body = ()=>{

    const [listOfRestaurants, setListOfRestaurants] = useState([])

    const [listoffilterRestaurant, setlistoffilterRestaurant] = useState([])

    const [searchText, setSearchText] = useState("")

    console.log("Body Component re-render on every keypress.")

    useEffect(()=>{
        fetchData()
    })

    const fetchData = async () =>{
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const data = await response.json()
        console.log(data)
        setListOfRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setlistoffilterRestaurant(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    //* Adding Shimmer UI

    if(listOfRestaurants.length === 0){
        return <Shimmer/>
    }

    return(
        <>
            <div className="container body__container">
                <div className="filter__search-container">
                    <button className="btn" onClick={()=>{
                        let topRatedRestaurants = listOfRestaurants.filter((restaurant)=>{
                            return(
                                restaurant.info.avgRating > 4
                            );
                        });
                        setListOfRestaurants(topRatedRestaurants)
                    }}>Top Rated Restaurant</button>
                    <div className="search__container">
                        <input type="text" value={searchText}
                            onChange={(e)=>{
                                setSearchText(e.target.value)
                            }}
                        placeholder="Search for Restaurants" />
                        <button onClick={()=>{
                            console.log(searchText)

                            // filter logic

                            const filtered_rest = listOfRestaurants.filter((res)=>{
                                return(
                                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                )
                            })
                            setlistoffilterRestaurant(filtered_rest)

                        }}>Search</button>
                    </div>
                </div>
                <div className="restaurant__container">
                    {
                        listoffilterRestaurant.map((restaurantCards)=>{
                            return(
                                <RestaurantCard key={restaurantCards.info.id} resData={restaurantCards} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}


export default Body