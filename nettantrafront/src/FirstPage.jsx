import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const FirstPage = () => {
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [dob, setDob] = useState("");
  let [mail, setMail] = useState("");
  let [ffname, setFfname] = useState("");
  let [flname, setFlname] = useState("");
  let [mfname, setMfname] = useState("");
  let [mlname, setMlname] = useState("");
  let [gender, setGender] = useState("");
  let [nationlity, setNationlity] = useState("");
  let [street, setStreet] = useState("");
  let [city, setCity] = useState("");
  let [state, setState] = useState("");
  let [ccode, setCcode] = useState("");
  let [numb, setNumb] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [counter, setCounter] = useState(0);
  // const [isButtonDisabled, setIsButtonDisabled] = useState(false);
 
  // let [num, setNum] = useState("");
  // const itemId = parseInt(num);


  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!fname.trim()) {
      isValid = false;
      errors.fname = "First name is required";
    }

    if (!lname.trim()) {
      isValid = false;
      errors.lname = "Last name is required";
    }

    if (!dob) {
      isValid = false;
      errors.dob = "Date of birth is required";
    }

    if (!mail.trim()) {
      isValid = false;
      errors.mail = "Email address is required";
    }
    else if (!mail.toLowerCase) {
      isValid = false;
      errors.mail = "Email address is required";
    }
    
    else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(mail)) {
      isValid = false;
      errors.mail = "Invalid email address";
    }

    if (!ffname.trim()) {
      isValid = false;
      errors.ffname = "Father's first name is required";
    }

    if (!flname.trim()) {
      isValid = false;
      errors.flname = "Father's last name is required";
    }

    if (!mfname.trim()) {
      isValid = false;
      errors.mfname = "Mother's first name is required";
    }

    if (!mlname.trim()) {
      isValid = false;
      errors.mlname = "Mother's last name is required";
    }

    if (!gender) {
      isValid = false;
      errors.gender = "Gender is required";
    }

    if (!nationlity.trim()) {
      isValid = false;
      errors.nationlity = "Nationality is required";
    }

    if (!street.trim()) {
      isValid = false;
      errors.street = "Street address is required";
    }

    if (!city.trim()) {
      isValid = false;
      errors.city = "City is required";
    }

    if (!state.trim()) {
      isValid = false;
      errors.state = "State is required";
    }

    if (!ccode.trim()) {
      isValid = false;
      errors.ccode = "Country code is required";

    }
    if (!numb.trim()) {
      isValid = false;
      errors.numb = "Mobile number is required";
    } else if (!/^\d{10}$/.test(numb)) {
      isValid = false;
      errors.numb = "Invalid mobile number";
    }
    // Do your form submission logic here
    // if (Object.keys(errors).length === 0) {
    //   setIsButtonDisabled(true);
    // }
    setFormErrors(errors);

    return isValid;

  }


  // const processData = (responseData) => {
  //   console.log(responseData);
  //   console.log(responseData.body.id)
  //   const pk = responseData.body.id
  //   const sk = parseInt(pk)
  //   console.log(sk);
  //   console.log(typeof sk);
  //   setNum(pk)
  // };


  let handel = (e) => {
    e.preventDefault()
  let phone = ccode + "" + numb;
    let name = fname + " " + lname;
    let mothername = mfname + " " + mlname;
    let fathername = ffname + " " + flname;
    if (validateForm()) {
      console.log(name, dob, mail, fathername, mothername, gender, phone, nationlity, state, street, city)
      setCounter(counter + 1);

      // let payload = { name, dob, mail, fathername, mothername, gender, phone, nationlity, state, street, city }

      // axios.post("http://localhost:8080/person", payload)
      //   .then(response => {
      //     setCounter(counter + 1);
      //     console.log(counter);
      //     const json = response.data;
      //     const data = json.body;
      //     const num = parseInt(data.id);
      //     console.log(num); // 123
      //     console.log("Person details has been added");
      //     processData(response.data);

      //     toast.success("Data has been added sucessfully\n please click next to next page")
      //     })
      //   .catch(() => {
      //     console.log("something went wrong");
      //     toast.error("something went wrong")


      //   })


    }

  }

  return (
    <div >
      <div class="container h-100 w-auto p-4 ">
        <h1 class="text-center" >Profile Details</h1>
        <form class="border bg-light p-5 border rounded-3" onSubmit={validateForm} >
          <ToastContainer />
          {/* name */}
          <div class="form-group">
            <label for="name">Name</label>
            <div class="row h-100 ">
              <div class="col-md-6 text-center">
                <input type="text" class="form-control " id="name" placeholder="FirstName" value={fname} onChange={e => { setFname(e.target.value) }} />
                {formErrors.fname && <p className="error text-danger">{formErrors.fname}</p>}
              </div>
              <div class="col-md-6 text-center">
                <input type="text" class="form-control " id="name" placeholder="LastName" value={lname} onChange={e => { setLname(e.target.value) }} />
                {formErrors.lname && <p className="error text-danger">{formErrors.lname}</p>}
              </div>
            </div>
          </div>
          <br />
          {/* dob */}
          <div class="form-group">
            <label for="dob">Date of Birth</label>
            <input type="date" class="form-control" id="dob" aria-describedby="emailHelp" placeholder="DOB" value={dob} onChange={e => { setDob(e.target.value) }} />
            {formErrors.dob && <p className="error text-danger">{formErrors.dob}</p>}
          </div>
          <br />
          {/* email */}
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="mail" aria-describedby="emailHelp" placeholder="Enter email" value={mail} onChange={e => { setMail(e.target.value) }} />
            {formErrors.mail && <p className="error text-danger">{formErrors.mail}</p>}
          </div>
          <br />

          {/* Fathername */}
          <div class="form-group">
            <label for="Fathername">Father name</label>
            <div class="row h-100 ">
              <div class="col-md-6 text-center">
                <input type="text" class="form-control " id="name" placeholder="FirstName" value={ffname} onChange={e => { setFfname(e.target.value) }} />
                {formErrors.ffname && <p className="error text-danger">{formErrors.ffname}</p>}
              </div>
              <div class="col-md-6 text-center">
                <input type="text" class="form-control " id="name" placeholder="LastName" value={flname} onChange={e => { setFlname(e.target.value) }} />
                {formErrors.flname && <p className="error text-danger">{formErrors.flname}</p>}
              </div>
            </div>
          </div>
          <br />

          {/* Mother name */}
          <div class="form-group">
            <label for="Mothername">Mother name</label>
            <div class="row h-100 ">
              <div class="col-md-6 text-center">
                <input type="text" class="form-control " id="name" placeholder="FirstName" value={mfname} onChange={e => { setMfname(e.target.value) }} />
                {formErrors.mfname && <p className="error text-danger">{formErrors.mfname}</p>}
              </div>
              <div class="col-md-6 text-center">
                <input type="text" class="form-control " id="name" placeholder="LastName" value={mlname} onChange={e => { setMlname(e.target.value) }} />
                {formErrors.mfname && <p className="error text-danger">{formErrors.mfname}</p>}
              </div>
            </div>
          </div>
          <br />
          {/* Gender*/}
          <div >
            <label for="gender">Gender</label><br />
            <select name="Gender" id="gender" value={gender} onChange={e => { setGender(e.target.value) }}>
              <option value="">--Select--</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {formErrors.gender && <p className="error text-danger">{formErrors.gender}</p>}
          </div>
          <br />

          {/* Nationlity */}
          <div class="form-group">
            <label for="nation">Nationlity</label>
            <input type="text" class="form-control" id="nation" aria-describedby="emailHelp" placeholder="Nationlity" value={nationlity} onChange={e => { setNationlity(e.target.value) }} />
            {formErrors.nationlity && <p className="error text-danger">{formErrors.nationlity}</p>}
          </div>
          <br />

          {/* Home Address */}
          <div class="form-group">
            <label for="address">Home Address</label>
            <input type="text" class="form-control " id="address" placeholder="Street Address" value={street} onChange={e => { setStreet(e.target.value) }} /><br />
            {formErrors.street && <p className="error text-danger">{formErrors.street}</p>}
            <div class="row h-100 ">
              <div class="col-md-6 text-center">
                <input type="text" class="form-control " id="address" placeholder="City" value={city} onChange={e => { setCity(e.target.value) }} />
                {formErrors.city && <p className="error text-danger ">{formErrors.city}</p>}
              </div>
              <div class="col-md-6 text-center">
                <input type="text" class="form-control " id="address" placeholder="State" value={state} onChange={e => { setState(e.target.value) }} />
                {formErrors.state && <p className="error text-danger">{formErrors.state}</p>}
              </div>
            </div>
          </div>
          <br />

          <div class="form-group">
            <label for="phone">Phone</label>
            <div class="row h-100 ">
              <div class="col-md-2 text-center">
                <select name="ccode" class="form-control " id="ccode" value={ccode} onChange={e => { setCcode(e.target.value) }}>
                  <option value="">--Select--</option>
                  <option value="+1"> +1 </option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                  <option value="+81">+81</option>
                  <option value="+86">+86</option>
                  <option value="+33">+33</option>
                  <option value="+49">+49</option>
                  <option value="+91">+91</option>
                  <option value="+39">+39</option>
                  <option value="+52">+52</option>
                  <option value="+64">+64</option>
                  <option value="+34">+34</option>
                  <option value="+27">+27</option>
                  <option value="+41">+41</option>
                </select>
                {formErrors.ccode && <p className="error text-danger">{formErrors.ccode}</p>}
              </div>
              <div class="col-md-10 text-center">
                <input type="numb" class="form-control " id="numb" placeholder="Mobile number" value={numb} onChange={e => { setNumb(e.target.value) }} />
                {formErrors.numb && <p className="error text-danger">{formErrors.numb}</p>}
              </div>
            </div>
          </div>
          <br />




          <div class="row h-100  ">
            <div class="col-md-2 m-lg-auto ">
              <button type="submit" onClick={handel} class="form-control btn btn-primary ">
             {/* disabled={isButtonDisabled} */}
                Save
              </button>
            </div>


            {/* if(typeof itemId==number){ */}
            <div class="col-md-2 m-lg-auto ">
              {counter > 0 && <Link to={{ pathname: '/second', search:
              `?fname=${fname}&lname=${lname}&dob=${dob}&mail=${mail}&ffname=${ffname}
              &flname=${flname}&mfname=${mfname}&mlname=${mlname}&nationlity=${nationlity}
              &street=${street}&city=${city}&state=${state}&ccode=${ccode}&numb=${numb}&gender=${gender}

              ` }} class="form-control btn btn-primary "  >Next</Link>}



            
            </div>


          

      </div>

    </form>


      </div >
    </div >
  )
}

export default FirstPage