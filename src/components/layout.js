import React from "react"

export default function Layout({ children }) {
  return (
    <body>
      <header class="top-bar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="113"
          height="20"
          viewBox="0 0 113 20"
        >
          <path
            fill="#FFF"
            fill-rule="evenodd"
            d="M91.087 6.735c1.128-1.121 2.604-1.745 4.129-1.745 1.627 0 3.025.56 4.144 1.619 1.19 1.121 1.834 2.653 1.834 4.169 0 1.682-.564 3.071-1.691 4.184-1.143 1.137-2.565 1.745-4.256 1.745-1.707 0-3.088-.576-4.231-1.784-1.088-1.121-1.644-2.55-1.644-4.106 0-1.547.604-2.984 1.715-4.082zm4.184 6.862c-1.437 0-2.644-1.224-2.644-2.74 0-1.532 1.183-2.756 2.644-2.756 1.453 0 2.644 1.224 2.644 2.756 0 1.516-1.183 2.74-2.644 2.74zm-28.32-6.862c1.128-1.121 2.605-1.745 4.13-1.745 1.627 0 3.024.56 4.144 1.619 1.19 1.121 1.834 2.653 1.834 4.169 0 1.682-.564 3.071-1.692 4.184-1.143 1.137-2.564 1.745-4.255 1.745-1.707 0-3.088-.576-4.232-1.784-1.087-1.121-1.643-2.55-1.643-4.106a5.74 5.74 0 0 1 1.715-4.082zm4.193 6.862c-1.437 0-2.652-1.224-2.644-2.74 0-1.532 1.19-2.756 2.644-2.756 1.453 0 2.644 1.224 2.644 2.756 0 1.516-1.183 2.74-2.644 2.74zM31.122 16.4V1.658L34.4.98V16.4h-3.28zM26.128 5.266H29.4V16.4h-3.27V5.266zm1.636-1.27a2.003 2.003 0 0 1-2.009-1.998c0-1.104.9-1.998 2.009-1.998s2.008.894 2.008 1.998c0 1.103-.899 1.997-2.008 1.997zm13.44 7.753l2.375-6.483h3.54L41.277 20h-3.31l1.587-4.287L35.45 5.266H39.1l2.104 6.483zm-30.113-.963c0 1.27.302 2.44.873 3.466v2.108H8.773v-1.247c-.977.947-1.977 1.302-3.31 1.302-1.358 0-2.525-.434-3.502-1.302C.667 13.976 0 12.483 0 10.738c0-1.595.627-3.024 1.794-4.145 1.04-1.01 2.31-1.532 3.732-1.532 1.35 0 2.39.458 3.144 1.414V1.627l3.294-.68v6.428a6.947 6.947 0 0 0-.873 3.41zm-4.898 2.676c-1.691 0-2.898-1.184-2.898-2.74a2.76 2.76 0 0 1 2.77-2.755c1.54 0 2.732 1.2 2.732 2.795.008 1.54-1.183 2.7-2.604 2.7zm58.425-5.748a7.053 7.053 0 0 0-.715 3.087c0 1.256.302 2.432.873 3.475V16.4H61.57v-6.175c0-1.705-.611-2.116-1.524-2.116-1.128 0-1.953.513-1.953 2.392V16.4H54.86v-6.175c0-.955-.11-2.116-1.54-2.116-1.66 0-1.945 1.216-1.945 2.432V16.4h-3.128V5.266h2.977V6.76c.627-1.05 1.572-1.698 3.104-1.698 2.176 0 3.05 1.785 3.05 1.785s.872-.948 1.643-1.35c.714-.372 1.452-.482 2.31-.411 1.056.087 1.937.426 2.556 1.153.358.41.588.884.73 1.476zM82.433.98v4.343h1.485v3.221h-1.485V16.4H79.1V8.543h-1.413V5.322h1.413V1.658L82.433.98zM87 3.995a2.003 2.003 0 0 1-2.01-1.997C84.99.894 85.89 0 87 0c1.109 0 2.008.894 2.008 1.998 0 1.103-.9 1.997-2.008 1.997zm1.635 3.98a7.06 7.06 0 0 0-.603 2.85c0 1.042.206 2.021.603 2.922V16.4h-3.271V5.266h3.271v2.709zm20.078-2.922c2.319 0 3.82 1.453 3.811 4.003v7.336h-3.295v-6.033c0-1.555-.333-2.258-1.603-2.258-1.286 0-1.977.766-1.977 2.258v6.033h-3.231V5.259h3.128l-.04 1.492c.683-1.113 1.73-1.698 3.207-1.698zM21.214 15.152c-.977.955-1.977 1.303-3.31 1.303-1.359 0-2.526-.434-3.502-1.303-1.294-1.137-1.961-2.63-1.961-4.374 0-1.595.627-3.024 1.794-4.146 1.04-1.018 2.31-1.531 3.732-1.531 1.357 0 2.397.458 3.144 1.413V5.266h3.294V16.4h-3.191v-1.248zm-2.588-1.658c1.42 0 2.604-1.16 2.604-2.693 0-1.595-1.191-2.795-2.732-2.795a2.76 2.76 0 0 0-2.77 2.756c0 1.548 1.214 2.732 2.898 2.732z"
          />
        </svg>
      </header>

      {children}

      <footer class="footer">
        copyright 2020.
      </footer>
    </body>
  )
}