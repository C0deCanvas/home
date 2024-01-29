const navhomeText = document.querySelector(".home-text")
const navaboutText = document.querySelector(".about-text")
const navskillsText = document.querySelector(".skills-text")
const navorderText = document.querySelector(".order-text")
const navcontactText = document.querySelector(".contact-text")

const navhomeDiv = document.querySelector(".home-div")
const navaboutDiv = document.querySelector(".about-div")
const navskillsDiv = document.querySelector(".skills-div")
const navorderDiv = document.querySelector(".order-div")
const navcontactDiv = document.querySelector(".contact-div")

const navhomeIcon = document.querySelector(".fa-house")
const navaboutIcon = document.querySelector(".fa-circle-info")
const navskillsIcon = document.querySelector(".fa-gear")
const navorderIcon = document.querySelector(".fa-cart-shopping")
const navcontactIcon = document.querySelector(".fa-share-nodes")

const headerUL = document.querySelector("header ul")
const menuIcon = document.querySelector(".hamburger-menu")
const backIcon = document.querySelector(".fa-chevron-left")

if(window.innerWidth>800){
    navhomeText.style.opacity="0"
    navaboutText.style.opacity="0"
    navskillsText.style.opacity="0"
    navorderText.style.opacity="0"
    navcontactText.style.opacity="0"
   
    navhomeDiv.addEventListener("mouseover", () => {
        navhomeText.style.opacity="1"
        navhomeDiv.style.color="#ff4455"
    })
    navhomeDiv.addEventListener("mouseout", () => {
        navhomeText.style.opacity="0"
        navhomeDiv.style.color="black"
    })
    navaboutDiv.addEventListener("mouseover", () => {
        navaboutText.style.opacity="1"
        navaboutDiv.style.color="#ff4455"
    })
    navaboutDiv.addEventListener("mouseout", () => {
        navaboutText.style.opacity="0"
        navaboutDiv.style.color="black"
    })
    navskillsDiv.addEventListener("mouseover", () => {
        navskillsText.style.opacity="1"
        navskillsDiv.style.color="#ff4455"
    })
    navskillsDiv.addEventListener("mouseout", () => {
        navskillsText.style.opacity="0"
        navskillsDiv.style.color="black"
    })
    navorderDiv.addEventListener("mouseover", () => {
        navorderText.style.opacity="1"
        navorderDiv.style.color="#ff4455"
    })
    navorderDiv.addEventListener("mouseout", () => {
        navorderText.style.opacity="0"
        navorderDiv.style.color="black"
    })
    navcontactDiv.addEventListener("mouseover", () => {
        navcontactText.style.opacity="1"
        navcontactDiv.style.color="#ff4455"
    })
    navcontactDiv.addEventListener("mouseout", () => {
        navcontactText.style.opacity="0"
        navcontactDiv.style.color="black"
    })
}

if(window.innerWidth<800){
    menuIcon.addEventListener("click", () => {
        headerUL.style.left="0%"
    })
    backIcon.addEventListener("click", () => {
        headerUL.style.left="100%"
    })
    navhomeDiv.addEventListener("click", () => {
        headerUL.style.left="100%"
    })
    navaboutDiv.addEventListener("click", () => {
        headerUL.style.left="100%"
    })
    navskillsDiv.addEventListener("click", () => {
        headerUL.style.left="100%"
    })
    navorderDiv.addEventListener("click", () => {
        headerUL.style.left="100%"
    })
    navcontactDiv.addEventListener("click", () => {
        headerUL.style.left="100%"
    })
}
