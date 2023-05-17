import React, { useState } from 'react'

export default function About() {
    const [mystyle, setMystyle] = useState({
        color: 'black',
        backgroundColor: 'white',
    })

    const [btnText, setbtnText] = useState("Dark mode")

    const toggleStyle = () => {
        if (mystyle.color === 'black') {
            setMystyle({
                color: 'white',
                backgroundColor: 'black',
            })
            setbtnText("Light mode");
        }
        else {
            setMystyle({
                color: 'black',
                backgroundColor: 'white',
            })
            setbtnText("Dark mode");
        }
    }
    return (
        <>
            {/* <button type="button" onClick={toggleStyle} className="btn btn-danger my-3">{btnText}</button> */}
            <div class="form-check form-switch float-end">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={toggleStyle} />
                <label class="form-check-label" for="flexSwitchCheckDefault">{btnText}</label>
            </div>
            <div className="container">
                <h1>About Us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>



        </>
    )
}
