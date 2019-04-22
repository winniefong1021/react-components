// Inside app.js, create a GroceryList component that contains an unordered list of 2 grocery items. Render this component to the div tag in index.html with an id of app

// Create React components for the 2 items in your grocery list. For example, if your grocery list contains "cucumbers" and "kale", create a Cucumbers component and a Kale component

// Use these two new components inside your GroceryList component instead of the hardcoded <li>s

// Create a reusable GroceryListItem component that dynamically renders a given grocery item

// Refactor GroceryList to dynamically render an array of groceryItems, utilizing your new GroceryListItem component

// Refactor GroceryListItem to be a class component

// Make it so that when your mouse hovers over a <li> of a GroceryListItem that it turns bold

const items = ['Beer', 'Wine', 'Pizza'];

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bold: false
    };
  }

  onMouseEnterHandler() {
    this.setState({ bold: true });
  }

  onMouseLeaveHandler() {
    this.setState({ bold: false });
  }

  render() {
    var hoverStyle;
    if (this.state.bold) {
      hoverStyle = { fontWeight: 'bold' }
    } else {
      hoverStyle = { fontWeight: 'normal' }
    }

    return (
      <li style={hoverStyle} onMouseEnter={this.onMouseEnterHandler.bind(this)} onMouseLeave={this.onMouseLeaveHandler.bind(this)}>{this.props.item}</li>
    );
  }
}

var GroceryList = (props) => {
  return (
    <div id="grocery-list">
      <h3>Grocery List:</h3>
      <ul>
        {props.items.map(item =>
          <GroceryListItem key={item} item={item} />
        )}
      </ul>
    </div>
  );
};


// var GroceryList = () => {
//   return (
//     <div id="grocery-list">
//       <h3>Grocery List:</h3>
//       <ul>
//         <Cucumbers />
//         <Kale />
//         <li>Ice Cream</li>
//         <li>Wine</li>
//       </ul>
//       <List items={['Beef', 'Rice', 'Beer']} />
//     </div>
//   );
// };

// var Cucumbers = () => (
//   <li>Cucumbers</li>
// );

// var Kale = () => (
//   <li>Kale</li>
// );

// var List = (props) => (
//   <ul>
//     <li>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//     <li>{props.items[2]}</li>
//   </ul>
// );

// ReactDOM.render(<GroceryList />, document.getElementById("app"));
ReactDOM.render(<GroceryList items={items} />, document.getElementById("app"));
