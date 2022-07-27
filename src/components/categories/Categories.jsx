import "./categories.css"
function Categories() {
    function categories(e){
        console.log(e.target.value);
    }
  return (
    <div className="select-item-box" >
         <small className="categories-text">select categories</small>
        <select className="select-items" onChange={categories} name="categories" id="select-box">

            <option className="item" value="phones">phones</option>

            <option className="item" value="phoneAccesories">phone accesories</option>

            <option className="item"  value="laptop">laptop</option>

            <option className="item"  value="computer">computer</option>

            <option className="item" value="tv">TV and Monitors</option>

            <option className="item"  value="camera">camera</option>

            <option className="item"  value="speakers">speakers</option>

            <option className="item"  value="iphone">iphone</option>

            <option className="item"  value="android">android phones</option>

            <option className="item" value="electricCars">electric cars</option>

            <option className="item"  value="chargers">chargers</option>

            <option className="item" value="gamingConsole">gaming Console</option>

            <option className="item"  value="macbook">macBook</option>

            <option className="item"  value="smartWatch">smart watch</option>

        </select>
       
    </div>
  )
}

export default Categories