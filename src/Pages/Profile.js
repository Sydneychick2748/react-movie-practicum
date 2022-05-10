import React, { useState, useRef } from "react";
import IconLock from "../Assets/IconLock.png";
import cancelx from "../Assets/cancelx.png";
import avatars from "../Assets/avatars.png";
// import { useForm } from "react-hook-form";
import "./Profile.css";
import chelseaPic from "../Assets/chelsea.png";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";

const Profile = (props) => {
  // console.log("profile props", props);
  // const { register, handleSubmit } = useForm();
  // const [movies, setMovies] = useState([]);

  const imageRef = useRef(null);
  const [display, setDisplay] = useState("display");

  const [newTitle, setNewTitle] = useState("");

  const [allTitles, setAllTitles] = useState([]);

  const [formInput, setFormInput] = useState({
    avatar: chelseaPic,
    userName: "Chelsea",
    state: "Wisconsin",
    movie: [
      "Free Willy",
      "Frozen",
      "Titanic",
      "Moonlight",
      "Up",
      "Pulp Fiction",
      "The Negotiator",
    ],
    about:
      "Hi! I’m Chelsea. I’m a movie fanatic from Wisconsin. I enjoy all types of movies, especially ones that have a strong female lead or involve Samuel L Jackson.",
    country: "United States",
  });

  const handleAvatarClick = (e) => {
    e.preventDefault();
    imageRef.current.click();
  };

  const handleAvatarChange = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    console.log(file, "file");
    setFormInput({ ...formInput, avatar: URL.createObjectURL(file) });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const title = e.target.value;
    setNewTitle(title);
    console.log(title, " in handleChange");
  };

  const addTitle = (e) => {
    e.preventDefault();
    if (!newTitle) return;
    console.log(formInput.movie, "is formInput.movie");
    let movieArrayCopy = [...formInput.movie];
    movieArrayCopy.push(newTitle);
    setFormInput({ ...formInput, movie: movieArrayCopy });
    console.log(newTitle, " in addTitle");
    console.log(allTitles, "allTitles");
    setNewTitle("");
  };

  const handleSave = (e) => {
    console.log(allTitles);
    setAllTitles([...allTitles]);
    setDisplay("display");
  };

  const handleDelete = (item, index) => {
    console.log(item, index);
    let allTitlesCopy = [...formInput.movie];
    allTitlesCopy.splice(index, 1);
    console.log(allTitlesCopy);
    setFormInput({ ...formInput, movie: allTitlesCopy });
  };

  const editProfileButton = (e) => {
    console.log(allTitles);
    setAllTitles([...allTitles]);
    setDisplay("edit");
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setFormInput({ ...formInput, [e.target.name]: value });
    console.log(formInput, "formInput");
    formInput.movie = allTitles;
    console.log("formInput.movie", formInput.movie);
    e.target.reset();
  };

  const formResponseChange = (e) => {
    const value = e.target.value;
    const targetName = e.target.name;
    setFormInput({
      ...formInput,
      [targetName]: value,
    });
  };

  // const addMovie = (e) => {
  //   e.preventDefault();
  //   setMovies((movies) => [
  //     ...movies,
  //     <input type="text" placeholder="add new movie" name="movie" />,
  //   ]);
  // };

  return (
    <div className="profile">
      <NavBar hideProfileButton={true} />
      <Header headerText="Profile" />

      {display === "edit" ? (
        <div className="create-profile">
          <h3 className="create-profile-heading">Edit Your Profile</h3>
          <form onSubmit={(e) => handleSubmitForm(e)}>
            <div
              className="textarea-lock"
              style={{
                backgroundColor: "white",
                border: "1px soid black",
                padding: "1em",
                borderRadius: "10px",
              }}
            >
              <span>
                <img src={IconLock} alt="icon-Lock" />
                Your profile is editable after you save and information is not
                used publically.
              </span>
            </div>

            <div className="profile-form">
              {formInput.avatar !== chelseaPic ? (
                <img
                  className="profile-pic"
                  onClick={handleAvatarClick}
                  src={formInput.avatar}
                  alt="piture-profile"
                  style={{
                    height: "3.5em",
                    width: "3.5em",

                    marginTop: "2em",
                  }}
                />
              ) : (
                <div className="edit-avatar-parent">
                  <img
                    className="profile-pic"
                    src={avatars}
                    alt="Personal Avatar"
                    style={{
                      height: "3.5em",
                      width: "3.5em",
                      marginTop: "2em",
                    }}
                  />
                  <input
                    className="avatar-input"
                    ref={imageRef}
                    id="avatar-btn"
                    onChange={handleAvatarChange}
                    type="file"
                    accept="image/*"
                    multiple={false}
                    name="avatar"
                    style={{ position: "absolute", zIndex: 5 }}
                  />
                </div>
              )}

              <p className="add-pic-area">Add your profile picture</p>
            </div>
            <div className="profile-wrapper-forflex">
              <div className="white-box1-form-edit">
                <div className="form-section">
                  <h3>Who are you?</h3>
                </div>
                <div className="display-div">
                  <div className="entry-form-name">
                    <h4>Name</h4>
                    <input
                      type="text"
                      name="userName"
                      value={formInput.userName}
                      onChange={(e) => formResponseChange(e)}
                      required
                    ></input>
                  </div>
                  <h4>Country</h4>
                  <div className="entry-form-name">
                    <select
                      className="countrys"
                      name="country"
                      value={formInput.country}
                      placeholder=""
                      onChange={(e) => formResponseChange(e)}
                    >
                      <option value="">Choose your Country</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Åland Islands">Åland Islands</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="American Samoa">American Samoa</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Antarctica">Antarctica</option>
                      <option value="Antigua and Barbuda">
                        Antigua and Barbuda
                      </option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Aruba">Aruba</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bosnia and Herzegovina">
                        Bosnia and Herzegovina
                      </option>
                      <option value="Botswana">Botswana</option>
                      <option value="Bouvet Island">Bouvet Island</option>
                      <option value="Brazil">Brazil</option>
                      <option value="British Indian Ocean Territory">
                        British Indian Ocean Territory
                      </option>
                      <option value="Brunei Darussalam">
                        Brunei Darussalam
                      </option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">
                        Central African Republic
                      </option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Christmas Island">Christmas Island</option>
                      <option value="Cocos (Keeling) Islands">
                        Cocos (Keeling) Islands
                      </option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Congo, The Democratic Republic of The">
                        Congo, The Democratic Republic of The
                      </option>
                      <option value="Cook Islands">Cook Islands</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Cote D'ivoire">Cote D'ivoire</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">
                        Dominican Republic
                      </option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">
                        Equatorial Guinea
                      </option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Falkland Islands (Malvinas)">
                        Falkland Islands (Malvinas)
                      </option>
                      <option value="Faroe Islands">Faroe Islands</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="French Polynesia">French Polynesia</option>
                      <option value="French Southern Territories">
                        French Southern Territories
                      </option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Gibraltar">Gibraltar</option>
                      <option value="Greece">Greece</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guam">Guam</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guernsey">Guernsey</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-bissau">Guinea-bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Heard Island and Mcdonald Islands">
                        Heard Island and Mcdonald Islands
                      </option>
                      <option value="Holy See (Vatican City State)">
                        Holy See (Vatican City State)
                      </option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran, Islamic Republic of">
                        Iran, Islamic Republic of
                      </option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Isle of Man">Isle of Man</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jersey">Jersey</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Korea, Democratic People's Republic of">
                        Korea, Democratic People's Republic of
                      </option>
                      <option value="Korea, Republic of">
                        Korea, Republic of
                      </option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Lao People's Democratic Republic">
                        Lao People's Democratic Republic
                      </option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libyan Arab Jamahiriya">
                        Libyan Arab Jamahiriya
                      </option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Macao">Macao</option>
                      <option value="Macedonia, The Former Yugoslav Republic of">
                        Macedonia, The Former Yugoslav Republic of
                      </option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia, Federated States of">
                        Micronesia, Federated States of
                      </option>
                      <option value="Moldova, Republic of">
                        Moldova, Republic of
                      </option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Netherlands Antilles">
                        Netherlands Antilles
                      </option>
                      <option value="New Caledonia">New Caledonia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Niue">Niue</option>
                      <option value="Norfolk Island">Norfolk Island</option>
                      <option value="Northern Mariana Islands">
                        Northern Mariana Islands
                      </option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Palestinian Territory, Occupied">
                        Palestinian Territory, Occupied
                      </option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Pitcairn">Pitcairn</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Reunion">Reunion</option>
                      <option value="Romania">Romania</option>
                      <option value="Russian Federation">
                        Russian Federation
                      </option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saint Helena">Saint Helena</option>
                      <option value="Saint Kitts and Nevis">
                        Saint Kitts and Nevis
                      </option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Pierre and Miquelon">
                        Saint Pierre and Miquelon
                      </option>
                      <option value="Saint Vincent and The Grenadines">
                        Saint Vincent and The Grenadines
                      </option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome and Principe">
                        Sao Tome and Principe
                      </option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Georgia and The South Sandwich Islands">
                        South Georgia and The South Sandwich Islands
                      </option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Svalbard and Jan Mayen">
                        Svalbard and Jan Mayen
                      </option>
                      <option value="Swaziland">Swaziland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syrian Arab Republic">
                        Syrian Arab Republic
                      </option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania, United Republic of">
                        Tanzania, United Republic of
                      </option>
                      <option value="Thailand">Thailand</option>
                      <option value="Timor-leste">Timor-leste</option>
                      <option value="Togo">Togo</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad and Tobago">
                        Trinidad and Tobago
                      </option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Turks and Caicos Islands">
                        Turks and Caicos Islands
                      </option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="United States Minor Outlying Islands">
                        United States Minor Outlying Islands
                      </option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Viet Nam">Viet Nam</option>
                      <option value="Virgin Islands, British">
                        Virgin Islands, British
                      </option>
                      <option value="Virgin Islands, U.S.">
                        Virgin Islands, U.S.
                      </option>
                      <option value="Wallis and Futuna">
                        Wallis and Futuna
                      </option>
                      <option value="Western Sahara">Western Sahara</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                  </div>
                  <h4>State/Region</h4>
                  <div classname="entry-form-name">
                    <input
                      className="text-box-state"
                      type="text"
                      name="state"
                      value={formInput.state}
                      onChange={(e) => formResponseChange(e)}
                      required
                    ></input>
                  </div>
                </div>
                <h4 style={{ marginLeft: "1em" }}>About</h4>
                <div className="about-input-div">
                  <textarea
                    className="about-input"
                    name="about"
                    placeholder="Hi! Tell us about yourself!"
                    value={formInput.about}
                    onChange={(e) => formResponseChange(e)}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="white-box2-form-edit">
                <h4>What have you been Watching?</h4>
                <div className="movie-add-section">
                  <p>
                    Movies listed here will be added to the My Movies page and
                    can be removed from your list upon edit.
                  </p>
                </div>
                <div>
                  <main>
                    <h4>Add My Movies</h4>
                    <input
                      className="add-movies-box"
                      name="title"
                      value={newTitle}
                      onChange={handleChange}
                    />
                    <button
                      style={{
                        height: "5vh",
                        backgroundColor: "white",
                        color: "rgba(57, 92, 107, 1)",
                        borderRadius: "30px",
                      }}
                      className="added-profile-button"
                      onClick={addTitle}
                    >
                      Add another
                    </button>
                    <div className="big-div">
                      {formInput.movie.map((item, id) => {
                        console.log(item, id);
                        return (
                          <div className="movie-add-wrapper">
                            <div
                              className="delete-div"
                              key={id}
                              // style={{
                              //   display: "flex",
                              //   display: "inlineBlock",
                              // }}
                            >
                              <div className="add-movie-box">
                                <p
                                  style={{
                                    backgroundColor: "white",
                                    padding: "0.5em",
                                    border: "1px solid black",
                                    borderRadius: "10px",
                                  }}
                                >
                                  {" "}
                                  {item}{" "}
                                </p>
                              </div>
                              <img
                                onClick={(item) => handleDelete(item, id)}
                                src={cancelx}
                                alt="delete-x"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <button
                      className="save-button"
                      type="submit"
                      onClick={handleSave}
                    >
                      Save
                    </button>
                  </main>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="display-state-profile">
          {formInput.avatar.length > 0 ? (
            <img
              className="avatar-display"
              src={formInput.avatar}
              alt="avatar-display"
              style={{ height: "3.5em", width: "4.0em" }}
            />
          ) : (
            <div style={{ height: "3.5em", width: "3.5em" }}></div>
          )}
          <p className="chelsea-name">{formInput.userName}</p>
          <div className="display-div">
            <div className="who-are-you">
              <h3>Who are you?</h3>
              <div className="country-region-div">
                <div>
                  <h5>Country</h5>
                  <p>{formInput.country}</p>
                </div>
                <div>
                  <h5>State/Region</h5>
                  <p>{formInput.state}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="display-div">
            <div className="about">
              <h5>About</h5>
              <p className="chelsea-text-about-input">{formInput.about}</p>
            </div>
          </div>
          <div className="display-div">
            <span>
              {/* {" "} */}
              <h5> My Movies</h5>
            </span>

            {formInput.movie &&
              formInput.movie.map((item, id) => {
                console.log(item, id);

                return (
                  <p className="added-movie" key={id} onClick={handleDelete}>
                    {item}
                  </p>
                );
              })}
          </div>
          <div className="profile-edit-btn-wrapper-div">
            <button
              className="edit-profile-button"
              onClick={editProfileButton}
              style={{ height: "4vh" }}
            >
              Edit your profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Profile;
