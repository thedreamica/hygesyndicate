interface CircleProps {
  className: string;
}

const CircleLeft: React.FC<CircleProps> = ({ className }) => {
  return (
    <svg
      width="432"
      height="498"
      viewBox="0 0 432 498"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M431.99 221.619L429.99 221.6C429.997 220.94 430 220.281 430 219.622C430 218.95 429.997 218.278 429.99 217.608L431.99 217.588C431.997 218.265 432 218.943 432 219.622C432 220.288 431.997 220.954 431.99 221.619ZM431.908 213.542L429.909 213.603C429.869 212.274 429.815 210.95 429.748 209.631L431.746 209.53C431.813 210.862 431.867 212.199 431.908 213.542ZM431.501 205.52L429.506 205.663C429.411 204.326 429.302 202.995 429.179 201.67L431.171 201.486C431.294 202.825 431.405 204.17 431.501 205.52ZM430.758 197.487C430.607 196.153 430.441 194.825 430.262 193.504L428.28 193.772C428.457 195.08 428.621 196.393 428.771 197.713L430.758 197.487ZM429.677 189.5C429.468 188.171 429.245 186.849 429.009 185.532L427.04 185.886C427.274 187.188 427.494 188.496 427.701 189.811L429.677 189.5ZM428.257 181.589L426.296 181.985C426.032 180.674 425.753 179.371 425.462 178.073L427.413 177.634C427.708 178.946 427.989 180.264 428.257 181.589ZM426.487 173.718L424.546 174.199C424.226 172.911 423.893 171.629 423.547 170.353L425.477 169.829C425.827 171.119 426.164 172.415 426.487 173.718ZM424.375 165.942L422.457 166.509C422.081 165.234 421.691 163.966 421.288 162.704L423.193 162.095C423.6 163.371 423.995 164.653 424.375 165.942ZM421.927 158.278L420.035 158.929C419.602 157.669 419.155 156.415 418.695 155.169L420.571 154.476C421.036 155.737 421.488 157.004 421.927 158.278ZM419.137 150.716L417.276 151.449C416.789 150.213 416.289 148.984 415.776 147.762L417.62 146.988C418.139 148.224 418.644 149.466 419.137 150.716ZM416.019 143.287L414.192 144.101C413.651 142.887 413.097 141.681 412.531 140.481L414.34 139.628C414.912 140.84 415.472 142.06 416.019 143.287ZM412.581 136.005L410.792 136.898C410.198 135.708 409.592 134.525 408.974 133.349L410.744 132.418C411.369 133.607 411.982 134.802 412.581 136.005ZM408.831 128.874L407.081 129.843C406.438 128.681 405.782 127.525 405.115 126.377L406.844 125.372C407.518 126.532 408.181 127.7 408.831 128.874ZM404.782 121.911L403.074 122.952C402.382 121.818 401.678 120.69 400.963 119.57L402.648 118.493C403.371 119.625 404.083 120.764 404.782 121.911ZM400.445 115.122L398.782 116.233C398.044 115.129 397.294 114.031 396.533 112.941L398.173 111.796C398.942 112.898 399.699 114.006 400.445 115.122ZM395.833 108.515L394.216 109.693C393.434 108.619 392.641 107.553 391.837 106.494L393.43 105.285C394.242 106.354 395.043 107.431 395.833 108.515ZM390.963 102.101C390.13 101.048 389.285 100.001 388.431 98.9627L386.886 100.233C387.733 101.262 388.569 102.298 389.394 103.342L390.963 102.101ZM385.844 95.8803L384.325 97.1804C383.461 96.1707 382.587 95.1682 381.702 94.1731L383.197 92.8445C384.09 93.849 384.972 94.8609 385.844 95.8803ZM380.489 89.8537L379.019 91.2099C378.119 90.2347 377.209 89.2669 376.29 88.3063L377.734 86.9233C378.662 87.8927 379.58 88.8694 380.489 89.8537ZM374.923 84.0387C373.976 83.0847 373.019 82.1383 372.053 81.1993L370.659 82.6334C371.617 83.5641 372.565 84.5021 373.503 85.4476L374.923 84.0387ZM369.147 78.4229L367.778 79.8812C366.808 78.9712 365.83 78.0685 364.842 77.1731L366.185 75.6914C367.181 76.5944 368.169 77.5049 369.147 78.4229ZM363.171 73.0061C362.165 72.1244 361.149 71.2502 360.126 70.3835L358.833 71.91C359.849 72.7695 360.855 73.6364 361.854 74.5106L363.171 73.0061ZM357.029 67.8057L355.762 69.3533C354.73 68.5091 353.691 67.6723 352.643 66.8428L353.884 65.2746C354.94 66.1108 355.989 66.9545 357.029 67.8057ZM350.713 62.8056L349.497 64.3936C348.44 63.5845 347.376 62.7827 346.303 61.9883L347.494 60.3813C348.575 61.182 349.648 61.9901 350.713 62.8056ZM344.231 58.0036L343.066 59.6291C341.987 58.8556 340.901 58.0893 339.807 57.3304L340.947 55.6873C342.049 56.452 343.144 57.2241 344.231 58.0036ZM337.619 53.4153L336.504 55.0756C335.397 54.3319 334.282 53.5954 333.161 52.8663L334.251 51.1895C335.381 51.924 336.504 52.666 337.619 53.4153ZM330.865 49.0242L329.8 50.7169C328.673 50.0077 327.539 49.3058 326.399 48.6112L327.44 46.9031C328.588 47.6027 329.73 48.3098 330.865 49.0242ZM323.976 44.8271C322.823 44.1477 321.664 43.4756 320.5 42.8109L319.508 44.548C320.665 45.2081 321.816 45.8754 322.96 46.55L323.976 44.8271ZM316.987 40.8388L316.02 42.5895C314.851 41.944 313.676 41.3058 312.495 40.6748L313.438 38.9108C314.627 39.5461 315.81 40.1887 316.987 40.8388ZM309.88 37.0412L308.962 38.8179C307.779 38.2063 306.59 37.6019 305.395 37.0048L306.29 35.2159C307.492 35.817 308.689 36.4255 309.88 37.0412ZM302.666 33.4346L301.796 35.2353C300.599 34.6565 299.396 34.0849 298.188 33.5206L299.035 31.7086C300.25 32.2766 301.461 32.852 302.666 33.4346ZM295.375 30.0278L294.552 31.8507C293.335 31.3013 292.113 30.7592 290.886 30.2243L291.686 28.391C292.92 28.9293 294.15 29.4749 295.375 30.0278ZM287.987 26.8065L287.211 28.6499C285.984 28.1331 284.751 27.6236 283.514 27.1213L284.267 25.2682C285.511 25.7737 286.752 26.2865 287.987 26.8065ZM280.519 23.7737L279.79 25.636C278.549 25.1502 277.304 24.6715 276.055 24.2001L276.761 22.3289C278.018 22.8032 279.271 23.2848 280.519 23.7737ZM272.986 20.931L272.303 22.8108C271.049 22.3549 269.79 21.9062 268.527 21.4648L269.188 19.5768C270.458 20.0209 271.724 20.4723 272.986 20.931ZM265.376 18.2701L264.739 20.1658C263.476 19.7414 262.21 19.3241 260.94 18.9141L261.554 17.0108C262.832 17.4233 264.106 17.8431 265.376 18.2701ZM257.71 15.7951L257.119 17.7056C255.843 17.3106 254.565 16.9229 253.283 16.5424L253.852 14.6251C255.142 15.0078 256.428 15.3978 257.71 15.7951ZM249.988 13.5028L249.442 15.4267C248.158 15.062 246.871 14.7045 245.581 14.3543L246.105 12.4242C247.403 12.7764 248.697 13.136 249.988 13.5028ZM242.207 11.3898L241.705 13.3259C240.415 12.9917 239.122 12.6647 237.827 12.345L238.306 10.4033C239.609 10.7249 240.909 11.0537 242.207 11.3898ZM234.389 9.46036L233.932 11.4075C232.632 11.1022 231.328 10.8042 230.022 10.5135L230.457 8.56127C231.77 8.85365 233.081 9.15335 234.389 9.46036ZM226.524 7.70909L226.111 9.66612C224.806 9.391 223.498 9.12314 222.188 8.86256L222.578 6.90098C223.896 7.16304 225.211 7.43242 226.524 7.70909ZM218.619 6.1368L218.251 8.10267C216.94 7.8572 215.626 7.61901 214.311 7.38811L214.657 5.41823C215.979 5.65042 217.3 5.88996 218.619 6.1368ZM210.686 4.7443L210.363 6.71794C209.045 6.50185 207.725 6.29307 206.404 6.09161L206.705 4.11446C208.034 4.31704 209.361 4.527 210.686 4.7443ZM202.719 3.5295L202.439 5.5099C201.118 5.32357 199.795 5.14456 198.471 4.97289L198.728 2.98948C200.06 3.16211 201.39 3.34213 202.719 3.5295ZM194.729 2.49378L194.495 4.47993C193.168 4.32303 191.841 4.1735 190.512 4.03135L190.725 2.04269C192.061 2.18564 193.396 2.33601 194.729 2.49378ZM186.718 1.63668L186.528 3.62758C185.199 3.50038 183.868 3.38056 182.537 3.26816L182.706 1.27525C184.044 1.38828 185.382 1.50876 186.718 1.63668ZM178.688 0.958539L178.542 2.9532C177.211 2.85575 175.879 2.76572 174.546 2.68313L174.67 0.686961C176.01 0.770009 177.349 0.860543 178.688 0.958539ZM170.648 0.4603L170.546 2.45773C169.212 2.39006 167.878 2.32985 166.543 2.27714L166.622 0.2787C167.965 0.331707 169.306 0.392249 170.648 0.4603ZM162.596 0.142334L162.54 2.14154C161.205 2.10384 159.87 2.07366 158.535 2.05101L158.569 0.051293C159.911 0.0740724 161.254 0.104427 162.596 0.142334ZM154.54 0.0057048L154.529 2.00567C153.861 2.00189 153.194 2 152.526 2C151.857 2 151.189 2.00258 150.522 2.00774L150.506 0.00779777C151.179 0.00260247 151.852 0 152.526 0C153.198 0 153.869 0.00190259 154.54 0.0057048ZM146.478 0.070006L146.525 2.06947C145.195 2.10029 143.868 2.14132 142.543 2.19249L142.466 0.193979C143.801 0.142412 145.138 0.101062 146.478 0.070006ZM138.458 0.379873L138.566 2.37695C137.233 2.44914 135.902 2.53162 134.574 2.62429L134.435 0.629146C135.773 0.535749 137.114 0.452631 138.458 0.379873ZM130.429 0.940099L130.6 2.93283C129.277 3.0459 127.957 3.1691 126.64 3.30235L126.439 1.31251C127.766 1.17822 129.096 1.05405 130.429 0.940099ZM122.431 1.74993L122.664 3.73636C121.341 3.89121 120.022 4.05621 118.706 4.23129L118.442 2.24876C119.769 2.0723 121.098 1.906 122.431 1.74993ZM114.473 2.80852L114.768 4.78667C113.448 4.98334 112.132 5.19016 110.819 5.40704L110.493 3.43379C111.816 3.21519 113.143 3.00674 114.473 2.80852ZM106.53 4.12057L106.887 6.08843C105.58 6.32559 104.277 6.57274 102.977 6.82982L102.589 4.86783C103.899 4.60872 105.213 4.3596 106.53 4.12057ZM98.6472 5.67997L99.0663 7.63557C97.764 7.91465 96.4654 8.20372 95.1707 8.50269L94.7207 6.55397C96.0257 6.25263 97.3346 5.96127 98.6472 5.67997ZM90.8175 7.48785L91.2983 9.42921C90.0057 9.74929 88.7172 10.0793 87.4327 10.4191L86.9212 8.48559C88.2159 8.14309 89.5147 7.81048 90.8175 7.48785ZM83.0401 9.54537L83.5822 11.4705C82.3028 11.8308 81.0277 12.2008 79.7568 12.5806L79.1842 10.6643C80.4652 10.2815 81.7505 9.90851 83.0401 9.54537ZM75.3416 11.8458L75.9445 13.7527C74.6746 14.1542 73.4092 14.5654 72.1482 14.9863L71.515 13.0892C72.786 12.665 74.0616 12.2505 75.3416 11.8458ZM67.7157 14.3909L68.3789 16.2777C67.1239 16.7188 65.8736 17.1695 64.6279 17.6297L63.9348 15.7537C65.1904 15.2898 66.4507 14.8355 67.7157 14.3909ZM60.1718 17.178L60.8947 19.0428C59.6551 19.5234 58.4203 20.0133 57.1904 20.5127L56.438 18.6596C57.6777 18.1563 58.9223 17.6624 60.1718 17.178ZM52.727 20.2009L53.5087 22.0417C52.2832 22.5622 51.0626 23.092 49.8472 23.6311L49.0363 21.8029C50.2614 21.2595 51.4917 20.7255 52.727 20.2009ZM45.3768 23.461L46.2166 25.2761C45.0099 25.8345 43.8084 26.4021 42.6123 26.9788L41.7437 25.1772C42.9494 24.5959 44.1604 24.0238 45.3768 23.461ZM38.1338 26.9532L39.0309 28.7407C37.8425 29.3371 36.6597 29.9426 35.4823 30.5571L34.557 28.784C35.7437 28.1647 36.936 27.5544 38.1338 26.9532ZM31.0098 30.6713L31.9633 32.4295C30.7932 33.064 29.6288 33.7075 28.4702 34.3598L27.4889 32.6171C28.6568 31.9595 29.8304 31.3109 31.0098 30.6713ZM24.003 34.6164L25.0118 36.3433C23.8639 37.0139 22.7218 37.6932 21.5858 38.3812L20.5497 36.6705C21.6948 35.977 22.8459 35.2922 24.003 34.6164ZM17.1258 38.7814L18.1889 40.4755C17.0626 41.1822 15.9425 41.8976 14.8286 42.6215L13.7388 40.9446C14.8615 40.2149 15.9906 39.4938 17.1258 38.7814ZM10.387 43.1608L11.5033 44.8203C10.3993 45.563 9.30154 46.3141 8.21024 47.0737L7.06773 45.4321C8.1677 44.6665 9.27416 43.9094 10.387 43.1608ZM3.78734 47.7541L4.95576 49.3773C3.87685 50.154 2.80447 50.9389 1.73872 51.732L0.544685 50.1276C1.61892 49.3281 2.69984 48.5369 3.78734 47.7541ZM-2.66238 52.5541L-1.44302 54.1393C-2.49689 54.9499 -3.54401 55.7687 -4.58429 56.5954L-5.82866 55.0297C-4.7801 54.1964 -3.72464 53.3711 -2.66238 52.5541ZM-8.95484 57.555L-7.68576 59.1008C-8.71381 59.9448 -9.73489 60.7968 -10.7489 61.6566L-12.0424 60.1312C-11.0203 59.2645 -9.99107 58.4057 -8.95484 57.555ZM-15.0873 62.755L-13.7697 64.2596C-14.7698 65.1354 -15.7628 66.0189 -16.7485 66.9101L-18.0898 65.4265C-17.0962 64.5282 -16.0953 63.6377 -15.0873 62.755ZM-21.0507 68.1467L-19.6859 69.6087C-20.6578 70.5159 -21.6222 71.4307 -22.5792 72.3529L-23.9671 70.9128C-23.0024 69.9832 -22.0303 69.0611 -21.0507 68.1467ZM-26.8389 73.7248L-25.4283 75.1426C-26.3708 76.0804 -27.3059 77.0256 -28.2332 77.9781L-29.6662 76.5829C-28.7315 75.6228 -27.789 74.6701 -26.8389 73.7248ZM-32.4472 79.4854C-33.3665 80.4602 -34.278 81.4423 -35.1815 82.4316L-33.7047 83.7803C-32.8083 82.7989 -31.9041 81.8246 -30.9922 80.8575L-32.4472 79.4854ZM-37.8686 85.4215C-38.7563 86.4252 -39.636 87.436 -40.5075 88.4538L-38.9883 89.7547C-38.1237 88.745 -37.2511 87.7422 -36.3704 86.7464L-37.8686 85.4215ZM-43.0975 91.5279L-41.5577 92.8043C-42.4059 93.8276 -43.246 94.8577 -44.0778 95.8945L-45.6378 94.643C-44.7993 93.5978 -43.9525 92.5594 -43.0975 91.5279ZM-48.1282 97.7987L-46.5482 99.0251C-47.3633 100.075 -48.1699 101.132 -48.9681 102.195L-50.5675 100.994C-49.7629 99.9223 -48.9497 98.8572 -48.1282 97.7987ZM-52.9546 104.227L-51.3361 105.402C-52.117 106.478 -52.8893 107.56 -53.6529 108.648L-55.2901 107.5C-54.5203 106.402 -53.7418 105.312 -52.9546 104.227ZM-57.5726 110.809L-55.9171 111.931C-56.6625 113.031 -57.3992 114.137 -58.1271 115.249L-59.8005 114.153C-59.0667 113.032 -58.324 111.918 -57.5726 110.809ZM-61.9751 117.535L-60.2842 118.603C-60.994 119.727 -61.6949 120.856 -62.3867 121.992L-64.0947 120.951C-63.3972 119.807 -62.6906 118.668 -61.9751 117.535ZM-66.1575 124.399C-66.836 125.555 -67.5053 126.716 -68.1654 127.883L-66.4246 128.868C-65.7699 127.71 -65.1059 126.558 -64.4329 125.412L-66.1575 124.399ZM-70.1166 131.398L-68.36 132.355C-68.9949 133.521 -69.6206 134.693 -70.2369 135.87L-72.0088 134.942C-71.3874 133.755 -70.7566 132.574 -70.1166 131.398ZM-73.8446 138.52L-72.0579 139.418C-72.6549 140.606 -73.2426 141.798 -73.8208 142.996L-75.622 142.127C-75.039 140.919 -74.4466 139.717 -73.8446 138.52ZM-77.3384 145.758L-75.5233 146.598C-76.0813 147.804 -76.6297 149.015 -77.1685 150.231L-78.9971 149.421C-78.4539 148.195 -77.901 146.974 -77.3384 145.758ZM-80.5958 153.112L-78.7542 153.892C-79.2717 155.113 -79.7795 156.34 -80.2776 157.572L-82.1318 156.822C-81.6296 155.58 -81.1176 154.343 -80.5958 153.112ZM-83.6086 160.562L-81.7424 161.282C-82.2204 162.522 -82.6885 163.766 -83.1466 165.016L-85.0244 164.327C-84.5624 163.068 -84.0905 161.813 -83.6086 160.562ZM-86.3756 168.108L-84.4868 168.766C-84.9236 170.02 -85.3505 171.279 -85.7673 172.543L-87.6666 171.917C-87.2464 170.643 -86.816 169.373 -86.3756 168.108ZM-88.8955 175.748L-86.9861 176.343C-87.3807 177.609 -87.7652 178.879 -88.1396 180.153L-90.0585 179.589C-89.681 178.305 -89.2933 177.024 -88.8955 175.748ZM-91.1601 183.457L-89.2322 183.989C-89.5859 185.27 -89.9294 186.556 -90.2626 187.846L-92.199 187.346C-91.863 186.045 -91.5167 184.749 -91.1601 183.457ZM-93.1706 191.238L-91.2263 191.707C-91.5372 192.998 -91.8379 194.293 -92.1283 195.591L-94.0801 195.155C-93.7874 193.846 -93.4842 192.54 -93.1706 191.238ZM-94.9264 199.093L-92.9677 199.497C-93.2353 200.794 -93.4926 202.094 -93.7395 203.399L-95.7046 203.027C-95.4557 201.712 -95.1962 200.4 -94.9264 199.093ZM-96.4199 206.983C-96.6477 208.305 -96.865 209.63 -97.0717 210.96L-95.0954 211.267C-94.8905 209.949 -94.6749 208.634 -94.4489 207.322L-96.4199 206.983ZM-97.6551 214.926C-97.839 216.251 -98.0124 217.579 -98.175 218.911L-96.1898 219.153C-96.0284 217.832 -95.8565 216.515 -95.6741 215.201L-97.6551 214.926ZM-98.6309 222.915L-96.642 223.125C-96.781 224.442 -96.9095 225.761 -97.0275 227.084L-99.0196 226.906C-98.9006 225.573 -98.7711 224.242 -98.6309 222.915ZM-99.3438 230.91L-97.3491 231.055C-97.4457 232.382 -97.5316 233.712 -97.6069 235.044L-99.6037 234.931C-99.5278 233.588 -99.4412 232.248 -99.3438 230.91ZM-99.7977 238.94L-97.7993 239.021C-97.8526 240.345 -97.8954 241.672 -97.9276 243.001L-99.927 242.952C-99.8946 241.612 -99.8515 240.275 -99.7977 238.94ZM-99.9919 246.98L-97.9919 246.996C-97.9973 247.664 -98 248.331 -98 249C-98 249.668 -97.9973 250.336 -97.9919 251.003L-99.9919 251.02C-99.9973 250.347 -100 249.674 -100 249C-100 248.326 -99.9973 247.653 -99.9919 246.98ZM-99.927 255.047L-97.9276 254.999C-97.8954 256.328 -97.8527 257.655 -97.7993 258.979L-99.7977 259.059C-99.8515 257.725 -99.8946 256.387 -99.927 255.047ZM-99.6037 263.068L-97.6069 262.956C-97.5316 264.288 -97.4457 265.618 -97.3491 266.944L-99.3438 267.09C-99.4412 265.752 -99.5278 264.412 -99.6037 263.068ZM-99.0196 271.093L-97.0275 270.916C-96.9095 272.238 -96.781 273.558 -96.642 274.875L-98.631 275.085C-98.7711 273.757 -98.9007 272.427 -99.0196 271.093ZM-98.175 279.089L-96.1898 278.847C-96.0285 280.167 -95.8565 281.485 -95.6742 282.799L-97.6552 283.074C-97.8391 281.749 -98.0124 280.421 -98.175 279.089ZM-97.0717 287.04L-95.0955 286.733C-94.8905 288.051 -94.675 289.366 -94.4489 290.678L-96.4199 291.017C-96.6478 289.695 -96.8651 288.369 -97.0717 287.04ZM-95.7046 294.973L-93.7395 294.601C-93.4926 295.905 -93.2353 297.206 -92.9677 298.503L-94.9265 298.907C-95.1963 297.6 -95.4557 296.288 -95.7046 294.973ZM-94.0801 302.845L-92.1283 302.409C-91.838 303.707 -91.5373 305.002 -91.2263 306.293L-93.1707 306.762C-93.4842 305.46 -93.7874 304.154 -94.0801 302.845ZM-92.199 310.654L-90.2626 310.154C-89.9294 311.444 -89.5859 312.73 -89.2322 314.011L-91.1601 314.543C-91.5167 313.251 -91.8631 311.955 -92.199 310.654ZM-90.0585 318.411L-88.1396 317.847C-87.7652 319.121 -87.3807 320.391 -86.9861 321.657L-88.8955 322.252C-89.2933 320.976 -89.681 319.695 -90.0585 318.411ZM-87.6666 326.083L-85.7673 325.457C-85.3505 326.721 -84.9236 327.98 -84.4868 329.234L-86.3756 329.892C-86.816 328.627 -87.2464 327.357 -87.6666 326.083ZM-85.0244 333.673L-83.1466 332.984C-82.6885 334.234 -82.2204 335.478 -81.7424 336.718L-83.6086 337.438C-84.0905 336.187 -84.5624 334.932 -85.0244 333.673ZM-82.1317 341.178L-80.2776 340.428C-79.7795 341.66 -79.2717 342.887 -78.7541 344.109L-80.5958 344.889C-81.1175 343.657 -81.6296 342.42 -82.1317 341.178ZM-78.997 348.579L-77.1684 347.769C-76.6297 348.985 -76.0812 350.196 -75.5232 351.402L-77.3384 352.242C-77.9009 351.026 -78.4538 349.805 -78.997 348.579ZM-75.6219 355.873L-73.8207 355.004C-73.2425 356.202 -72.6549 357.395 -72.0578 358.582L-73.8446 359.48C-74.4465 358.283 -75.039 357.081 -75.6219 355.873ZM-72.0087 363.058L-70.2368 362.13C-69.6205 363.307 -68.9948 364.479 -68.3599 365.645L-70.1165 366.602C-70.7566 365.426 -71.3873 364.245 -72.0087 363.058ZM-68.1654 370.117L-66.4246 369.133C-65.7698 370.29 -65.1059 371.442 -64.4328 372.588L-66.1574 373.601C-66.8359 372.445 -67.5053 371.284 -68.1654 370.117ZM-64.0946 377.049L-62.3867 376.008C-61.6948 377.144 -60.9939 378.273 -60.2841 379.397L-61.975 380.465C-62.6905 379.332 -63.3971 378.194 -64.0946 377.049ZM-59.8004 383.847L-58.127 382.751C-57.3991 383.863 -56.6624 384.969 -55.917 386.069L-57.5725 387.191C-58.3239 386.083 -59.0666 384.968 -59.8004 383.847ZM-55.29 390.501L-53.6528 389.352C-52.8892 390.44 -52.1169 391.522 -51.336 392.598L-52.9545 393.773C-53.7417 392.689 -54.5202 391.598 -55.29 390.501ZM-50.5674 397.006C-49.7628 398.078 -48.9496 399.143 -48.128 400.201L-46.5481 398.975C-47.3631 397.925 -48.1698 396.868 -48.968 395.805L-50.5674 397.006ZM-45.6377 403.357C-44.7992 404.402 -43.9524 405.441 -43.0974 406.472L-41.5576 405.196C-42.4058 404.173 -43.2459 403.142 -44.0777 402.106L-45.6377 403.357ZM-40.5074 409.546L-38.9882 408.245C-38.1236 409.255 -37.2509 410.258 -36.3703 411.254L-37.8685 412.579C-38.7562 411.575 -39.6358 410.564 -40.5074 409.546ZM-35.1813 415.569L-33.7045 414.22C-32.8082 415.201 -31.904 416.176 -30.992 417.143L-32.4471 418.515C-33.3664 417.54 -34.2778 416.558 -35.1813 415.569ZM-29.6661 421.417L-28.2331 420.022C-27.3057 420.975 -26.3707 421.92 -25.4281 422.858L-26.8387 424.275C-27.7888 423.33 -28.7313 422.377 -29.6661 421.417ZM-23.9669 427.087L-22.5791 425.647C-21.6221 426.569 -20.6576 427.484 -19.6858 428.391L-21.0506 429.853C-22.0301 428.939 -23.0023 428.017 -23.9669 427.087ZM-18.0896 432.574L-16.7483 431.09C-15.7626 431.981 -14.7697 432.865 -13.7696 433.74L-15.0871 435.245C-16.0952 434.362 -17.0961 433.472 -18.0896 432.574ZM-12.0423 437.869L-10.7488 436.344C-9.73476 437.203 -8.71368 438.055 -7.68563 438.899L-8.95471 440.445C-9.99094 439.594 -11.0202 438.736 -12.0423 437.869ZM-5.82852 442.97L-4.58414 441.405C-3.54387 442.231 -2.49675 443.05 -1.44289 443.861L-2.66225 445.446C-3.7245 444.629 -4.77996 443.804 -5.82852 442.97ZM0.54483 447.873L1.73887 446.268C2.80461 447.061 3.87699 447.846 4.95591 448.623L3.78748 450.246C2.69998 449.463 1.61906 448.672 0.54483 447.873ZM7.06789 452.568C8.16786 453.334 9.27431 454.091 10.3872 454.839L11.5035 453.18C10.3994 452.437 9.30169 451.686 8.2104 450.926L7.06789 452.568ZM13.7389 457.056L14.8287 455.379C15.9426 456.102 17.0628 456.818 18.189 457.525L17.1259 459.219C15.9907 458.506 14.8617 457.785 13.7389 457.056ZM20.5499 461.33L21.5859 459.619C22.722 460.307 23.864 460.986 25.0119 461.657L24.0032 463.384C22.8461 462.708 21.695 462.023 20.5499 461.33ZM27.4891 465.383L28.4703 463.64C29.6289 464.293 30.7933 464.936 31.9634 465.571L31.01 467.329C29.8306 466.689 28.6569 466.041 27.4891 465.383ZM34.5571 469.216L35.4825 467.443C36.6598 468.057 37.8427 468.663 39.031 469.259L38.1339 471.047C36.9361 470.446 35.7438 469.835 34.5571 469.216ZM41.7438 472.823L42.6124 471.021C43.8085 471.598 45.0099 472.166 46.2167 472.724L45.3768 474.539C44.1605 473.976 42.9494 473.404 41.7438 472.823ZM49.0364 476.197L49.8473 474.369C51.0627 474.908 52.2832 475.438 53.5088 475.958L52.7271 477.799C51.4917 477.275 50.2614 476.741 49.0364 476.197ZM56.438 479.34L57.1904 477.487C58.4203 477.987 59.6551 478.477 60.8947 478.957L60.1718 480.822C58.9223 480.338 57.6777 479.844 56.438 479.34ZM63.9348 482.246L64.6279 480.37C65.8736 480.83 67.1239 481.281 68.3789 481.722L67.7157 483.609C66.4507 483.164 65.1904 482.71 63.9348 482.246ZM71.515 484.911L72.1482 483.014C73.4091 483.435 74.6746 483.846 75.9445 484.247L75.3415 486.154C74.0615 485.75 72.786 485.335 71.515 484.911ZM79.1841 487.336L79.7567 485.419C81.0276 485.799 82.3028 486.169 83.5821 486.529L83.04 488.455C81.7505 488.091 80.4651 487.718 79.1841 487.336ZM86.9211 489.514L87.4326 487.581C88.7171 487.921 90.0056 488.251 91.2982 488.571L90.8174 490.512C89.5146 490.189 88.2158 489.857 86.9211 489.514ZM94.7206 491.446L95.1706 489.497C96.4653 489.796 97.7638 490.085 99.0662 490.364L98.6471 492.32C97.3344 492.039 96.0256 491.747 94.7206 491.446ZM102.589 493.132L102.977 491.17C104.277 491.427 105.58 491.674 106.887 491.912L106.53 493.879C105.213 493.64 103.899 493.391 102.589 493.132ZM110.493 494.566L110.819 492.593C112.131 492.81 113.448 493.017 114.767 493.213L114.473 495.191C113.143 494.993 111.816 494.785 110.493 494.566ZM118.442 495.751L118.706 493.769C120.022 493.944 121.341 494.109 122.663 494.264L122.431 496.25C121.098 496.094 119.768 495.928 118.442 495.751ZM126.439 496.687L126.64 494.698C127.957 494.831 129.277 494.954 130.6 495.067L130.429 497.06C129.096 496.946 127.766 496.822 126.439 496.687ZM134.435 497.371L134.574 495.376C135.902 495.468 137.232 495.551 138.566 495.623L138.458 497.62C137.114 497.547 135.773 497.464 134.435 497.371ZM142.466 497.806L142.543 495.807C143.867 495.859 145.195 495.9 146.524 495.931L146.478 497.93C145.138 497.899 143.801 497.858 142.466 497.806ZM150.506 497.992L150.522 495.992C151.189 495.997 151.857 496 152.526 496C153.186 496 153.845 495.997 154.504 495.99L154.524 497.99C153.858 497.997 153.192 498 152.526 498C151.852 498 151.179 497.997 150.506 497.992ZM158.518 497.914L158.461 495.915C159.78 495.877 161.099 495.826 162.417 495.763L162.513 497.761C161.181 497.825 159.85 497.875 158.518 497.914ZM166.503 497.534C167.831 497.445 169.158 497.345 170.485 497.232L170.316 495.239C169.001 495.351 167.686 495.451 166.371 495.538L166.503 497.534ZM174.464 496.857L174.259 494.868C175.572 494.732 176.886 494.584 178.198 494.425L178.44 496.41C177.115 496.571 175.79 496.72 174.464 496.857ZM182.398 495.893L182.121 493.912C183.427 493.729 184.733 493.535 186.038 493.329L186.349 495.305C185.033 495.512 183.716 495.708 182.398 495.893ZM190.296 494.647L189.95 492.677C191.249 492.449 192.547 492.209 193.843 491.958L194.223 493.922C192.915 494.175 191.606 494.417 190.296 494.647ZM198.137 493.131L197.725 491.174C199.017 490.901 200.308 490.617 201.598 490.322L202.044 492.272C200.743 492.569 199.441 492.856 198.137 493.131ZM205.934 491.349L205.456 489.407C206.737 489.092 208.015 488.767 209.292 488.43L209.802 490.364C208.514 490.703 207.225 491.032 205.934 491.349ZM213.659 489.315L213.119 487.39C214.393 487.032 215.665 486.665 216.935 486.286L217.506 488.203C216.225 488.584 214.943 488.955 213.659 489.315ZM221.319 487.035C222.588 486.635 223.856 486.225 225.121 485.805L224.491 483.907C223.235 484.324 221.978 484.731 220.718 485.127L221.319 487.035ZM228.91 484.515L228.251 482.627C229.497 482.192 230.741 481.747 231.982 481.293L232.67 483.171C231.419 483.629 230.165 484.077 228.91 484.515ZM236.409 481.771L235.694 479.903C236.929 479.43 238.161 478.947 239.391 478.455L240.134 480.312C238.895 480.808 237.653 481.294 236.409 481.771ZM243.836 478.8L243.067 476.954C244.285 476.446 245.5 475.929 246.712 475.403L247.508 477.238C246.287 477.768 245.063 478.289 243.836 478.8ZM251.164 475.621L250.342 473.798C251.549 473.253 252.753 472.7 253.955 472.138L254.803 473.949C253.593 474.515 252.38 475.073 251.164 475.621ZM258.404 472.233C259.602 471.653 260.796 471.063 261.987 470.466L261.089 468.678C259.907 469.272 258.721 469.857 257.532 470.434L258.404 472.233ZM265.55 468.646L264.629 466.871C265.802 466.262 266.972 465.644 268.139 465.018L269.084 466.781C267.91 467.411 266.732 468.033 265.55 468.646ZM272.59 464.87L271.621 463.12C272.779 462.48 273.933 461.831 275.083 461.174L276.075 462.91C274.917 463.572 273.755 464.225 272.59 464.87ZM279.537 460.903L278.523 459.179C279.661 458.51 280.796 457.832 281.927 457.146L282.963 458.857C281.825 459.547 280.683 460.229 279.537 460.903ZM286.367 456.763L285.308 455.066C286.432 454.365 287.552 453.657 288.668 452.941L289.748 454.624C288.625 455.345 287.498 456.058 286.367 456.763ZM293.096 452.445C294.207 451.712 295.313 450.972 296.416 450.224L295.294 448.569C294.198 449.312 293.098 450.047 291.995 450.776L293.096 452.445ZM299.711 447.96L298.569 446.319C299.655 445.562 300.738 444.798 301.816 444.027L302.979 445.654C301.894 446.43 300.805 447.199 299.711 447.96ZM306.213 443.312L305.03 441.699C306.097 440.916 307.159 440.127 308.218 439.33L309.42 440.928C308.356 441.729 307.287 442.524 306.213 443.312ZM312.601 438.503L311.379 436.92C312.426 436.111 313.469 435.296 314.507 434.474L315.748 436.042C314.704 436.869 313.655 437.689 312.601 438.503ZM318.866 433.543L317.606 431.99C318.634 431.156 319.657 430.315 320.676 429.468L321.955 431.005C320.93 431.858 319.9 432.704 318.866 433.543ZM325.013 428.431L323.716 426.908C324.723 426.05 325.725 425.185 326.723 424.315L328.038 425.821C327.035 426.697 326.026 427.567 325.013 428.431ZM331.033 423.175L329.699 421.684C330.687 420.801 331.669 419.912 332.646 419.017L333.996 420.492C333.014 421.392 332.026 422.286 331.033 423.175ZM336.927 417.775L335.559 416.316C336.524 415.41 337.485 414.499 338.44 413.581L339.825 415.023C338.865 415.946 337.899 416.863 336.927 417.775ZM342.691 412.237L341.288 410.812C342.232 409.883 343.171 408.948 344.104 408.008L345.523 409.417C344.585 410.363 343.64 411.303 342.691 412.237ZM348.322 406.564L346.886 405.172C347.808 404.221 348.724 403.264 349.634 402.303L351.086 403.678C350.171 404.645 349.249 405.607 348.322 406.564ZM353.815 400.76L352.347 399.402C353.246 398.429 354.139 397.451 355.027 396.467L356.511 397.807C355.619 398.796 354.72 399.781 353.815 400.76ZM359.172 394.824L357.671 393.502C358.546 392.508 359.415 391.509 360.278 390.506L361.794 391.81C360.926 392.819 360.052 393.824 359.172 394.824ZM364.382 388.764L362.85 387.479C363.702 386.463 364.547 385.443 365.386 384.419L366.934 385.686C366.09 386.717 365.239 387.743 364.382 388.764ZM369.447 382.579C370.278 381.539 371.102 380.494 371.92 379.444L370.342 378.215C369.53 379.258 368.71 380.297 367.884 381.331L369.447 382.579ZM374.36 376.274L372.767 375.064C373.569 374.009 374.364 372.949 375.152 371.886L376.759 373.076C375.966 374.146 375.166 375.212 374.36 376.274ZM379.116 369.852L377.494 368.682C378.269 367.608 379.038 366.529 379.799 365.447L381.435 366.597C380.669 367.686 379.896 368.771 379.116 369.852ZM383.715 363.31L382.065 362.181C382.813 361.088 383.553 359.991 384.287 358.891L385.951 360C385.213 361.107 384.468 362.211 383.715 363.31ZM388.143 356.665C388.869 355.544 389.588 354.42 390.299 353.292L388.607 352.225C387.9 353.346 387.186 354.464 386.464 355.577L388.143 356.665ZM392.408 349.896L390.703 348.852C391.393 347.723 392.077 346.592 392.752 345.456L394.471 346.479C393.791 347.621 393.104 348.76 392.408 349.896ZM396.492 343.029L394.76 342.029C395.422 340.881 396.077 339.729 396.723 338.574L398.469 339.551C397.818 340.713 397.159 341.873 396.492 343.029ZM400.396 336.053L398.638 335.099C399.268 333.937 399.89 332.771 400.504 331.602L402.275 332.531C401.657 333.708 401.031 334.882 400.396 336.053ZM404.112 328.974L402.329 328.068C402.928 326.887 403.519 325.704 404.101 324.517L405.897 325.398C405.31 326.593 404.716 327.785 404.112 328.974ZM407.629 321.805L405.821 320.949C406.388 319.75 406.947 318.549 407.496 317.345L409.316 318.175C408.762 319.388 408.2 320.598 407.629 321.805ZM410.95 314.525L409.119 313.721C409.651 312.51 410.173 311.297 410.687 310.081L412.529 310.859C412.012 312.084 411.486 313.306 410.95 314.525ZM414.056 307.167L412.203 306.416C412.701 305.187 413.189 303.956 413.667 302.723L415.532 303.447C415.05 304.689 414.558 305.929 414.056 307.167ZM416.949 299.712L415.074 299.017C415.533 297.778 415.983 296.537 416.422 295.295L418.308 295.962C417.865 297.214 417.412 298.464 416.949 299.712ZM419.615 292.176L417.719 291.538C418.142 290.284 418.554 289.028 418.955 287.77L420.861 288.378C420.456 289.646 420.04 290.912 419.615 292.176ZM422.044 284.569L420.13 283.991C420.513 282.723 420.886 281.453 421.248 280.182L423.171 280.729C422.806 282.011 422.43 283.291 422.044 284.569ZM424.235 276.874L422.303 276.358C422.644 275.082 422.975 273.804 423.294 272.525L425.235 273.01C424.913 274.3 424.579 275.588 424.235 276.874ZM426.171 269.125L424.223 268.673C424.522 267.383 424.811 266.093 425.088 264.801L427.043 265.22C426.764 266.523 426.473 267.825 426.171 269.125ZM427.848 261.308L425.885 260.922C426.14 259.627 426.383 258.331 426.615 257.033L428.584 257.385C428.35 258.694 428.105 260.002 427.848 261.308ZM429.253 253.439L427.279 253.122C427.488 251.818 427.686 250.512 427.872 249.207L429.852 249.489C429.664 250.806 429.465 252.123 429.253 253.439ZM430.378 245.534L428.394 245.288C428.556 243.975 428.707 242.662 428.845 241.348L430.834 241.558C430.695 242.884 430.543 244.209 430.378 245.534ZM431.216 237.579L429.224 237.406C429.338 236.092 429.439 234.778 429.528 233.463L431.524 233.599C431.434 234.926 431.331 236.253 431.216 237.579ZM431.756 229.608L429.758 229.511C429.823 228.192 429.874 226.873 429.913 225.555L431.912 225.613C431.873 226.945 431.821 228.276 431.756 229.608Z"
        fill="black"
        fill-opacity="0.26"
      />
    </svg>
  );
};

export default CircleLeft;
