import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const SecondPage = () => {
    // first page data
    const { search } = useLocation();
    const params = new URLSearchParams(search);
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
    //end of first page data

    let [hscInstituteName, setHscInstituteName] = useState("");
    let [hscBoard, setHscBoard] = useState("");
    let [hscScore, setHscScore] = useState("");
    let [sscInstituteName, setSscInstituteName] = useState("");
    let [sscBoard, setSscBoard] = useState("");
    let [sscScore, setSscScore] = useState("");
    let [currentPursing, setCurrentPursing] = useState("");
    let [currentInstituteName, setCurrentInstituteName] = useState("");
    let [overalPercentage, setOveralPercentage] = useState("");
    let [currentBacklogs, setCurrentBacklogs] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [counter, setCounter] = useState(0);
    // const [isButtonDisabled, setIsButtonDisabled] = useState(false);
 
    const validateForm = () => {
        let errors = {};
        let isValid = true;
        // HSC validation start
        if (!hscInstituteName.trim()) {
            isValid = false;
            errors.hscInstituteName = "Institute name is required";
        }
        if (!hscBoard.trim()) {
            isValid = false;
            errors.hscBoard = "Board name is required";
        }



        if (hscScore === '') {
            isValid = false;
            errors.hscScore = "Please enter a value";
        }

        if (isNaN(hscScore)) {
            isValid = false;
            errors.hscScore = "Please enter a valid number";

        }

        if (hscScore < 0 || hscScore >= 10) {
            isValid = false;
            errors.hscScore = "Please enter a value between 0 and 10";

        }

        //   <---- HSC vadidation end--->

        //   <---- SSC vadidation start--->
        if (!sscInstituteName.trim()) {
            isValid = false;
            errors.sscInstituteName = "Institute name is required";
        }
        if (!sscBoard.trim()) {
            isValid = false;
            errors.sscBoard = "Board name is required";
        }

        if (sscScore === '') {
            isValid = false;
            errors.sscScore = "Please enter a value";
        }

        if (isNaN(sscScore)) {
            isValid = false;
            errors.sscScore = "Please enter a valid number";

        }

        if (sscScore < 0 || sscScore >= 10) {
            isValid = false;
            errors.sscScore = "Please enter a value between 0 and 10";

        }

        if (!currentPursing.trim()) {
            isValid = false;
            errors.currentPursing = "This field is required";
        }
        if (!currentInstituteName.trim()) {
            isValid = false;
            errors.currentInstituteName = "Institute name is required";
        }

        if (overalPercentage === '') {
            isValid = false;
            errors.overalPercentage = "Please enter a value";
        }


        if (isNaN(overalPercentage)) {
            isValid = false;
            errors.overalPercentage = "Please enter a valid number";

        }

        if (overalPercentage < 0 || overalPercentage >= 10) {
            isValid = false;
            errors.overalPercentage = "Please enter a value between 0 and 10";

        }

        if (!currentBacklogs) {
            isValid = false;
            errors.gender = "Gender is required";
        }
        // Do your form submission logic here
        // if (Object.keys(errors).length === 0) {
        //     setIsButtonDisabled(true);
        //   }


        //   <---- Current vadidation end--->

        setFormErrors(errors);

        return isValid;
    }

    let handel = (e) => {

        e.preventDefault()
        if (validateForm()) {
            console.log(fname, lname, dob, mail, ffname, flname, mfname, mlname, gender, ccode, numb, nationlity, street, city, state, ccode, numb);
            console.log(hscInstituteName, hscBoard, hscScore, sscInstituteName, sscBoard, sscScore, currentPursing,
                currentInstituteName, overalPercentage, currentBacklogs);
            setCounter(counter + 1);
        }
    }
    return (
        <div >

            <div class="container h-100 w-auto p-4 ">
                <h1 class="text-center">Education Details</h1>
                <form class="border bg-light p-5 border rounded-3">
                    {/* HSC */}
                    <div class="form-group">
                        <input type="text" class="form-control " id="exampleInputPassword1" placeholder="HSC Institution name" value={hscInstituteName} onChange={e => { setHscInstituteName(e.target.value) }} />
                        {formErrors.hscInstituteName && <p className="error text-danger">{formErrors.hscInstituteName}</p>}
                        <br />
                        <div class="row h-100 ">
                            <div class="col-md-6 text-center">
                                <input type="text" class="form-control " id="exampleInputPassword1" placeholder="HSC Board" value={hscBoard} onChange={e => { setHscBoard(e.target.value) }} />
                                <small id="emailHelp" class="form-text text-muted"> (i.e CBSC, ICSC or State board)</small>
                                {formErrors.hscBoard && <p className="error text-danger">{formErrors.hscBoard}</p>}
                            </div>
                            <div class="col-md-6 text-center">
                                <input type="number" class="form-control " id="exampleInputPassword1" placeholder="Score in HSC in CGPA" value={hscScore} onChange={e => { setHscScore(e.target.value) }} />
                                {formErrors.hscScore && <p className="error text-danger">{formErrors.hscScore}</p>}
                            </div>
                        </div>
                    </div>
                    <br />
                    {/* SSC */}
                    <div class="form-group">
                        {/* <label for="exampleInputPassword1">SSC</label> */}
                        <input type="text" class="form-control " id="exampleInputPassword1" placeholder="SSC Institution name" value={sscInstituteName} onChange={e => { setSscInstituteName(e.target.value) }} />
                        {formErrors.sscInstituteName && <p className="error text-danger">{formErrors.sscInstituteName}</p>}
                        <br />
                        <div class="row h-100 ">
                            <div class="col-md-6 text-center">
                                <input type="text" class="form-control " id="exampleInputPassword1" placeholder="SSC Board" value={sscBoard} onChange={e => { setSscBoard(e.target.value) }} />
                                <small id="emailHelp" class="form-text text-muted"> (i.e CBSC, ICSC or State board)</small>
                                {formErrors.sscBoard && <p className="error text-danger">{formErrors.sscBoard}</p>}
                            </div>
                            <div class="col-md-6 text-center">
                                <input type="number" class="form-control " id="exampleInputPassword1" placeholder="Score in SSC in CGPA" value={sscScore} onChange={e => { setSscScore(e.target.value) }} />
                                {formErrors.sscScore && <p className="error text-danger">{formErrors.sscScore}</p>}
                            </div>
                        </div>
                    </div>
                    <br />
                    {/* Currently pursuing */}
                    <div class="form-group">

                        <input type="text" class="form-control " id="exampleInputPassword1" placeholder="Currently pursuing" value={currentPursing} onChange={e => { setCurrentPursing(e.target.value) }} />
                        {formErrors.currentPursing && <p className="error text-danger">{formErrors.currentPursing}</p>}
                        <br />
                        <input type="text" class="form-control " id="exampleInputPassword1" placeholder="Current educational institution name" value={currentInstituteName} onChange={e => { setCurrentInstituteName(e.target.value) }} />
                        {formErrors.currentInstituteName && <p className="error text-danger">{formErrors.currentInstituteName}</p>}
                        <br />
                        <div class="row h-100 ">
                            <div class="col-md-6 text-center">
                                <input type="number" class="form-control " id="exampleInputPassword1" placeholder="Overall CGPA" value={overalPercentage} onChange={e => { setOveralPercentage(e.target.value) }} />
                                {formErrors.overalPercentage && <p className="error text-danger">{formErrors.overalPercentage}</p>}

                            </div>
                            <div class="col-md-2 text-center">
                                <label for="text">Any Backlog</label>

                            </div>
                            <div class="col-md-2 text-center ">
                                <select onChange={e => { setCurrentBacklogs(e.target.value) }}>
                                    <option value="">--Any Backlog--</option>
                                    <option value="YES">yes</option>
                                    <option value="NO">no</option>
                                </select>
                                {formErrors.currentBacklogs && <p className="error text-danger">{formErrors.currentBacklogs}</p>}
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
                        <div class="col-md-2 m-lg-auto ">
                            {counter > 0 && <Link to={{
                                pathname: '/third', search:
                                    `?fname=${fname}&lname=${lname}&dob=${dob}&mail=${mail}&ffname=${ffname}
                                    &flname=${flname}&mfname=${mfname}&mlname=${mlname}&nationlity=${nationlity}
                                    &street=${street}&city=${city}&state=${state}&ccode=${ccode}&numb=${numb}&gender=${gender}
                      

                                        &hscInstituteName=${hscInstituteName}&hscBoard=${hscBoard}&hscScore=${hscScore}
                                        &sscInstituteName=${sscInstituteName}&sscBoard=${sscBoard}&sscScore=${sscScore}
                                        &currentPursing=${currentPursing}&currentInstituteName=${currentInstituteName}&overalPercentage=${overalPercentage}
                                        &currentBacklogs=${currentBacklogs}
                                      ` }} class="form-control btn btn-primary ">Next</Link>}
                        </div>

                    </div>





                </form>

            </div>
        </div>
    )

}
export default SecondPage