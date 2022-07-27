import "./filterWindow.css"
function FilterAction({filterWindow}) {
    function setMin(e){
        console.log("min",e.target.value);
    }

    function setMax(e){
        console.log("max" ,e.target.value)
    }

    function setLocation(e){
        console.log(e.target.value)

    }

  return (
    <div className="filter-items-box">
        <ul>
            <li  className="filter-item" >
                <label htmlFor="">min price</label>
                <input onChange={setMin} min={0} type="number" />
            </li>

            <li className="filter-item">
                <label htmlFor="">max price</label>
                <input onChange={setMax} min={0} type="number" />
            </li>

            <li className="filter-item">
                <label htmlFor="">location</label>
                <select onChange={setLocation} className="filter-item-select" name="" id="">
                    <option value="nigeria">
                        nigeria
                    </option>
                    <option value="ghana">
                        ghana
                    </option>
                    <option value="guinea">
                        guinea
                    </option>
                    <option value="algeria">
                        algeria
                    </option>
                    <option value="egypt">
                        egypt
                    </option>
                    <option value="others">
                    others
                    </option>
                </select>
            </li>
            
            <li>
                <input className="filter-item-button" onClick={filterWindow} type="button" value="OK" />
            </li>
        </ul>
    </div>
  )
}

export default FilterAction