// const Pet = (props) => {
// 	return React.createElement('div', {}, [
// 		React.createElement('h1', {}, props.name),
// 		React.createElement('h2', {}, props.animal),
// 		React.createElement('h2', {}, props.breed)
// 	]);
// };
// export default Pet;

const Pet = props => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.animal}</h2>
            <h3>{props.breed}</h3>
            {/* <img src={props.images} alt="image" /> */}
        </div>
    )
}

export default Pet;