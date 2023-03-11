import React from 'react'
import classes from "../Footer/Footer.module.css"
export default function Footer() {
  return (
    <div>
<div className={classes.footer}>
<div className={classes.row}>
<a href="https://www.instagram.com/speak.up.tech/"><i class="fa fa-facebook"></i></a>
<a href="#"><i class="fa fa-instagram"></i></a>
<a href="#"><i class="fa fa-youtube"></i></a>
<a href="#"><i class="fa fa-twitter"></i></a>
</div>

<div className={classes.row}>
<ul>
<li><a href="#">Contact us</a></li>
<li><a href="#">Our Services</a></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms & Conditions</a></li>
</ul>
</div>

<div className={classes.row}>
 Copyright © 2023  - All rights reserved 
</div>
</div>
</div>
  )
}
