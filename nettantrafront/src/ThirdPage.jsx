import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation } from 'react-router-dom'

const ThirdPage = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const itemId = params.get('itemId');
  // First page dataStart
    const fname = params.get('fname');
    const lname = params.get('lname');
    const gender = params.get('gender');
    const dob = params.get('dob');
    const mail = params.get('mail');
    const ffname = params.get('ffname');
    const flname = params.get('flname');
    const mfname = params.get('mfname');
    const mlname = params.get('mlname');
    const nationlity = params.get('nationlity');
    const street = params.get('street');
    const city = params.get('city');
    const state = params.get('state');
    const ccode = params.get('ccode');
    const numb = params.get('numb');
// first page data end
// second paga data

const hscInstituteName = params.get('hscInstituteName');
const hscBoard = params.get('hscBoard');
const hscScore = params.get('hscScore');
const sscInstituteName = params.get('sscInstituteName');
const sscBoard = params.get('sscBoard');
const sscScore =params.get('sscScore');
const currentPursing = params.get('currentPursing');
const currentInstituteName = params.get('currentInstituteName');
const overalPercentage =params.get('overalPercentage');
const currentBacklogs = params.get('currentBacklogs');
// second page data end
  let [passportSizePhoto, setPassportSizePhoto] = useState("");
  let [hscMarkSheet, setHscMarkSheet] = useState("");
  let [sscMarkSheet, setSscMarkSheet] = useState("");
  let [allSemesterMarksheet, setAllSemesterMarksheet] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [counter, setCounter] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const allowedExtensions = /(\.pdf)$/i;
  const allowedExtensions1 = /(\.jpg)$/i;
  
  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!passportSizePhoto) {
      isValid = false;
      errors.passportSizePhoto = "Please select a passport size photograph";
    }
    if (!allowedExtensions.test(passportSizePhoto)&&!allowedExtensions1.test(passportSizePhoto)) {
      isValid = false;
      errors.passportSizePhoto = "Please select a file in PDF/JPG format";
    }

    if (!hscMarkSheet) {
      isValid = false;
      errors.hscMarkSheet = "Please select an HSC mark sheet";
    }
    if (!allowedExtensions.test(hscMarkSheet)) {
      isValid = false;
      errors.hscMarkSheet = "Please select a file in PDF format";
    }

    if (!sscMarkSheet) {
      isValid = false;
      errors.sscMarkSheet = "Please select an SSC mark sheet";
    }
    if (!allowedExtensions.test(sscMarkSheet)) {
      isValid = false;
      errors.sscMarkSheet = "Please select a file in PDF format";
    }

    if (!allSemesterMarksheet) {
      isValid = false;
      errors.allSemesterMarksheet = "Please select a mark sheet in PDF or Docs format";
    }
    if (!allowedExtensions.test(allSemesterMarksheet)) {
      isValid = false;
      errors.allSemesterMarksheet = "Please select a file in PDF format";
    }
    
    
    // Do your form submission logic here
    if (Object.keys(errors).length === 0) {
      setIsButtonDisabled(true);
    }

    setFormErrors(errors);
    
    
    return isValid;
    
  };


  let handel = (e) => {
    e.preventDefault()

    let phone = ccode+""+numb;
    let name = fname+""+lname;
    let mothername = mfname+""+mlname;
    let fathername = ffname+""+flname;
    if (validateForm()) {
      
      //first page
      console.log(name, dob, mail, fathername, mothername, gender, phone, nationlity, state, street, city);
      let payload1 = { name, dob, mail, fathername, mothername, gender, phone, nationlity, state, street, city };
      //Second page
      console.log(hscInstituteName, hscBoard, hscScore, sscInstituteName, sscBoard, sscScore, currentPursing,
      currentInstituteName, overalPercentage, currentBacklogs);
      let payload2 = {
         hscInstituteName, hscBoard, hscScore, sscInstituteName, sscBoard, sscScore, currentPursing,
         currentInstituteName, overalPercentage, currentBacklogs}
        
        //third page
      console.log(passportSizePhoto, hscMarkSheet, sscMarkSheet, allSemesterMarksheet);   
      let payload3 = { passportSizePhoto, hscMarkSheet, sscMarkSheet, allSemesterMarksheet };


      axios.post("http://localhost:8080/person", payload1)
        .then(response => {
          
          // console.log(counter);
          const json = response.data;
          const data = json.body;
          const num = parseInt(data.id);
          // console.log(num); // 123
          // console.log("Person details has been added");

          axios.post(`http://localhost:8080/education/${num}`, payload2)
                .then(() => {

                    console.log("Docoment has been added");
                    // console.log(itemId);
                    axios.post(`http://localhost:8080/document/${num}`, payload3)
                      .then(() => {
                        console.log("Data has been added");
                        toast.success("Data has Been Submited ");
                        setCounter(counter + 1);
                        console.log(allSemesterMarksheet.split('.').pop().toLowerCase());
                        console.log(allowedExtensions);
                        // console.log(passportSizePhoto);
                        // console.log(counter);
                        // button.disabled = true;

                      })
                      .catch(() => {
                        console.log("something went wrong");
                        toast.error("Something went Wrong")
                      })
                })
                .catch(() => {
                    console.log("something went wrong");
                    console.log(itemId);
                    toast.error("something went wrong")

                })

          })
        .catch(() => {
          console.log("something went wrong");
          toast.error("something went wrong")


        })
    }
  
  }
 
  return (
    <div >
      {/* {itemId} */}
      <div class="container h-100 w-auto p-4 ">
        <h1 class="text-center">Docoments</h1>
        <form class="border bg-light p-5 border rounded-3">
        <ToastContainer />
          {/* Recent passport size photograph */}
          <div class="form-group">
            <label for="exampleInputEmail1">Recent passport size photograph</label>
            <input type="file" class="form-control" value={passportSizePhoto} onChange={e => { setPassportSizePhoto(e.target.value) }} />
            {formErrors.passportSizePhoto && <div className="error text-danger">{formErrors.passportSizePhoto}</div>}
          </div>
          <br />

          {/* HSC mark sheet  */}
          <div class="form-group">
            <label for="exampleInputEmail1">HSC mark sheet</label>
            <input type="file" class="form-control" value={hscMarkSheet} onChange={e => { setHscMarkSheet(e.target.value) }} />
            {formErrors.hscMarkSheet && <div className="error text-danger">{formErrors.hscMarkSheet}</div>}
          </div>
          <br />

          {/* SSC mark sheet */}
          <div class="form-group">
            <label for="exampleInputEmail1">SSC mark sheet</label>
            <input type="file" class="form-control" value={sscMarkSheet} onChange={e => { setSscMarkSheet(e.target.value) }} />
            {formErrors.sscMarkSheet && <div className="error text-danger">{formErrors.sscMarkSheet}</div>}
          </div>
          <br />


          {/* All semesters mark sheet in a single PDF or docs */}
          <div class="form-group">
            <label for="exampleInputEmail1">All semesters mark sheet in a single PDF or docs</label>
            <input type="file" class="form-control" value={allSemesterMarksheet} onChange={e => { setAllSemesterMarksheet(e.target.value) }} />
            {formErrors.allSemesterMarksheet && <div className="error text-danger">{formErrors.allSemesterMarksheet}</div>}
          </div>
          <br />

          <div class="row h-100  ">
            
            <div class="col-md-2 m-lg-auto ">
              <button id="mybutton" type="submit" onClick={handel}class="form-control btn btn-primary "
              disabled={isButtonDisabled}
              >submit</button>
            </div>
            <div class="col-md-4 m-lg-auto ">
            {counter > 0 && <Link to="/">Add More Student</Link>}
            </div>
          </div>

        </form>

      </div>
    </div>
  )
}
export default ThirdPage