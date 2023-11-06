import { SyntheticEvent, useState } from "react"
import './form.scss'

export function FormCharacter () {


  const [form, setForm] = useState({
  })
  
  const handleChange = (ev: SyntheticEvent) => {
    return setForm(form)
  }

  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    return setForm(form)
  }

  return(
    <section className="form">
         <h2>Edit Character</h2>
         <h2>New Character</h2>
         <div className="counter-form">
            <form action="">
              <div className="name-form">
                <label htmlFor="name-character">Name: </label>
                <input
                type="text" 
                name="name"
                id="name-character"
                onChange={handleChange}
                placeholder="Terrestrial Language"
                required
                />
              </div>
              <div className="alive-form">
                <label htmlFor="alive-character">Alive: </label>
                <input
                type="checkbox" 
                name="alive"
                id="alive-character"
                onChange={handleChange}
                />
              </div>
              <div className="species-form">
                <label htmlFor="species-character">Species: </label>
                <input
                type="text" 
                name="species"
                id="species-character"
                onChange={handleChange}
                placeholder="Universal Nomenclature"
                required
                />
              </div>
              <div className="gender-form">
                <label htmlFor="gender-character">Gender: </label>
                <select name="gender" id="gender-character">Gender
                  <option value="select-gender" disabled>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="Female">Female</option>
                  <option value="genderless">Genderless</option>
                  <option value="unknown">Unknown</option>
                </select>
              </div>
              <div className="origen-form">
                <label htmlFor="origen-character">Origen: </label>
                <input
                type="text" 
                name="origen"
                id="origen-character"
                onChange={handleChange}
                placeholder="If You Know"
                required
                />
              </div>
              <div className="image-form">
                <label htmlFor="image-character">Image: </label>
                <input
                type="text" 
                name="image"
                id="image-character"
                onChange={handleChange}
                placeholder="Insert File"
                required
                />
              </div>
              <div className="location-form">
                <label htmlFor="lastKnowLocation-character">Last Know Location: </label>
                <input
                type="text" 
                name="lastKnowLocation"
                id="lastKnowLocation-character"
                onChange={handleChange}
                placeholder="If you Know"
                />
              </div>
              <div className="save-form">
                <button onSubmit={handleSubmit}>Save</button>
              </div>          
            </form>
        </div>
  </section>
  )
}
