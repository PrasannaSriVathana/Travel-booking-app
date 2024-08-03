import "./featuredProperties.css";
import useFetch from "../../Hooks/useFetch.js";

const FeaturedProperties = () => {

    const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // Log the data to see its structure
    console.log(data);

    return (
        <div className="fp">
            {loading ? ("Loading") : (<>
                {data.map((item)=> (
                    <div className="fpItem" key={item._id}>
                        <img
                            src={item.photos[0]}
                            alt=""
                            className="fpImg"
                        />
                        <span className="fpName">{item.name}</span>
                        <span className="fpCity">{item.city}</span>
                        <span className="fpPrice">{item.cheapestPrice}</span>
                        {item.rating && <div className="fpRating">
                            <button>{item.rating}</button>
                            <span>Excellent</span>
                        </div>}
                    </div>
                ))}
            </>)}
        </div>
    );
}

export default FeaturedProperties;