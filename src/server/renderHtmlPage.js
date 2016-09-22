export default (content) => {
  const assets = webpackIsomorphicTools.assets();

  // Setup html page
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="Content-Language" content="en" />

        ${
    /* Styles will be presented in production with webpack extract text plugin */
    Object.keys(assets.styles).map(style =>
      `<link href="${assets.styles[style]}" media="screen, projection" rel="stylesheet" type="text/css" />`)
      .join('\n')
    }
    <script src="https://use.fontawesome.com/7707674361.js"></script>
    <link href="//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
        ${
    /* Styles will be presented in development mode
       I put all of the styles here to smoothen the flick */
    Object.keys(assets.styles).length === 0 ?
      '' : ''
    }
      </head>
      <body>
        <div id='app'>${content}</div>
        ${
    /* Reverse the order of scripts for accessing vendor.js first */
    Object.keys(assets.javascript).reverse().map(script =>
      `<script src="${assets.javascript[script]}"></script>`)
      .join('\n')
    }
      </body>
    </html>
  `;
};
