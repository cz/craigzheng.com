import React from "react"
import classnames from 'classnames'
import styles from "./logo.module.css"

export default function Logo({back}) {
  const containerClasses = classnames({
    [styles['mark-container']]: true,
    [styles['mark-container--show-arrow']]: back
  })

  return (
    <div className={containerClasses}>
      <svg className={styles['mark-logo']} width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path className={styles['mark-bottom']} d="M30,27 C31.0009766,27 32,27.996582 32,29 L32,32 C32,33.0017756 30.9980025,34 30,34 L6,34 C4.99986683,34 4,32.9960494 4,32 L4,28.0031128 C5.003479,26.8030396 10.9981079,19.7501831 10.9984741,19.7521973 L10.9984741,26.0037842 C10.9984741,26.5045776 11.5043335,27 11.9981079,27 C19.7379649,27 25.7385956,27 30,27 Z"></path>
        <path className={styles['mark-left']} d="M4,28.0010986 L11,19.7516479 L11,10 C11,9.49991122 11.5031072,9 12,9 L4,9 C4,14.556288 4,20.8899875 4,28.0010986 Z"></path>
        <path className={styles['mark-top']} d="M6,2 L30,2 C31,2 32,3 32,4 C32,5 32,7.99731445 32,7.99731445 C32,7.99731445 31.1491394,9 31.1521912,9 C31.1504618,9 22.0997314,9 4,9 L4,4 C4,2.99613814 5.00097656,2 6,2 Z"></path>
        <path className={styles['mark-slash']} d="M32,4 C32,3 31,2 30,2 L26,2 L4,28 L4,32 C4,33 5,34 6,34 L10,34 C32,8.00208629 32,7.99627131 32,8 L32,4 Z"></path>
      </svg>
      <svg className={styles['mark-arrow']} width="36px" height="36px" viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.14866499,27.825898 C4.09115118,27.8943012 4.04134015,27.9536736 4,28.0031128 L4,32 C4,32.9960494 4.99986683,34 6,34 L30,34 C30.9980025,34 32,33.0017756 32,32 L32,29 C32,27.996582 31.0009766,27 30,27 L11.9981079,27 C11.5043335,27 10.9984741,26.5045776 10.9984741,26.0037842 L10.9984741,19.7534462 L11,19.7516479 L11,7.99731445 C11,7.00085449 10,6 9.00195312,6 L6.00134277,6 C5.00219727,6 4,7.00012207 4,7.99731445 L4,28.0010986 L4.14866499,27.825898 L4.14866499,27.825898 Z"></path>
      </svg>
    </div>
  )
}
