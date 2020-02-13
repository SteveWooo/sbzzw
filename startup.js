const express = require('express');
const app = express();

app.use('/zzw', express.static(`zzw`));

app.listen('210', function(){
    console.log('listened at 210');
});