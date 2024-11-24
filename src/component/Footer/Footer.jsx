import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
     <footer class="footer">
        <div class="footer_wrapper">
            <h1 class="footer_title">StuDent ChaT</h1>
            <div class="footer_contact">
                <div class="social-login-icons">
                    <div class="socialcontainer">
                      <div class="icon social-icon-1-1">
                        <svg
                          viewBox="0 0 512 512"
                          height="1.7em"
                          xmlns="http://www.w3.org/2000/svg"
                          class="svgIcontwit"
                          fill="white"
                        >
                          <path
                            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                          ></path>
                        </svg>
                      </div>
                      <div class="social-icon-1">
                        <svg
                          viewBox="0 0 512 512"
                          height="1.7em"
                          xmlns="http://www.w3.org/2000/svg"
                          class="svgIcontwit"
                          fill="white"
                        >
                          <path
                            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="socialcontainer">
                      <div class="icon social-icon-2-2">
                        <svg
                          fill="white"
                          class="svgIcon"
                          viewBox="0 0 448 512"
                          height="1.5em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                          ></path>
                        </svg>
                      </div>
                      <a href="https://www.instagram.com/sdct?igsh=ZDU4cmFkNTNibjRh">
                        <div class="social-icon-2">
                          <svg
                            fill="white"
                            class="svgIcon"
                            viewBox="0 0 448 512"
                            height="1.5em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                            ></path>
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div class="socialcontainer">
                      <div class="icon social-icon-3-3">
                        <svg
                          viewBox="0 0 384 512"
                          fill="white"
                          height="1.6em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                          ></path>
                        </svg>
                      </div>

                      <div class="social-icon-3">
                        <svg
                          viewBox="0 0 384 512"
                          fill="white"
                          height="1.6em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div class="socialcontainer">
                      <div class="icon social-icon-4-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                          <path fill="none" d="M0 0h48v48H0z"/>
                          <path fill="rgba(0, 0, 0, 0.7)" d="M24 4C12.96 4 4 12.96 4 24s8.96 20 20 20 20-8.96 20-20S35.04 4 24 4zm9.66 10.21c.31.15.5.5.4.83l-3.24 15.41c-.08.37-.36.65-.72.74-.36.09-.73 0-1-.25l-4.45-3.38-2.14 2.07c-.17.17-.4.26-.64.26h-.16c-.26-.05-.49-.2-.61-.44l-3.02-5.85-5.92-2.26c-.33-.12-.54-.45-.54-.8 0-.36.23-.68.58-.8l19.01-6.68c.31-.11.66-.07.95.08z"/>
                        </svg>                        
                      </div>
                      <a href="https://t.me/StudentChat_offical">
                        <div class="social-icon-4">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                            <path fill="none" d="M0 0h48v48H0z"/>
                            <path fill="#FFFFFF" d="M24 4C12.96 4 4 12.96 4 24s8.96 20 20 20 20-8.96 20-20S35.04 4 24 4zm9.66 10.21c.31.15.5.5.4.83l-3.24 15.41c-.08.37-.36.65-.72.74-.36.09-.73 0-1-.25l-4.45-3.38-2.14 2.07c-.17.17-.4.26-.64.26h-.16c-.26-.05-.49-.2-.61-.44l-3.02-5.85-5.92-2.26c-.33-.12-.54-.45-.54-.8 0-.36.23-.68.58-.8l19.01-6.68c.31-.11.66-.07.95.08z"/>
                          </svg>               
                        </div>
                    </a>
                    </div>
                    <div class="socialcontainer">
                      <div class="icon social-icon-5-5">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M22 6L12 13L2 6" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                 
                      </div>
                      <a href="mailto:StuDentChaT@gmail.com">
                        <div class="social-icon-5">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M22 6L12 13L2 6" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>         
                        </div>
                    </a>
                    </div>
                  </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
