import React from "react"
import styles from "./logo.module.css"

export default () =>
  <svg className={styles['logo-mark']} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path className={styles['mark-bottom']} d="M28,25 C29.1045695,25 30,25.8954305 30,27 L30,30 C30,31.1045695 29.1045695,32 28,32 L4,32 C2.8954305,32 2,31.1045695 2,30 L2,25 C2.66666667,25 11.3333333,25 28,25 Z"></path>
    <path className={styles['mark-left']} d="M2,25 C2.66666667,25 5.33333333,25 10,25 C9.44771525,25 9,24.5522847 9,24 L9,8 C9,7.44771525 9.44771525,7 10,7 C6,7 3.33333333,7 2,7 C2,8.33333333 2,14.3333333 2,25 Z"></path>
    <path className={styles['mark-top']} d="M4,0 L28,0 C29,0 30,1 30,2 C30,3 30,4 30,5 C30,6 29,7 28,7 C27.3333333,7 18.6666667,7 2,7 L2,2 C2,0.8954305 2.8954305,-1.91384796e-17 4,0 Z"></path>
    <path className={styles['mark-slash']} d="M30,2 C30,1 29,0 28,0 C27.3333333,0 26,0 24,0 L2,26 C2,28 2,29.3333333 2,30 C2,31 3,32 4,32 C4.66666667,32 6,32 8,32 C22,16 29.3333333,7.33333333 30,6 C30,5 30,3 30,2 Z"></path>
  </svg>
