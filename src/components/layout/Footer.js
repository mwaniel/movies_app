import React from 'react'
import FeedBack from '../home/FeedBack';

const Footer = () => {
  return (
    <div>
        <div class="row">
            <div class="col-md-12">
            <div class="footer p-3 mt-4 text-center bg-dark text-light">
                Developed By:
                <span class="text-warning font-weight-normal">
                    Daniel  Mwaniki
                </span>
                ,Using <i class="fab fa-react"/> React JS &amp; Redux JS and OMDB Api, 
              
            </div>
            <div><FeedBack/></div>
            </div>
        </div>
    </div>
  )
}

export default Footer