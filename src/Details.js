import {Component} from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousal";

class Details extends Component {
    // constructor() {
    //     super();
    //     this.state = {loading : true}
    // }
    state = { loading: true };
    async componentDidMount() {
        const response = await fetch(
            `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
            );
            const json = await response.json();
            this.setState(
             {loading: false , ...json.pets[0]}
            )
    }
    render() {
        if (this.state.loading){
            return <h2>Loading .......</h2>
        }
        const { animal, breed, city, state, description, name , images } = this.state;
        return(
            <div className="details" >
             <Carousel images={images}/>
              <h1>{name}</h1>
              <h2>{animal} - {breed} - {city} , {state}</h2>
              <button>Adopt {name}</button>
              <p>{description}</p>
            </div>
        )
    }
}
const WrappedDetails = () => {
    const params = useParams();
    return <Details params={params} />;
  };
  
  export default WrappedDetails;