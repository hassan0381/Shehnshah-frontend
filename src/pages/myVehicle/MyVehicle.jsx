import React from 'react'
import Style from "./myVehicle.module.css";
import BackArrow from "../../assets/svg/blackArrow.svg"
import Select from "react-select"
import Button from '../../components/button/Button';
import { Link } from 'react-router-dom';

const options = [
   { value: 'chocolate', label: 'Chocolate' },
   { value: 'strawberry', label: 'Strawberry' },
   { value: 'vanilla', label: 'Vanilla' },
 ];


function RegisterForm() {

   return (
      <>
         <div className={Style.stickyHeading}>
            <Link to="/menu">
               <img src={BackArrow} alt="backArrow" />
            </Link>
            <div className={Style.text}>My Vehicle</div>
         </div>
         <form className={Style.formWrapper}>
         <div className={Style.formDiv}>
               <label htmlFor="emirate">Emirate</label>
               <Select
                  options={options}
                  isSearchable={true}
                  placeholder=""
                  menuColor='black'
               />
            </div>
            <div className={Style.formDiv}>
               <label htmlFor="regNumber">Registration Number</label>
               <input type="number" name="regNumber" id="regNumber" autoComplete="off" />
            </div>
            <div className={Style.formDiv}>
               <label htmlFor="type">Type</label>
               <Select
                  options={options}
                  isSearchable={true}
                  placeholder=""
               />
            </div>
            <div className={Style.formDiv}>
               <label htmlFor="make">Make</label>
               <Select
                  options={options}
                  isSearchable={true}
                  placeholder=""
               />
            </div>
            <div className={Style.formDiv}>
               <label htmlFor="model">Model</label>
               <Select
                  options={options}
                  isSearchable={true}
                  placeholder=""
               />
            </div>
            <div className={Style.formDiv}>
               <label htmlFor="year">Year</label>
               <Select
                  options={options}
                  isSearchable={true}
                  placeholder=""
               />
            </div>
            <div className={Style.formDiv}>
               <label htmlFor="colour">Colour</label>
               <Select
                  options={options}
                  isSearchable={true}
                  placeholder=""
               />
            </div>
            <div className={Style.formDiv}>
               <label htmlFor="vin">VIN</label>
               <input type="text" name="vin" id="vin"  autoComplete="off" />
            </div>
         </form>
         <div className={`text-center mb-3`}>
            <Button label="Update" type="submit" cssClass={Style.btnBlack} />
         </div>

         
      </>
   )
}

export default RegisterForm
