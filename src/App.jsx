import './App.css';

function App() {
  return (
    <div className="app-container">
      <fieldset className="transparent-box">
        <legend className="legend-style">SLAMBOOK</legend>
        <form className="form-style">
          <div className="row">
            <label>
              Name: <input type="text" name="name" />
            </label>
            <label>
              Nickname: <input type="text" name="nickname" />
            </label>
          </div>
          <div className="row">
            <label>
              Date of Birth: <input type="date" name="dob" />
            </label>
            <label>
              Call me on: <input type="text" name="callme" />
            </label>
          </div>
          <div className="row">
            <label>
              Gender:
              <input type="checkbox" name="gender" value="male" /> Male
              <input type="checkbox" name="gender" value="female" /> Female
            </label>
          </div>
          <div className="row">
            <label>
              Address: <textarea name="address" rows="3" cols="40"></textarea>
            </label>
          </div>
          <div className="row">
            <label>
              Memories: <textarea name="memories" rows="4" cols="40"></textarea>
            </label>
          </div>
          <div className="row">
            <label>
              Favorite Actor:
              <input type="checkbox" name="actor" value="vijay" /> Vijay
              <input type="checkbox" name="actor" value="ajith" /> Ajith
              <input type="checkbox" name="actor" value="surya" /> Surya
              <input type="checkbox" name="actor" value="dhanush" /> Dhanush
            </label>
          </div>
          <div className="row">
            <label>
              School:
              <select name="school">
                <option value="school1">-NONE-</option>
                <option value="school1">THE BVB SCHOOL</option>
                <option value="school2">CS ACADEMY</option>
                <option value="school3">CHAITANYA</option>
                <option value="school4">TIPS</option>
              </select>
            </label>
          </div>
          <div className="row">
            <button type="submit" className="submit-button">Submit</button>
          </div>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
